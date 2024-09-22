import type { Metadata } from "next";
import localFont from "next/font/local";
import "../src/shared/styles/globals.scss";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import ConfigProviderAntd from "@/src/shared/antd/config.provider";
import { LoginLayout } from "@/src/shared/components/layout";
import { Providers } from "@/src/shared/lib/providers/providers";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const Mont = localFont({
  src: [
    {
      path: "./fonts/Mont-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Mont-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Mont-SemiBold.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Mont-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Shedevro Sber",
  description: "Биржа производственных практик",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${Mont.className} antialiased`}>
        <AntdRegistry>
          <ConfigProviderAntd>
            <Providers>
              <LoginLayout>{children}</LoginLayout>
            </Providers>
          </ConfigProviderAntd>
        </AntdRegistry>
      </body>
    </html>
  );
}
