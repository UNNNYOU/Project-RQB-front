"use client";

import Image from "next/image";
import Link from "next/link";
import { Loading } from "@/components/layouts";
import { QuestionStatus, Routes } from "@/config";
import { useFetchData } from "@/lib";

export default function QuestionList({ url }) {
  const data = useFetchData(url);

  if (!data) return <Loading />;
  if (data.length === 0) return <div>質問がありません</div>;

  const TextLimiter = ({ text }) => {
    const getCharLimit = () => {
      if (typeof window === 'undefined') return 70;

      const width = window.innerWidth;
      if (width < 600) return 10;
      if (width < 1024) return 20;
      if (width < 1920) return 40;
      return 70;
    };
    const limit = getCharLimit();

    const limitedText = text.length > limit
      ? text.slice(0, limit) + '...'
      : text;

    return <>{limitedText}</>;
  }

  return (
    <>
      <div className="rounded bg-white px-3 md:px-6 md:py-3">
        {data.map((question, index) => (
          <section
            key={index}
            className={`flex items-start justify-center gap-6 py-4 ${index != data.length - 1 && "border-b border-slate-300"}`}
          >
            <div className="flex aspect-square w-16 flex-col items-center justify-center gap-1">
              <Link
                href={Routes.user(question.user.uuid)}
                className="transition-all hover:opacity-70"
              >
                {question.user.avatar &&
                  !question.user.avatar.endsWith("http://localhost:3000") ? (
                  <Image
                    src={question.user.avatar}
                    width={64}
                    height={64}
                    alt={question.user.name}
                    className="size-full rounded-full object-cover"
                    unoptimized
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
                  <TextLimiter text={question.title} />
                </Link>
              </h2>
              <p className="line-clamp-2 w-full max-w-[700px] truncate text-sm text-gray-600">
                <TextLimiter text={question.body} />
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
                      href={`${Routes.questions}?tag=${tag.name}`}
                      className="rounded bg-slate-400 px-2 py-1 text-white transition-all hover:bg-slate-700 hover:text-white"
                    >
                      {tag.name}
                    </Link>
                  ))}
                </div>
                <time
                  dateTime={question.created_at}
                  className="text-end text-sm text-gray-400"
                >
                  {question.created_at}
                </time>
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
