"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";

export default function Home() {
  const { getAccessToken } = useAuth();
  const [token, setToken] = useState(null);

  useEffect(() => {
    const accessToken = getAccessToken();
    setToken(accessToken);
  }, []);

  const items = [
    {
      image: "https://i.gyazo.com/36ec9f85e55acd7686e7c41c5b564646.png",
      title: "わからない内容を質問",
      description: [
        "プログラミングの質問ができる",
        "質問内容をAIにレビュー可能",
        "レビューを元に質問内容を改善！",
        "質問の精度がup!",
      ],
      altText: "プログラミングの質問画面",
    },
    {
      image: "https://i.gyazo.com/af406bd6484312cde2372e1a64b2a008.png",
      title: "過去の質問が閲覧",
      description: [
        "過去の質問が閲覧できる",
        "検索フィールドから検索可能",
        "自分と同じ境遇の人を探せる",
      ],
      altText: "過去の質問が閲覧できる画面",
    },
    {
      image: "https://i.gyazo.com/615a37bf04a079685c2a6814cafe7e8f.png",
      title: "質問を通してやりとり",
      description: [
        "回答者とやりとり可能",
        "マークダウン対応",
        "回答者としてコメント可能",
        "質問を通して誰かにGiveできる!",
      ],
      altText: "質問を通してのやりとり画面",
    },
    {
      image: "https://i.gyazo.com/d6db5fe360b53c141c9a569b5d7ff9c9.png",
      title: "ユーザー情報登録",
      description: ["名前の設定", "アイコンの設定", "タグによる所属登録"],
      altText: "ユーザー情報登録画面",
    },
  ];

  return (
    <article className="p-6">
      <section className="mb-10">
        <h1 className="text-3xl font-bold mb-4">本アプリの説明</h1>
        <p className="text-gray-600 leading-relaxed">
          <strong>runteq overflow</strong>{" "}
          は、アプリ開発における疑問点を掲示板形式で
          <strong>質問</strong>、<strong>回答</strong>、<strong>閲覧</strong>
          できるサービスです。質問者は、 回答者にわかりやすく
          質問するスキルを鍛える機会を得られます。また、自分の実装でうまくいかない部分を、過去の質問を参考にして
          解決することも可能です。さらに、質問に対して自分のわかる範囲で回答することで、
          <strong>Give</strong>の精神が身に付き、
          誰かに教えることによって自分の記憶の定着にもつながります。
          <strong>質問者</strong>、<strong>回答者</strong>、
          <strong>閲覧者</strong>
          どの立場からもご利用いただけるサービスです。
          <p>
            あなたも<strong>runteq overflow</strong>の一員になりませんか？
          </p>
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-10">アプリの使い方</h2>
        <div className="relative overflow-x-auto">
          <div className="flex space-x-6 pb-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 bg-white p-4 rounded-lg shadow-md"
              >
                <div className="w-full h-60 bg-gray-200 rounded-lg overflow-hidden mb-4">
                  <img
                    src={item.image}
                    alt={item.altText}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {item.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="flex justify-center mt-12 space-x-4">
        {token ? (
          <Link href="/questions">
            <button
              type="button"
              className="mt-2 w-full sm:w-auto rounded-lg bg-runteq-primary px-8 py-4 text-white transition-all hover:bg-[#D66200]"
            >
              質問一覧へ
            </button>
          </Link>
        ) : (
          <Link href="/login">
            <button
              type="button"
              className="mt-2 w-full sm:w-auto  rounded-lg bg-runteq-primary px-8 py-4 text-white transition-all hover:bg-[#D66200]"
            >
              ログインする
            </button>
          </Link>
        )}
      </div>
    </article>
  );
}
