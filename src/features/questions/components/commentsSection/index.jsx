import * as Questions from "@/features/questions/components"

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
          <Questions.QuestionerComment
            key={comment.id}
            comment={comment}
            userIcon={dummyQuestion.userIcon}
          />
        ) : (
          <Questions.AnswererComment
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
