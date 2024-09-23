import Link from "next/link";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { mutate } from "swr";
import markdownToHtml from "zenn-markdown-html";
import { Routes, Settings } from "@/config";
import { currentUserState } from "@/features/auth/api";
import * as Questions from "@/features/questions/components";
import useFetchData from "@/lib/useFetchData";
import { resizeTextArea } from "@/utils";

const QuestionDetail = ({ uuid }) => {
  const [isEditing, setIsEditing] = useState(false);
  const currentUser = useRecoilValue(currentUserState);

  const questionData = useFetchData(`${Settings.API_URL}/questions/${uuid}`);
  const questionDataTags = useFetchData(
    `${Settings.API_URL}/questions/${uuid}/tags`,
  );

  useEffect(() => {
    import("zenn-embed-elements");
  }, []);

  if (!questionData) {
    return <div>Loading...</div>;
  }

  const html = markdownToHtml(questionData?.body || "", {
    embedOrigin: "https://embed.zenn.studio",
  });

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const tags = formData.get("tags").split(",");
    const body = formData.get("body");

    const updateData = {
      title: title,
      tags: tags,
      body: body,
    };

    const token = localStorage.getItem("access_token");
    const response = await fetch(`${Settings.API_URL}/questions/${uuid}`, {
      method: "PATCH",
      body: JSON.stringify({ question: updateData }),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      setIsEditing(false);
      const data = await response.json();
      console.log(data);
      mutate(`${Settings.API_URL}/questions/${uuid}`);
      mutate(`${Settings.API_URL}/questions/${uuid}/tags`);
    } else {
      alert("エラーが発生しました");
    }
  };

  return (
    <div className="container relative mx-auto p-4">
      {questionData.status === "close" ? (
        <Questions.ResolvedStatus isResolved={true} />
      ) : (
        <Questions.UnresolvedStatus isResolved={false} />
      )}
      <div className="rounded-lg bg-white p-6 shadow-md">
        <div className="mb-4 flex flex-col sm:flex-row">
          <Questions.UserAvatar user={questionData.user} />
          <div className="ml-0 mt-4 flex w-full flex-col sm:ml-8 sm:mt-0">
            {isEditing ? (
              <input
                type="text"
                form="questionEditForm"
                name="title"
                defaultValue={questionData.title}
                className="w-full flex-1 rounded border-b border-gray-200 px-4 py-2 pr-20 outline-none lg:text-xl"
              />
            ) : (
              <h1 className="text-2xl font-bold">{questionData.title}</h1>
            )}
            <div className="mb-2 mt-4 flex w-full flex-wrap items-center border-b border-gray-300 pb-2 sm:mt-8">
              <p className="w-full text-sm text-gray-600 sm:w-auto">
                質問者: {questionData.user.name}
              </p>
              <p className="w-full text-sm text-gray-600 sm:ml-6 sm:w-auto">
                質問日時: {questionData.created_at}
              </p>
              <p className="w-full text-sm text-gray-600 sm:ml-6 sm:w-auto">
                更新日時: {questionData.updated_at}
              </p>
              {questionData.status !== "close" &&
                questionData.user.uuid === currentUser.uuid && (
                  <button
                    type="button"
                    onClick={handleEdit}
                    className="ml-4 rounded border border-slate-700 bg-slate-700 px-2 py-1 text-sm text-white transition-all hover:bg-white hover:text-slate-700"
                  >
                    {isEditing ? "戻る" : "編集"}
                  </button>
                )}
            </div>
            <div className="mb-4">
              {isEditing ? (
                <div>
                  <input
                    type="text"
                    form="questionEditForm"
                    name="tags"
                    defaultValue={questionDataTags
                      .map((tag) => tag.name)
                      .join(",")}
                    className="mt-3 w-full rounded-lg border-gray-200 bg-gray-100 px-4 py-1 text-sm outline-none lg:text-base"
                  />
                </div>
              ) : (
                <div>
                  {questionDataTags?.map((tag) => (
                    <Link
                      key={tag.name}
                      href={`${Routes.questions}?tag=${tag.name}`}
                      className="mr-2 rounded-lg bg-blue-500 px-2.5 py-0.5 text-xs font-semibold text-white"
                    >
                      {tag.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {isEditing ? (
              <textarea
                defaultValue={questionData.body}
                form="questionEditForm"
                className="resize-none overflow-auto border-none bg-gray-100 p-2 outline-none"
                rows="12"
                name="body"
                onChange={(e) => {
                  resizeTextArea(e);
                }}
              />
            ) : (
              <div
                className="znc h-full max-w-[850px] overflow-x-auto p-2"
                dangerouslySetInnerHTML={{
                  __html: html,
                }}
              />
            )}
          </div>
        </div>
        {isEditing && (
          <form
            id="questionEditForm"
            className="flex w-full flex-col items-center justify-center gap-2"
            onSubmit={handleSave}
          >
            <button
              type="submit"
              form="questionEditForm"
              className="rounded border border-runteq-secondary bg-runteq-secondary px-2 py-1 text-white transition-all hover:bg-white hover:text-runteq-secondary"
            >
              更新
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default QuestionDetail;
