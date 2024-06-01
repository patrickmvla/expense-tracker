import { Hono } from "hono";

const app = new Hono()
  .get("/", async (c) => {
    return c.json({ expenses: [] });
  })
  .get("/:id", (c) => {
    return c.json({});
  })
  .post("/", async (c) => {
    return c.json({});
  })
  .delete("/:id", (c) => {
    return c.json({});
  });

export default app;
