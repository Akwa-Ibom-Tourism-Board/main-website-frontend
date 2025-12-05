🛫 Akwa Ibom State Hotels and Tourism Board Website

Internal Project Documentation

This repository contains the source code for a private, production-grade tourism website built for the Akwa Ibom State Hotels & Tourism Board.
The application highlights key attractions, hotels, cultural elements, and visitor information for potential tourists and partners.

1. Overview

The application is a single-page React website developed with a focus on:

High-performance rendering

Mobile-first responsive design

Consistent branded UI

Professional presentation of destinations, hotels, and cultural content

2. Technology Stack

The project is built using the following technologies:

React 18

TypeScript

Vite (build tooling & dev server)

Tailwind CSS

shadcn/ui + Radix UI (component system)

React Router v6

TanStack React Query (for future server-state needs)

Lucide Icons

These technologies ensure long-term maintainability, fast performance, and design consistency.

3. Application Structure
src/
 ├── App.tsx                  # Application root and router
 ├── pages/
 │    ├── Index.tsx           # Main landing page
 │    └── NotFound.tsx        # Fallback page
 ├── components/
 │    ├── Navbar.tsx
 │    ├── Hero.tsx
 │    ├── Destinations.tsx
 │    ├── Hotels.tsx
 │    ├── Culture.tsx
 │    └── Footer.tsx
 ├── assets/                  # Images and static assets
 └── components/ui/           # shadcn/ui component library


The Index page composes all primary sections of the website.

4. Features
4.1 Content Sections

Hero Section – High-quality imagery, intro headline, and calls to action

Destinations – Curated list of top tourist sites

Hotels – Premium accommodation options with amenities and pricing indicators

Culture – Overview of music, arts, festivals, and local communities

Footer – Contact details, quick links, and social media references

4.2 Layout & Interaction

Fully responsive navigation with desktop and mobile menus

Smooth animations for hover and image transitions

Consistent use of the project’s design language and branding

4.3 Routing
Route	Description
/	Main website homepage
*	Not Found screen
5. Local Development
Prerequisites

Node.js (LTS recommended)

npm package manager

Install dependencies
npm install

Start development server
npm run dev

Build for production
npm run build

Preview production build
npm run preview

6. Deployment

This project can be deployed to any modern static hosting platform, including:

Vercel

Netlify

Cloudflare Pages

GitHub Pages

Internal infrastructure if required

The build output is generated in the dist/ directory after running:

npm run build

7. Notes for Maintainers

This repository is private and intended for internal or authorized use only.

All external assets (images, logos, etc.) must comply with branding and licensing requirements.

Do not expose API keys, credentials, or sensitive internal data.

All updates should maintain visual consistency with the existing design system.

8. License

This project is proprietary and not licensed for external use, redistribution, or modification without authorization.