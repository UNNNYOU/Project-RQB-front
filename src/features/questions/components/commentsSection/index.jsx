import useSWR from 'swr';
import * as Questions from "@/features/questions/components";

// ダミーデータ
const dummyComments = [
  {
    id: 1,
    bodyText: "これは回答者1のダミーのコメントです。",
    createdAt: new Date().toISOString(),
    author: {
      uuid: "user-2",
      name: "回答者1の名前",
      avatar: ""
    }
  },
  {
    id: 2,
    bodyText: "これは質問者の返信です。",
    createdAt: new Date().toISOString(),
    author: {
      uuid: "user-1",
      name: "質問者の名前",
      avatar: ""
    }
  },
  {
    id: 3,
    bodyText: "これは回答者2のダミーのコメントです。",
    createdAt: new Date().toISOString(),
    author: {
      uuid: "user-3",
      name: "回答者2の名前",
      avatar: ""
    }
  }
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
  const { data: commentsData } = useSWR(`/api/questions/${uuid}/comments`, fetcher, {
    fallbackData: dummyComments,
  });

  const { data: questionData } = useSWR(`/api/questions/${uuid}`, fetcher, {
    fallbackData: {
      uuid: "12345",
      author: { uuid: "user-1" },
      // 他のダミーデータのプロパティを追加
    },
  });

  if (!commentsData || !questionData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {commentsData.map((comment) =>
        comment.author.uuid === questionData.author.uuid ? (
          <Questions.QuestionerComment
            key={comment.id}
            comment={comment}
            userIcon={comment.author.icon}
          />
        ) : (
          <Questions.AnswererComment
            key={comment.id}
            comment={comment}
            userIcon={comment.author.icon}
          />
        ),
      )}
    </>
  );
};

export default CommentsSection;
