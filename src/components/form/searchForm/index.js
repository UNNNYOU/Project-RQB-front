"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { RiSearch2Line } from "rocketicons/ri";
import { Routes } from "@/config";

export default function SearchForm() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(
      `${Routes.questions}${searchTerm ? `?search=${encodeURIComponent(searchTerm)}` : ""}`,
    );
  };

  return (
    <div className="my-auto hidden size-full w-11/12 md:inline lg:w-2/3">
      <form
        className="flex w-full items-center justify-center"
        onSubmit={handleSearch}
      >
        <div className="relative grow">
          <RiSearch2Line className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            className="w-full rounded-md border border-gray-400 p-2 pl-10
            focus:border-runteq-secondary focus:outline-none"
            placeholder="検索..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="ml-2 w-20 rounded-md bg-runteq-secondary px-4 py-2 font-bold text-white transition-colors hover:bg-white hover:text-runteq-secondary"
        >
          検索
        </button>
      </form>
    </div>
  );
}
