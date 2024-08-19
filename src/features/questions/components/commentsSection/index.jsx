import { useEffect } from "react";
import useSWR from "swr";
import markdownToHtml from "zenn-markdown-html";
import * as Questions from "@/features/questions/components";
import "zenn-content-css";

// ダミーデータ
const dummyComments = [
  {
    id: 1,
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
    author: {
      uuid: "user-2",
      name: "回答者1の名前",
      avatar: "",
    },
  },
  {
    id: 2,
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
    author: {
      uuid: "user-1",
      name: "質問者の名前",
      avatar: "",
    },
  },
  {
    id: 3,
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
    author: {
      uuid: "user-3",
      name: "回答者2の名前",
      avatar: "",
    },
  },
];

// データフェッチ用の関数
const fetcher = async (url) => {
  try {
    const res = await fetch(url);
    return res.json();
  } catch (e) {
    return null;
  }
};

const CommentsSection = ({ uuid }) => {
  const { data: commentsData } = useSWR(
    `/api/questions/${uuid}/comments`,
    fetcher,
    {
      fallbackData: dummyComments,
    },
  );

  const { data: questionData } = useSWR(`/api/questions/${uuid}`, fetcher, {
    fallbackData: {
      uuid: "12345",
      author: { uuid: "user-1" },
    },
  });

  useEffect(() => {
    import("zenn-embed-elements");
  }, []);

  if (!commentsData || !questionData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {commentsData.map((comment) => {
        const html = markdownToHtml(comment.body || "", {
          embedOrigin: "https://embed.zenn.studio",
        });
        console.log("確認用ログ", html);

        return comment.author.uuid === questionData.author.uuid ? (
          <Questions.QuestionerComment
            key={comment.id}
            comment={comment}
            html={html}
          />
        ) : (
          <Questions.AnswererComment
            key={comment.id}
            comment={comment}
            html={html}
          />
        );
      })}
    </>
  );
};

export default CommentsSection;
