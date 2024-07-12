"use client";

import React, { useState } from "react";

const dummyQuestion = {
  uuid: "12345",
  title: "ダミー質問のタイトル",
  authorName: "質問者の名前",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  tags: ["React", "JavaScript"],
  content: "これはダミーの質問内容です。",
  authorId: 1,
  isResolved: false,
  userIcon: "質問者",
};

const dummyUser = {
  id: 1,
  name: "質問者の名前",
};

const dummyAnswer = {
  id: 2,
  name: "回答者の名前",
  userIcon: "回答者",
};

const dummyComments = [
  {
    id: 1,
    authorName: "回答者1の名前",
    authorId: 2,
    updatedAt: new Date().toISOString(),
    bodyText: "これは回答者1のダミーのコメントです。",
  },
  {
    id: 2,
    authorName: "質問者の名前",
    authorId: 1,
    updatedAt: new Date().toISOString(),
    bodyText: "これは質問者の返信です。",
  },
  {
    id: 3,
    authorName: "回答者2の名前",
    authorId: 3,
    updatedAt: new Date().toISOString(),
    bodyText: "これは回答者2のダミーのコメントです。",
  },
];

export default function Question() {
  const [question] = useState(dummyQuestion);
  const [user] = useState(dummyUser);
  const [comments] = useState(dummyComments);

  return <QuestionDetail question={question} user={user} comments={comments} />;
}

const QuestionDetail = ({ question, user, comments }) => {
  const [answer, setAnswer] = useState("");
  const [isResolved, setIsResolved] = useState(question.isResolved);

  const handleResolve = () => {
    setIsResolved(true);
  };

  const handleAnswerSubmit = () => {
    setAnswer("");
  };

  return (
    <article>
      <div className="container relative mx-auto p-4">
        <div
          className={`absolute -right-4 top-12 z-10 h-8 w-40 rotate-45 text-center text-white ${
            isResolved ? "bg-blue-600" : "bg-red-600"
          }`}
          style={{
            clipPath: "polygon(20% 0, 80% 0, 100% 100%, 0% 100%)",
            lineHeight: "30px",
            marginTop: "-3px",
            marginRight: "-2px",
          }}
        >
          {isResolved ? "解 決 済" : "未 解 決"}
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md">
          <div className="mb-4 flex flex-col sm:flex-row">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-gray-300">
              <span className="text-xs text-gray-600">
                {dummyQuestion.userIcon}
              </span>
            </div>
            <div className="ml-0 mt-4 flex w-full flex-col sm:ml-8 sm:mt-0">
              <h1 className="text-2xl font-bold">{question.title}</h1>
              <div className="mb-2 mt-4 flex w-full flex-wrap border-b border-gray-300 pb-2 sm:mt-8">
                <p className="w-full text-sm text-gray-600 sm:w-auto">
                  質問者: {question.authorName}
                </p>
                <p className="w-full text-sm text-gray-600 sm:ml-6 sm:w-auto">
                  質問日時: {new Date(question.createdAt).toLocaleString()}
                </p>
                <p className="w-full text-sm text-gray-600 sm:ml-6 sm:w-auto">
                  更新日時: {new Date(question.updatedAt).toLocaleString()}
                </p>
              </div>
              <div className="mb-8">
                {question.tags.map((tag) => (
                  <span
                    key={tag}
                    className="mr-2 rounded-lg bg-blue-500 px-2.5 py-0.5 text-xs font-semibold text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mb-4">{question.content}</p>
            </div>
          </div>
        </div>
      </div>

      {comments.map((comment) => (
        <div key={comment.id} className="container mx-auto p-4">
          <div
            className={`relative rounded-lg bg-white p-4 shadow-md ${
              comment.authorId === question.authorId ? "ml-20" : "mr-20"
            }`}
          >
            <div
              className={`absolute ${
                comment.authorId === question.authorId ? "top-0" : "top-0"
              } ${
                comment.authorId === question.authorId
                  ? "-left-12 -translate-x-full"
                  : "-right-12 translate-x-full"
              } flex size-14 items-center justify-center rounded-full bg-gray-300`}
            >
              <span className="text-xs text-gray-600">
                {comment.authorId === question.authorId
                  ? dummyQuestion.userIcon
                  : dummyAnswer.userIcon}
              </span>
            </div>
            <div
              className={`absolute top-8 ${
                comment.authorId === question.authorId ? "left-0" : "right-0"
              } ${
                comment.authorId === question.authorId
                  ? "-translate-x-full"
                  : "translate-x-full"
              } h-6 w-8 bg-white`}
              style={{
                clipPath:
                  comment.authorId === question.authorId
                    ? "polygon(0 0, 100% 0, 100% 100%)"
                    : "polygon(0 0, 100% 0, 0 100%)",
              }}
            ></div>
            <p className="text-sm font-bold text-gray-600">
              {comment.authorName}
            </p>
            <p className="text-sm text-gray-600">
              {new Date(comment.updatedAt).toLocaleString()}
            </p>
            <p className="mt-2">{comment.bodyText}</p>
          </div>
        </div>
      ))}
      <div className="container mx-auto p-4">
        <div
          className={`relative rounded-lg bg-white p-4 shadow-md ${
            user.id === question.authorId ? "ml-20" : "mr-20"
          }`}
        >
          <div
            className={`absolute ${
              user.id === question.authorId ? "top-0" : "top-0"
            } ${
              user.id === question.authorId
                ? "-left-12 -translate-x-full"
                : "-right-12 translate-x-full"
            } flex size-14 items-center justify-center rounded-full bg-gray-300`}
          >
            <span className="text-xs text-gray-600">
              {user.id === question.authorId
                ? dummyQuestion.userIcon
                : dummyAnswer.userIcon}
            </span>
          </div>
          <div
            className={`absolute top-10 ${
              user.id === question.authorId ? "left-0" : "right-0"
            } ${
              user.id === question.authorId
                ? "-translate-x-full"
                : "translate-x-full"
            } h-6 w-8 bg-white`}
            style={{
              clipPath:
                user.id === question.authorId
                  ? "polygon(0 0, 100% 0, 100% 100%)"
                  : "polygon(0 0, 100% 0, 0 100%)",
            }}
          ></div>
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="h-32 w-full rounded-lg border bg-gray-100 p-2"
            placeholder="コメントを入力"
          ></textarea>
          <button
            onClick={handleAnswerSubmit}
            className="mt-2 w-full rounded-lg bg-orange-500 px-4 py-2 text-white hover:bg-[#D66200] sm:w-auto"
          >
            送信する
          </button>
          {user.id === question.authorId && !isResolved && (
            <button
              onClick={handleResolve}
              className="ml-0 mt-2 w-full rounded-lg bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-600 sm:ml-2 sm:w-auto"
            >
              解決済みにする
            </button>
          )}
        </div>
      </div>
    </article>
  );
};
