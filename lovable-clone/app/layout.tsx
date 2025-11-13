import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { TopNav } from "@/components/navigation/top-nav";
import { Footer } from "@/components/sections/footer";
import { SupabaseProvider } from "@/components/providers/supabase-provider";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "lovable.dev Clone – GitHub & Supabase Ready",
  description:
    "Replica pulida de lovable.dev con autenticación GitHub y base de datos Supabase lista para conectar con tus repositorios.",
  openGraph: {
    title: "lovable.dev Clone – GitHub & Supabase Ready",
    description:
      "Explora una experiencia calcada a lovable.dev con onboarding vía GitHub y datos persistidos en Supabase.",
    url: "https://lovable.dev",
    siteName: "lovable.dev Clone",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "lovable.dev Clone – GitHub & Supabase Ready",
    description:
      "Una réplica profesional de lovable.dev con autenticación GitHub y Supabase lista para producción.",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="es" className="h-full bg-slate-950">
      <body
        className={`${geistSans.variable} ${geistMono.variable} mx-auto flex min-h-screen max-w-[1440px] flex-col bg-slate-950 text-slate-100 antialiased`}
      >
        <SupabaseProvider initialSession={session}>
          <TopNav />
          <main className="flex-1">{children}</main>
          <Footer />
        </SupabaseProvider>
      </body>
    </html>
  );
}
