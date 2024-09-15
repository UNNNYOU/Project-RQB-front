import { useRouter } from "next/navigation";

export default function Pagination({ currentPage, totalPage, path }) {
  const router = useRouter();

  const handleClickPage = (page) => {
    const query = new URLSearchParams(window.location.search);
    if (page > 1) {
      query.set("page", page);
    } else {
      query.delete("page");
    }
    router.push(path + "?" + query.toString());
  };

  return (
    <article className="flex w-full items-center justify-center md:my-8 md:justify-start">
      <section className="text-sm text-runteq-secondary">
        {/* 最初と前へボタン */}
        {currentPage > 1 && (
          <>
            <button
              onClick={() => handleClickPage(1)}
              className="rounded-l border border-r-0 border-slate-400 bg-white px-3 py-2 transition-all hover:bg-runteq-secondary hover:text-white"
            >
              最初
            </button>
            <button
              onClick={() => handleClickPage(currentPage - 1)}
              className="border border-r-0 border-slate-400 bg-white px-3 py-2 transition-all hover:bg-runteq-secondary hover:text-white"
            >
              前へ
            </button>
            {5 < currentPage && (
              <button
                className="border border-r-0 border-slate-400 bg-white px-3 py-2 text-gray-600"
                disabled
              >
                ...
              </button>
            )}
          </>
        )}

        {/* ページ番号ボタン */}
        {Array.from({ length: Math.min(5, totalPage) }, (_, i) => {
          const page = totalPage < 5 ? i + 1 : currentPage - 4 + i;
          if (page > 0 && page <= totalPage) {
            return (
              <button
                key={page}
                onClick={() => handleClickPage(page)}
                className={`border border-r-0 border-slate-400 px-3 py-2 ${
                  currentPage === page
                    ? "cursor-auto bg-runteq-secondary font-bold text-white"
                    : "bg-white transition-all hover:bg-runteq-secondary hover:text-white"
                } ${currentPage == page && page == 1 && "rounded-l"} ${currentPage == page && currentPage == totalPage && "rounded-r"}`}
                disabled={currentPage === page}
              >
                {page}
              </button>
            );
          }
          return null;
        })}
        {5 <= totalPage &&
          Array.from({ length: Math.min(5, totalPage) }, (_, i) => {
            const page = currentPage + i;
            if (page > currentPage && page <= totalPage) {
              return (
                <button
                  key={page}
                  onClick={() => handleClickPage(page)}
                  className="border border-r-0 border-slate-400 bg-white px-3 py-2 transition-all hover:bg-runteq-secondary hover:text-white"
                >
                  {page}
                </button>
              );
            }
            return null;
          })}

        {/* 次へと最後のボタン */}
        {currentPage < totalPage && (
          <>
            {currentPage + 5 <= totalPage && (
              <button
                className="border border-r-0 border-slate-400 bg-white px-3 py-2 text-gray-600"
                disabled
              >
                ...
              </button>
            )}
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
          </>
        )}
      </section>
    </article>
  );
}
