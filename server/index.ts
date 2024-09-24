import { Hono } from "hono";
import { logger } from "hono/logger";
import { serveStatic } from "hono/bun";

const app = new Hono();

app.use("*", logger());

const apiRoutes = app
  .basePath("api")
  .get("/health", (c) => {
    return c.json({ status: "ok" });
  })
  .get("/meaning-of-life", (c) => {
    return c.json({ answer: 42 });
  });

app.get("*", serveStatic({ root: "./client/dist" }));
app.get("*", serveStatic({ path: "./client/dist/index.html" }));

export default app;
export type ApiRoutes = typeof apiRoutes;
