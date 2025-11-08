import { supabase } from "./supabase";
import { AuthError, User } from "@supabase/supabase-js";

export interface SignupData {
  email: string;
  password: string;
  company_name: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  user?: User;
  session?: {
    access_token: string;
    refresh_token: string;
    expires_at: string;
  };
  error?: string;
}

export interface CustomerData {
  id: string;
  email: string;
  company_name: string;
  subscription_tier: string;
  created_at: string;
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isValidPassword(password: string): {
  valid: boolean;
  error?: string;
} {
  if (!password) {
    return { valid: false, error: "Password is required" };
  }

  if (password.length < 8) {
    return { valid: false, error: "Password must be at least 8 characters" };
  }

  return { valid: true };
}

export function isValidCompanyName(name: string): boolean {
  return !!name && name.trim().length >= 2 && name.trim().length <= 100;
}

export async function signUpWithEmail(data: SignupData): Promise<AuthResponse> {
  try {
    if (!isValidEmail(data.email)) {
      return { success: false, error: "Invalid email format" };
    }

    const passwordValidation = isValidPassword(data.password);
    if (!passwordValidation.valid) {
      return { success: false, error: passwordValidation.error };
    }

    if (!isValidCompanyName(data.company_name)) {
      return {
        success: false,
        error: "Company name must be between 2 and 100 characters",
      };
    }

    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: {
          company_name: data.company_name,
        },
        emailRedirectTo: `${
          process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
        }/auth/callback`,
      },
    });

    if (authError) {
      if (authError.message.includes("already registered")) {
        return { success: false, error: "Email already registered" };
      }
      return { success: false, error: authError.message };
    }

    if (!authData.user) {
      return { success: false, error: "Failed to create user" };
    }

    return {
      success: true,
      user: authData.user,
      session: authData.session
        ? {
            access_token: authData.session.access_token,
            refresh_token: authData.session.refresh_token,
            expires_at: new Date(
              authData.session.expires_at! * 1000
            ).toISOString(),
          }
        : undefined,
    };
  } catch (error) {
    console.error("Signup error:", error);
    return {
      success: false,
      error: "An unexpected error occurred during signup",
    };
  }
}

export async function signInWithEmail(data: LoginData): Promise<AuthResponse> {
  try {
    if (!isValidEmail(data.email)) {
      return { success: false, error: "Invalid email format" };
    }

    if (!data.password) {
      return { success: false, error: "Password is required" };
    }

    const { data: authData, error: authError } =
      await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });

    if (authError) {
      return { success: false, error: "Invalid email or password" };
    }

    if (!authData.user || !authData.session) {
      return { success: false, error: "Invalid email or password" };
    }

    return {
      success: true,
      user: authData.user,
      session: {
        access_token: authData.session.access_token,
        refresh_token: authData.session.refresh_token,
        expires_at: new Date(authData.session.expires_at! * 1000).toISOString(),
      },
    };
  } catch (error) {
    console.error("Login error:", error);
    return {
      success: false,
      error: "An unexpected error occurred during login",
    };
  }
}

export async function signInWithGoogle() {
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${
          process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
        }/auth/callback`,
      },
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (error) {
    console.error("Google login error:", error);
    return {
      success: false,
      error: "An unexpected error occurred during Google login",
    };
  }
}

export async function signOut(): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase.auth.signOut();

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error("Logout error:", error);
    return {
      success: false,
      error: "An unexpected error occurred during logout",
    };
  }
}

export async function getCurrentUser(): Promise<{
  user: User | null;
  error?: string;
}> {
  try {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error) {
      return { user: null, error: error.message };
    }

    return { user };
  } catch (error) {
    console.error("Get user error:", error);
    return { user: null, error: "An unexpected error occurred" };
  }
}

export async function getCustomerData(
  userId: string
): Promise<{ data: CustomerData | null; error?: string }> {
  try {
    const { data, error } = await supabase
      .from("customers")
      .select("id, email, company_name, subscription_tier, created_at")
      .eq("id", userId)
      .single();

    if (error) {
      console.error("Get customer error:", error);
      return { data: null, error: "Failed to fetch customer data" };
    }

    return { data };
  } catch (error) {
    console.error("Get customer error:", error);
    return { data: null, error: "An unexpected error occurred" };
  }
}

export async function createCustomerRecord(
  userId: string,
  email: string,
  companyName: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase.from("customers").insert({
      id: userId,
      email: email,
      company_name: companyName,
      subscription_tier: "free",
    });

    if (error) {
      if (error.code === "23505") {
        return { success: true };
      }
      console.error("Create customer error:", error);
      return { success: false, error: "Failed to create customer record" };
    }

    return { success: true };
  } catch (error) {
    console.error("Create customer error:", error);
    return { success: false, error: "An unexpected error occurred" };
  }
}

export async function verifyAuthToken(
  authHeader: string | null
): Promise<{ user: User | null; error?: string }> {
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return { user: null, error: "Missing or invalid authorization header" };
  }

  const token = authHeader.replace("Bearer ", "");

  try {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser(token);

    if (error || !user) {
      return { user: null, error: "Invalid or expired token" };
    }

    return { user };
  } catch (error) {
    console.error("Token verification error:", error);
    return { user: null, error: "Token verification failed" };
  }
}
