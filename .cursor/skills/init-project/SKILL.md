---
name: init-project
description: Initialize this Next.js + Better Auth + Prisma project from scratch. Use when the user asks to set up, initialize, bootstrap, or get started with this project, or when they hit pnpm install errors about ignored build scripts.
disable-model-invocation: true
---

# Initialize Project

## Steps

### 1. Install dependencies

```bash
pnpm install
```

If you see `[ERR_PNPM_IGNORED_BUILDS]` about `sharp` and `unrs-resolver`, run:

```bash
pnpm approve-builds
```

Approve both packages — they are standard Next.js native addons (image processing and module resolution). This writes to `pnpm-workspace.yaml` and is safe to commit.

### 2. Configure environment variables

Copy the example file and fill in real values:

```bash
cp .env.example .env
```

Required variables to fill in before the app will start:

| Variable | Description |
|---|---|
| `DATABASE_URL` | Postgres connection string (e.g. `postgresql://user:pass@localhost:5432/db?schema=public`) |
| `DIRECT_URL` | Same Postgres URL without `?schema=public` (used by Prisma for migrations) |
| `RESEND_API_KEY` | From [resend.com](https://resend.com) — needed for all auth emails |
| `BETTER_AUTH_EMAIL` | From address for auth emails (use `delivered@resend.dev` for local dev) |
| `STRIPE_SECRET_KEY` | From Stripe dashboard (use `sk_test_...` for dev) |
| `STRIPE_WEBHOOK_SECRET` | From Stripe webhook configuration (`whsec_...`) |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | From Stripe dashboard (`pk_test_...`) |
| `NEXT_PUBLIC_WEBSITE_URL` | `http://localhost:3000` for local dev |
| `NEXT_PUBLIC_APP_URL` | `localhost:3000` for local dev |

Optional: fill in `GITHUB_CLIENT_ID/SECRET` and/or `GOOGLE_CLIENT_ID/SECRET` for social login.

### 3. Generate Prisma Client and run migrations

Ensure Postgres is running and `DATABASE_URL` is set, then:

```bash
pnpm prisma generate
pnpm prisma migrate dev
```

### 4. Start the dev server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Troubleshooting

- **Migration fails**: Confirm Postgres is running and `DATABASE_URL` is reachable.
- **Auth emails not sending**: Confirm `RESEND_API_KEY` is valid and `BETTER_AUTH_EMAIL` is set.
- **Stripe webhooks not working locally**: Run `stripe listen --forward-to localhost:3000/api/webhooks/stripe` and update `STRIPE_WEBHOOK_SECRET` with the CLI's webhook secret.
