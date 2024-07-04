import { MainProvider } from "./mainProvider";
import { MainLayout } from "@/components/layouts";
import "./globals.css";

export const metadata = {
  title: "runteq overflow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <MainProvider>
          <MainLayout>{children}</MainLayout>
        </MainProvider>
      </body>
    </html>
  );
}
