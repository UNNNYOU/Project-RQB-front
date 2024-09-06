import { useEffect } from "react";
import markdownToHtml from "zenn-markdown-html";
import { Settings } from "@/config";
import * as Questions from "@/features/questions/components";
import useFetchData from "@/lib/useFetchData";

const CommentsSection = ({ uuid }) => {
  const questionData = useFetchData(`${Settings.API_URL}/questions/${uuid}`);

  const commentsData = useFetchData(
    `${Settings.API_URL}/questions/${uuid}/answers`,
  );

  useEffect(() => {
    import("zenn-embed-elements");
  }, []);

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
