import { prerender } from "react-dom/static";
import { StaticRouter } from "react-router";
import App from "./App.tsx";

/** Build-time render of one route to HTML (used by prerender.mjs). */
export async function render(url: string) {
  // prerender (unlike renderToString) waits for the lazy route chunks.
  const { prelude } = await prerender(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
    // Inline every Suspense boundary in place (no out-of-order swap scripts).
    { progressiveChunkSize: Infinity },
  );
  return new Response(prelude).text();
}
