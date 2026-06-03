# Personal Web CV

This repository contains a small, responsive personal CV / portfolio website built with plain HTML, CSS and JavaScript. The site displays a short intro, a projects section that fetches repositories from GitHub, and a simple experience section.

## Features
- Responsive layout (desktop, tablet, mobile)
- Projects list fetched from the GitHub API
- Language icons for detected repository languages
- Simple, teacher-friendly structure and comments for learning

## Tech
- HTML, CSS, vanilla JavaScript
- No build step — works with a static server (XAMPP, live-server, etc.)

## Run locally (with XAMPP)
1. Copy this folder to your XAMPP `htdocs` folder (example: `C:\xampp\htdocs\cv_web_app`).
2. Start Apache from the XAMPP control panel.
3. Open your browser at: `http://localhost/cv_web_app/`.

## Quick edits
- Change the GitHub username used by the site in `script.js` (variable `username`).
- Replace the profile image at `imagineProfilWebSitePropriu.jfif` or update the `src` in `index.php`.
- Add/replace local language icons in the `imagini/` folder or rely on CDN icons in `script.js`.

## Development notes
- The projects are built dynamically in `script.js`. The code maps `repo.language` values to icon URLs; if a language key does not match exactly, a default icon is used.
- CSS is in `style.css`. The top hero bar can be made full-bleed by changing `.topFirstPageInformation` styles.

## Git
- Commit and push to `main` as usual:
```
git add -A
git commit -m "Your message"
git push origin main
```

## TODO / Ideas
- Add a contact form
- Add a skills section (badges or progress bars)
- Improve accessibility and SEO

If you want, I can apply one of these TODO items next or tailor the README to your teacher's requirements.
