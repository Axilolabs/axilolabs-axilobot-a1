import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/src/lib/supabase';
import { isValidPassword } from '@/src/lib/auth';
import { strictRateLimit, getIP } from '@/src/lib/ratelimit';

export async function POST(request: NextRequest) {
  try {
    const ip = getIP(request);
    const { success: rateLimitSuccess, limit, remaining, reset } = await strictRateLimit.limit(ip);

    if (!rateLimitSuccess) {
      return NextResponse.json(
        {
          success: false,
          error: 'Too many password reset attempts. Please try again later.',
          limit,
          remaining,
          reset: new Date(reset).toISOString(),
        },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Limit': limit.toString(),
            'X-RateLimit-Remaining': remaining.toString(),
            'X-RateLimit-Reset': reset.toString(),
          },
        }
      );
    }

    const body = await request.json();
    const { password } = body;

    if (!password) {
      return NextResponse.json(
        {
          success: false,
          error: 'Password is required',
        },
        { status: 400 }
      );
    }

    const passwordValidation = isValidPassword(password);
    if (!passwordValidation.valid) {
      return NextResponse.json(
        {
          success: false,
          error: passwordValidation.error,
        },
        { status: 400 }
      );
    }

    const authHeader = request.headers.get('authorization');
    
    if (!authHeader) {
      return NextResponse.json(
        {
          success: false,
          error: 'Reset token is required',
        },
        { status: 401 }
      );
    }

    const token = authHeader.replace('Bearer ', '');
    const { error } = await supabase.auth.updateUser({
      password: password,
    });

    if (error) {
      console.error('Reset password error:', error);
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid or expired reset token',
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Password reset successfully',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Reset password API error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected error occurred',
      },
      { status: 500 }
    );
  }
}