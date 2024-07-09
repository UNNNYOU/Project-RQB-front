"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Data = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  title: "redirect_toで編集画面への遷移がDELETEメソッドになってしまう",
  content:
    "ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト",
  solved: i % 2 === 0,
  tags: ["Ruby", "Rails"],
  date: "2024/06/27 21:47",
  user: {
    name: "名前",
    avatar: "",
  },
}));

const OrderBy = {
  NEW: "new",
  OLD: "old",
};

export default function Questions() {
  const [orderBy, setOrderBy] = useState(OrderBy.NEW);

  const handleOrderBy = (e) => {
    setOrderBy(e.target.value);
  };

  return (
    <>
      <article className="w-full">
        <div className="flex w-full flex-col items-center justify-center gap-3">
          <div className="flex w-full items-center justify-between">
            <h1 className="text-xl">質問一覧ページ</h1>
            <button
              type="button"
              className="rounded bg-runteq-secondary px-2 py-1 text-white hover:bg-white hover:text-runteq-secondary"
            >
              質問する
            </button>
          </div>
          <div className="flex w-full items-center justify-between ">
            <p className="text-sm">1000件の質問</p>
            <div
              id="question-order"
              className="flex items-center justify-center gap-2 rounded border border-slate-400 bg-white px-2 py-1 text-sm"
            >
              <label className="p-1">
                <input
                  type="radio"
                  name="order"
                  className="hidden"
                  checked={orderBy === OrderBy.NEW ? true : false}
                  onChange={handleOrderBy}
                  value={OrderBy.NEW}
                />
                新着順
              </label>
              <label className="p-1">
                <input
                  type="radio"
                  name="order"
                  className="hidden"
                  checked={orderBy === OrderBy.OLD ? true : false}
                  onChange={handleOrderBy}
                  value={OrderBy.OLD}
                />
                古い順
              </label>
            </div>
          </div>
        </div>

        <div className="my-4 rounded bg-white px-3">
          {Data.map((question, index) => (
            <section
              key={question.id}
              className={`flex items-start justify-center gap-2 py-4 ${index != Data.length - 1 && "border-b border-slate-300"}`}
            >
              <div className="flex flex-col items-center justify-center gap-1">
                {question.user.avatar ? (
                  <Image
                    src={question.user.avatar}
                    width={100}
                    height={100}
                    alt={question.user.name}
                  />
                ) : (
                  <div className="size-16 rounded-full bg-orange-400" />
                )}
                <span className="text-sm">{question.user.name}</span>
              </div>
              <div className="grow">
                <h2 className="text-lg text-blue-500 hover:text-opacity-70">
                  {question.title}
                </h2>
                <p className="line-clamp-2 text-sm text-gray-600">
                  {question.content}
                </p>
                <div className="mt-2">
                  <div className="mb-2 flex items-center justify-start gap-1 text-sm">
                    <span className="rounded bg-sky-400 px-2 py-1 text-white">
                      {question.solved ? "解決済み" : "未解決"}
                    </span>
                    {question.tags.map((tag) => (
                      <Link
                        key={tag}
                        href="#"
                        className="rounded bg-slate-400 px-2 py-1 text-white"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                  <div className="text-end text-sm text-gray-400">
                    {question.date}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </article>
      <article className="flex w-full items-center justify-center">
        <section className="text-sm text-runteq-secondary">
          <span className="rounded-l border border-runteq-secondary bg-runteq-secondary px-3 py-2 text-white">
            1
          </span>
          <Link
            href="#"
            className="border border-r-0 border-slate-400 bg-white px-3 py-2"
          >
            2
          </Link>
          <Link
            href="#"
            className="border border-r-0 border-slate-400 bg-white px-3 py-2 "
          >
            3
          </Link>
          <Link
            href="#"
            className="border border-r-0 border-slate-400 bg-white px-3 py-2 "
          >
            4
          </Link>
          <Link
            href="#"
            className="border border-r-0 border-slate-400 bg-white px-3 py-2 "
          >
            5
          </Link>
          <span className="border border-r-0 border-slate-400 bg-white px-3 py-2 text-gray-600 ">
            ...
          </span>
          <Link
            href="#"
            className="border border-r-0 border-slate-400 bg-white px-3 py-2 "
          >
            次へ
          </Link>
          <Link
            href="#"
            className="rounded-r border border-slate-400 bg-white px-3 py-2 "
          >
            最後
          </Link>
        </section>
      </article>
    </>
  );
}
