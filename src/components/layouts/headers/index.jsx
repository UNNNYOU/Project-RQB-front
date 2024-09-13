"use client";
import Link from "next/link";
import { Suspense } from "react";
import { useRecoilValue } from "recoil";
import { Routes } from "@/config";
import { currentUserState, Login } from "@/features/auth/api";

export default function Headers() {
  const currentUser = useRecoilValue(currentUserState);
  return (
    <>
      <Suspense>
        <Login />
      </Suspense>
      <div className="flex justify-between md:container">
        <h1 className="flex items-center justify-center">
          <Link
            href={currentUser.uuid ? Routes.questions : Routes.home}
            className="px-4 py-2"
          >
            runteq&nbsp;<span className="font-semibold">overflow</span>
          </Link>
        </h1>
        <nav className="relative w-full bg-white px-2">
          <ul className="flex w-full items-center justify-end py-4 text-xs md:text-base">
            {!currentUser.uuid ? (
              <li>
                <Link
                  href={Routes.login}
                  className="px-2 py-4 transition-all hover:bg-runteq-primary   hover:text-white md:px-4"
                >
                  ログイン
                </Link>
              </li>
            ) : (
              <li>
                <Link
                  href={Routes.user(currentUser.uuid)}
                  className="px-2 py-4 transition-all  hover:bg-runteq-primary hover:text-white md:px-4"
                >
                  ユーザーページ
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
}
