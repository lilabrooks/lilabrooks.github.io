# lilabrooks.github.io

The source for [lilabrooks.github.io](https://lilabrooks.github.io), Lila Brooks's engineering leadership site.

## Site structure

- `/` is the landing page.
- `/work/` covers leadership experience and working methods.
- `/now/` records current areas of focus.
- `/projects/` is the project index.
- Each folder under `/projects/` is a project deep dive.

The site is plain HTML and CSS. It has no package manager, framework, build step, or runtime dependency.

## Add a project

1. Copy `projects/_template.html` into `projects/<project-name>/index.html`.
2. Replace the marked content with verified repository details.
3. Add the project to `projects/index.html` and, when useful, the home page.
4. Check every internal link before pushing.

GitHub Pages publishes the repository through `.github/workflows/pages.yml` whenever `main` changes.
