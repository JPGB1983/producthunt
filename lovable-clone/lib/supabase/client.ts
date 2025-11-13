"use client";

import { createBrowserClient } from "@supabase/ssr";

import { invariantEnv } from "@/lib/utils/env";

export const createSupabaseBrowserClient = () =>
  createBrowserClient(
    invariantEnv("NEXT_PUBLIC_SUPABASE_URL"),
    invariantEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY"),
  );
