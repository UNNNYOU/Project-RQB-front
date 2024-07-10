"use client";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Auth() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("token");
    if (token) {
      localStorage.setItem("access_token", token);
    }
  }, [searchParams]);

  return (
    <article>
      <h1>仮の認証ページ</h1>
    </article>
  );
}
