'use client';
import { useState, useCallback } from "react";
import { HiSearch, HiX } from "rocketicons/hi";
import { SearchForm } from "@/components/form";

export default function SearchFormModal() {
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
            className="flex w-11/12 flex-col items-center rounded-lg bg-white p-2 pb-10 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={toggleModal}
              className="self-end mb-3 rounded-full hover:bg-gray-200"
            >
              <HiX className="size-6" />
            </button>
            <SearchForm onMount={focusElement} />
          </div>
        </div>
      )}
    </>
  );
}
