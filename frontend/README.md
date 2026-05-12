# Frontend (React + TypeScript + Vite + daisyUI)

## インストールパッケージ
### dependencies
```
    "@tailwindcss/vite": "0.0.0-insiders.f3fdda2",
    "axios": "^1.16.0",
    "daisyui": "^5.5.19",
    "react": "^19.2.5",
    "react-dom": "^19.2.5",
    "tailwindcss": "^4.2.4"
```
### devDependencies
```
    "@eslint/js": "^10.0.1",
    "@testing-library/jest-dom": "^6.9.1",
    "@testing-library/react": "^16.3.2",
    "@testing-library/user-event": "^14.6.1",
    "@types/node": "^24.12.2",
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.1",
    "@vitest/ui": "^4.1.5",
    "eslint": "^10.2.1",
    "eslint-config-prettier": "^10.1.8",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-react-refresh": "^0.5.2",
    "globals": "^17.5.0",
    "jsdom": "^29.1.1",
    "msw": "^2.14.3",
    "prettier": "^3.8.3",
    "typescript": "~6.0.2",
    "typescript-eslint": "^8.58.2",
    "vite": "^8.0.10",
    "vitest": "^4.1.5"
```

## 開発コマンド
- `pnpm add <パッケージ名>`: パッケージ追加
- `pnpm dev`: 開発サーバー起動
- `pnpm build`: プロダクションビルド (TypeScript 型チェック含む)
- `pnpm preview`: ビルド成果物のプレビュー
- `pnpm lint`: ESLint による静的解析
- `pnpm format`: Prettier によるフォーマットチェック
- `pnpm format:fix`: Prettier によるフォーマット実行
- `pnpm test`: Vitest 起動
- `pnpm test:run`: Vitest によるテスト実行
- `pnpm test:ui`: Vitest UI 起動

## MSW (Mock Service Worker)
- バックエンド開発とは独立して API のモックを定義してテストが可能
- `src/mocks/handlers.ts` にて API のモックを定義する
- デフォルトで以下エンドポイントを定義済み
    - パス : `/api/app/health`
    - GET リクエスト時のレスポンス : `{"status": "ok"}`

## axios の動作
- `src/lib/axios.ts` にて、`baseURL` を環境変数 `VITE_API_BASE_URL` の値に設定済み
- 開発サーバー起動 (`pnpm dev`) 時には `.env.development` ファイルの値が使用され、テスト実行時には `.env.test` ファイルの値が使用される
-  `VITE_API_BASE_URL` のデフォルト値として、 `.env.development` では `http://localhost:8000` を、`.env.test` では空文字を設定済み
- 開発サーバー起動時はバックエンドも開発サーバーを起動し、テスト実行時は MSW を使用する想定
