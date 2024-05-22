import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
const inter = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Contacts Test",
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
          <div className="flex w-full">
            <div className="mt-[70px]">
              <Sidebar />
              <div className="ml-[265px] w-full z-30">{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
