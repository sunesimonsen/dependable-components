import { Routes, Route } from "@nano-router/router";

export const routes = new Routes(
  new Route("index", "/"),
  new Route("page", "/:id"),
);
