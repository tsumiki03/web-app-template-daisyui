import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { http, HttpResponse } from "msw";
import { server } from "./mocks/node";
import App from "./App";

describe("App Component", () => {
  test("'Hello!'という見出しが表示されていること", () => {
    render(<App />);
    const heading = screen.getByRole("heading", { name: /hello!/i });
    expect(heading).toBeInTheDocument();
  });

  test("ヘルスチェック用のボタンが表示されていること", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /check health/i });
    expect(button).toBeInTheDocument();
  });

  test("ボタンをクリックするとヘルスチェック結果が表示されること", async () => {
    const user = userEvent.setup();
    render(<App />);

    const button = screen.getByRole("button", { name: /check health/i });
    await user.click(button);

    const result = await screen.findByText(/ok/i);
    expect(result).toBeInTheDocument();
    expect(screen.getByTestId("health-result")).toHaveTextContent("ok");
  });

  test("サーバーエラー時にエラーメッセージが表示されること", async () => {
    server.use(
      http.get("/api/todo/health", () => {
        return new HttpResponse(null, { status: 500 });
      }),
    );

    const user = userEvent.setup();
    render(<App />);

    const button = screen.getByRole("button", { name: /check health/i });
    await user.click(button);
    expect(await screen.findByText(/error/i)).toBeInTheDocument();
  });
});
