import { Suspense } from "react";
import { Login } from "@/features/auth/api";

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
