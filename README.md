# SHIVCH Bespoke — Website

Static multi-page site built with plain HTML/CSS/JS (no build step, no dependencies) — ready to push straight to GitHub / GitHub Pages.

## Structure
```
index.html        Homepage (hero, features, MTM intro)
mtm.html           Placeholder inner page
shirts.html        Placeholder inner page
suits.html         Placeholder inner page
fabrics.html       Placeholder inner page
about.html         Placeholder inner page
contact.html       Placeholder inner page
css/style.css      All styling (colors/fonts as CSS variables at the top)
js/script.js       Mobile nav toggle + hero slide controls
images/            Put your photos here
```

## Adding your photos
Two spots on the homepage currently show dashed placeholder boxes:
1. **Hero image** — save your suit/mannequin photo as `images/hero-suit.jpg`, then in `index.html` replace the `<div class="hero-image-placeholder">…</div>` block with:
   ```html
   <img src="images/hero-suit.jpg" alt="Bespoke tailored suit">
   ```
2. **MTM section image** — save as `images/mtm-suits.jpg` and replace `<div class="mtm-image-placeholder">…</div>` the same way.

## Editing colors/fonts
Open `css/style.css` — the `:root` block at the top has every color and font as a variable, so you can restyle the whole site from one place.

## WhatsApp button
Update the phone number in the `wa.me/...` link (currently a placeholder) in every HTML file's floating WhatsApp button.

## Deploying to GitHub Pages
1. Create a new repo and push these files to the `main` branch.
2. In the repo, go to **Settings → Pages**.
3. Under "Source," choose `main` branch, `/ (root)` folder, and save.
4. Your site will be live at `https://<username>.github.io/<repo-name>/`.

## Notes
- Fully responsive (mobile nav collapses to a hamburger menu below 860px).
- No frameworks or build tools required — just static files.
- Inner pages (MTM, Shirts, Suits, Fabrics, About, Contact) are simple placeholders so navigation doesn't break; flesh these out with real content next.
