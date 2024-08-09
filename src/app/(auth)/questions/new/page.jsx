"use client";
import { Settings } from "@/config";
import { QuestionTitle, QuestionBody } from "@/features/questions/components";

export default function QuestionNew() {
  const Submit = (formData) => {
    const token = localStorage.getItem("token");
    const title = formData.get("questionTitle");
    const body = formData.get("questionBody");

    const resoponse = fetch(`${Settings.API_URL}/questions`, {
      method: "POST",
      headers: {
        "Content-Type": "application",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title: title,
        body: body,
      }),
    });
    return resoponse.json;
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
