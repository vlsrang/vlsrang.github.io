# vlsrang.github.io

Personal homepage for Jinho Kim — plain HTML/CSS/JS, no build step, no Jekyll.

## Deploy to GitHub Pages

1. Replace the contents of your `vlsrang.github.io` repo with these files
   (`index.html`, `styles.css`, `script.js`, `.nojekyll`, `assets/`).
2. Commit and push to the `main` branch.
3. In the repo's **Settings → Pages**, make sure the source is `main` / `/ (root)`.
4. Visit `https://vlsrang.github.io` after the build finishes (usually under a minute).

`.nojekyll` tells GitHub Pages to serve the files as-is instead of running them
through Jekyll, so the old `_layouts/` and `_config.yaml` from the previous
theme are no longer needed — you can delete them.

## Editing content

Everything lives in `index.html`, organized by section
(`#about`, `#research`, `#publications`, `#experience`, `#honors`, `#contact`).
Colors, fonts and spacing are defined as CSS custom properties at the top of
`styles.css` under `:root`, so retheming mostly means editing values there.

- **CV**: replace `assets/cv.pdf` with an updated file (keep the same name, or
  update the `href="assets/cv.pdf"` links in `index.html`).
- **Photo**: replace `assets/profile.jpg` (ideally a 4:5 portrait crop, ~900×1125px).
- **Email**: the contact button reads `data-user` / `data-domain` attributes on
  the `#emailBtn` element in `index.html` — update those two values rather than
  hardcoding the address, so it stays lightly obfuscated from scrapers.
- **New publication**: copy one `<li>` block inside `.pub-list` and update the
  title/authors/venue/links. Promote a paper to the featured section by
  copying one `<article class="feature-card">` block near the top of the file.
