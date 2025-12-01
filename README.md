# Omkar Decor - Premium Decoration Services

A beautiful and modern Next.js application for Omkar Decor, offering premium decoration services for weddings, birthdays, receptions, and other special occasions.

## Features

- 🎨 Modern UI with Golden, White, and Black theme
- 📱 Fully responsive design
- 🎯 Service pages for:
  - Wedding Decor
  - Open Ground Decor
  - Birthday Decor
  - Car Decor
  - Reception Decor
  - Balloon Decor
  - Haladi Celebration
- 📸 Gallery page
- 📧 Contact form
- ⚡ Built with Next.js 14 and TypeScript
- 🎨 Styled with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
omkar/
├── app/
│   ├── services/          # Service pages
│   ├── gallery/           # Gallery page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/
│   ├── Navbar.tsx         # Navigation component
│   └── Footer.tsx         # Footer component
└── public/                # Static assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Colors

The theme uses golden, white, and black colors. You can customize them in `tailwind.config.ts`:

```typescript
colors: {
  golden: {
    // Customize golden shades
  },
}
```

### Services

Services can be added or modified in:
- `app/services/page.tsx` - Services listing
- `app/services/[id]/page.tsx` - Individual service pages

## Deployment

The application can be deployed on:
- Vercel (recommended for Next.js)
- Netlify
- Any platform supporting Node.js

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- ESLint

## License

This project is private and proprietary.







