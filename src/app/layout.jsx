import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
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
      <Script
        src="https://embed.zenn.studio/js/listen-embed-event.js"
        strategy="afterInteractive"
      />
      <body>
        <MainProvider>
          <MainLayout>{children}</MainLayout>
        </MainProvider>
      </body>
      <GoogleAnalytics gaId={Settings.GA_ID} />
    </html>
  );
}
