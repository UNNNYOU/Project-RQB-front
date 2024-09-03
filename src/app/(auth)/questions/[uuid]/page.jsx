"use client";

import {
  QuestionDetail,
  CommentsSection,
  CommentForm,
} from "@/features/questions/components";

export default function QuestionPage({ params }) {
  const { uuid } = params;

  return (
    <article>
      <QuestionDetail uuid={uuid} />
      <CommentsSection uuid={uuid} />
      <CommentForm uuid={uuid} />
    </article>
  );
}
