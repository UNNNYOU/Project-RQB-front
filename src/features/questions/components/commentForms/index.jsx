import axios from 'axios';
import React, { useState } from 'react';
import useSWR from 'swr';
import * as Questions from "@/features/questions/components";

// ダミーデータ
const dummyQuestion = {
  uuid: "12345",
  title: "ダミー質問のタイトル",
  content: "これはダミーの質問内容です。",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  tags: ["React", "JavaScript"],
  isResolved: false,
  user: {
    uuid: "user-1",
    name: "質問者の名前",
    avatar: ""
  },
  comments: [
    {
      id: 1,
      content: "これは回答者1のダミーのコメントです。",
      createdAt: new Date().toISOString(),
      author: {
        uuid: "user-2",
        name: "回答者1の名前",
        avatar: ""
      }
    },
    {
      id: 2,
      content: "これは質問者の返信です。",
      createdAt: new Date().toISOString(),
      author: {
        uuid: "user-1",
        name: "質問者の名前",
        avatar: ""
      }
    },
    {
      id: 3,
      content: "これは回答者2のダミーのコメントです。",
      createdAt: new Date().toISOString(),
      author: {
        uuid: "user-3",
        name: "回答者2の名前",
        avatar: ""
      }
    }
  ]
};

const dummyUser = {
  uuid: "user-1",
  name: "質問者の名前",
  avatar: ""
};

// データフェッチ用の関数
const fetcher = async (url) => {
  try {
    const res = await fetch(url);
    return res.json();
  } catch (e) {
    return null;
  }
};

const CommentForm = ({ uuid }) => {
  const { data: questionData } = useSWR(`/api/questions/${uuid}`, fetcher, {
    fallbackData: dummyQuestion,
  });
  const { data: userData } = useSWR(`/api/users/me`, fetcher, {
    fallbackData: dummyUser,
  });

  const [answer, setAnswer] = useState("");

  const handleAnswerSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`/api/questions/${uuid}/answers`, { body: answer });
      setAnswer("");
    } catch (error) {
      console.error('Error submitting answer:', error);
    }
  };

  const handleResolve = async () => {
    try {
      await axios.patch(`/api/questions/${uuid}/resolve`);
      if (questionData) {
        questionData.isResolved = true;
      }
    } catch (error) {
      console.error('Error resolving question:', error);
    }
  };

  if (!questionData || !userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div
        className={`relative rounded-lg bg-white p-4 shadow-md ${
          userData.uuid === questionData.user.uuid ? "ml-20" : "mr-20"
        }`}
      >
        <div
          className={`absolute ${
            userData.uuid === questionData.user.uuid ? "top-0" : "top-0"
          } ${
            userData.uuid === questionData.user.uuid
              ? "-left-12 -translate-x-full"
              : "-right-12 translate-x-full"
          } flex size-14 items-center justify-center rounded-full bg-gray-300`}
        >
          <span className="text-xs text-gray-600">
            {userData.uuid === questionData.user.uuid
              ? <Questions.UserAvatar userId={questionData?.user?.uuid} />
              : <Questions.UserAvatar userId={CommentForm?.user?.uuid} />}
          </span>
        </div>
        <div
          className={`absolute top-10 ${
            userData.uuid === questionData.user.uuid ? "left-0" : "right-0"
          } ${
            userData.uuid === questionData.user.uuid
              ? "-translate-x-full"
              : "translate-x-full"
          } h-6 w-8 bg-white`}
          style={{
            clipPath:
              userData.uuid === questionData.user.uuid
                ? "polygon(0 0, 100% 0, 100% 100%)"
                : "polygon(0 0, 100% 0, 0 100%)",
          }}
        ></div>
        <form onSubmit={handleAnswerSubmit}>
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="h-32 w-full rounded-lg border bg-gray-100 p-2"
            placeholder="コメントを入力"
          ></textarea>
          <button
            type="submit"
            className="mt-2 w-full rounded-lg bg-runteq-primary px-4 py-2 text-white transition-all hover:bg-[#D66200] sm:w-auto"
          >
            送信する
          </button>
          {userData.uuid === questionData.user.uuid && !questionData.isResolved && (
            <button
              type="button"
              onClick={handleResolve}
              className="ml-0 mt-2 w-full rounded-lg bg-gray-500 px-4 py-2 text-white transition-all hover:bg-gray-600 sm:ml-2 sm:w-auto"
            >
              解決済みにする
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default CommentForm;
