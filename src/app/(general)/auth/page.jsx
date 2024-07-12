"use client";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";

const Login = () => {
  const params = useSearchParams();
  const { setAccessToken } = useAuth();

  useEffect(() => {
    const token = params.get("token");
    if (token) setAccessToken(token);
  }, [params, setAccessToken]);
};

export default function Auth() {
  Login();

  return (
    <article>
      <h1>仮の認証ページ</h1>
    </article>
  );
}
