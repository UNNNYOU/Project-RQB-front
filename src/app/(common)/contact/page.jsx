export default function Contact() {
  return (
    <article className="flex flex-col items-center justify-center">
      <h1 className="my-8 text-center text-xl">
        <span className="relative after:absolute after:inset-x-0  after:-bottom-3 after:mx-auto after:h-1 after:w-14 after:justify-center after:rounded after:bg-slate-300 after:content-['']">
          お問い合わせ
        </span>
      </h1>
      <section className="flex w-full items-center justify-center">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSesbdx36CxJOi55g0H_65h8x-TeoZV0zQi9XkGw_O2c_UYnpQ/viewform?embedded=true"
          width="100%"
          height="1350"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          読み込んでいます…
        </iframe>
      </section>
    </article>
  );
}
