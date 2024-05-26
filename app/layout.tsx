import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css"; // Ensure this file contains the base/global styles
import "./layout.css"; // Import the new CSS file for layout styles
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
          <div className="layout-container">
            <div className="sidebar-container">
              <Sidebar />
              <div className="main-content">{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
