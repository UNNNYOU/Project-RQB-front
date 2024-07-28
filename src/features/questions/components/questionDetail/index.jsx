import useSWR from "swr";
import * as Questions from "@/features/questions/components";

const dummyQuestion = {
  uuid: "12345",
  title: "ダミー質問のタイトル",
  content: "これはダミーの質問内容です。",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  tags: ["React", "JavaScript"],
  isResolved: false,
  user: {
    uuid: "user-1",
    name: "質問者の名前",
    icon: "質問者",
  },
};

const fetcher = async (url) => {
  try {
    const res = await fetch(url);
    return res.json();
  } catch (e) {
    return null;
  }
};

const QuestionDetail = ({ uuid }) => {
  const { data: questionData } = useSWR(`/api/questions/${uuid}`, fetcher, {
    fallbackData: dummyQuestion,
  });

  if (!questionData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container relative mx-auto p-4">
      {questionData.isResolved ? (
        <Questions.ResolvedStatus isResolved={questionData.isResolved} />
      ) : (
        <Questions.UnresolvedStatus isResolved={questionData.isResolved} />
      )}
      <div className="rounded-lg bg-white p-6 shadow-md">
        <div className="mb-4 flex flex-col sm:flex-row">
          <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-gray-300">
            <span className="text-xs text-gray-600">
              {questionData.user.icon}
            </span>
          </div>
          <div className="ml-0 mt-4 flex w-full flex-col sm:ml-8 sm:mt-0">
            <h1 className="text-2xl font-bold">{questionData.title}</h1>
            <div className="mb-2 mt-4 flex w-full flex-wrap border-b border-gray-300 pb-2 sm:mt-8">
              <p className="w-full text-sm text-gray-600 sm:w-auto">
                質問者: {questionData.user.name}
              </p>
              <p className="w-full text-sm text-gray-600 sm:ml-6 sm:w-auto">
                質問日時: {new Date(questionData.createdAt).toLocaleString()}
              </p>
              <p className="w-full text-sm text-gray-600 sm:ml-6 sm:w-auto">
                更新日時: {new Date(questionData.updatedAt).toLocaleString()}
              </p>
            </div>
            <div className="mb-8">
              {questionData.tags.map((tag) => (
                <span
                  key={tag}
                  className="mr-2 rounded-lg bg-blue-500 px-2.5 py-0.5 text-xs font-semibold text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="mb-4">{questionData.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionDetail;
