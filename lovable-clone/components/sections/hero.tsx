'use client';

import { motion } from "framer-motion";
import Image from "next/image";

const integrations = [
  { name: "GitHub", logo: "/github-mark-white.svg" },
  { name: "Supabase", logo: "/supabase-logo.svg" },
  { name: "Vercel", logo: "/vercel.svg" },
];

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[580px] w-[580px] -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-24 pt-20 md:flex-row md:items-center md:gap-20 md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-1 flex-col gap-8"
        >
          <span className="inline-flex items-center gap-3 self-start rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-200">
            Beta privada · Clona productos SaaS
          </span>

          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              Construye clones perfectos de tus productos en minutos.
            </h1>
            <p className="max-w-xl text-lg text-slate-300 md:text-xl">
              lovable.dev genera réplicas listas para producción con datos reales
              y workflows conectados a tu GitHub. Itera experiencias completas,
              prueba variantes y despliega sin tocar infra propia.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <div className="flex -space-x-4">
              {integrations.map((integration) => (
                <div
                  key={integration.name}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur"
                >
                  <Image
                    src={integration.logo}
                    alt={integration.name}
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-300">
              Integraciones nativas con GitHub Actions, Supabase y despliegues en
              Vercel. Tu stack favorita, lista desde el día uno.
            </p>
          </div>

          <ul className="grid gap-4 text-sm text-slate-300 md:grid-cols-2">
            <li className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
                ✓
              </span>
              <div>
                <p className="font-semibold text-white">
                  Workflows conectados a GitHub
                </p>
                <p>
                  Cada commit sincroniza tus réplicas, con pull requests y
                  review apps automáticas.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">
                ✓
              </span>
              <div>
                <p className="font-semibold text-white">
                  Datos seguros con Supabase
                </p>
                <p>
                  Bases de datos sandbox con anonymización automática y políticas
                  listas para QA.
                </p>
              </div>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="relative flex flex-1 items-stretch"
        >
          <div className="absolute -right-16 -top-10 hidden h-32 w-32 rounded-full bg-sky-500/30 blur-2xl md:block" />
          <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 shadow-2xl shadow-sky-500/10 backdrop-blur">
            <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-6 py-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  Demo workspace
                </p>
                <p className="text-base font-semibold text-white">
                  lovable/dev-tools
                </p>
              </div>
              <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                Live
              </span>
            </div>

            <div className="space-y-4 p-6">
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
                <div>
                  <p className="text-sm font-medium text-white">
                    Generación de replica v2.8
                  </p>
                  <p className="text-xs text-slate-400">
                    GitHub Action · hace 2 minutos
                  </p>
                </div>
                <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                  ✓ Success
                </span>
              </div>

              <div className="grid gap-3 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Branches sincronizadas</span>
                  <span>main, staging, preview/*</span>
                </div>
                <div className="flex h-2 overflow-hidden rounded-full bg-white/5">
                  <span className="h-full w-2/3 rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500" />
                </div>
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Entornos activos</span>
                  <span>9 de 12</span>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                <p className="mb-2 text-xs uppercase tracking-[0.3em] text-slate-400">
                  Supabase snapshot
                </p>
                <pre className="overflow-x-auto rounded-xl bg-black/60 p-4 text-xs text-slate-200">
{`const { data } = await supabaseAdmin
  .from("workspaces")
  .select("name, status, environments(count)")
  .eq("github_org", "lovable");

console.log(data);`}
                </pre>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
