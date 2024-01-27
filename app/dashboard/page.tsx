import Image from "next/image";
import reload from "@/public/reload.svg";
import add from "@/public/add.svg";
import QuickAccess from "@/components/home/QuickAccess";
import Todo from "@/components/home/Todo";
import Social from "@/components/home/Social";

export default function Dashboard() {
  return (
    <main className="">
      <div>
        <div className="flex justify-between">
          <Image src={reload} alt="reload" width={20} />
          <div className="bg-blue flex space-x-1 px-6 rounded-t-lg rounded-r-lg py-2 text-white items-center">
            <Image src={add} alt="add" width={16} />
            <p className="uppercase font-semibold">Quick Save</p>
          </div>
        </div>
        <QuickAccess />
        <div className="flex my-8 justify-between">
          <Todo />
          <Social />
        </div>
      </div>
    </main>
  );
}
