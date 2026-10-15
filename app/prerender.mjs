// Post-build: render each route into its own static HTML file so text and
// images paint before the JS bundle loads; main.tsx then hydrates it.
import fs from "node:fs";

const ROUTES = ["/", "/menu", "/about", "/gallery", "/visit"];

const { render } = await import("./dist-ssr/entry-server.js");
const template = fs.readFileSync("dist/index.html", "utf8");

for (const route of ROUTES) {
  const html = template.replace(
    '<div id="root"></div>',
    `<div id="root">${await render(route)}</div>`,
  );
  const dir = `dist${route === "/" ? "" : route}`;
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(`${dir}/index.html`, html);
  console.log(`prerendered ${route}`);
}

fs.rmSync("dist-ssr", { recursive: true, force: true });
