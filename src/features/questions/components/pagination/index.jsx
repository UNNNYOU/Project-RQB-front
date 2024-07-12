import { useRouter } from "next/navigation";
import { Routes } from "@/config";

export default function Pagination(currentPage, totalPage) {
  const router = useRouter();

  const handleClickPage = (page) => {
    const query = new URLSearchParams(window.location.search);
    if (page > 1) {
      query.set("page", page);
    }
    router.push(Routes.questions + "?" + query.toString());
  };

  return (
    <article className="flex w-full items-center justify-center md:my-8 md:justify-start">
      {/* TODO : ページネーションの機能面含めた実装は別issue */}
      <section className="text-sm text-runteq-secondary">
        <button
          className="rounded-l border border-runteq-secondary bg-runteq-secondary px-3 py-2 text-white"
          disabled
        >
          1
        </button>
        <button
          onClick={() => handleClickPage(2)}
          className="border border-r-0 border-slate-400 bg-white px-3 py-2 transition-all hover:bg-runteq-secondary hover:text-white"
        >
          2
        </button>
        <button
          onClick={() => handleClickPage(3)}
          className="border border-r-0 border-slate-400 bg-white px-3 py-2 transition-all hover:bg-runteq-secondary hover:text-white"
        >
          3
        </button>
        <button
          onClick={() => handleClickPage(4)}
          className="border border-r-0 border-slate-400 bg-white px-3 py-2 transition-all hover:bg-runteq-secondary hover:text-white"
        >
          4
        </button>
        <button
          onClick={() => handleClickPage(5)}
          className="border border-r-0 border-slate-400 bg-white px-3 py-2 transition-all hover:bg-runteq-secondary hover:text-white"
        >
          5
        </button>
        <button
          className="border border-r-0 border-slate-400 bg-white px-3 py-2 text-gray-600"
          disabled
        >
          ...
        </button>
        <button
          onClick={() => handleClickPage(currentPage + 1)}
          className="border border-r-0 border-slate-400 bg-white px-3 py-2 transition-all hover:bg-runteq-secondary hover:text-white"
        >
          次へ
        </button>
        <button
          onClick={() => handleClickPage(totalPage)}
          className="rounded-r border border-slate-400 bg-white px-3 py-2 transition-all hover:bg-runteq-secondary hover:text-white"
        >
          最後
        </button>
      </section>
    </article>
  );
}
