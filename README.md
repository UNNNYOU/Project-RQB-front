# RUNTEQ-RQB フロント環境構築

1. `git clone`
1. `.env.local`をルートに作成
1. `docker compose build`
1. `docker compose up`

## `.env.local`

ほかあれば下記に追記していってください

```
NEXT_PUBLIC_API_URL=http://localhost:3000/api/v1
```

## パッケージを追加について

yarnを使っているのでyarnでいれるようにしてください

`docker compose build`か、コンテナ内で`yarn install`のどちらかが必要になるので適宜連絡お願いします。
