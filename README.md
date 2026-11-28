# Saurabh Zambare | Data Analysis & Reporting

[Live portfolio](https://saurabhzambare.github.io/saurabh-portfolio/) · [Source](https://github.com/Saurabhzambare/saurabh-portfolio)

Personalised from [Neo-folio](https://github.com/Sridattasai18/Neo-folio) by Kaligotla Sri Datta Sai Vithal, under the MIT licence. The original licence is retained in `LICENSE`.

React 18, TypeScript, Vite, Tailwind CSS and Motion.

## Development and deployment

Run `npm ci`, then `npm run dev`. Run `npm run build` for the production build.

GitHub Actions builds and deploys pushes to `main` using GitHub Pages. The Vite base path is `/saurabh-portfolio/`; update `vite.config.ts` if renaming the repository. Public assets use `import.meta.env.BASE_URL`.

## Content and structure

The page follows this order: opening, About, projects, vertical journey, McDonald’s experience, education, certifications and courses, skills, contact.

- `src/app/data/portfolio.ts`: projects, journey, experience, education, courses, skills and interpersonal capabilities.
- `src/app/App.tsx`: sections, navigation, case-study dialogs and filters.
- `src/styles/portfolio.css`: responsive layout, floating hero labels and moving skill rows.
- `public/`: actual project report screenshots and the model-evaluation figure.

The three skill rows loop in alternating directions, pause on hover or keyboard focus, and share a pause control. Reduced-motion preferences stop animated movement and leave the skills available as scrollable rows. Native disclosure controls expand journey chapters and experience roles. Case studies use a modal dialog with Escape, focus restoration and background scroll locking.

## Evidence and publication boundaries

Content updated on 28 November 2026 using the agreed portfolio wording and existing project evidence. Company tenure is 2021–2026; individual promotion dates are intentionally omitted. The IT Support Engineer internship is excluded. Education does not display degree types, and the Data Scientist Master’s Program is clearly labelled professional training.

Dataset findings, held-out model results and software checks are distinguished from business outcomes. GACL is independent work using public disclosures. The implemented extraction and text-chunking work is separated from the planned RAG, embeddings, generated answers and agent features. Course learning is not presented as completed professional AI experience.

## Content still to complete

The About section intentionally uses a photo placeholder. Add a selected photograph when ready. Email and résumé download buttons are omitted until an address and final résumé are supplied.

The courses list is curated from confirmed training, not an automatic LinkedIn sync or a claim that every LinkedIn credential has been reconciled. Ongoing learning is labelled. Add other LinkedIn courses, verified issuers, completion dates and credential URLs to the `courses` array. A credential button appears only when its `url` is provided.
