import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders the finished portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Lila Brooks \| Senior Engineering Leader<\/title>/i);
  assert.match(html, /I build software and platforms/);
  assert.match(html, /Platform engineering/);
  assert.match(html, /Applied AI in real products/);
  assert.match(html, /mailto:lila\.m\.brooks@gmail\.com/);
  assert.match(html, /https:\/\/github\.com\/lilabrooks/);
  assert.match(html, /https:\/\/lilabrooks\.github\.io\/og\.png/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Starter Project/i);
});

test("keeps the site ready for GitHub Pages", async () => {
  const [packageJson, workflow, hosting, page] = await Promise.all([
    readFile(new URL("package.json", root), "utf8"),
    readFile(new URL(".github/workflows/pages.yml", root), "utf8"),
    readFile(new URL(".openai/hosting.json", root), "utf8"),
    readFile(new URL("app/page.tsx", root), "utf8"),
  ]);

  assert.match(packageJson, /"build:pages": "next build"/);
  assert.match(workflow, /actions\/deploy-pages@v4/);
  assert.match(workflow, /npm run build:pages/);
  assert.deepEqual(JSON.parse(hosting), { d1: null, r2: null });
  assert.doesNotMatch(page, /_sites-preview|SkeletonPreview/);
  await access(new URL("public/og.png", root));
});
