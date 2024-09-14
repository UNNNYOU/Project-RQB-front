import { useRouter } from "next/navigation";
import { RiSearch2Line } from "rocketicons/ri";
import { Routes } from "@/config";

export default function SearchForm() {
  const router = useRouter();

  const handleSearch = (searchQuery) => {
    router.push(
      `${Routes.questions}${searchQuery ? `?search=${encodeURIComponent(searchQuery)}` : ""}`,
    );
  };

  return (
    <div className="my-auto hidden size-full w-11/12 md:inline lg:w-2/3">
      <div className="relative grow">
        <RiSearch2Line className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          className="w-full rounded-md border border-gray-400 p-2 pl-10
          focus:border-runteq-secondary focus:outline-none"
          placeholder="検索..."
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
    </div>
  );
}
