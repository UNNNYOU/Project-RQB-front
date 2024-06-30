import { Footers, Headers } from "@/components/layouts";

export default function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-runteq-background">
      <header className="w-full bg-white">
        <Headers />
      </header>
      <div className="container my-4 flex w-full grow">
        {children}
      </div>
      <div className="w-full bg-[#AAB1BC]">
        <footer>
          <Footers />
        </footer>
      </div>
    </div>
  );
}
