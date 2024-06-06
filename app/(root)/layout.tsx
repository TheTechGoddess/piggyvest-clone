import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Test",
  description: "Contacts test by Abdulazeez Shittu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Header />
          <div className="">
            <div className="">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
