"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

function SetAccessToken() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("token");
    if (token) {
      localStorage.setItem("access_token", token);
    }
  }, [searchParams]);

  return null;
}

export default function Auth() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SetAccessToken />
      <article>
        <h1>仮の認証ページ</h1>
      </article>
    </Suspense>
  );
}

