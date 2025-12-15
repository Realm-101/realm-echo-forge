# Realm 101 - Developer Ecosystem Landing Page

## Overview
A landing page for Realm 101, a developer ecosystem platform. Features a waitlist signup form that stores leads in a PostgreSQL database and optionally sends confirmation emails via Resend.

## Tech Stack
- **Frontend**: React 18, TypeScript, Vite, TailwindCSS, Shadcn/UI
- **Backend**: Express.js (Node.js), Drizzle ORM
- **Database**: PostgreSQL (Neon)
- **Email**: Resend (optional)

## Project Structure
```
├── client/               # Frontend React application
│   ├── src/
│   │   ├── components/   # UI components
│   │   ├── pages/        # Page components
│   │   ├── hooks/        # Custom React hooks
│   │   └── lib/          # Utilities
│   └── index.html
├── server/               # Backend Express server
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   ├── storage.ts        # Database storage interface
│   ├── db.ts             # Database connection
│   └── vite.ts           # Vite dev server integration
├── shared/               # Shared code between frontend and backend
│   └── schema.ts         # Drizzle schema and types
└── public/               # Static assets
```

## Database Schema
- **leads**: Stores waitlist signups (firstName, lastName, email, company)

## API Endpoints
- `POST /api/leads` - Create a new waitlist signup

## Environment Variables
- `DATABASE_URL` - PostgreSQL connection string (auto-provisioned)
- `RESEND_API_KEY` - Optional: Resend API key for confirmation emails

## Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run db:push` - Push schema changes to database

## Recent Changes (Dec 15, 2025)
- Fixed MagneticButton component to properly forward refs using React.forwardRef (fixes DialogTrigger compatibility)
- Added comprehensive data-testid attributes to all interactive elements for testing support
- Verified dark mode implementation (ThemeProvider with next-themes already in place)
- Verified SignUpDialog properly implements loading/error states with apiRequest

## Features
- **Dark Mode**: Fully implemented with ThemeToggle in header (light/dark/system)
- **Waitlist Signup**: Form with validation, loading states, error handling, and toast notifications
- **Product Landing Pages**: StackStudio, C4-Studio, WebKnot, Aldebate, RepoRadar, StackFast, VentureCloneAI, Unbuilt
- **Interactive Components**: MagneticButton, BlurInText, EcosystemBubbleMenu
- **Cookie Consent**: GDPR-compliant cookie consent dialog
