"use client";

import { useRouter } from "next/navigation";
import { useRef, useEffect } from "react";
import { HiSearch } from "rocketicons/hi";
import { Routes } from "@/config";

export default function SearchForm({ onMount }) {
  const router = useRouter();
  const inputRef = useRef(null);

  useEffect(() => {
    onMount?.(inputRef.current);
  }, [onMount]);

  const handleSearch = (searchQuery) => {
    router.push(
      `${Routes.questions}${searchQuery ? `?search=${encodeURIComponent(searchQuery)}` : ""}`,
    );
  };

  return (
    <div className="my-auto size-full w-11/12 lg:w-2/3">
      <div className="relative grow">
        <HiSearch className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-gray-400" />
        <input
          ref={inputRef}
          type="text"
          className="w-full rounded-md border border-gray-400 p-2 pl-10 focus:border-runteq-secondary focus:outline-none"
          placeholder="検索..."
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
    </div>
  );
}


