const CommentForm = ({
  user,
  question,
  isResolved,
  answer,
  setAnswer,
  handleAnswerSubmit,
  handleResolve,
  dummyQuestion,
  dummyAnswer,
}) => {
  return (
    <div className="container mx-auto p-4">
      <div
        className={`relative rounded-lg bg-white p-4 shadow-md ${
          user.id === question.authorId ? "ml-20" : "mr-20"
        }`}
      >
        <div
          className={`absolute ${
            user.id === question.authorId ? "top-0" : "top-0"
          } ${
            user.id === question.authorId
              ? "-left-12 -translate-x-full"
              : "-right-12 translate-x-full"
          } flex size-14 items-center justify-center rounded-full bg-gray-300`}
        >
          <span className="text-xs text-gray-600">
            {user.id === question.authorId
              ? dummyQuestion.userIcon
              : dummyAnswer.userIcon}
          </span>
        </div>
        <div
          className={`absolute top-10 ${
            user.id === question.authorId ? "left-0" : "right-0"
          } ${
            user.id === question.authorId
              ? "-translate-x-full"
              : "translate-x-full"
          } h-6 w-8 bg-white`}
          style={{
            clipPath:
              user.id === question.authorId
                ? "polygon(0 0, 100% 0, 100% 100%)"
                : "polygon(0 0, 100% 0, 0 100%)",
          }}
        ></div>
        <form onSubmit={handleAnswerSubmit}>
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="h-32 w-full rounded-lg border bg-gray-100 p-2"
            placeholder="コメントを入力"
          ></textarea>
          <button
            type="submit"
            className="mt-2 w-full rounded-lg bg-runteq-primary px-4 py-2 text-white transition-all hover:bg-[#D66200] sm:w-auto"
          >
            送信する
          </button>
          {user.id === question.authorId && !isResolved && (
            <button
              type="button"
              onClick={handleResolve}
              className="ml-0 mt-2 w-full rounded-lg bg-gray-500 px-4 py-2 text-white transition-all hover:bg-gray-600 sm:ml-2 sm:w-auto"
            >
              解決済みにする
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default CommentForm;
