import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/app/health", () => {
    console.log("MSW: Intercepted GET /api/app/health");
    return HttpResponse.json({ status: "ok" });
  }),
];
