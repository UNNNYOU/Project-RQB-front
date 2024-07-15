"use client";

import { useState } from "react";
import CommentsSection from "@/components/Questions/Comments/CommentsSection";
import QuestionDetail from "@/components/Questions/Details/QuestionDetail";
import CommentForm from "@/components/Questions/CommentForms/CommentForm";

const dummyQuestion = {
  uuid: "12345",
  title: "ダミー質問のタイトル",
  authorName: "質問者の名前",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  tags: ["React", "JavaScript"],
  content: "これはダミーの質問内容です。",
  authorId: 1,
  isResolved: false,
  userIcon: "質問者",
};

const dummyUser = {
  id: 1,
  name: "質問者の名前",
};

const dummyAnswer = {
  id: 2,
  name: "回答者の名前",
  userIcon: "回答者",
};

const dummyComments = [
  {
    id: 1,
    authorName: "回答者1の名前",
    authorId: 2,
    updatedAt: new Date().toISOString(),
    bodyText: "これは回答者1のダミーのコメントです。",
  },
  {
    id: 2,
    authorName: "質問者の名前",
    authorId: 1,
    updatedAt: new Date().toISOString(),
    bodyText: "これは質問者の返信です。",
  },
  {
    id: 3,
    authorName: "回答者2の名前",
    authorId: 3,
    updatedAt: new Date().toISOString(),
    bodyText: "これは回答者2のダミーのコメントです。",
  },
];

export default function Question() {
  const [question] = useState(dummyQuestion);
  const [user] = useState(dummyUser);
  const [comments] = useState(dummyComments);
  const [answer, setAnswer] = useState("");
  const [isResolved, setIsResolved] = useState(question.isResolved);

  const handleResolve = () => {
    setIsResolved(true);
  };

  const handleAnswerSubmit = () => {
    setAnswer("");
  };

  return (
    <article>
      <QuestionDetail question={question} user={user} isResolved={isResolved} />

      <CommentsSection
        comments={comments}
        question={question}
        dummyQuestion={dummyQuestion}
        dummyAnswer={dummyAnswer}
      />
      
      <CommentForm
        user={user}
        question={question}
        isResolved={isResolved}
        answer={answer}
        setAnswer={setAnswer}
        handleAnswerSubmit={handleAnswerSubmit}
        handleResolve={handleResolve}
        dummyQuestion={dummyQuestion}
        dummyAnswer={dummyAnswer}
      />
    </article>
  );
}
