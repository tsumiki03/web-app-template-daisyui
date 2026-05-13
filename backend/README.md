# Backend (Django Ninja)

## セットアップ
パッケージ管理には `uv` を使用
``` bash
uv sync
```

## インストールパッケージ
### dependencies
``` toml
dependencies = [
    "django>=6.0.4",
    "django-cors-headers>=4.9.0",
    "django-environ>=0.13.0",
    "django-ninja>=1.6.2",
]
```
### dev
``` toml
dev = [
    "django-stubs>=6.0.3",
    "ruff>=0.15.12",
]
```

## 開発コマンド
- `uv add <パッケージ名>`: パッケージ追加 
- `source .venv/bin/activate`: 仮想環境起動
- `python manage.py startapp <アプリケーション名>`: 新しいアプリケーションディレクトリを作成
- `python manage.py makemigrations`: マイグレーションファイルの作成
- `python manage.py migrate`: マイグレーションの適用
- `python manage.py runserver`: 開発サーバーの起動
- `python manage.py test`: テスト実行
- `ruff check . --diff`: Ruff による静的解析。チェックして差分表示のみ
- `ruff check . --fix`: Ruff による静的解析をして、自動修正可能な部分を修正
- `ruff format . --diff`: Ruff によるフォーマットチェックと差分表示
- `ruff format .`: Ruff による自動整形

## API ドキュメント
開発サーバー起動後、以下の URL で Swagger UI による自動生成ドキュメントを確認可能
- `http://localhost:8000/api/docs`

## ヘルスチェック用エンドポイント
- `app/api.py` に、`/api/app/health` エンドポイントを定義済み
- `{"status": "ok"}` のみを返す

