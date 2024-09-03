import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import  { mutate } from 'swr';
import { Settings } from "@/config";
import * as Questions from "@/features/questions/components";
import useFetchData from "@/lib/useFetchData";

const CommentForm = ({ uuid }) => {
  const router = useRouter();
  
  const questionData = useFetchData(`${Settings.API_URL}/questions/${uuid}`);

  const [answer, setAnswer] = useState("");

  if (!questionData) {
    return <div>Loading...</div>;
  }

  const isQuestioner = questionData.user.uuid === uuid;

  const handleAnswerSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${Settings.API_URL}/questions/${uuid}/answers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ body: answer }),
      });

      if (response.ok) {
        setAnswer("");
        mutate(`${Settings.API_URL}/questions/${uuid}/answers`);
      } else {
        console.error("アンサーの送信に失敗しました");
      }
    } catch (error) {
      console.error("アンサーの送信中にエラーが発生しました:", error);
    }
  };

  const handleResolve = async () => {
    try {
      const response = await fetch(`${Settings.API_URL}/questions/${uuid}/close`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        mutate(`${Settings.API_URL}/questions/${uuid}`);
        router.push('/questions');
      } else {
        console.error("質問の解決に失敗しました");
      }
    } catch (error) {
      console.error("質問の解決中にエラーが発生しました:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div
        className={`relative rounded-lg bg-white p-4 shadow-md ${
          isQuestioner ? "ml-20" : "mr-20"
        }`}
      >
        <div
          className={`absolute ${
            isQuestioner ? "-left-12 top-0 -translate-x-full" : "-right-12 top-0 translate-x-full"
          } flex size-14 items-center justify-center rounded-full bg-gray-300`}
        >
          <span className="text-xs text-gray-600">
            <Questions.UserAvatar userId={questionData.user.uuid} />
          </span>
        </div>
        <div
          className={`absolute top-10 ${
            isQuestioner ? "left-0 -translate-x-full" : "right-0 translate-x-full"
          } h-6 w-8 bg-white`}
          style={{
            clipPath: isQuestioner
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
          {isQuestioner && questionData.status === 'open' && (
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
