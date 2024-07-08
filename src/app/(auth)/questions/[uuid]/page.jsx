"use client";

import React, { useState } from "react";

export default function Question({ params: { uuid } }) {
  console.log(uuid);

  // 仮のデータ
  const question = {
    title: "redirect_toで編集画面への遷移がDELETEメソッドになってしまう",
    authorName: "らんてっく太郎",
    createdAt: new Date(),
    updatedAt: new Date(),
    commentedAt: new Date(),
    tags: ["tag1", "tag2"],
    content: "ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー",
    isResolved: false,
    authorId: 1,
    answers: [
      { id: 1, authorName: "Answer Author", content: "This is an answer." },
    ],
  };

  const user = {
    id: 1,
    name: "Current User",
  };

  return <QuestionDetail question={question} user={user} />;
}

const QuestionDetail = ({ question, user }) => {
  const [answer, setAnswer] = useState("");
  const [isResolved, setIsResolved] = useState(question.isResolved);
  const [comments, setComments] = useState([
    { id: 1, bodyText: "ああああああああああああああああああああああああああああああ", updatedAt: new Date() },
    { id: 2, bodyText: "いいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい", updatedAt: new Date() },
  ]);

  const handleResolve = () => {
    setIsResolved(true);
    // 解決済みステータスを更新するAPI呼び出しなど
  };

  const handleAnswerSubmit = () => {
    // 回答の送信処理（API呼び出しなど）
    setAnswer("");
  };

  return (
    <article>
      <div className="container mx-auto p-4">
        <div className="bg-white shadow-md rounded p-4">
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
                className="bg-blue-500 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
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
          <div className="bg-white shadow-md rounded p-4">
            <p className="text-sm text-gray-600">
              コメント日時: {new Date(comment.updatedAt).toLocaleString()}
            </p>
            <p>{comment.bodyText}</p>
          </div>
        </div>
      ))}
      <div className="container mx-auto p-4">
        <div className="bg-white shadow-md rounded p-4">
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="w-full p-2 border rounded bg-gray-100 h-32"
            placeholder="コメントを入力"
          ></textarea>
          <button
            onClick={handleAnswerSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
          >
            送信
          </button>
        </div>
      </div>
    </article>
  );
};
