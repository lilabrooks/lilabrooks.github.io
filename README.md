# lilabrooks.github.io

The source for [lilabrooks.github.io](https://lilabrooks.github.io), an explanation of the intent and mechanism behind the Claude OKF repo kit.

## Site structure

- `/` explains the kit’s theory, knowledge model, working loop, and control boundaries.
- `/dogfood/` records what Spec Agent CLI, Repo Pulse, and Skywatch taught the kit.

Legacy `/now/`, `/notes/`, and `/projects/` URLs contain redirect pages for previously published links.

The site is plain HTML and CSS. It has no package manager, framework, build step, or runtime dependency.

## Typography

The site self-hosts IBM Plex Mono for display and interface text, with IBM Plex Sans for longer reading. The font files are licensed under the SIL Open Font License 1.1; see `fonts/LICENSE.txt`.

## Test locally

From Terminal, start a local web server in the repository root:

```bash
cd /Users/lilabrooks/Documents/lilabrooks.github.io
python3 -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000) in a browser. Check the home page, dogfood page, and the links to each source repository. Internal links and shared assets use root-relative paths, so opening `index.html` directly from Finder will not test the site correctly.

Press `Control+C` in Terminal to stop the server.

## Update the dogfood record

1. Read the target repository’s goal, documentation log, specifications, decisions, and relevant commit history.
2. Update `/dogfood/index.html` with the use case, observed finding, and the corresponding kit change.
3. Keep causal claims tied to a kit decision record, goal milestone, or dated log entry.
4. Check every internal link before pushing.

GitHub Pages publishes the repository through `.github/workflows/pages.yml` whenever `main` changes.
