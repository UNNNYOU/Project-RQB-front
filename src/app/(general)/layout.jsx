import { Footers } from "@/components/layouts";

export default function GeneralRoot({ children }) {
  return (
    <>
      <div className="container my-4 flex w-full grow">
        <main className="w-full">{children}</main>
      </div>
      <div className="w-full bg-[#AAB1BC]">
        <footer>
          <Footers />
        </footer>
      </div>
    </>
  );
}
