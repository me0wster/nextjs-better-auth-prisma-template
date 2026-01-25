# Next.js + Better Auth + Prisma Template

A production-ready authentication starter with Next.js 16, Better Auth, Prisma, and Stripe billing.

## Features

- **Authentication** - Email/password, email verification, password reset
- **Two-Factor Auth** - TOTP-based 2FA with backup codes
- **Passkeys** - WebAuthn/FIDO2 passwordless authentication
- **Organizations** - Multi-tenant support with invitations and roles
- **Stripe Billing** - Customer management and subscriptions
- **Email** - Transactional emails via Resend
- **UI** - Radix UI + Tailwind CSS + shadcn/ui components

## Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Auth**: Better Auth 1.4
- **Database**: PostgreSQL + Prisma 7
- **Styling**: Tailwind CSS 4
- **Payments**: Stripe
- **Email**: Resend + React Email

## Getting Started

### 1. Install dependencies

```bash
pnpm install
```

### 2. Configure environment variables

Create a `.env` file:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"

# Auth
BETTER_AUTH_SECRET="your-secret-key"
BETTER_AUTH_URL="http://localhost:3000"
BETTER_AUTH_EMAIL="noreply@yourdomain.com"

# Stripe
STRIPE_SECRET_KEY="sk_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_..."

# Resend
RESEND_API_KEY="re_..."

# Optional: Social providers
# GITHUB_CLIENT_ID=""
# GITHUB_CLIENT_SECRET=""
# GOOGLE_CLIENT_ID=""
# GOOGLE_CLIENT_SECRET=""
```

### 3. Set up the database

```bash
pnpm prisma migrate dev
```

### 4. Run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
├── app/
│   ├── (auth)/           # Auth pages (sign-in, reset-password, 2FA)
│   ├── accept-invitation/ # Organization invitation flow
│   ├── api/              # API routes (auth, webhooks)
│   └── dashboard/        # Protected dashboard
├── components/
│   └── ui/               # shadcn/ui components
├── lib/
│   ├── auth.ts           # Better Auth configuration
│   ├── auth-client.ts    # Client-side auth hooks
│   ├── prisma.ts         # Prisma client
│   ├── email/            # Email templates
│   └── stripe/           # Stripe utilities
└── prisma/
    └── schema.prisma     # Database schema
```

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server with Turbopack |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm migrate` | Run Better Auth migrations |
| `pnpm prisma migrate dev` | Run Prisma migrations |

## License

MIT
