# Muhammad Muntazir Mahdi — Portfolio Platform

Starter foundation for a data-driven personal portfolio and future admin CMS.

## Important
This is Phase 1. Content is centralized in `lib/content.ts` so the UI is not hard-coded section-by-section. The next phase will replace this temporary content layer with Supabase/PostgreSQL and an authenticated admin dashboard.

## Run locally
1. Install Node.js 20+ on a development environment.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open the local Next.js URL.

## Planned editable architecture
Profile, social links, education, journey, skills, projects, project media, creative work, creative media, achievements, certificates, courses, FAQ, messages, and site settings will become database-backed and editable through `/admin`.

Do not add secrets to frontend code. Supabase keys and other secrets belong in environment variables.
