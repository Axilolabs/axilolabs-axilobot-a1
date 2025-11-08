import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/src/lib/supabase';
import { createCustomerRecord } from '@/src/lib/auth';

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');

  if (code) {
    try {
      const { data, error } = await supabase.auth.exchangeCodeForSession(code);

      if (error) {
        console.error('OAuth callback error:', error);
        return NextResponse.redirect(
          `${requestUrl.origin}/login?error=authentication_failed`
        );
      }

      if (data.user) {
        const { data: existingCustomer } = await supabase
          .from('customers')
          .select('id')
          .eq('id', data.user.id)
          .single();

        if (!existingCustomer) {
          const companyName = data.user.user_metadata?.company_name || 
                             data.user.user_metadata?.full_name || 
                             data.user.email?.split('@')[0] || 
                             'My Company';

          await createCustomerRecord(
            data.user.id,
            data.user.email!,
            companyName
          );
        }

        return NextResponse.redirect(`${requestUrl.origin}/dashboard`);
      }
    } catch (error) {
      console.error('OAuth callback exception:', error);
    }
  }

  return NextResponse.redirect(`${requestUrl.origin}/login`);
}