import { createServerClient } from "@supabase/ssr";
import type { CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

import { invariantEnv } from "@/lib/utils/env";

type CreateClientOptions = {
  forceAdmin?: boolean;
};

export const createSupabaseServerClient = async (
  options?: CreateClientOptions,
) => {
  const cookieStore = await cookies();
  const supabaseKey = options?.forceAdmin
    ? invariantEnv("SUPABASE_SERVICE_ROLE_KEY")
    : process.env.SUPABASE_SERVICE_ROLE_KEY ??
      invariantEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY");

  return createServerClient(
    invariantEnv("NEXT_PUBLIC_SUPABASE_URL"),
    supabaseKey,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          cookieStore.set({ name, value, ...options });
        },
        remove(name: string, options: CookieOptions) {
          cookieStore.delete({ name, ...options });
        },
      },
    },
  );
};
