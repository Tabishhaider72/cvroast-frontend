# 🚀 CVRoaster.AI — Recruiter-focused Resume Screening (Frontend)

Live demo: https://cvroaster-ai.vercel.app  
CVRoaster.AI is a fast, modern frontend for automated resume screening and insights. Built with Next.js and TailwindCSS, it consumes a resume-parsing and scoring API to provide recruiters and hiring managers with instant, actionable insights about candidates — summary scores, skill breakdowns, HR recommendations, and a compact view to speed screening decisions.

Why this matters for recruiters
- **Save time**: Triage resumes in seconds instead of minutes.  
- **Consistent scoring**: Objective score and breakdown reduce human bias.  
- **Actionable insights**: HR recommendations and highlights help decide next steps quickly.  
- **Better shortlists**: Focus interviews on top-fit candidates using data-driven signals.

**Main Features**
- **Upload & Parse**: Drop resumes (PDF/DOCX) and get parsed data quickly.
- **Score Gauge**: At-a-glance candidate score indicating fit.
- **Summary Card**: Short candidate summary for quick read.
- **Breakdown Card**: Skill and section-level breakdowns (education, experience, skills).
- **HR Recommendations**: Suggested actions (interview, reject, follow-up) with reasoning.
- **Insight List**: Key flags, missing info, or strengths surfaced automatically.
Who should use this
- Recruiters and sourcers who need to evaluate many resumes quickly.  
- Hiring managers wanting a concise candidate snapshot before interviews.  
- Small teams that need consistent screening without heavy HR tooling.

Tech & Project Layout
- **Framework**: `Next.js` (app router)  
- **Styling**: `TailwindCSS`  
- **Language**: `TypeScript`  
- **Key folders**:  
	- `app/` — Next.js pages and routes  
	- `components/` — UI components (`result`, `resume`, `ui`)  
Quick Start (frontend)
Prerequisites: Node.js, `pnpm` (or use `npm`/`yarn` with equivalent commands)

1. Clone the repo
```bash
git clone https://github.com/Tabishhaider72/cvroast-frontend.git
cd cvroast-frontend
2. Install dependencies

```bash
pnpm install
3. Set environment variables

Create a `.env.local` file at the project root and add at least the API base URL used by the frontend:

```text
NEXT_PUBLIC_API_URL=https://your-backend.example.com
Note: `lib/api.ts` expects `process.env.NEXT_PUBLIC_API_URL` to build the API client.

4. Run the dev server

```bash
pnpm dev
5. Build for production

```bash
pnpm build
pnpm start
Integration & Deployment
- Production hosting: Vercel (this project is deployed at the live demo link above).  
- Ensure the production environment variable `NEXT_PUBLIC_API_URL` points to the backend API (see backend repo link above).  
- The backend is responsible for resume parsing, scoring, and returning structured JSON consumed by this frontend.

Extending and Customization
- Add more scoring rules in the backend to change recruiter heuristics.  
- Extend UI components under `components/result/` to surface additional signals.  
- Add screenshots or sample candidates in `public/` and link them in this README for quick hiring demos.

Contributing
- Open an issue or submit a PR.  
- Follow the existing code style: TypeScript with Next.js app router and Tailwind utilities.  
- For larger changes, create a feature branch and reference the issue in your PR.

Contact & Credits
- Live demo: https://cvroaster-ai.vercel.app  
- Backend repo: https://github.com/Tabishhaider72/cvroast-backend  
- Maintainer: Tabish Haider — refer to the GitHub repo for contact details.

License
- Check the repo root for a `LICENSE` file; if none present, add one (MIT recommended for many open-source projects).

Suggested next steps
- Add a couple of annotated screenshots (`public/demo-1.png`, `public/demo-2.png`) and embed them under a **Screenshots** section.  
- Add a short video/GIF showing the dropzone → score flow to showcase speed to recruiters.

Thank you — this README frames the product for recruiters and hiring teams. If you want, I can:
- Add screenshot placeholders to `public/` and embed them in the README.  
- Create a short one-page PDF pitch for recruiters summarizing the product.
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
