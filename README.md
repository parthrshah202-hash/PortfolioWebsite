# Parth Shah — Portfolio Website

Personal portfolio site for Parth Shah — AI Engineer & Data Systems Builder. Built to showcase projects, skills, experience, and achievements in AI, data engineering, and backend systems.

**🔗 Live site:** [portfolio-website-liard-seven-68.vercel.app](https://portfolio-website-liard-seven-68.vercel.app/)

---

## Overview

A single-page, section-based portfolio (`About → Skills → Projects → Experience → Achievements → Contact`) with smooth scroll navigation, animated transitions, and a resume download. Deployed on Vercel.

## Tech Stack

| Category | Tech |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| UI Library | [React 19](https://react.dev) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [lucide-react](https://lucide.dev), [Simple Icons](https://simpleicons.org) (via CDN) |
| Typewriter effect | [react-simple-typewriter](https://www.npmjs.com/package/react-simple-typewriter) |
| Language | TypeScript |
| Linting | ESLint (`eslint-config-next`) |
| Deployment | Vercel |

## Features

- **Hero section** with animated role/tagline and quick links to Projects, Resume, and Contact
- **About** — short intro on background and focus areas
- **Skills** — grouped by Programming Languages, AI & ML, Backend & Data Engineering, and Tools & Platforms, each with brand icons
- **Projects** — cards for shipped and in-progress work (Auto Schema Pipeline, FinFlow, Confidence Detection for LLMs, AI Coding Mentor, Log Data Pipeline), each with tech tags and links to GitHub / live demos
- **Experience & Education** — timeline of roles, clubs, and academic milestones
- **Achievements & Certifications** — competitions, certifications, and platform ratings
- **Contact** — direct email, GitHub, and LinkedIn links
- Downloadable resume (PDF) from the hero section
- Fully responsive, optimized images via `next/image`

## Project Structure

```
PortfolioWebsite/
├── public/
│   ├── images/          # project screenshots, profile picture, OG image
│   └── resume/           # resume PDF
├── src/
│   └── app/               # Next.js App Router pages, layout, and components
├── AGENTS.md              # notes for AI coding agents working on this repo
├── CLAUDE.md               # notes for Claude Code sessions on this repo
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

## Why This Stack

- **Next.js (App Router)** for file-based routing, image optimization, and Vercel's zero-config deployment
- **Tailwind CSS 4** for fast, consistent styling without a separate design system
- **Framer Motion** for section reveal animations and the hero typewriter effect
- **TypeScript** throughout for type safety across components

## Deployment

Deployed on [Vercel](https://vercel.com), auto-deploying from the `main` branch on every push.

## Contact

**Parth Shah**
- Email: [parthrshah202@gmail.com](mailto:parthrshah202@gmail.com)
- GitHub: [@parthrshah202-hash](https://github.com/parthrshah202-hash)
- LinkedIn: [parth-shah-26154a372](https://www.linkedin.com/in/parth-shah-26154a372/)

---

<sub>© 2026 Parth Shah. Built with Next.js, React, and Tailwind CSS.</sub>
