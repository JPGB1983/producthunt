## lovable.dev Clone · GitHub + Supabase Ready

Replica pixel-perfect inspirada en [lovable.dev](https://lovable.dev) construida con Next.js 14 (App Router), Tailwind CSS y animaciones con Framer Motion. Incluye autenticación con GitHub vía Supabase y un flujo completo para registrar leads en una tabla Supabase.

> **Stack principal**  
> Next.js 14 · Tailwind CSS · Supabase (`@supabase/ssr`) · GitHub OAuth · Framer Motion · Zod

---

## 1. Requisitos previos

- Node.js ≥ 18.18
- Cuenta de Supabase con proyecto activo
- Organización / repositorio en GitHub
- GitHub OAuth App configurada en Supabase (Providers → GitHub)

---

## 2. Configuración de entorno

1. Copia el archivo de variables de entorno y completa tus credenciales:

```bash
cp .env.local.example .env.local
```

| Variable | Descripción |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | URL del proyecto Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Clave pública anon |
| `SUPABASE_SERVICE_ROLE_KEY` | Service role (solo se usa en el servidor para la acción del formulario) |
| `NEXT_PUBLIC_SITE_URL` | URL pública del sitio (útil para OAuth en producción) |

> ⚠️ **Importante:** el service role nunca debe exponerse en el cliente. Aquí se utiliza únicamente en acciones de servidor.

---

## 3. Supabase: tablas y políticas

Ejecuta este script SQL en la consola de Supabase para crear la tabla que recibe los envíos del formulario:

```sql
create table if not exists public.waitlist_leads (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  company text,
  use_case text,
  source text default 'lovable-clone',
  created_at timestamptz default timezone('utc', now())
);

alter table public.waitlist_leads enable row level security;

create policy "allow service role inserts"
  on public.waitlist_leads
  for insert
  with check (true);
```

Como la inserción se realiza con el service role a través de una Server Action, no necesitas políticas adicionales para usuarios autenticados.

---

## 4. Configurar OAuth de GitHub en Supabase

1. Ve a **Authentication → Providers → GitHub** en tu proyecto Supabase.
2. Crea una OAuth App en GitHub con redirect URL `https://PROJECT_REF.supabase.co/auth/v1/callback`.
3. Copia el `Client ID` y `Client Secret` en Supabase.
4. Agrega dominios permitidos para tu entorno local (`http://localhost:3000`) y producción (`https://tu-dominio.com`).

Desde el frontend, al hacer clic en “Inicia con GitHub”, Supabase gestionará el flujo OAuth y regresará al endpoint `/auth/callback`, donde se intercambia el código por una sesión y se persiste en cookies.

---

## 5. Ejecutar el proyecto

Instala dependencias y lanza el servidor de desarrollo:

```bash
npm install
npm run dev
```

Visita `http://localhost:3000` para ver la réplica de lovable.dev. El formulario de la landing enviará la información a Supabase y podrás relacionar los leads con tu pipeline.

---

## 6. Integración con GitHub Actions (opcional)

El dashboard incluye snippets de workflows. Para una integración real:

1. Crea una GitHub App (desde `Settings → Developer settings → GitHub Apps`).
2. Otorga permisos de `Contents`, `Metadata`, `Pull requests` y `Workflows`.
3. Instala la app en la organización deseada.
4. Con Supabase puedes almacenar tokens temporales y secrets por entorno para disparar pipelines automatizados.

Consulta el ejemplo que se muestra en la sección de Integraciones (`components/sections/integrations.tsx`).

---

## 7. Despliegue

- **Vercel**: recomendado. Define las variables de entorno en el panel del proyecto.
- **Supabase Auth redirect**: añade la URL de producción en los dominios válidos dentro del proveedor GitHub.

---

## 8. Estructura relevante

- `app/layout.tsx`: layout raíz, proveedor de Supabase y navegación.
- `app/page.tsx`: composición de secciones.
- `app/actions/register-waitlist.ts`: Server Action que inserta leads en Supabase.
- `components/sections/*`: bloques que reproducen la estética de lovable.dev.
- `components/forms/waitlist-form.tsx`: formulario con validación + feedback animado.

---

## 9. Próximos pasos sugeridos

- Conectar la Server Action a flujos reales (automations, CRM, etc.).
- Añadir analítica (PostHog, Vercel Analytics).
- Extender la clonación a repos privados mediante GitHub Apps + Supabase Edge Functions.
