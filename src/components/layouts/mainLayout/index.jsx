import { Headers } from "@/components/layouts";

export default function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-runteq-background">
      <header className="w-full bg-white">
        <Headers />
      </header>
      {children}
    </div>
  );
}
