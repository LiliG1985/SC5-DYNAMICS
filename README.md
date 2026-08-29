# SC5 Dynamics Dubai — Website

A single-page static website for SC5 Dynamics' Dubai basketball academy and private coaching, built from the brand's relaunch flyer (gold/black branding, five core principles, services, clinics, core values).

No build step, no dependencies — plain HTML/CSS/JS, ready for GitHub Pages.

## Project structure

```
.
├── index.html          # All page content/sections
├── css/
│   └── styles.css      # All styling (colors, layout, responsive rules)
├── js/
│   └── main.js         # Mobile nav, scroll animations, contact form handler
├── assets/
│   └── img/
│       └── logo.svg    # Generated SC5 Dynamics Dubai badge logo
└── README.md
```

## Before you launch — placeholders to fill in

Search the project for these and replace them with real details:

| Placeholder | Where | Replace with |
|---|---|---|
| `[Add Dubai phone number]` | `index.html` (Contact section) | Real phone / WhatsApp number |
| `[Add Dubai email address]` | `index.html` (Contact section) | Real contact email |
| `[Add training venue / area]` | `index.html` (Contact section) | Court/venue name or neighborhood |
| `YOUR_EMAIL_HERE` | `js/main.js` | The email address the contact form should send to |
| `href="#"` on social icons | `index.html` (Contact section) | Real Instagram / TikTok / WhatsApp links |

The contact form currently opens the visitor's email client with a pre-filled message (a "mailto" link) — no backend required. If you'd rather have submissions land in an inbox or spreadsheet automatically, swap the handler in `js/main.js` for a free form service like [Formspree](https://formspree.io) or [Getform](https://getform.io) (just point the `<form>` action at the endpoint they give you).

## Running locally

Just open `index.html` in a browser, or serve it locally:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Publishing with GitHub Pages

1. Create a new **public** repository on GitHub (e.g. `sc5-dynamics-dubai`).
2. Push this project to it:
   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git branch -M main
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Under **Branch**, choose `main` and folder `/ (root)`, then **Save**.
6. GitHub will publish the site at `https://<your-username>.github.io/<your-repo>/` within a minute or two.

If you'd rather use a custom domain, add it under **Settings → Pages → Custom domain** and follow GitHub's DNS instructions.

## Customizing

- **Colors:** all brand colors are CSS variables at the top of `css/styles.css` (`--black`, `--gold`, `--cream`, etc.) — change once, updates everywhere.
- **Copy:** all text lives directly in `index.html`, organized by section (`<!-- ABOUT -->`, `<!-- CONTACT -->`, etc.).
- **Logo:** `assets/img/logo.svg` is a generated badge in the style of the flyer. Swap it for your real logo file (SVG or PNG) and update the `<img src>` references in `index.html`.
