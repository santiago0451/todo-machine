import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./layout.css";

export const metadata: Metadata = {
  title: "ToDo Machine",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">{children}</div>
        <div id="modal"></div>
      </body>
    </html>
  );
}
