import { FaGithub } from "rocketicons/fa";

export default function Profile({ uuid }) {
  console.log(uuid);
  return (
    <section className="relative mt-16 w-full rounded bg-white px-2 pb-4 md:flex md:pb-0">
      <div className="absolute -top-10 flex size-full items-start justify-center md:justify-start">
        <div className="aspect-square w-20 rounded-full bg-runteq-primary" />
      </div>
      <div className="pt-11 md:pl-24 md:pt-7">
        <div className="mb-4 flex items-center justify-center md:absolute md:-top-8 md:justify-start md:pb-0">
          <div className="grid grid-rows-2 items-center justify-center md:justify-start">
            <h1 className="flex items-end justify-center gap-2 text-xl md:text-2xl"><span className="text-sm">52期</span>ひさじゅ</h1>
            <div className="flex items-center justify-center gap-2 md:justify-start">
              <FaGithub className="inline-block size-6" />
              <p>id: ******</p>
            </div>
          </div>
        </div>
        <div className="m-4 flex flex-col gap-2">
          <p className="text-sm md:text-base">ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト</p>
          <div>
            <dl className="grid w-full grid-rows-2">
              <div className="mb-2 w-full border-b pb-2">
                <dt>勉強中</dt>
                <dd className="ml-8 flex flex-wrap items-center justify-start gap-1"><span className="rounded-xl bg-slate-300 px-2">Ruby on Rails</span><span className="rounded-xl bg-slate-300 px-2">Ruby</span><span className="rounded-xl bg-slate-300 px-2">JavaScript</span><span className="rounded-xl bg-slate-300 px-2">HTML</span><span className="rounded-xl bg-slate-300 px-2">Ruby on Rails</span><span className="rounded-xl bg-slate-300 px-2">Ruby</span><span className="rounded-xl bg-slate-300 px-2">JavaScript</span><span className="rounded-xl bg-slate-300 px-2">HTML</span><span className="rounded-xl bg-slate-300 px-2">Ruby on Rails</span><span className="rounded-xl bg-slate-300 px-2">Ruby</span><span className="rounded-xl bg-slate-300 px-2">JavaScript</span><span className="rounded-xl bg-slate-300 px-2">HTML</span></dd>
              </div>
              <div className="w-full">
                <dt className="w-20">開発経験</dt>
                <dd className="ml-8 flex flex-wrap items-center justify-start gap-1"><span className="rounded-xl bg-slate-300 px-2">Ruby on Rails</span><span className="rounded-xl bg-slate-300 px-2">Ruby</span><span className="rounded-xl bg-slate-300 px-2">JavaScript</span><span className="rounded-xl bg-slate-300 px-2">HTML</span><span className="rounded-xl bg-slate-300 px-2">Ruby on Rails</span><span className="rounded-xl bg-slate-300 px-2">Ruby</span><span className="rounded-xl bg-slate-300 px-2">JavaScript</span><span className="rounded-xl bg-slate-300 px-2">HTML</span><span className="rounded-xl bg-slate-300 px-2">Ruby on Rails</span><span className="rounded-xl bg-slate-300 px-2">Ruby</span><span className="rounded-xl bg-slate-300 px-2">JavaScript</span><span className="rounded-xl bg-slate-300 px-2">HTML</span></dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}