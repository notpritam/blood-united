import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";

import { Inter } from "next/font/google";
export const metadata = {
  title: "Threads",
  description: "A NextJs 13 Threads Clone",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-dark-1`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
