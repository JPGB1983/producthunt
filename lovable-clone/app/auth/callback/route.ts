import { NextResponse } from "next/server";

import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const errorDescription = requestUrl.searchParams.get("error_description");
  const redirectTo =
    requestUrl.searchParams.get("redirect_to") ?? `${requestUrl.origin}/`;

  if (errorDescription) {
    return NextResponse.redirect(
      `${redirectTo}?authError=${encodeURIComponent(errorDescription)}`,
    );
  }

  if (code) {
    const supabase = createSupabaseServerClient();
    await supabase.auth.exchangeCodeForSession(code);
  }

  return NextResponse.redirect(redirectTo);
}
