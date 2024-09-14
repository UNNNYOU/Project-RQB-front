# RUNTEQ-RQB フロント環境構築

1. `git clone`
1. `.env.local`をルートに作成
1. `docker compose build`
1. `docker compose run --rm web yarn install`
1. `docker compose up`

## コンテナの入り方

`docker compose exec web bash`

## コンテナ外から操作するとき

`docker compose run web ~~`

## `.env.local`

ほかあれば下記に追記していってください

```
NEXT_PUBLIC_API_URL=http://localhost:3000/api/v1
```

## パッケージを追加について

yarnを使っているのでyarnでいれるようにしてください

`docker compose build`か、コンテナ内で`yarn install`のどちらかが必要になるので適宜連絡お願いします。

## ESLintとPrettier

ESLintとPrettierを利用しています。保存時に整形はしてくれると思います。\
プルリクを上げる前にかならずESLintチェックとPrettierでチェックしてください。

```bash
# ESLint
$ yarn lint
# ESLint + 自動修正
$ yarn lint:fix
# Prettierで整形
$ yarn format
```

## 利用パッケージドキュメント

分かりやすいように下記にまとめておきます。\
追加できたら随時下記に追加していってください。

- [tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui Components](https://ui.shadcn.com/docs/components/accordion)
- [rocketicons](https://rocketicons.io)
- [SWR](https://swr.vercel.app/ja)
- [Recoil](https://recoiljs.org/)
- [zenn-editor](https://zenn-dev.github.io/zenn-docs-for-developers/guides/zenn-editor)

# project-rqb-front
