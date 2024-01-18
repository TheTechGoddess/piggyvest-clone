import Image from "next/image";
import at from "@/public/at.svg";
import dollar from "@/public/dollar.svg";
import shield from "@/public/shield.svg";
import naira from "@/public/naira.svg";
import arrow from "@/public/arrow.svg";

const sections = [
  {
    id: 1,
    color: "bg-blue",
    text: "text-white",
    padding: "px-8",
    icon: shield,
    title: "Total Savings",
    amount: "₦800,000.24",
    iconWidth: 32,
    iconHeight: 32,
  },
  {
    id: 2,
    color: "bg-purple",
    text: "text-white",
    padding: "px-8",
    icon: arrow,
    title: "Total Investments",
    amount: "₦800,000.24",
    iconWidth: 40,
    iconHeight: 32,
  },
  {
    id: 3,
    color: "bg-black",
    text: "text-white",
    padding: "px-16",
    icon: dollar,
    title: "Flex Dollar",
    amount: "$800.00",
    iconWidth: 32,
    iconHeight: 32,
  },
  {
    id: 4,
    color: "border",
    text: "text-[#F180AC]",
    padding: "px-14",
    icon: naira,
    title: "Flex Naira",
    amount: "₦800.90",
    iconWidth: 32,
    iconHeight: 32,
  },
  {
    id: 5,
    color: "bg-purple",
    text: "text-white",
    padding: "px-12",
    icon: at,
    title: "@lissaboo's pocket",
    amount: "₦800.90",
    iconWidth: 32,
    iconHeight: 32,
  },
];

export default function QuickAccess() {
  return (
    <main className="flex flex-col overflow-x-auto overflow-hidden">
      <div className="my-3 flex space-x-6 max-w-full">
        {sections.map((section) => (
          <div
            key={section.id}
            className={`flex items-center cursor-pointer space-x-4 justify-center whitespace-nowrap  rounded-t-lg rounded-r-lg ${section.color} h-32 ${section.padding}`}
          >
            <Image
              src={section.icon}
              alt={section.title}
              width={section.iconWidth}
              height={section.iconHeight}
              className=""
            />
            <div className="flex flex-col space-y-3">
              <p className="text-sm text-grey font-semibold">{section.title}</p>
              <p className={`text-2xl font-semibold ${section.text} `}>
                {section.amount}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
