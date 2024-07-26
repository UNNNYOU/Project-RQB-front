"use client";
import { Settings } from "lucide-react";
import { useRecoilValue } from "recoil";
import {
  questionTitleState,
  questionBodyState,
} from "@/features/questions/api";
import { QuestionTitle, QuestionBody } from "@/features/questions/components";

export default function QuestionNew() {
  const title = useRecoilValue(questionTitleState);
  const body = useRecoilValue(questionBodyState);

  const Submit = () => {
    const token = localStorage.getItem("token");
    const resoponse = fetch(`${Settings.API_URL}/question`, {
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
