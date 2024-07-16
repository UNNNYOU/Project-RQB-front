import AnswererComment from "@/components/Questions/Comments/AnswererComment";
import QuestionerComment from "@/components/Questions/Comments/QuestionerComment";

const CommentsSection = ({
  comments,
  question,
  dummyQuestion,
  dummyAnswer,
}) => {
  return (
    <>
      {comments.map((comment) =>
        comment.authorId === question.authorId ? (
          <QuestionerComment
            key={comment.id}
            comment={comment}
            userIcon={dummyQuestion.userIcon}
          />
        ) : (
          <AnswererComment
            key={comment.id}
            comment={comment}
            userIcon={dummyAnswer.userIcon}
          />
        ),
      )}
    </>
  );
};

export default CommentsSection;
