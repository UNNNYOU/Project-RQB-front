import { useEffect } from "react";
import useSWR from "swr";
import markdownToHtml from "zenn-markdown-html";
import { Settings } from "@/config";
import * as Questions from "@/features/questions/components";

const fetcher = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("エラーが発生しました。");
    return res.json();
  } catch (e) {
    return null;
  }
};

const CommentsSection = ({ uuid }) => {
  const { data: questionData, error: questionError } = useSWR(
    `${Settings.API_URL}/questions/${uuid}`,
    fetcher
  );

  const { data: commentsData, error: commentsError } = useSWR(
    `${Settings.API_URL}/questions/${uuid}/answers`,
    fetcher
  );

  useEffect(() => {
    import("zenn-embed-elements");
  }, []);

  if (questionError || commentsError) {
    return (
      <div>
        エラーが発生しました:{" "}
        {questionError?.message || commentsError?.message}
      </div>
    );
  }

  if (!questionData || !commentsData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {commentsData.map((comment) => {
        const html = markdownToHtml(comment.body || "", {
          embedOrigin: "https://embed.zenn.studio",
        });

        return comment.user.uuid === questionData.user.uuid ? (
          <Questions.QuestionerComment
            key={comment.id}
            comment={comment}
            html={html}
          />
        ) : (
          <Questions.AnswererComment
            key={comment.id}
            comment={comment}
            html={html}
          />
        );
      })}
    </>
  );
};

export default CommentsSection;
