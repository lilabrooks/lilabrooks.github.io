# lilabrooks.github.io

The source for [lilabrooks.github.io](https://lilabrooks.github.io), Lila Brooks’s engineering leadership portfolio.

## Run locally

```bash
npm install
npm run dev
```

## Build

The project has two build targets:

- `npm run build` creates the Sites deployment bundle.
- `npm run build:pages` creates the static `out/` directory used by GitHub Pages.

Pushes to the `main` branch publish the static site through the included GitHub Pages workflow.
