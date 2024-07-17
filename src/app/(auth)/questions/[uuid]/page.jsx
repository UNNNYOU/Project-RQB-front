"use client";

import * as Questions from "@/features/questions/components";

export default function QuestionPage({ params }) {
  const { uuid } = params;

  return (
    <article>
      <Questions.QuestionDetail uuid={uuid} />
      {/* <Questions.CommentsSection uuid={uuid} /> */}
      <Questions.CommentForm uuid={uuid} />
    </article>
  );
}
