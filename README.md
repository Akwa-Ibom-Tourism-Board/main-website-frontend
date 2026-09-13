🛫 Akwa Ibom State Hotels and Tourism Development Commission Website

Internal Project Documentation

This repository contains the source code for a private, production-grade tourism website built for the Akwa Ibom State Hotels & Tourism Development Commission.
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

styled-components (theming and component styling)

Radix UI primitives (dialog, toast, tooltip)

React Router v6

TanStack React Query (for future server-state needs)

Lucide Icons

These technologies ensure long-term maintainability, fast performance, and design consistency.

3. Application Structure

The codebase follows a feature-based architecture: each feature under `src/features/` owns its own `pages/`, `components/`, and (where relevant) `types/`/`api/`, rather than grouping files by type across the whole app.

src/
 ├── app/                     # App root, providers (ThemeProvider, React Query, Tooltip), and route table
 ├── theme/                   # Design tokens: colors, fonts, radii, shadows, breakpoints, animations, useTheme hook
 ├── shared/
 │    ├── ui/                 # Reusable styled-components primitives (Button, Card, Dialog, Tooltip, Toast, Sonner)
 │    └── components/         # Shared layout: Navbar, TopBar, Footer, PageShell, PageHeroBanner, Container
 ├── features/
 │    ├── home/               # Landing page and its sections (Hero, Announcements, Destinations, Hotels, Culture...)
 │    ├── news-details/       # News data/types + the news grid widget + the news detail page
 │    ├── about-board/        # About the Commission page
 │    ├── about-akwa-ibom/    # About Akwa Ibom, Culture & Heritage, Calendar of Activities
 │    ├── the-board/          # Conferences & Events, Organizational Structure
 │    ├── tourism-page/       # Tour Operators, Group Tours, Prestigious Destinations, Restaurants & Dining
 │    └── not-found/          # 404 page
 └── assets/                  # Images and static assets

Every page is composed inside `<PageShell>` (top bar, nav, footer, and the site-wide registration modal) and, for the common ~40vh page banner, `<PageHeroBanner>`. All colors, fonts, spacing, shadows, and breakpoints come from the theme object in `src/theme/theme.ts` via `styled-components`' `ThemeProvider` — components read them with `theme.colors.*` inside styled templates, or the `useTheme()` hook from `src/theme` when a value is needed outside a styled template (e.g. to color a `lucide-react` icon).

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