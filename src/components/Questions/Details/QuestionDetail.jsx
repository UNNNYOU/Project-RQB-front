import ResolvedStatus from '@/components/Questions/Details/ResolvedStatus';
import UnresolvedStatus from '@/components/Questions/Details/UnresolvedStatus';

const QuestionDetail = ({ question, user, isResolved }) => {
  return (
    <div className="container relative mx-auto p-4">
      {isResolved ? (
        <ResolvedStatus isResolved={isResolved} />
      ) : (
        <UnresolvedStatus isResolved={isResolved} />
      )}
      <div className="rounded-lg bg-white p-6 shadow-md">
        <div className="mb-4 flex flex-col sm:flex-row">
          <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-gray-300">
            <span className="text-xs text-gray-600">
              {question.userIcon}
            </span>
          </div>
          <div className="ml-0 mt-4 flex w-full flex-col sm:ml-8 sm:mt-0">
            <h1 className="text-2xl font-bold">{question.title}</h1>
            <div className="mb-2 mt-4 flex w-full flex-wrap border-b border-gray-300 pb-2 sm:mt-8">
              <p className="w-full text-sm text-gray-600 sm:w-auto">
                質問者: {question.authorName}
              </p>
              <p className="w-full text-sm text-gray-600 sm:ml-6 sm:w-auto">
                質問日時: {new Date(question.createdAt).toLocaleString()}
              </p>
              <p className="w-full text-sm text-gray-600 sm:ml-6 sm:w-auto">
                更新日時: {new Date(question.updatedAt).toLocaleString()}
              </p>
            </div>
            <div className="mb-8">
              {question.tags.map((tag) => (
                <span
                  key={tag}
                  className="mr-2 rounded-lg bg-blue-500 px-2.5 py-0.5 text-xs font-semibold text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="mb-4">{question.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionDetail;
