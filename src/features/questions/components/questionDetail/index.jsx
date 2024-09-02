import { useEffect } from "react";
import markdownToHtml from "zenn-markdown-html";
import { Settings } from "@/config";
import * as Questions from "@/features/questions/components";
import useFetchData from "@/lib/useFetchData";

const QuestionDetail = ({ uuid }) => {
  const questionData = useFetchData(`${Settings.API_URL}/questions/${uuid}`);

  useEffect(() => {
    import("zenn-embed-elements");
  }, []);

  if (!questionData) {
    return <div>Loading...</div>;
  }

  const html = markdownToHtml(questionData?.body || "", {
    embedOrigin: "https://embed.zenn.studio",
  });

  return (
    <div className="container relative mx-auto p-4">
      {questionData.status === "close" ? (
        <Questions.ResolvedStatus isResolved={true} />
      ) : (
        <Questions.UnresolvedStatus isResolved={false} />
      )}
      <div className="rounded-lg bg-white p-6 shadow-md">
        <div className="mb-4 flex flex-col sm:flex-row">
          <Questions.UserAvatar userId={questionData.user.uuid} />
          <div className="ml-0 mt-4 flex w-full flex-col sm:ml-8 sm:mt-0">
            <h1 className="text-2xl font-bold">{questionData.title}</h1>
            <div className="mb-2 mt-4 flex w-full flex-wrap border-b border-gray-300 pb-2 sm:mt-8">
              <p className="w-full text-sm text-gray-600 sm:w-auto">
                質問者: {questionData.user.name}
              </p>
              <p className="w-full text-sm text-gray-600 sm:ml-6 sm:w-auto">
                質問日時: {questionData.created_at}
              </p>
              {/* 将来的に質問を編集する機能ができたら使用 */}
              {/* <p className="w-full text-sm text-gray-600 sm:ml-6 sm:w-auto">
                更新日時: {questionData.updated_at}
              </p> */}
            </div>
            <div className="mb-8">
              {questionData.tags?.map((tag) => (
                <span
                  key={tag}
                  className="mr-2 rounded-lg bg-blue-500 px-2.5 py-0.5 text-xs font-semibold text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div
              className="znc h-full p-2"
              dangerouslySetInnerHTML={{
                __html: html,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionDetail;
