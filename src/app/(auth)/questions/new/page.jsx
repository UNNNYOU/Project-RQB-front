"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { QuestionTitle, QuestionBody } from "@/components/form";
import { Loading } from "@/components/layouts";
import { Routes, Settings } from "@/config";
import { ReviewBody } from "@/features/questions/components";

export default function QuestionNew() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [reviewBody, setReviewBody] = useState("");
  const [isReviewVisible, setIsReviewVisible] = useState(false);

  const Submit = async (e) => {
    setLoading(true);
    const token = localStorage.getItem("access_token");
    const title = e.get("questionTitle");
    const body = e.get("questionBody");

    const submitId = e.nativeEvent.submitter.id;
    if (submitId === "POST") {
      await postQuestion(title, body, token);
    } else if (submitId === "REVIEW") {
      await reviewQuestion(title, body, token);
    }
    setLoading(false);
  };

  const postQuestion = async (title, body, token) => {
    try {
      const response = await fetch(`${Settings.API_URL}/questions`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: {
            title: title,
            body: body,
          },
        }),
      });
      if (response.ok) {
        const data = await response.json();
        router.push(Routes.question(data.uuid));
      } else {
        alert("エラーが発生しました");
      }
    } catch (error) {
      alert("エラーが発生しました");
    }
  }

  const isReviewToggle = () => {
    setIsReviewVisible(!isReviewVisible);
  }

  const reviewQuestion = async (title, body, token) => {
    try {
      const response = await fetch(`${Settings.API_URL}/questions/review`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: {
            title: title,
            body: body,
          },
        }),
      });
      if (response.ok) {
        const data = await response.json();
        setReviewBody(data);
      } else {
        alert("エラーが発生しました");
      }
    } catch (error) {
      alert("エラーが発生しました");
    }
  }

  return (
    <>
      <article className="mt-4 flex w-full max-w-[1000px] flex-col lg:w-[95%]">
        <form onSubmit={(e) => Submit(e)}>
          <QuestionTitle />
          <QuestionBody reviewBody={reviewBody} isReviewToggle={isReviewToggle} />
        </form>
      </article>
      {loading && <Loading />}
      {isReviewVisible && (<ReviewBody reviewBody={reviewBody} isReviewToggle={isReviewToggle} />)}
    </>
  );
}
