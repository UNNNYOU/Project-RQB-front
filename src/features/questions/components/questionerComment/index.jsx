import * as Questions from "@/features/questions/components";

const QuestionerComment = ({ comment, html }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="relative ml-20 rounded-lg bg-white p-4 shadow-md">
        <div className="absolute -left-12 top-0 flex size-14 -translate-x-full">
          <Questions.UserAvatar user={comment.user} />
        </div>
        <div
          className="absolute left-0 top-8 h-6 w-8 -translate-x-full bg-white"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
        ></div>
        <p className="text-sm font-bold text-gray-600">{comment.user.name}</p>
        <p className="text-sm text-gray-600">{comment.created_at}</p>
        <div
          className="znc h-full max-w-[850px] overflow-x-auto p-2"
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
      </div>
    </div>
  );
};

export default QuestionerComment;
