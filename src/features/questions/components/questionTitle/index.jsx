"use client";

import Image from "next/image";
import { useRecoilValue } from "recoil";
import { currentUserState } from "@/features/auth/api";

export default function QuestionTitle() {
  const currentUser = useRecoilValue(currentUserState);

  return (
    <div className="flex items-center rounded-lg bg-white p-4">
      <div className="size-16 overflow-hidden rounded-full bg-gray-100">
        {currentUser.avatar ? (
          <Image
            src={currentUser.avatar}
            width={64}
            height={64}
            alt={currentUser.name}
            className="object-cover"
          />
        ) : (
          <div className="size-16 rounded-full bg-orange-400" />
        )}
      </div>
      <div className="ml-4 flex-1">
        <input
          type="text"
          placeholder="タイトル"
          name="questionTitle"
          className="w-full flex-1 rounded border-b border-gray-200 px-4 py-2 outline-none lg:text-xl"
        />
        <input
          type="text"
          placeholder="タグ"
          className="mt-3 w-full rounded-lg border-gray-200 bg-gray-100 px-4 py-1 text-sm outline-none lg:text-base"
        />
      </div>
    </div>
  );
}
