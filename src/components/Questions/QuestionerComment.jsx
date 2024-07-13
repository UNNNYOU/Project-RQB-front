const QuestionerComment = ({ comment, userIcon }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="relative rounded-lg bg-white p-4 shadow-md ml-20">
        <div className="absolute top-0 -left-12 -translate-x-full flex size-14 items-center justify-center rounded-full bg-gray-300">
          <span className="text-xs text-gray-600">{userIcon}</span>
        </div>
        <div
          className="absolute top-8 left-0 -translate-x-full h-6 w-8 bg-white"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
        ></div>
        <p className="text-sm font-bold text-gray-600">{comment.authorName}</p>
        <p className="text-sm text-gray-600">
          {new Date(comment.updatedAt).toLocaleString()}
        </p>
        <p className="mt-2">{comment.bodyText}</p>
      </div>
    </div>
  );
};

export default QuestionerComment;