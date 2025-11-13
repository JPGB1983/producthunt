"use client";

import { useState, useTransition } from "react";

import { useSupabase } from "@/components/providers/supabase-provider";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL && process.env.NEXT_PUBLIC_SITE_URL !== ""
    ? process.env.NEXT_PUBLIC_SITE_URL
    : null;

export const AuthButtons = () => {
  const { supabase, session, loading } = useSupabase();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const handleGitHubSignIn = () =>
    startTransition(async () => {
      setError(null);
      const redirectTo =
        siteUrl ??
        (typeof window !== "undefined"
          ? window.location.origin
          : undefined);

      const { error } = await supabase.auth.signInWithOAuth({
        provider: "github",
        options: {
          redirectTo: redirectTo
            ? `${redirectTo.replace(/\/$/, "")}/auth/callback`
            : undefined,
          scopes: "repo user",
        },
      });

      if (error) {
        setError(error.message);
      }
    });

  const handleSignOut = () =>
    startTransition(async () => {
      setError(null);
      const { error } = await supabase.auth.signOut();
      if (error) {
        setError(error.message);
      }
    });

  const isDisabled = loading || isPending;

  return (
    <div className="flex flex-col items-end gap-2">
      {session ? (
        <button
          onClick={handleSignOut}
          disabled={isDisabled}
          className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 transition group-hover:bg-emerald-300" />
          Cerrar sesión
        </button>
      ) : (
        <button
          onClick={handleGitHubSignIn}
          disabled={isDisabled}
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:shadow-sky-500/50 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5 text-white/90"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 0C5.372 0 0 5.372 0 12c0 5.304 3.438 9.8 8.207 11.387.6.11.82-.26.82-.58 0-.287-.01-1.046-.016-2.053-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.746.082-.73.082-.73 1.205.084 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.762-1.605-2.665-.304-5.467-1.332-5.467-5.93 0-1.31.468-2.382 1.236-3.222-.124-.303-.536-1.523.116-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3-.404c1.02.005 2.047.138 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.24 2.873.118 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.806 5.624-5.48 5.92.43.37.823 1.096.823 2.21 0 1.595-.014 2.88-.014 3.27 0 .322.216.696.825.578C20.565 21.796 24 17.303 24 12c0-6.628-5.372-12-12-12Z"
            />
          </svg>
          Inicia con GitHub
        </button>
      )}

      {error ? (
        <p className="text-xs font-medium text-rose-300">{error}</p>
      ) : null}
    </div>
  );
};
