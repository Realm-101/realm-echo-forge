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
