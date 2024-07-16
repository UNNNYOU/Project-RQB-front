import Link from "next/link";
import { FaGithub } from "rocketicons/fa";
import { Settings } from "@/config";

export default function Login() {
  return (
    <article>
      <h1>ログインページ</h1>
      <div className="mt-16 flex items-center justify-center">
        <Link
          href={`${Settings.API_URL}/auth/github`}
          className="flex gap-2 rounded-md bg-black p-2 text-2xl text-white"
        >
          <FaGithub className="mb-1 inline-block size-8" />
          <span>GitHubでログイン</span>
        </Link>
      </div>
    </article>
  );
}
