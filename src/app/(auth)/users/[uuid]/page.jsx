import { Suspense } from "react";
import { Profile, UserQuestionList } from "@/features/users/components";

export default function User({ params: { uuid } }) {
  return (
    <>
      <article>
        <Profile uuid={uuid} />
      </article>

      <article className="my-8">
        <Suspense>
          <UserQuestionList uuid={uuid} />
        </Suspense>
      </article>
    </>
  );
}
