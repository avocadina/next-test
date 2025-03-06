import type { Metadata } from "next";

import "swiper/css";
import "~/src/app/style/global/template.scss";
import "~/src/app/style/global/reset.scss";

export const metadata: Metadata = {
  title: "App",
  manifest: "/manifest.json",
  description: "nodescr",
};

export const viewport: string = "width=device-width, initial-scale=1, user-scalable=0";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
