const QuestionerComment = ({ comment, userIcon }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="relative ml-20 rounded-lg bg-white p-4 shadow-md">
        <div className="absolute -left-12 top-0 flex size-14 -translate-x-full items-center justify-center rounded-full bg-gray-300">
          <span className="text-xs text-gray-600">{userIcon}</span>
        </div>
        <div
          className="absolute left-0 top-8 h-6 w-8 -translate-x-full bg-white"
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
