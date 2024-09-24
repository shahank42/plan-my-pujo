import { hc } from "hono/client";
import { ApiRoutes } from "../../../server";

export const api = hc<ApiRoutes>("/").api;
