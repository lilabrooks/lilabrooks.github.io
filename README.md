# lilabrooks.github.io

The source for [lilabrooks.github.io](https://lilabrooks.github.io), a working notebook about current software projects and the reasoning behind them.

## Site structure

- `/` is the landing page.
- `/now/` records the current working set and open questions.
- `/projects/` is the project-note index.
- Each named folder under `/projects/` contains a note about one repository.
- `/notes/` collects methods and questions that recur across projects.

The site is plain HTML and CSS. It has no package manager, framework, build step, or runtime dependency.

## Typography

The site self-hosts IBM Plex Mono for display and interface text, with IBM Plex Sans for longer reading. The font files are licensed under the SIL Open Font License 1.1; see `fonts/LICENSE.txt`.

## Test locally

From Terminal, start a local web server in the repository root:

```bash
cd /Users/lilabrooks/Documents/lilabrooks.github.io
python3 -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000) in a browser. Check the home, now, projects, notes, and project detail pages. Internal links and shared assets use root-relative paths, so opening `index.html` directly from Finder will not test the site correctly.

Press `Control+C` in Terminal to stop the server.

## Add a project

1. Copy `projects/_template.html` into `projects/<project-name>/index.html`.
2. Replace the marked content with verified repository details.
3. Add the project to `projects/index.html` and, when useful, the home page.
4. Check every internal link before pushing.

GitHub Pages publishes the repository through `.github/workflows/pages.yml` whenever `main` changes.
