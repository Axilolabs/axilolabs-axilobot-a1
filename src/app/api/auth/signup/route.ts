import { NextRequest, NextResponse } from 'next/server';
import { signUpWithEmail, createCustomerRecord } from '@/src/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password, company_name } = body;

    if (!email || !password || !company_name) {
      return NextResponse.json(
        {
          success: false,
          error: 'Email, password, and company name are required',
        },
        { status: 400 }
      );
    }

    const result = await signUpWithEmail({
      email,
      password,
      company_name,
    });

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: result.error,
        },
        { status: 400 }
      );
    }

    if (result.user && !result.session) {
      return NextResponse.json(
        {
          success: true,
          message: 'Signup successful! Please check your email to confirm your account.',
          user: {
            id: result.user.id,
            email: result.user.email,
          },
          email_confirmation_required: true,
        },
        { status: 201 }
      );
    }

    if (result.user) {
      const customerResult = await createCustomerRecord(
        result.user.id,
        email,
        company_name
      );

      if (!customerResult.success) {
        console.error('Customer record creation failed:', customerResult.error);
      }
    }

    return NextResponse.json(
      {
        success: true,
        user: {
          id: result.user!.id,
          email: result.user!.email,
          company_name: company_name,
        },
        session: result.session,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Signup API error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected error occurred during signup',
      },
      { status: 500 }
    );
  }
}