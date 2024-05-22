"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import hamburger from "@/public/hamburger.svg";
import home from "@/public/home.svg";
import plane from "@/public/plane.svg";
import person from "@/public/person.svg";
import savings from "@/public/savings.svg";
import logo from "@/public/logo.png";
import off from "@/public/off.svg";

interface MenuItem {
  title: string;
  icon: string;
  href: string;
}

const menuItems: MenuItem[] = [
  { title: "Contacts (538)", icon: home, href: "/" },
  { title: "Settings", icon: savings, href: "/settings" },
  { title: "Help", icon: plane, href: "/help" },
];

export default function Sidebar() {
  const pathname = usePathname();

  // Function to determine if the link is currently active
  const isLinkActive = (currentPath: string) => pathname === currentPath;

  return (
    <main className="w-[240px] border-r fixed h-[calc(100vh-70px)] py-8 text-black">
      {/* Navigation links */}
      <div className="flex flex-col space-y-3">
        {menuItems.map((item, index) => (
          <Link key={item.title} href={item.href}>
            <div
              className={`flex items-center text-sm space-x-4 font-semibold transition-all duration-500 px-5 py-2 ${
                isLinkActive(item.href) ? "bg-[#F5F5F5]" : ""
              }`}
            >
              {/* <Image src={item.icon} alt={item.title} width={28} height={28} /> */}
              <p
                className={` ${
                  isLinkActive(item.href)
                    ? "text-[#6852B1] rounded-t-lg rounded-r-lg"
                    : ""
                }`}
              >
                {item.title}
              </p>
            </div>
            {isLinkActive(item.href) && <hr className="mt-2" />}
          </Link>
        ))}
      </div>
    </main>
  );
}
