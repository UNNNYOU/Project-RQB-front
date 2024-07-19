"use client";
import { useRecoilValue } from "recoil";
import { Asides, Footers } from "@/components/layouts";
import { currentUserState } from "@/features/auth/api";

export default function CommonRoot({ children }) {
  const currentUser = useRecoilValue(currentUserState);
  const auth = currentUser.name === null ? false : true;

  return (
    <>
      <div className="container my-4 flex w-full grow">
        <div className="flex w-full">
          {auth && <Asides />}
          <main className="grow">{children}</main>
        </div>
      </div>
      <div className={`w-full bg-[#AAB1BC] ${auth && "pb-14"} md:pb-0`}>
        <footer>
          <Footers />
        </footer>
      </div>
    </>
  );
}
