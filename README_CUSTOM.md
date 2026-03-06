# NCTC Website - Next.js Project

This is a modern, fully responsive website for the National Center for Technology Commercialization (NCTC) built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Project Overview

The website showcases Egypt's National Center for Technology Commercialization with a focus on:
- Bridging the gap between research and market-ready solutions
- Connecting researchers, universities, industry leaders, and investors
- Organizing technologies into specialized innovation clusters
- Providing a digital platform for technology commercialization

## Tech Stack

- **Framework**: [Next.js 16.1.6](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Package Manager**: npm

## Project Structure

```
website/
├── src/
│   ├── app/
│   │   ├── page.tsx           # Main homepage
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navigation.tsx # Top navigation bar
│   │   │   └── Footer.tsx     # Footer section
│   │   └── sections/
│   │       ├── HeroSection.tsx
│   │       ├── AboutSection.tsx
│   │       ├── HowItWorksSection.tsx
│   │       ├── OTCNetworkSection.tsx
│   │       ├── InnovationClustersSection.tsx
│   │       ├── DigitalPlatformSection.tsx
│   │       ├── StakeholdersSection.tsx
│   │       └── GetInvolvedSection.tsx
│   └── types/
├── public/               # Static assets
├── tailwind.config.ts    # Tailwind configuration
├── next.config.ts        # Next.js configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies

```

## Features

### Sections Included

1. **Navigation Bar** - Responsive header with mobile menu
2. **Hero Section** - Animated background with CTAs
3. **About NCTC** - Mission, vision, and why it matters
4. **How It Works** - 6-step commercialization journey
5. **OTC Network** - Nationwide ecosystem overview
6. **Innovation Clusters** - 6 specialized technology clusters
7. **Digital Platform** - Platform features and capabilities
8. **For Stakeholders** - Three-tier stakeholder solutions
9. **Get Involved** - Call-to-action section
10. **Footer** - Links, contact info, and social media

### Design Features

- **NCTC Brand Colors**: Primary (#10112f), Secondary (#243996), Accent (#4a81f6)
- **Animations**: Smooth transitions, hover effects, scroll-triggered animations
- **Responsive Design**: Mobile-first approach, works on all devices
- **Accessibility**: Semantic HTML, proper color contrast, keyboard navigation
- **Performance**: Optimized images, lazy loading, code splitting

## Installation

1. Navigate to the project directory:
   ```bash
   cd "/Users/waseemghaly/Documents/PRG/Emad/NCTC/NCTC Website V2/website"
   ```

2. Install dependencies (if not already done):
   ```bash
   npm install
   ```

## Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

## Build & Production

Build the project for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Configuration

### Tailwind CSS
Configured with NCTC brand colors in `tailwind.config.ts`:
- `nctc-primary`: #10112f
- `nctc-secondary`: #243996
- `nctc-accent`: #4a81f6
- `nctc-dark`: #161616
- `nctc-light`: #ffffff

### Next.js
The project uses the App Router with TypeScript and strict mode enabled.

## Customization

### Updating Colors
Edit the color variables in `tailwind.config.ts` under the `colors.nctc` section.

### Modifying Content
Edit the respective section components in `src/components/sections/` to change content.

### Adding New Sections
1. Create a new component in `src/components/sections/`
2. Import it in `src/app/page.tsx`
3. Add it to the main export

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

## License

© National Center for Technology Commercialization (NCTC). All Rights Reserved.

---

**Deployed on**: Your deployment platform
**Live Site**: [To be deployed]
