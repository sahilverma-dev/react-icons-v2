import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Sidebar from "@/components/custom/sidebar";
import Providers from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "React Icons",
    template: "%s - React Icons",
  },
  description:
    "Include popular icons in your React projects easly with react-icons.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <main className="md:flex w-full">
            <Sidebar />
            <div className=" h-full sm:max-h-screen sm:overflow-y-scroll w-full">
              {children}
            </div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
