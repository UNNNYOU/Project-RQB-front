import * as Questions from "@/features/questions/components";

const AnswererComment = ({ comment }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="relative mr-20 rounded-lg bg-white p-4 shadow-md">
        <div className="absolute -right-12 top-0 flex size-14 translate-x-full">
        <Questions.UserAvatar userId={AnswererComment?.user?.uuid} />
        </div>
        <div
          className="absolute right-0 top-8 h-6 w-8 translate-x-full bg-white"
          style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
        ></div>
        <p className="text-sm font-bold text-gray-600">{comment.author.name}</p>
        <p className="text-sm text-gray-600">
          {new Date(comment.createdAt).toLocaleString()}
        </p>
        <p className="mt-2">{comment.bodyText}</p>
      </div>
    </div>
  );
};

export default AnswererComment;