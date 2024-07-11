"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Routes } from "@/config";

const Data = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  uuid: `uuid${i}`,
  title: "redirect_toで編集画面への遷移がDELETEメソッドになってしまう",
  content:
    "ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト",
  solved: i % 2 === 0,
  tags: ["Ruby", "Rails"],
  date: "2024/06/27 21:47",
  user: {
    name: "名前",
    avatar: "",
    uuid: `uuid${i}`,
  },
}));

const OrderBy = {
  NEW: "new",
  OLD: "old",
};

export default function Questions() {
  const [orderBy, setOrderBy] = useState(OrderBy.NEW);
  const router = useRouter();
  const params = useSearchParams();

  useEffect(() => {
    setOrderBy(params.get("order_by") ? OrderBy.OLD : OrderBy.NEW);
  }, [params]);

  const handleOrderBy = (e) => {
    let query = new URLSearchParams(params);
    if (e.target.value === OrderBy.OLD) {
      query.set("order_by", OrderBy.OLD);
    } else {
      query.delete("order_by");
    }
    router.push(Routes.questions + "?" + query.toString());
  };

  return (
    <>
      <article className="w-full">
        <div className="flex w-full flex-col items-center justify-center gap-3 md:px-8 md:pt-4">
          <div className="flex w-full items-center justify-between">
            <h1 className="text-xl md:text-2xl">質問一覧ページ</h1>
            <Link
              href={Routes.questionsNew}
              type="button"
              className="rounded bg-runteq-secondary px-3 py-2 text-white transition-all hover:bg-white hover:text-runteq-secondary"
            >
              質問する
            </Link>
          </div>
          <div className="flex w-full items-center justify-between ">
            <p className="text-sm">1000件の質問</p>
            <div
              id="question-order"
              className="flex items-center justify-center gap-2 rounded border border-slate-400 bg-white px-2 py-1 text-sm"
            >
              <label className="cursor-pointer p-1">
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
              <label className="cursor-pointer p-1">
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

        <div className="my-4 rounded bg-white px-3 md:px-6 md:py-3">
          {Data.map((question, index) => (
            <section
              key={question.id}
              className={`flex items-start justify-center gap-2 py-4 ${index != Data.length - 1 && "border-b border-slate-300"}`}
            >
              <div className="flex flex-col items-center justify-center gap-1">
                <Link
                  href={Routes.user(question.user.uuid)}
                  className="transition-all hover:opacity-70"
                >
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
                </Link>
                <Link
                  href={Routes.user(question.user.uuid)}
                  className="text-sm hover:underline"
                >
                  {question.user.name}
                </Link>
              </div>
              <div className="grow">
                <h2 className="text-lg text-blue-500">
                  <Link
                    href={Routes.question(question.uuid)}
                    className="transition-all hover:underline hover:opacity-70"
                  >
                    {question.title}
                  </Link>
                </h2>
                <p className="line-clamp-2 text-sm text-gray-600">
                  {question.content}
                </p>
                <div className="mt-2 md:flex md:items-end md:justify-between">
                  <div className="mb-2 flex items-center justify-start gap-1 text-sm">
                    {question.solved && (
                      <span className="rounded bg-sky-400 px-2 py-1 text-white">
                        解決済み
                      </span>
                    )}
                    {question.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={Routes.questions + "?tag=" + tag}
                        className="rounded bg-slate-400 px-2 py-1 text-white transition-all hover:bg-slate-700 hover:text-white"
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
      <article className="flex w-full items-center justify-center md:my-8 md:justify-start">
        <section className="text-sm text-runteq-secondary">
          <span className="rounded-l border border-runteq-secondary bg-runteq-secondary px-3 py-2 text-white">
            1
          </span>
          <Link
            href="#"
            className="border border-r-0 border-slate-400 bg-white px-3 py-2 transition-all hover:bg-runteq-secondary hover:text-white"
          >
            2
          </Link>
          <Link
            href="#"
            className="border border-r-0 border-slate-400 bg-white px-3 py-2 transition-all hover:bg-runteq-secondary hover:text-white"
          >
            3
          </Link>
          <Link
            href="#"
            className="border border-r-0 border-slate-400 bg-white px-3 py-2 transition-all hover:bg-runteq-secondary hover:text-white"
          >
            4
          </Link>
          <Link
            href="#"
            className="border border-r-0 border-slate-400 bg-white px-3 py-2 transition-all hover:bg-runteq-secondary hover:text-white"
          >
            5
          </Link>
          <span className="border border-r-0 border-slate-400 bg-white px-3 py-2 text-gray-600 ">
            ...
          </span>
          <Link
            href="#"
            className="border border-r-0 border-slate-400 bg-white px-3 py-2 transition-all hover:bg-runteq-secondary hover:text-white"
          >
            次へ
          </Link>
          <Link
            href="#"
            className="rounded-r border border-slate-400 bg-white px-3 py-2 transition-all hover:bg-runteq-secondary hover:text-white"
          >
            最後
          </Link>
        </section>
      </article>
    </>
  );
}
