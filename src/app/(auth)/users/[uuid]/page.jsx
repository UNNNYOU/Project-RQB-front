import { Profile } from "@/features/users/components";

export default function User({ params: { uuid } }) {
  return (
    <>
      <article>
        <Profile uuid={uuid} />
      </article>
    </>
  );
}
