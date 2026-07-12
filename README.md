# lilabrooks.github.io

This repository publishes the **apex** site at [lilabrooks.github.io](https://lilabrooks.github.io). It is a thin publish shell: the site itself is not authored here.

## Where the site lives

The site source is a single governed source in the **Claude OKF repo kit** repository, under its [`site/`](https://github.com/lilabrooks/claude-okf-repo-kit/tree/main/site) folder (kit ADR 0016). That same `site/` is served two ways:

- the kit repo's own Pages workflow serves it at `https://lilabrooks.github.io/claude-okf-repo-kit/`, and
- this repository includes the kit as a git submodule at `_kit/` and deploys `_kit/site` at the apex,

so both URLs render the identical editorial site. All paths in the site are relative, so the same files work at both bases; absolute canonical, Open Graph, and schema.org URLs point at the apex, marking it primary.

## First-time Pages setup

The apex is served by **GitHub Actions**, not the legacy deploy-from-branch builder. A new `*.github.io` repository auto-enables Pages in `legacy` mode, which serves the repo root and can't reach the `_kit/` submodule — so the build type must be switched once:

```bash
gh api -X PUT repos/lilabrooks/lilabrooks.github.io/pages -f build_type=workflow
```

It persists after that; routine pushes deploy through `.github/workflows/pages.yml`. (Settings → Pages → Source: GitHub Actions does the same thing.)

## Update the site

Edit the site in the kit repo (`site/`), not here. To then move the apex to the latest:

```bash
git submodule update --remote _kit
git commit -am "Bump site to latest kit"
git push
```

Pushing to `main` triggers `.github/workflows/pages.yml`, which checks out the submodule and deploys `_kit/site`.

## Local preview

```bash
git submodule update --init _kit
cd _kit/site
python3 -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000). The site uses relative paths, so it also previews correctly from a subpath (e.g. `http://localhost:8000/` served one level up).
