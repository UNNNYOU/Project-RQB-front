"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Routes, Settings } from "@/config";
import { Pagination, QuestionList } from "@/features/questions/components";
import { useFetchData } from "@/lib";

const Tabs = {
  question: "questions",
  answer: "answer",
};

export default function UserQuestionList({ uuid }) {
  const params = useSearchParams();
  const router = useRouter();
  const currentPage = params.get("page") || 1;
  const currentTab = params.get("tab") || Tabs.question;
  const currentFetchURL = `${Settings.API_URL}/users/${uuid}/questions?tab=${currentTab}&page=${currentPage}`;
  const nextFetchURL = `${Settings.API_URL}/users/${uuid}/questions?tab=${currentTab}&page=${currentPage + 1}`;
  const allCount = useFetchData(
    `${Settings.API_URL}/users/${uuid}/all_questions_count?tab=${currentTab}`,
  );
  const PER_PAGE = 10;
  const TOTAL_PAGE = Math.ceil(allCount?.count / PER_PAGE);

  const handleTabChange = (nextTab) => {
    if (currentTab === nextTab) return;
    switch (nextTab) {
      case Tabs.question:
        router.push(Routes.user(uuid));
        break;
      case Tabs.answer:
        router.push(`${Routes.user(uuid)}?tab=${Tabs.answer}`);
        break;
      default:
        router.push(Routes.user(uuid));
        break;
    }
  };

  return (
    <>
      <div>
        <ul className="grid grid-cols-3 gap-2 md:grid-cols-4">
          <li className="flex items-center justify-center">
            <button
              type="button"
              onClick={() => handleTabChange(Tabs.question)}
              className={`w-full rounded-t border-t-2 bg-white py-2 ${currentTab === Tabs.question ? "border-runteq-primary font-semibold text-runteq-primary" : "border-gray-400 bg-gray-400 text-gray-400"}`}
            >
              質問
            </button>
          </li>
          <li className="flex items-center justify-center">
            <button
              type="button"
              onClick={() => handleTabChange(Tabs.answer)}
              className={`w-full rounded-t border-t-2 bg-white py-2 ${currentTab === Tabs.answer ? "border-runteq-primary font-semibold text-runteq-primary" : "border-gray-400 bg-gray-400 text-gray-400"}`}
            >
              回答
            </button>
          </li>
        </ul>
      </div>

      <div>
        {Number(currentPage) > 0 && Number(currentPage) <= TOTAL_PAGE && (
          <QuestionList url={currentFetchURL} />
        )}
      </div>

      <Pagination
        currentPage={Number(currentPage)}
        totalPage={TOTAL_PAGE}
        path={Routes.user(uuid)}
      />

      {Number(currentPage) < TOTAL_PAGE && (
        <div className="hidden">
          <QuestionList url={nextFetchURL} />
        </div>
      )}
    </>
  );
}
