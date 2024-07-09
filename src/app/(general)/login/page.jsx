"use client";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const handleAuth = () => {
    try {
      router.push(`${process.env.NEXT_PUBLIC_API_URL}/auth/github`);
    } catch (error) {
      console.error("リクエストエラー:", error);
    }
  };

  return (
    <article>
      <h1>ログインページ</h1>
      <div className="mt-16 text-center">
        <button onClick={handleAuth}>GitHubでログイン</button>
      </div>
    </article>
  );
}
