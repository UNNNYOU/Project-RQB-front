import Link from "next/link";
import { Settings } from "@/config";
import { FaGithub } from "rocketicons/fa";

export default function Login() {
  return (
    <article>
      <h1>ログインページ</h1>
      <div className="mt-16 text-center">
        <Link href={`${Settings.API_URL}/auth/github`}><FaGithub className="icon-6xl" />GitHubでログイン</Link>
      </div>
    </article>
  );
}
