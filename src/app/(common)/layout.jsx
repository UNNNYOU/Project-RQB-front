import { Asides, Footers } from "@/components/layouts";

export default function CommonRoot({ children }) {
  const auth = true; // TODO : 認証状態

  return (
    <>
      <div className="container my-4 flex w-full grow">
        <div className="flex w-full">
          {auth && <Asides />}
          <main className="grow">{children}</main>
        </div>
      </div>
      <div className={`w-full bg-[#AAB1BC] ${auth && "pb-14"} md:pb-0`}>
        <footer>
          <Footers />
        </footer>
      </div>
    </>
  );
}
