import QuestionerComment from '@/components/Questions/QuestionerComment';
import AnswererComment from '@/components/Questions/AnswererComment';

const CommentsSection = ({ comments, question, dummyQuestion, dummyAnswer }) => {
    return (
      <>
        {comments.map((comment) => (
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
          )
        ))}
      </>
    );
  };
  
  export default CommentsSection;