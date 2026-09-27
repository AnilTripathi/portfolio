# Anil Kumar Tripathi — Portfolio

Personal portfolio website for **Anil Kumar Tripathi**, a Senior Full Stack Software Engineer with 13+ years of experience in Java, Spring Boot, React.js, and Microservices.

🌐 **Live Site:** <a href="https://aniltripathi.github.io/portfolio" target="_blank" rel="noopener noreferrer">https://aniltripathi.github.io/portfolio</a>

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| UI Components | Radix UI + shadcn/ui |
| Icons | Lucide React |
| Deployment | GitHub Pages |

---

## Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Education.tsx
│   │   ├── Certifications.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── ui/           # shadcn/ui components
├── public/           # Static assets
├── next.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

---

## Sections

- **Hero** — Name, title, and profile photo
- **About** — Professional summary
- **Work Experience** — Roles at Cognizant, Valley Tech, Wellness 360, Markstein, and Osiris Technologies
- **Education** — Academic background
- **Certifications** — Training certifications from Hewlett Packard Education India
- **Technical Skills** — 27+ skills with years of experience
- **Projects** — Featured projects
- **Contact** — Contact form and details

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Install dependencies

```bash
npm install
# or
yarn install
```

### Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
```

---

## Deployment

This project is deployed to **GitHub Pages** using the `gh-pages` package.

```bash
npm run deploy
```

This runs `next build` (with `output: 'export'`) and publishes the `build/` directory to the `gh-pages` branch.

The `next.config.mjs` sets:
- `basePath: '/portfolio'` (production)
- `assetPrefix: '/portfolio'` (production)

---

## Environment

No environment variables are required. The site is fully static.

---

## License

This project is private and not open for redistribution.
