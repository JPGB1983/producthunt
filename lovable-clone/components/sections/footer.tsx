export const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-black/20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p className="text-slate-400">
          © {new Date().getFullYear()} lovable.dev Clone. Construido con GitHub +
          Supabase.
        </p>
        <div className="flex gap-6">
          <a
            href="#integrations"
            className="transition-colors hover:text-slate-200"
          >
            Integraciones
          </a>
          <a
            href="#pricing"
            className="transition-colors hover:text-slate-200"
          >
            Planes
          </a>
          <a
            href="https://supabase.com/docs"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-slate-200"
          >
            Docs
          </a>
        </div>
      </div>
    </footer>
  );
};
