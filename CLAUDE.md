# Prompt Engineering Jobs - AI/ML Job Board Platform

## Project Overview
Prompt Engineering Jobs is a specialized job board platform focused on AI, ML, and prompt engineering positions. Built with Next.js 15, TypeScript, and Tailwind CSS. This project is a duplicate of the Careerably platform, customized for AI/ML job market.

## Tech Stack
- **Framework**: Next.js 15 with Turbopack
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI primitives + custom components
- **Icons**: Lucide React
- **Package Manager**: npm (use with --legacy-peer-deps due to date-fns compatibility)

## Development Setup
```bash
# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Project Structure
```
src/
├── app/                    # Next.js 15 app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── ui/                # Reusable UI components (Radix + custom)
│   ├── root-layout/       # Layout components (header, footer, nav)
│   └── sidebar/           # Sidebar navigation components
├── features/              # Feature-specific components and logic
│   ├── home/              # Home page components
│   ├── jobs/              # Job-related components
│   ├── job-categories/    # Category management
│   └── blog/              # Blog functionality
├── hooks/                 # Custom React hooks
└── lib/                   # Utility functions
```

## Key Features
- AI/ML job listings and search
- Prompt engineering focused categories
- Responsive design
- Blog integration for AI/ML content
- Newsletter signup
- Post job functionality (UI only, not functional yet)

## Branding Focus
This platform specializes in:
- Prompt Engineering positions
- AI/ML Engineering roles
- Data Science positions
- AI Research roles
- Machine Learning Operations (MLOps)

## Development Notes
- Duplicated from Careerably platform
- Needs branding updates for AI/ML focus
- Uses Next.js 15 App Router
- Turbopack for fast development builds
- Tailwind CSS v4 for styling
- Custom UI components built on Radix UI
- TypeScript for type safety

## Commands to Remember
- Development: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`
- Install deps: `npm install --legacy-peer-deps`

## TODO: Branding Updates Needed
- [ ] Update site title and metadata
- [ ] Modify hero copy for AI/ML focus
- [ ] Update job categories for AI/ML roles
- [ ] Customize color scheme if needed
- [ ] Update footer branding
- [ ] Modify navigation for AI/ML content