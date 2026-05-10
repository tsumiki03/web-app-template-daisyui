import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/todo/health", () => {
    console.log("MSW: Intercepted GET /api/todo/health");
    return HttpResponse.json({ status: "ok" });
  }),
];
