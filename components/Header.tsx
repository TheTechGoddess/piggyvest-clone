"use client";
import Image from "next/image";
import profile from "@/public/profile.jpg";
import { usePathname } from "next/navigation";
import hamburger from "@/public/hamburger.svg";

export default function Header() {
  return (
    <main className="w-full h-[70px] bg-[rgb(69,39,160)] fixed px-6 text-white z-40">
      <div className="flex justify-between items-center">
        <div className="flex space-x-4 my-4">
          <Image src={hamburger} alt="menu" width={24} height={24} />
          <p className="text-xl">Fluid Contacts</p>
        </div>
        <div>
          <div className="relative w-full mt-0.5">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="white"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.8059 2.94043C6.0142 2.94043 2.94043 6.0142 2.94043 9.8059C2.94043 13.5976 6.0142 16.6714 9.8059 16.6714C13.5976 16.6714 16.6714 13.5976 16.6714 9.8059C16.6714 6.0142 13.5976 2.94043 9.8059 2.94043ZM1.69043 9.8059C1.69043 5.32385 5.32385 1.69043 9.8059 1.69043C14.2879 1.69043 17.9214 5.32385 17.9214 9.8059C17.9214 14.2879 14.2879 17.9214 9.8059 17.9214C5.32385 17.9214 1.69043 14.2879 1.69043 9.8059Z"
                  fill="#FFF"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.5731 14.9633C14.8169 14.7189 15.2126 14.7184 15.457 14.9622L18.3937 17.8912C18.6381 18.135 18.6386 18.5307 18.3949 18.7751C18.1511 19.0195 17.7554 19.02 17.511 18.7763L14.5743 15.8472C14.3299 15.6034 14.3294 15.2077 14.5731 14.9633Z"
                  fill="#FFF"
                />
              </svg>
            </div>
            <input
              type="search"
              className="block px-4 py-3.5 pl-10 focus:none outline-none text-sm rounded font-light lg:font-normal placeholder-white w-[calc(100vw-360px)] text-white focus:border-primary bg-[#634CAF]"
              placeholder="Search "
            />
          </div>
        </div>
        <div className="w-8 h-8 bg-white rounded-full flex justify-center text-black items-center my-4">
          A
        </div>
      </div>
    </main>
  );
}
