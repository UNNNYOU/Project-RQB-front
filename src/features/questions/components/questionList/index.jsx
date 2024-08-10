"use client";

import Image from "next/image";
import Link from "next/link";
import { QuestionStatus, Routes } from "@/config";
import { useFetchData } from "@/lib";

export default function QuestionList({ url }) {
  const data = useFetchData(url);

  // TODO : ローディング表示
  if (!data) return <div>loading...</div>;

  return (
    <>
      <div className="my-4 rounded bg-white px-3 md:px-6 md:py-3">
        {data.map((question, index) => (
          <section
            key={index}
            className={`flex items-start justify-center gap-2 py-4 ${index != data.length - 1 && "border-b border-slate-300"}`}
          >
            <div className="flex flex-col items-center justify-center gap-1">
              <Link
                href={Routes.user(question.user.uuid)}
                className="transition-all hover:opacity-70"
              >
                {question.user.avatar ? (
                  <Image
                    src={question.user.avatar}
                    width={64}
                    height={64}
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
              <p className="line-clamp-2 w-full max-w-[900px] text-sm text-gray-600">
                {question.content}
              </p>
              <div className="mt-2 md:flex md:items-end md:justify-between">
                <div className="mb-2 flex items-center justify-start gap-1 text-sm">
                  {question.status === QuestionStatus.CLOSE && (
                    <span className="rounded bg-sky-400 px-2 py-1 text-white">
                      解決済み
                    </span>
                  )}
                  {question.tags?.map((tag) => (
                    <Link
                      key={tag}
                      href={`${Routes.questions}?tag=${tag}`}
                      className="rounded bg-slate-400 px-2 py-1 text-white transition-all hover:bg-slate-700 hover:text-white"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
                <time
                  dateTime={question.date}
                  className="text-end text-sm text-gray-400"
                >
                  {question.date}
                </time>
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
