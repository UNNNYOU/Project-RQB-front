"use client";

import Link from "next/link";

export default function PostHelp({ onClick }) {
  return (
    <article className="fixed left-0 top-0 z-20 flex size-full items-center justify-center bg-black/30">
      <section className="h-3/4 w-5/6 overflow-auto rounded bg-white p-4 md:w-2/3 md:p-8">
        <h2 className="text-center text-xl font-semibold ">
          <span className="rounded border-b-2 border-orange-400 px-4 pb-1">
            投稿ヘルプ
          </span>
        </h2>
        <div className="my-8">
          <h3 className="mb-4 border-b text-xl">質問の流れ</h3>
          <ol className="ml-8 list-decimal">
            <li>タイトル・タグ・質問内容を記述します。</li>
            <li>
              「AIに質問をレビュー」ボタンを押して質問内容をAIにレビューしてもらいます。
            </li>
            <li>
              AIからのレビューを元に質問内容をブラッシュアップ！
              <br />
              ブラッシュアップ後に再度レビューを行うことも可能です。
              <br />
              <span className="text-sm text-gray-600">
                ※最新のレビューのみ「AIのレビューを表示」で見返せます。
              </span>
            </li>
            <li>AIによるレビューのあと、「投稿」ボタンで投稿できます！</li>
          </ol>
        </div>
        <div className="my-8">
          <h3 className="mb-4 border-b text-xl">書き方</h3>
          <dl className="grid grid-cols-1 gap-3 rounded border p-2">
            <div className="flex w-full flex-col gap-2 border-b pb-2 md:flex-row">
              <dt className="font-semibold md:w-1/6">
                <h4>タイトル</h4>
              </dt>
              <dd className="ml-4 md:ml-0 md:w-5/6">
                どんな質問か予測しやすいタイトルを付けましょう！
                <br />
                <span className="text-sm text-gray-600">
                  例: deviseでログイン時にエラーが発生する
                </span>
              </dd>
            </div>

            <div className="flex w-full flex-col gap-2 border-b pb-2 md:flex-row">
              <dt className="font-semibold md:w-1/6">
                <h4>タグ</h4>
              </dt>
              <dd className="ml-4 md:ml-0 md:w-5/6">
                質問内容に関係するタグ（言語やFW、使用しているGemなど）を付けましょう！
                <br />
                <span className="text-sm text-gray-600">
                  例: Ruby, Ruby on Rails, devise
                </span>
                <ul className="my-2 ml-4 list-disc">
                  <li>,（カンマ）か、（読点）で区切れます</li>
                  <li>英数字と.（ドット）に対応しています</li>
                </ul>
              </dd>
            </div>

            <div className="flex w-full flex-col gap-2 md:flex-row">
              <dt className="font-semibold md:w-1/6">
                <h4>質問内容</h4>
              </dt>
              <dd className="ml-4 md:ml-0 md:w-5/6">
                マークダウンで質問内容を記載しましょう！
                <br />
                下記を意識して書くと質問の質が良くなり回答者も回答しやすいです。
                <br />
                <span className="text-sm text-gray-600">
                  ※マークダウンの記述方法は
                  <Link
                    href="https://zenn.dev/zenn/articles/markdown-guide"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-runteq-primary underline"
                  >
                    こちら
                  </Link>
                </span>
                <ul className="my-2 ml-4 flex list-disc flex-col gap-2">
                  <li>
                    何を解決したいのか
                    <br />
                    <span className="text-sm text-gray-600">
                      ⇨ 解決したいことが明確であると回答者が回答しやすいです。
                    </span>
                  </li>
                  <li>
                    現在どのような状態なのか（実装したコードや行った動作など）
                    <br />
                    <span className="text-sm text-gray-600">
                      ⇨
                      関連すると思われるコードを記述したりどのような動作を行ったかなどの情報共有があると、解決したいことに対するアプローチがしやすいです。
                    </span>
                  </li>
                  <li>
                    使用している言語、FW、関連するGem
                    <br />
                    <span className="text-sm text-gray-600">
                      ⇨ バージョンまで書くとより良いです！
                    </span>
                  </li>
                  <li>
                    エラーが出ている場合はエラー文章
                    <br />
                    <span className="text-sm text-gray-600">
                      ⇨
                      コードブロックを用いて書いたり、Gyazoなど外部サービスと使いスクリーンショットを投稿するとエラーへのアプローチ方法を提案しやすいです。
                    </span>
                  </li>
                  <li>
                    質問内容に対しどのような仮説を立てているか
                    <br />
                    <span className="text-sm text-gray-600">
                      ⇨
                      質問者の考えが分かると、どこまで理解できているかなどが分かり回答者も回答しやすくなります！
                    </span>
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
        <button
          type="button"
          onClick={() => onClick()}
          className="w-full rounded-xl bg-gray-500 px-4 py-1 text-sm text-white"
        >
          閉じる
        </button>
      </section>
    </article>
  );
}
