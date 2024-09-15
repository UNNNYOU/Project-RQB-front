import { GoogleAnalytics } from "@next/third-parties/google";
import { MainProvider } from "./mainProvider";
import { MainLayout } from "@/components/layouts";
import "./globals.css";
import { Settings } from "@/config";

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
      <GoogleAnalytics gaId={Settings.GA_ID} />
    </html>
  );
}
