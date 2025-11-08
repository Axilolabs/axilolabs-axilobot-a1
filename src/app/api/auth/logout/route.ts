import { NextRequest, NextResponse } from 'next/server';
import { verifyAuthToken, signOut } from '@/src/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');

    const { user } = await verifyAuthToken(authHeader);

    if (!user) {
      const logoutResult = await signOut();
      
      return NextResponse.json(
        {
          success: true,
          message: 'Logged out successfully',
        },
        { status: 200 }
      );
    }

    const result = await signOut();

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: result.error || 'Failed to logout',
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Logged out successfully',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Logout API error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected error occurred during logout',
      },
      { status: 500 }
    );
  }
}