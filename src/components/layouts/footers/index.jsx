import Link from "next/link";
import { Routes } from "@/config";

export default function Footers() {
  return (
    <div className="my-4 flex flex-col gap-4 text-white md:container md:items-start md:pb-4">
      <h3 className="flex items-center justify-center text-2xl font-normal md:my-4 md:text-3xl">runteq overflow</h3>
      <nav>
        <ul className="flex items-center justify-center gap-3 text-sm" >
          <li><Link href={Routes.termOfService}>利用規約</Link></li>
          <li><Link href={Routes.privacyPolicy}>プライバシーポリシー</Link></li>
          <li><Link href={Routes.contact}>お問い合わせ</Link></li>
        </ul>
      </nav>
    </div>
  );
}
