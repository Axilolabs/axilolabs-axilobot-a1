import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createClient } from '@supabase/supabase-js';

/**
 * Proxy to handle authentication
 * Runs before requests to specified paths
 */
export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Create Supabase client with request context
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      auth: {
        persistSession: false,
      },
    }
  );

  // Get token from Authorization header
  const authHeader = request.headers.get('authorization');
  const token = authHeader?.replace('Bearer ', '');

  // Check if route requires authentication
  const isProtectedRoute = 
    pathname.startsWith('/dashboard') ||
    pathname.startsWith('/api/chatbots') ||
    pathname.startsWith('/api/conversations') ||
    pathname.startsWith('/api/analytics');

  // Allow public auth routes (login, signup, callback)
  const isAuthRoute = 
    pathname.startsWith('/api/auth/login') ||
    pathname.startsWith('/api/auth/signup') ||
    pathname.startsWith('/auth/callback');

  // Skip proxy for public routes
  if (!isProtectedRoute || isAuthRoute) {
    return NextResponse.next();
  }

  // Verify token for protected routes
  if (!token) {
    // API routes: return 401
    if (pathname.startsWith('/api/')) {
      return NextResponse.json(
        { success: false, error: 'Authentication required' },
        { status: 401 }
      );
    }
    
    // Web routes: redirect to login
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Verify the token with Supabase
  try {
    const { data: { user }, error } = await supabase.auth.getUser(token);

    if (error || !user) {
      // API routes: return 401
      if (pathname.startsWith('/api/')) {
        return NextResponse.json(
          { success: false, error: 'Invalid or expired token' },
          { status: 401 }
        );
      }
      
      // Web routes: redirect to login
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }

    // Add user ID to request headers for downstream use
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-user-id', user.id);

    // Allow request to continue
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  } catch (error) {
    console.error('Proxy auth error:', error);
    
    // API routes: return 500
    if (pathname.startsWith('/api/')) {
      return NextResponse.json(
        { success: false, error: 'Authentication verification failed' },
        { status: 500 }
      );
    }
    
    // Web routes: redirect to login
    const loginUrl = new URL('/login', request.url);
    return NextResponse.redirect(loginUrl);
  }
}

/**
 * Configure which routes this proxy runs on
 */
export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico (favicon file)
     * - public files (public folder)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};