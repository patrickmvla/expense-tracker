import { Hono } from "hono";
import expenses from "./expenses";

const app = new Hono().basePath("api");

const routes = app.route("/expenses", expenses);

export type AppType = typeof routes;
