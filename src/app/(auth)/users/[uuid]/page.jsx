export default function User({ params: { uuid } }) {
  console.log(uuid);
  return (
    <article>
      <h1>ユーザーページ : {uuid}</h1>
    </article>
  );
}
