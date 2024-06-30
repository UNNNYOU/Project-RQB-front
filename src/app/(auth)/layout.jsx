import { Asides } from "@/components/layouts";

export default function GeneralRoot({ children }) {
  return (
    <>
      <aside className="hidden md:block"><Asides /></aside>
      <main>{children}</main>
    </>
  );
}
