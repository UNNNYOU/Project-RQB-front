"use client";

import {
  QuestionDetail,
  CommentsSection,
  CommentForm,
} from "@/features/questions/components";

export default function QuestionPage({ params }) {
  const { uuid } = params;

  return (
    <article className="max-w-[1000px]">
      <QuestionDetail uuid={uuid} />
      <CommentsSection uuid={uuid} />
      <CommentForm uuid={uuid} />
    </article>
  );
}
