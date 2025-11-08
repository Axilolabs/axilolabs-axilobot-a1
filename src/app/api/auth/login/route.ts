import { NextRequest, NextResponse } from "next/server";
import { signInWithEmail, getCustomerData } from "@/src/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        {
          success: false,
          error: "Email and password are required",
        },
        { status: 400 }
      );
    }

    const result = await signInWithEmail({
      email,
      password,
    });

    if (!result.success || !result.user || !result.session) {
      return NextResponse.json(
        {
          success: false,
          error: result.error || "Invalid email or password",
        },
        { status: 401 }
      );
    }

    const customerResult = await getCustomerData(result.user.id);

    if (!customerResult.data) {
      console.warn("Customer record not found for user:", result.user.id);
      return NextResponse.json(
        {
          success: true,
          user: {
            id: result.user.id,
            email: result.user.email,
            company_name: result.user.user_metadata?.company_name || null,
            subscription_tier: "free",
          },
          session: result.session,
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        user: {
          id: customerResult.data.id,
          email: customerResult.data.email,
          company_name: customerResult.data.company_name,
          subscription_tier: customerResult.data.subscription_tier,
          created_at: customerResult.data.created_at,
        },
        session: result.session,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Login API error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred during login",
      },
      { status: 500 }
    );
  }
}
