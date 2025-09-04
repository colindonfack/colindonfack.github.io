
# Academic Website (GitHub Pages)

A clean, modern, **no-framework** academic website template—fast, accessible, and easy to customize.

## Quick start

1. Create a new public repo named **`USERNAME.github.io`** (replace with your GitHub username).
2. Upload the contents of this folder to the repo root (not inside a subfolder).
3. Commit and push. GitHub Pages will serve it automatically at `https://USERNAME.github.io`.
   - If not, go to **Settings → Pages** and ensure "Deploy from branch" is `main` and the root is selected.

## Customize

- Edit **`index.html`** (bio, interests, hero text).
- Edit **`research.html`** (projects) and **`publications.json`** (publications list).
- Replace `assets/images/avatar.jpg` with your headshot (same filename).
- Replace `assets/cv.pdf` with your CV (same filename). The site links to `/assets/cv.pdf`.
- Colors/spacing in **`style.css`** (uses CSS variables at the top for easy theming).
- Social links in the footer (index and shared layout).

## Add pages

Duplicate one of the HTML files, update the `<title>` and `<h1>`, then link it from the nav.

## Optional (custom domain)

- Create a `CNAME` file at repo root containing your domain, e.g. `www.example.com`.
- Point your DNS (A / ALIAS) to GitHub Pages per the docs.

## License

MIT — make it yours.
