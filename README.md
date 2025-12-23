
# Portfolio — Next.js + Tailwind CSS

This repository contains a personal portfolio built with Next.js (App Router) and Tailwind CSS. It showcases sections like About, Projects, Experience, Education, Achievements, and a Contact API route.

## Features
- Clean, responsive UI using Tailwind CSS
- App Router structure (Next.js)
- Contact API endpoint (`/api/contact/route.ts`)
- Sections: Hero, About, Projects, Experience, Education, Achievements, Leadership, Contact

## Tech Stack
- Next.js
- React
- TypeScript
- Tailwind CSS

## Local Setup
1. Install dependencies

```bash
npm install
```

2. Run development server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Build

```bash
npm run build
npm run start
```

## Project Structure (high level)
- `app/` — Next.js App Router pages and API routes
- `components/` — React components for each portfolio section
- `public/` — Static assets

## API
- Contact endpoint: `app/api/contact/route.ts` — handles form submissions

## Contributing
Feel free to open issues or pull requests for improvements.

## License
This project is provided as-is.

## Vercel Deployment

Use Vercel to deploy this Next.js app. Below are two common flows: GitHub (recommended) and CLI.

1) Push to GitHub (example commands)

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin git@github.com:<your-username>/<repo-name>.git
git push -u origin main
```

2) Import on Vercel (Dashboard)
- Go to https://vercel.com and sign in.
- Choose "New Project" → Import Git Repository → select your GitHub repo.
- Vercel auto-detects Next.js. Confirm settings and deploy.

3) CLI deploy (quick)

```bash
npm i -g vercel
vercel login
vercel --prod
```

Notes:
- A `vercel.json` is included with caching headers for static assets.
- If your API requires secrets, add them in the Vercel Dashboard (Project Settings → Environment Variables).
