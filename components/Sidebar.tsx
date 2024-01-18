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
  icon: string; // Replace with the correct type for your icon
  href: string;
}

const menuItems: MenuItem[] = [
  { title: "Home", icon: home, href: "/dashboard" },
  { title: "Savings", icon: savings, href: "/dashboard/savings" },
  { title: "Invest", icon: plane, href: "/dashboard/invest" },
  { title: "Account", icon: person, href: "/dashboard/account" },
];

export default function Sidebar() {
  const pathname = usePathname();

  // Function to determine if the link is currently active
  const isLinkActive = (currentPath: string) => pathname === currentPath;

  return (
    <main className="w-[265px] bg-primary fixed h-screen py-8 px-4 text-white">
      {/* Logo and hamburger menu */}
      <div className="flex items-center space-x-5">
        <Image src={hamburger} alt="menu" width={28} height={28} />
        <Image src={logo} alt="logo" width={150} />
      </div>

      {/* Navigation links */}
      <div className="flex flex-col space-y-8 mt-12">
        {menuItems.map((item) => (
          <Link key={item.title} href={item.href}>
            <div
              className={`flex items-center space-x-5 transition-all duration-500 ${
                isLinkActive(item.href) ? "ml-4 " : "ml-0"
              }`}
            >
              <Image src={item.icon} alt={item.title} width={28} height={28} />
              <p
                className={` ${
                  isLinkActive(item.href)
                    ? "text-primary bg-white py-1 pl-5 pr-10 rounded-t-lg rounded-r-lg"
                    : ""
                }`}
              >
                {item.title}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Logout section */}
      <Link
        href={"/"}
        className="flex items-center space-x-5 absolute bottom-8"
      >
        <Image src={off} alt="person" width={28} height={28} />
        <p>Logout</p>
      </Link>
    </main>
  );
}
