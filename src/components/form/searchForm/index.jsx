"use client";

import { useRouter } from "next/navigation";
import { useRef, useEffect, useState, useCallback } from "react";
import { HiSearch } from "rocketicons/hi";
import { Routes } from "@/config";

export function SearchForm({ onMount }) {
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

export function SearchFormModal() {
  const [isOpenSearchFormModal, setIsOpenSearchFormModal] = useState(false);

  const handleKeyDown = useCallback((event) => {
    if (event.key === "Enter" || event.key === "Escape")
      setIsOpenSearchFormModal(false);
  }, []);

  const toggleModal = () => {
    isOpenSearchFormModal
      ? document.removeEventListener("keydown", handleKeyDown)
      : document.addEventListener("keydown", handleKeyDown);

    setIsOpenSearchFormModal(!isOpenSearchFormModal);
  };

  const focusElement = (element) => {
    element?.focus();
  };

  return (
    <>
      <button
        onClick={toggleModal}
        type="button"
        className="flex items-center justify-start gap-3 p-4 transition-all hover:bg-runteq-primary hover:text-white"
      >
        <HiSearch className="inline-block size-5" />
        検索
      </button>

      {isOpenSearchFormModal && (
        <div
          className="fixed inset-0 z-20 flex items-center justify-center bg-black/30"
          onClick={toggleModal}
        >
          <div
            className="flex w-11/12 justify-center rounded-lg bg-white p-4 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <SearchForm onMount={focusElement} />
          </div>
        </div>
      )}
    </>
  );
}
