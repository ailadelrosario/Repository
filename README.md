# Aila Angelie B. Del Rosario — Portfolio

A responsive, front-end-only portfolio built with React and Vite. It is suitable for editing in VS Code, hosting on GitHub, and deploying to Vercel.

## Requirements
- Node.js 20.19+ or 22.12+
- npm

## Run locally
```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Production build
```bash
npm run build
npm run preview
```

The production website is generated in `dist/`.

## Deploy to Vercel
1. Push this project to a GitHub repository.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Vercel should detect Vite automatically. Use `npm run build` as the build command and `dist` as the output directory.
4. Deploy.

## Deploy from GitHub Pages (optional)
Vercel is the recommended hosting option for this Vite project. GitHub can store and version the source code; GitHub Pages can also host static builds with a small Vite `base` configuration if desired.

## Personalize
- Replace `public/aila-profile.png` with another portrait, keeping the same filename or updating the image path in `src/main.jsx`.
- Edit the introduction and education details in `src/main.jsx`.
- Update the `projects` array in `src/main.jsx` to add or edit project cards.
- The contact links currently use a placeholder email (`aila.delrosario@example.com`). Replace it with the email address you want to publish, or remove those links.
- Styling and responsive breakpoints are in `src/styles.css`.

This is a front-end template only. It does not include a backend, contact form submission, database, or authentication.
