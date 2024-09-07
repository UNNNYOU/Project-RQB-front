export default function Loading() {
  return (
    <article className="fixed left-0 top-0 flex size-full items-center justify-center bg-black/30">
      <section className="rounded bg-white px-8 py-4">
        <div className="code-loader">
          <span>{"{"}</span><span>{"}"}</span>
        </div>
      </section>
    </article>
  );
}
