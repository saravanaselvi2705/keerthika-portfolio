# Product Requirements Document (PRD): Keerthika Portfolio

## 1. Project Overview
**Name:** Keerthika Portfolio
**Type:** Professional Freelance Portfolio Website
**Objective:** To showcase Keerthika’s professional background, skills, work experience, and portfolio projects in a modern, highly interactive, and performant web application. The platform also aims to facilitate easy communication via a contact form and a quick WhatsApp integration.

## 2. Technology Stack
The application is built using a modern React-based stack ensuring high performance, SEO friendliness, and smooth animations.

*   **Framework:** Next.js 14 (App Router)
*   **Core Library:** React 18
*   **Styling:** Tailwind CSS 3
*   **Animations:** Framer Motion (for complex UI transitions and element animations)
*   **Smooth Scrolling:** `@studio-freight/react-lenis`
*   **Icons:** Lucide React
*   **Language:** TypeScript
*   **Utility Libraries:** `clsx` and `tailwind-merge` (for dynamic class name merging)

## 3. Core Features & Requirements

### 3.1. User Interface & Experience (UI/UX)
*   **Responsive Design:** Fully responsive layout working seamlessly across mobile, tablet, and desktop devices.
*   **Smooth Scrolling:** Integrated Lenis smooth scroll for a premium, buttery-smooth browsing experience.
*   **Preloader:** A custom preloading sequence (`Preloader.tsx`) to handle initial load states elegantly before the main content is revealed.
*   **Interactive Elements:** Magnetic effects on buttons (`Magnetic.tsx`) to create engaging micro-interactions on hover.

### 3.2. Sections & Components
The single-page application structure includes the following core sections:

*   **Navigation (`Navbar.tsx`):** Sticky or floating navigation bar allowing users to jump between sections.
*   **Hero Section (`Hero.tsx`):** The primary landing view featuring a strong value proposition, primary call-to-action (CTA), and introductory animations.
*   **About Section (`About.tsx`):** A brief biography and professional summary.
*   **Experience (`Experience.tsx`):** A chronological timeline or list of past job roles, responsibilities, and achievements.
*   **Skills (`Skills.tsx`):** A visual representation of technical and soft skills.
*   **Works / Portfolio (`Works.tsx`, `WorksHorizontal.tsx`, `PortfolioGallery.tsx`):** A robust project showcase. Features different layout modes (vertical list and horizontal scroll) and reusable project cards (`ProjectCard.tsx`).
*   **Contact & Footer (`ContactForm.tsx`, `Footer.tsx`):** A dedicated section for users to send messages directly from the website, alongside social links and copyright info in the footer.
*   **Floating WhatsApp Button (`WhatsAppButton.tsx`):** A persistent, floating button allowing users to initiate a direct WhatsApp chat instantly.

## 4. Project Structure
```text
keerthika-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css         # Global Tailwind directives & styles
│   │   ├── layout.tsx          # Root Next.js layout (Providers, Fonts, Metadata)
│   │   └── page.tsx            # Main Landing Page assembling all components
│   └── components/
│       ├── About.tsx
│       ├── ContactForm.tsx     # Handles form state and submission
│       ├── Experience.tsx
│       ├── Footer.tsx
│       ├── Hero.tsx
│       ├── Magnetic.tsx        # Framer Motion wrapper for magnetic hover effect
│       ├── Navbar.tsx
│       ├── PortfolioGallery.tsx
│       ├── Preloader.tsx       # Initial site loading animation
│       ├── ProjectCard.tsx     # Reusable UI for individual projects
│       ├── SectionHeading.tsx  # Reusable UI for section titles
│       ├── Skills.tsx
│       ├── SmoothScroll.tsx    # Lenis configuration component
│       ├── WhatsAppButton.tsx  # Floating action button
│       ├── Works.tsx
│       └── WorksHorizontal.tsx # Alternative horizontal scrolling works layout
├── public/                     # Static assets (images, documents)
├── tailwind.config.ts          # Tailwind configuration (colors, fonts, screens)
├── package.json                # Dependencies and scripts
└── tsconfig.json               # TypeScript configuration
```

## 5. Design Guidelines
*   **Aesthetics:** Modern, premium, clean, and elegant.
*   **Typography:** Professional, highly readable sans-serif fonts optimized via `next/font`.
*   **Color Palette:** Neutral tones (charcoal, white, soft grays) potentially offset by brand accent colors, avoiding overly flashy or neon themes to maintain a trustworthy professional appearance.

## 6. Future Enhancements (Optional)
*   **Backend Integration:** Connecting the `ContactForm` to an email service API (like Resend or SendGrid) or a backend database to capture leads securely.
*   **CMS Integration:** Connecting the Portfolio/Works and Experience sections to a Headless CMS (like Sanity or Contentful) to allow non-technical content updates.
*   **Dark Mode Toggle:** Support for system-preference based or manual Light/Dark mode switching.
