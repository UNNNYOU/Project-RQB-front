// import useSWR from "swr";
// import * as Questions from "@/features/questions/components";

// const dummyQuestion = {
//   uuid: "12345",
//   title: "ダミー質問のタイトル",
//   body: "これはダミーの質問内容です。",
//   createdAt: new Date().toISOString(),
//   updatedAt: new Date().toISOString(),
//   tags: ["React", "JavaScript"],
//   isResolved: false,
//   user: {
//     uuid: "user-1",
//     name: "質問者の名前",
//     avatar: "",
//   },
// };

// const fetcher = async (url) => {
//   try {
//     const res = await fetch(url);
//     return res.json();
//   } catch (e) {
//     return null;
//   }
// };

// const QuestionDetail = ({ uuid }) => {
//   const { data: questionData } = useSWR(`/api/questions/${uuid}`, fetcher, {
//     fallbackData: dummyQuestion,
//   });

//   if (!questionData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="container relative mx-auto p-4">
//       {questionData.isResolved ? (
//         <Questions.ResolvedStatus isResolved={questionData.isResolved} />
//       ) : (
//         <Questions.UnresolvedStatus isResolved={questionData.isResolved} />
//       )}
//       <div className="rounded-lg bg-white p-6 shadow-md">
//         <div className="mb-4 flex flex-col sm:flex-row">
//           <Questions.UserAvatar userId={questionData?.user?.uuid} />
//           <div className="ml-0 mt-4 flex w-full flex-col sm:ml-8 sm:mt-0">
//             <h1 className="text-2xl font-bold">{questionData.title}</h1>
//             <div className="mb-2 mt-4 flex w-full flex-wrap border-b border-gray-300 pb-2 sm:mt-8">
//               <p className="w-full text-sm text-gray-600 sm:w-auto">
//                 質問者: {questionData.user.name}
//               </p>
//               <p className="w-full text-sm text-gray-600 sm:ml-6 sm:w-auto">
//                 質問日時: {new Date(questionData.createdAt).toLocaleString()}
//               </p>
//               <p className="w-full text-sm text-gray-600 sm:ml-6 sm:w-auto">
//                 更新日時: {new Date(questionData.updatedAt).toLocaleString()}
//               </p>
//             </div>
//             <div className="mb-8">
//               {questionData.tags.map((tag) => (
//                 <span
//                   key={tag}
//                   className="mr-2 rounded-lg bg-blue-500 px-2.5 py-0.5 text-xs font-semibold text-white"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>
//             <p className="mb-4">{questionData.body}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuestionDetail;

import { useEffect } from "react";
import useSWR from "swr";
import markdownToHtml from "zenn-markdown-html";
import * as Questions from "@/features/questions/components";

const dummyQuestion = {
  uuid: "12345",
  title: "ダミー質問のタイトル",
  body: `
  ## これは見出しです

  **これは太字のテキストです。**

  *これは斜体のテキストです。*

  **_これは太字かつ斜体のテキストです。_**

  > これは引用ブロックです。

  1. 番号付きリストの項目1
  2. 番号付きリストの項目2
  3. 番号付きリストの項目3

  - 番号なしリストの項目1
  - 番号なしリストの項目2

  \`\`\`javascript
  // これはコードブロックです。
  function helloWorld() {
      console.log("Hello, world!");
  }
  \`\`\`

  [これはリンクです](https://www.example.com)

  ![これは画像です](https://via.placeholder.com/150)
  `,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  tags: ["React", "JavaScript"],
  isResolved: false,
  user: {
    uuid: "user-1",
    name: "質問者の名前",
    avatar: "",
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

  const html = markdownToHtml(questionData?.body || "", {
    embedOrigin: "https://embed.zenn.studio",
  });

  useEffect(() => {
    import("zenn-embed-elements");
  }, []);

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
          <Questions.UserAvatar userId={questionData?.user?.uuid} />
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
            <div
              className="znc h-full p-2"
              dangerouslySetInnerHTML={{
                __html: html,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionDetail;

// import useSWR from "swr";
// import * as Questions from "@/features/questions/components";

// const fetcher = async (url) => {
//   try {
//     const res = await fetch(url);
//     if (!res.ok) {
//       const errorData = await res.json();
//       throw new Error(errorData.message || "Failed to fetch");
//     }
//     return res.json();
//   } catch (e) {
//     console.error(e);
//     throw e;
//   }
// };

// const QuestionDetail = ({ uuid }) => {
//   const { data: questionData, error } = useSWR(`/questions/${uuid}`, fetcher);

//   if (error) {
//     return <div>Error loading data</div>;
//   }

//   if (!questionData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="container relative mx-auto p-4">
//       {questionData.status === 1 ? (
//         <Questions.ResolvedStatus isResolved={true} />
//       ) : (
//         <Questions.UnresolvedStatus isResolved={false} />
//       )}
//       <div className="rounded-lg bg-white p-6 shadow-md">
//         <div className="mb-4 flex flex-col sm:flex-row">
//           <Questions.UserAvatar userId={questionData.user?.uuid} />
//           <div className="ml-0 mt-4 flex w-full flex-col sm:ml-8 sm:mt-0">
//             <h1 className="text-2xl font-bold">{questionData.title}</h1>
//             <div className="mb-2 mt-4 flex w-full flex-wrap border-b border-gray-300 pb-2 sm:mt-8">
//               <p className="w-full text-sm text-gray-600 sm:w-auto">
//                 質問者: {questionData.user?.name}
//               </p>
//               <p className="w-full text-sm text-gray-600 sm:ml-6 sm:w-auto">
//                 質問日時: {new Date(questionData.created_at).toLocaleString()}
//               </p>
//               <p className="w-full text-sm text-gray-600 sm:ml-6 sm:w-auto">
//                 更新日時: {new Date(questionData.updated_at).toLocaleString()}
//               </p>
//             </div>
//             <div className="mb-8">
//               {questionData.tags?.map((tag) => (
//                 <span
//                   key={tag.id}
//                   className="mr-2 rounded-lg bg-blue-500 px-2.5 py-0.5 text-xs font-semibold text-white"
//                 >
//                   {tag.name}
//                 </span>
//               ))}
//             </div>
//             <p className="mb-4">{questionData.body}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuestionDetail;
