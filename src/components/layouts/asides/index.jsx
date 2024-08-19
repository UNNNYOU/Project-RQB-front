import Link from "next/link";
import { HiSearch, HiHome } from "rocketicons/hi";
import { RiQuestionnaireFill } from "rocketicons/ri";
import { Routes } from "@/config";

export default function Asides() {
  return (
    <aside className="fixed bottom-0 left-0 z-10 w-full bg-white md:relative md:my-8 md:w-1/4 md:bg-transparent">
      <div>
        <nav>
          <ul className="flex items-center justify-center gap-8 md:flex-col-reverse">
            <li className="md:hidden">
              <button
                type="button"
                className="flex items-center justify-start gap-3 p-4 transition-all hover:bg-runteq-primary hover:text-white"
              >
                <HiSearch className="inline-block size-5" />
                検索
              </button>
            </li>
            <li>
              <Link
                href={Routes.questions}
                className="flex items-center justify-start gap-3 rounded p-4 transition-all hover:bg-runteq-primary hover:text-white md:bg-white md:px-8 md:py-2"
              >
                <RiQuestionnaireFill className="inline-block size-5" />
                質問
              </Link>
            </li>
            <li>
              <Link
                href={Routes.home}
                className="flex items-center justify-start gap-3 rounded p-4 transition-all hover:bg-runteq-primary hover:text-white md:bg-white md:px-8 md:py-2"
              >
                <HiHome className="inline-block size-5" />
                ホーム
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
