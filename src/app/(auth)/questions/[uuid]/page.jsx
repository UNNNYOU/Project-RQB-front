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
};

const dummyUser = {
  id: 1,
  name: "質問者の名前",
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
  {
    id: 4,
    authorName: "質問者の名前",
    authorId: 1,
    updatedAt: new Date().toISOString(),
    bodyText: "これは質問者の再返信です。",
  },
];

export default function Question({ params: { uuid } }) {
  const [question, setQuestion] = useState(dummyQuestion);
  const [user, setUser] = useState(dummyUser);
  const [comments, setComments] = useState(dummyComments);

  const handleResolve = () => {
    setIsResolved(true);
  };

  const handleAnswerSubmit = () => {
    setAnswer("");
  };

  return (
    <QuestionDetail
      question={question}
      user={user}
      comments={comments}
      handleResolve={handleResolve}
      handleAnswerSubmit={handleAnswerSubmit}
    />
  );
}

const QuestionDetail = ({
  question,
  user,
  comments,
  handleResolve,
  handleAnswerSubmit,
}) => {
  const [answer, setAnswer] = useState("");
  const [isResolved, setIsResolved] = useState(question.isResolved);

  return (
    <article>
      <div className="container mx-auto p-4">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h1 className="text-2xl font-bold mb-4">{question.title}</h1>
          <div className="flex flex-wrap border-b border-gray-300 pb-4 mb-4">
            <p className="text-sm text-gray-600 flex-grow-0 flex-shrink-0 ml-4">
              質問者: {question.authorName}
            </p>
            <p className="text-sm text-gray-600 flex-grow-0 flex-shrink-0 ml-4">
              質問日時: {new Date(question.createdAt).toLocaleString()}
            </p>
            <p className="text-sm text-gray-600 flex-grow-0 flex-shrink-0 ml-4">
              更新日時: {new Date(question.updatedAt).toLocaleString()}
            </p>
          </div>
          <div className="mb-4">
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
      {comments.map((comment) => (
        <div key={comment.id} className="container mx-auto p-4">
          <div
            className={`relative p-4 bg-white shadow-md rounded-lg ${
              comment.authorId === question.authorId ? "ml-20" : "mr-20"
            }`}
          >
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
            className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2"
          >
            送信
          </button>
          {user.id === question.authorId && !isResolved && (
            <button
              onClick={handleResolve}
              className="bg-green-500 text-white px-4 py-2 rounded-lg mt-2 ml-2"
            >
              解決済みにする
            </button>
          )}
        </div>
      </div>
    </article>
  );
};
