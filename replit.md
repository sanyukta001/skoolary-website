# Skoolary School Bus Tracking Website

## Overview

This is a React-based marketing website for Skoolary, a comprehensive school bus tracking solution. The website showcases the platform's features through an interactive, modern single-page application that targets parents, schools, and transportation providers. The site presents information about real-time bus tracking, safety features, and dedicated mobile applications for different user types.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing with single-page navigation
- **Styling**: Tailwind CSS with custom design system featuring yellow/black/white color scheme
- **UI Components**: Shadcn/ui component library built on Radix UI primitives for accessibility
- **State Management**: TanStack Query for server state management with React hooks for local state
- **3D Graphics**: Three.js integration for interactive visual elements and animations

### Backend Architecture
- **Server**: Express.js with TypeScript running in development and production modes
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Session Management**: Connect-pg-simple for PostgreSQL-backed session storage
- **API Design**: RESTful API structure with `/api` prefix for all backend routes

### Build System
- **Bundler**: Vite for fast development and optimized production builds
- **TypeScript**: Strict type checking across client, server, and shared code
- **Development**: Hot module replacement and runtime error overlays for improved DX
- **Production**: ESBuild for server bundling and Vite for client optimization

### Design System
- **Typography**: Inter and Poppins fonts for professional readability
- **Color Palette**: Primary yellow (#FFD700), dark gray (#1F2937), and accent colors
- **Components**: Consistent spacing, animations, and responsive design patterns
- **Accessibility**: ARIA-compliant components with keyboard navigation support

### Data Layer
- **Database Schema**: User management with UUID primary keys and secure password storage
- **ORM**: Drizzle with Zod integration for runtime type validation
- **Migrations**: Drizzle Kit for database schema management and version control

### Development Workflow
- **Environment**: Replit-optimized with cartographer plugin and development banner
- **Type Safety**: Shared types between client and server via `@shared` namespace
- **Code Quality**: ESLint configuration and TypeScript strict mode
- **Hot Reloading**: Vite development server with Express middleware integration

## External Dependencies

### UI and Styling
- **Radix UI**: Comprehensive component primitives for accessibility and behavior
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Class Variance Authority**: Type-safe component variant management
- **Lucide React**: Consistent icon library with tree-shaking support

### Database and Backend
- **Neon Database**: Serverless PostgreSQL provider for cloud-hosted database
- **Drizzle ORM**: Lightweight ORM with excellent TypeScript integration
- **Express.js**: Web application framework for API and middleware handling

### Development Tools
- **TanStack Query**: Server state management with caching and synchronization
- **React Hook Form**: Form handling with validation and performance optimization
- **Zod**: Runtime type validation and schema definition
- **Three.js**: 3D graphics library for interactive visual elements

### Form Integration
- **Google Sheets API**: Contact form submissions routed to Google Sheets for lead management
- **Hookform Resolvers**: Integration between React Hook Form and Zod validation

### Deployment and Hosting
- **Replit**: Development environment with built-in deployment capabilities
- **Vite Runtime**: Production server with static file serving and API routing