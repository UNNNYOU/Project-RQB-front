"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";
import { useAuth } from "@/hooks/useAuth";

const Login = () => {
  const params = useSearchParams();
  const { setAccessToken } = useAuth();

  useEffect(() => {
    const token = params.get("token");
    if (token) setAccessToken(token);
  }, [params, setAccessToken]);

  return null;
};

export default function Auth() {
  return (
    <article>
      <Suspense>
        <Login />
      </Suspense>
      <h1>仮の認証ページ</h1>
    </article>
  );
}
