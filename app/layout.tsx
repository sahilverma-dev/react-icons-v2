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
  openGraph: {
    type: "website",
    images: "/open-graph.png",
    title: "React Icons",
    description:
      "Include popular icons in your React projects easly with react-icons.",
    url: "https://react-icons-v2.vercel.app/",
  },
  twitter: {
    images: "/open-graph.png",
    title: "React Icons",
    creator: "sahilverma-dev",
    description:
      "Include popular icons in your React projects easly with react-icons.",
    site: "https://react-icons-v2.vercel.app/",
  },
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
