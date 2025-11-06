import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { GoogleGenerativeAI } from "@google/generative-ai";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, chatbotId, conversationId, visitorId } = body;

    if (!message || !chatbotId) {
      return NextResponse.json(
        { error: "Message and chatbotId are required" },
        { status: 400 }
      );
    }

    const { data: chatbot, error: chatbotError } = await supabase
      .from("chatbots")
      .select("*")
      .eq("id", chatbotId)
      .single();

    if (chatbotError || !chatbot) {
      return NextResponse.json({ error: "Chatbot not found" }, { status: 404 });
    }

    let currentConversationId = conversationId;

    if (!currentConversationId) {
      const { data: newConversation, error: convError } = await supabase
        .from("conversations")
        .insert({
          chatbot_id: chatbotId,
          visitor_id: visitorId || "anonymous",
        })
        .select()
        .single();

      if (convError) throw convError;
      currentConversationId = newConversation.id;
    }

    const { error: userMessageError } = await supabase.from("messages").insert({
      conversation_id: currentConversationId,
      role: "user",
      content: message,
    });

    if (userMessageError) throw userMessageError;

    const { data: previousMessages } = await supabase
      .from("messages")
      .select("role, content")
      .eq("conversation_id", currentConversationId)
      .order("created_at", { ascending: true })
      .limit(10);

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const context =
      previousMessages
        ?.map((msg) => `${msg.role}: ${msg.content}`)
        .join("\n") || "";

    const prompt = `You are a helpful customer service assistant for ${
      chatbot.company_name || "this company"
    }. 
Previous conversation:
${context}

Respond to the customer's message in a friendly and helpful way.`;

    const result = await model.generateContent(prompt);
    const aiResponse = result.response.text();

    const { error: aiMessageError } = await supabase.from("messages").insert({
      conversation_id: currentConversationId,
      role: "assistant",
      content: aiResponse,
    });

    if (aiMessageError) throw aiMessageError;

    return NextResponse.json({
      success: true,
      response: aiResponse,
      conversationId: currentConversationId,
    });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { error: "Failed to process chat message" },
      { status: 500 }
    );
  }
}
