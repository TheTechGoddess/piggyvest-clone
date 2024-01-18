"use client";
import Image from "next/image";
import profile from "@/public/profile.jpg";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const getHeaderText = () => {
    switch (pathname) {
      case "/dashboard":
        return {
          name: "Favour",
          greeting: "Good Morning, wash your hands",
          showProfile: true,
        };
      case "/dashboard/savings":
        return {
          name: "Savings",
          greeting: "Let's see how well you're doing",
          showProfile: true,
        };
      case "/dashboard/invest":
        return {
          name: "Investify",
          greeting: "",
          showProfile: true,
        };
      case "/dashboard/account":
        return {
          name: "My Account",
          greeting: "Sally Jones",
          showProfile: false,
        };
      default:
        return {
          name: "Unknown Page",
          greeting: "Welcome",
          showProfile: false,
        };
    }
  };

  const { name, greeting, showProfile } = getHeaderText();

  return (
    <main className="w-full h-[150px] pt-12">
      <div className="flex justify-between items-center">
        <div className="flex flex-col space-y-2">
          <p className="text-3xl font-semibold text-black">{name},</p>
          <p className="text-sm font-medium text-bodytext">{greeting}</p>
        </div>
        {showProfile && (
          <Image
            className="rounded-full"
            src={profile}
            alt="profile"
            width={60}
            height={60}
          />
        )}
      </div>
    </main>
  );
}
