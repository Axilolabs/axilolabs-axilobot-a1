import { NextRequest, NextResponse } from "next/server";
import { verifyAuthToken, getCustomerData } from "@/src/lib/auth";

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization");

    const { user, error } = await verifyAuthToken(authHeader);

    if (error || !user) {
      return NextResponse.json(
        {
          success: false,
          error: error || "Authentication required",
        },
        { status: 401 }
      );
    }

    const customerResult = await getCustomerData(user.id);

    if (!customerResult.data) {
      return NextResponse.json(
        {
          success: false,
          error: "Customer profile not found",
        },
        { status: 404 }
      );
    }

    const { count: chatbotCount } = await (
      await import("@/src/lib/supabase")
    ).supabase
      .from("chatbots")
      .select("*", { count: "exact", head: true })
      .eq("customer_id", user.id);

    const subscriptionLimits = getSubscriptionLimits(
      customerResult.data.subscription_tier
    );

    return NextResponse.json(
      {
        success: true,
        user: {
          id: customerResult.data.id,
          email: customerResult.data.email,
          company_name: customerResult.data.company_name,
          subscription_tier: customerResult.data.subscription_tier,
          created_at: customerResult.data.created_at,
          chatbot_count: chatbotCount || 0,
          chatbot_limit: subscriptionLimits.chatbot_limit,
          monthly_messages_limit: subscriptionLimits.monthly_messages_limit,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Profile API error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred",
      },
      { status: 500 }
    );
  }
}

function getSubscriptionLimits(tier: string) {
  const limits = {
    free: {
      chatbot_limit: 1,
      monthly_messages_limit: 100,
    },
    starter: {
      chatbot_limit: 3,
      monthly_messages_limit: 1000,
    },
    pro: {
      chatbot_limit: 10,
      monthly_messages_limit: 10000,
    },
    enterprise: {
      chatbot_limit: -1,
      monthly_messages_limit: -1,
    },
  };

  return limits[tier as keyof typeof limits] || limits.free;
}
