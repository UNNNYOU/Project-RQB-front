import Link from "next/link";
import { Routes } from "@/config";

export default function Asides() {
  return (
    <aside className="fixed bottom-0 left-0 w-full bg-white md:relative md:my-8 md:w-1/4 md:bg-transparent">
      <div>
        <nav>
          <ul className="flex items-center justify-center gap-8 md:flex-col-reverse">
            <li className="md:hidden"><button type="button" className="p-4 transition-all hover:bg-runteq-primary hover:text-white">検索</button></li>
            <li><Link href={Routes.questions} className="rounded p-4 transition-all hover:bg-runteq-primary hover:text-white md:bg-white md:px-8 md:py-2">質問</Link></li>
            <li><Link href={Routes.home} className="rounded p-4 transition-all hover:bg-runteq-primary hover:text-white md:bg-white md:px-8 md:py-2">ホーム</Link></li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}