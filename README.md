# Doorsteps Sandwich Bar

Premium workday sandwich-bar site for **Doorsteps** at 48 Blandford Street, Marylebone W1.

## Stack

- Next.js App Router (static export)
- TypeScript
- Tailwind CSS
- Framer Motion

## GitHub Pages

Configured for slug `doorsteps-demo`:

- `output: "export"`
- `trailingSlash: true`
- `basePath` / `assetPrefix`: `/doorsteps-demo`
- `public/.nojekyll`

## Develop

```bash
npm install
npm run dev -- --port 4321
```

Open [http://127.0.0.1:4321/doorsteps-demo/](http://127.0.0.1:4321/doorsteps-demo/) (basePath is required).

## Production build

```bash
npm run build
```

Static files land in `out/`. Serve the `out` folder at the `/doorsteps-demo` path on GitHub Pages.

## Business

| | |
|---|---|
| Address | 48 Blandford Street, Marylebone, London W1U 7HU |
| Phone | 020 7935 3213 |
| Maps | [Google Maps](https://www.google.com/maps/place/Doorsteps/@51.518474,-0.1542891) |

Photo attributions live in `public/assets/SOURCES.md` (not linked from the public UI).
