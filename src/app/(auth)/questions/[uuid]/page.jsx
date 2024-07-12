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
  id: 1, //ここを1以外に変更すると質問者以外になります
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
  // {
  //   id: 4,
  //   authorName: "質問者の名前",
  //   authorId: 1,
  //   updatedAt: new Date().toISOString(),
  //   bodyText: "これは質問者の再返信です。",
  // },
];

export default function Question({ params: { uuid } }) {
  const [question, setQuestion] = useState(dummyQuestion);
  const [user, setUser] = useState(dummyUser);
  const [comments, setComments] = useState(dummyComments);

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
      <div className="container mx-auto p-4 relative">
        <div
          className={`absolute top-12 right-[-1rem] transform rotate-45 h-8 w-40 text-white text-center z-10 ${
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

        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex mb-4">
            <div className="w-14 h-14 bg-gray-300 rounded-full flex-shrink-0 flex items-center justify-center">
              <span className="text-gray-600 text-xs">
                {dummyQuestion.userIcon}
              </span>
            </div>
            <div className="flex flex-col ml-8 w-full">
              <h1 className="text-2xl font-bold mt-4">{question.title}</h1>
              <div className="flex flex-wrap border-b border-gray-300 pb-2 mb-2 mt-8 w-full">
                <p className="text-sm text-gray-600">
                  質問者: {question.authorName}
                </p>
                <p className="text-sm text-gray-600 ml-6">
                  質問日時: {new Date(question.createdAt).toLocaleString()}
                </p>
                <p className="text-sm text-gray-600 ml-6">
                  更新日時: {new Date(question.updatedAt).toLocaleString()}
                </p>
              </div>
              <div className="mb-8">
                {question.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-500 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-lg"
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
            className={`relative p-4 bg-white shadow-md rounded-lg ${
              comment.authorId === question.authorId ? "ml-20" : "mr-20"
            }`}
          >
            <div
              className={`absolute ${
                comment.authorId === question.authorId ? "top-0" : "top-0"
              } transform ${
                comment.authorId === question.authorId
                  ? "left-[-3rem] -translate-x-full"
                  : "right-[-3rem] translate-x-full"
              } w-14 h-14 bg-gray-300 rounded-full flex items-center justify-center`}
            >
              <span className="text-gray-600 text-xs">
                {comment.authorId === question.authorId
                  ? dummyQuestion.userIcon
                  : dummyAnswer.userIcon}
              </span>
            </div>
            <div
              className={`absolute top-8 ${
                comment.authorId === question.authorId ? "left-0" : "right-0"
              } transform ${
                comment.authorId === question.authorId
                  ? "-translate-x-full"
                  : "translate-x-full"
              } w-8 h-6 bg-white`}
              style={{
                clipPath:
                  comment.authorId === question.authorId
                    ? "polygon(0 0, 100% 0, 100% 100%)"
                    : "polygon(0 0, 100% 0, 0 100%)",
              }}
            ></div>
            <p className="text-sm text-gray-600 font-bold">
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
          className={`relative bg-white shadow-md rounded-lg p-4 ${
            user.id === question.authorId ? "ml-20" : "mr-20"
          }`}
        >
          <div
            className={`absolute ${
              user.id === question.authorId ? "top-0" : "top-0"
            } transform ${
              user.id === question.authorId
                ? "left-[-3rem] -translate-x-full"
                : "right-[-3rem] translate-x-full"
            } w-14 h-14 bg-gray-300 rounded-full flex items-center justify-center`}
          >
            <span className="text-gray-600 text-xs">
              {user.id === question.authorId
                ? dummyQuestion.userIcon
                : dummyAnswer.userIcon}
            </span>
          </div>
          <div
            className={`absolute top-10 ${
              user.id === question.authorId ? "left-0" : "right-0"
            } transform ${
              user.id === question.authorId
                ? "-translate-x-full"
                : "translate-x-full"
            } w-8 h-6 bg-white`}
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
            className="w-full p-2 border rounded-lg bg-gray-100 h-32"
            placeholder="コメントを入力"
          ></textarea>
          <button
            onClick={handleAnswerSubmit}
            className="bg-orange-500 hover:bg-[#D66200] text-white px-4 py-2 rounded-lg mt-2"
          >
            送信する
          </button>
          {user.id === question.authorId && !isResolved && (
            <button
              onClick={handleResolve}
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg mt-2 ml-2"
            >
              解決済みにする
            </button>
          )}
        </div>
      </div>
    </article>
  );
};
