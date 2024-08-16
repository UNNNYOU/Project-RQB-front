"use client";
import "zenn-content-css";
import { useEffect, useState } from "react";
import { RiQuestionFill } from "rocketicons/ri";
import markdownToHtml from "zenn-markdown-html";
import { resizeTextArea } from "@/utils";

export default function QuestionBody() {
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);
  const [body, setBody] = useState("");

  const html = markdownToHtml(body, {
    embedOrigin: "https://embed.zenn.studio",
  });

  useEffect(() => {
    import("zenn-embed-elements");
  }, []);

  const togglePreview = () => {
    setIsPreviewVisible(!isPreviewVisible);
  };

  return (
    <div className="my-4 flex min-h-[50vh] flex-1 gap-3">
      <div
        className={`relative flex w-full flex-col justify-between rounded-xl border border-gray-200 bg-gray-100 px-4 py-2 lg:w-1/2 ${isPreviewVisible ? "hidden" : ""}`}
      >
        <textarea
          placeholder="質問内容"
          className="resize-none border-none bg-gray-100 p-2 outline-none"
          rows="12"
          name="questionBody"
          onChange={(e) => {
            resizeTextArea(e);
            setBody(e.target.value);
          }}
        />
        <div className="flex w-full justify-center gap-2 border-t border-gray-700 px-4 py-2">
          <button
            type="submit"
            className="w-auto rounded-xl bg-blue-500 px-4 py-1 text-sm text-white"
          >
            投稿
          </button>
          <button
            onClick={togglePreview}
            className="w-auto rounded-xl bg-gray-500 px-4 py-1 text-sm text-white lg:hidden"
          >
            プレビュー
          </button>
        </div>
        <button className="absolute bottom-3 right-3 inline-block text-gray-400">
          <RiQuestionFill className="size-7" />
        </button>
      </div>
      <div
        className={`w-full flex-1 ${isPreviewVisible ? "" : "hidden lg:flex"}`}
      >
        <div className="flex size-full flex-col rounded-xl border border-gray-200 bg-white px-4 py-2">
          <div
            className="znc h-full p-2"
            dangerouslySetInnerHTML={{
              __html: html,
            }}
          />
          <div className="flex w-full justify-center border-t border-gray-700 px-4 py-2 lg:hidden">
            <button
              onClick={togglePreview}
              className="rounded-xl bg-gray-500 px-4 py-1 text-sm text-white"
            >
              戻る
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
