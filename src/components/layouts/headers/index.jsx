import Link from "next/link";
import { Routes } from "@/config";

export default function Headers() {
  return (
    <div className="flex justify-between md:container">
      <h1 className="flex items-center justify-center"><Link href={Routes.home} className="px-4 py-2">runteq&nbsp;<span className="font-semibold">overflow</span></Link></h1>
      <nav className="fixed bottom-0 left-0 w-full bg-white md:relative">
        <ul className="flex w-full items-center justify-center py-4 text-xs md:justify-end md:text-base">
          <li><Link href={Routes.home} className="px-2 py-4 transition-all hover:bg-runteq-primary hover:text-white md:px-4">ホーム</Link></li>
          <li><Link href={Routes.login} className="px-2 py-4 transition-all hover:bg-runteq-primary   hover:text-white md:px-4">ログイン</Link></li>
          <li><Link href={Routes.questions} className="px-2 py-4 transition-all  hover:bg-runteq-primary hover:text-white md:px-4">質問一覧</Link></li>
          <li><Link href={Routes.question("uuid")} className="px-2 py-4 transition-all  hover:bg-runteq-primary hover:text-white ">質問&回答</Link></li>
          <li><Link href={Routes.questionsNew} className="px-2 py-4 transition-all  hover:bg-runteq-primary hover:text-white md:px-4">質問投稿</Link></li>
          <li><Link href={Routes.user("uuid")} className="px-2 py-4 transition-all  hover:bg-runteq-primary hover:text-white md:px-4">ユーザーページ</Link></li>
        </ul>
      </nav>
    </div>
  );
}