"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

import { AuthButtons } from "@/components/navigation/top-nav/auth-buttons";

const links = [
  { href: "#flow", label: "Cómo funciona" },
  { href: "#features", label: "Características" },
  { href: "#integrations", label: "Integraciones" },
  { href: "#pricing", label: "Precios" },
];

export const TopNav = () => {
  const pathname = usePathname();

  const isHome = useMemo(() => pathname === "/", [pathname]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-8 px-6 py-5">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight text-slate-100"
        >
          <span className="grid h-9 w-9 place-items-center rounded-2xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-sky-400 text-base font-bold uppercase shadow-lg shadow-fuchsia-500/40">
            L
          </span>
          lovable<span className="text-sky-400">.dev</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={isHome ? link.href : `/${link.href}`}
              className="transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <AuthButtons />
      </div>
    </header>
  );
};
