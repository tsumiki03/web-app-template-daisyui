# webapp-template-daisyui
React (Vite) + daisyUI と Django Ninja を使用したフルスタック Web アプリケーションのテンプレート

## 技術スタック
- **Frontend**: pnpm, React, Vite, Tailwind CSS, daisyUI, Vitest, MSW
- **Backend**: uv, Ruff, Django Ninja

## Prerequisites
- **Frontend**
    - Node.js >= 24
    - pnpm >= 10
- **Backend**
    - Python >= 3.13
    - uv >= 0.9.26
    - pyright

## ディレクトリ構成
- `/frontend` : React アプリケーション
- `/backend` : Django Ninja API
- `/.github/workflows` : CI パイプライン

## クイックスタート
### リポジトリの作成
[Use this template] ボタンをクリック

### バックエンドの起動
以下の作業は `backend/` 直下で行う
- 以下コマンドを実行して依存関係をインストール
``` bash
uv sync
source .venv/bin/activate
```
- 開発サーバー起動に必要な `SECRET_KEY` を以下コマンドを実行して生成。生成したキーはメモしておく
``` bash
python -c 'from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())'
```
- `.env` ファイルを作成して以下内容を設定
```
DEBUG=TRUE
SECRET_KEY=<上記で生成したキー>
CORS_ALLOWED_ORIGINS=http://localhost:5173,http://127.0.0.1:5173
```
- 以下コマンドを実行して開発サーバーを起動
``` bash
python manage.py migrate
python manage.py runserver
```

### フロントエンドの起動
以下作業は `frontend/` 直下で行う
- 以下コマンドを実行して依存関係をインストール
``` bash
pnpm install
```
- 以下コマンドを実行して開発サーバーを起動
``` bash
pnpm dev
```
- `o + <Enter>` でブラウザ上にアプリが開く
