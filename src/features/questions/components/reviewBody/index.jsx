"use client";

import { useEffect } from "react";
import markdownToHtml from "zenn-markdown-html";

export default function ReviewBody({ reviewBody, isReviewToggle }) {
  const html = markdownToHtml(reviewBody, {
    embedOrigin: "https://embed.zenn.studio",
  });

  useEffect(() => {
    import("zenn-embed-elements");
  }, []);

  return (
    <article className="fixed left-0 top-0 z-20 flex size-full items-center justify-center bg-black/30">
      <section className="h-3/4 w-5/6 overflow-auto rounded bg-white px-4 py-2 md:w-2/3">
        <h2 className="text-center text-xl"><span className="rounded border-b-2 border-orange-400 px-4 pb-1">AIによる質問レビュー</span></h2>
        <div>
          <div
            className="znc h-full p-2"
            dangerouslySetInnerHTML={{
              __html: html,
            }}
          />
        </div>
        <button
          type="button"
          onClick={() => isReviewToggle()}
          className="w-full rounded-xl bg-gray-500 px-4 py-1 text-sm text-white"
        >
          閉じる
        </button>
      </section>
    </article>
  );
}
