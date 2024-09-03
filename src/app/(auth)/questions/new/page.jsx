"use client";
import { useRouter } from "next/navigation";
import { Routes, Settings } from "@/config";
import { QuestionTitle, QuestionBody } from "@/features/questions/components";

export default function QuestionNew() {
  const router = useRouter();

  const Submit = async (formData) => {
    const token = localStorage.getItem("access_token");
    const title = formData.get("questionTitle");
    const body = formData.get("questionBody");

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
  };

  return (
    <article className="mt-4 flex w-full max-w-[1000px] flex-col lg:w-[95%]">
      <form action={Submit}>
        <QuestionTitle />
        <QuestionBody />
      </form>
    </article>
  );
}
