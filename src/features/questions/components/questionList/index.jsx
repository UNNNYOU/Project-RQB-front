"use client";

import Image from "next/image";
import Link from "next/link";
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

export default function QuestionList() {
  return (
    <>
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
    </>
  );
}
