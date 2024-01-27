import Image from "next/image";
import good from "@/public/good.svg";
import atpurple from "@/public/at-purple.svg";
const todos = [
  {
    id: 1,
    task: "Turn on your Piggybank AutoSave 🚦",
  },
  {
    id: 2,
    task: "Safelock ₦50,000 for 61 - 90 days",
  },
  {
    id: 3,
    task: "Set your security question now 🔒🔒",
  },
];

const activities = [
  {
    title: "See your recent activities",
    task: "See your most recent activities on piggyvest",
    iconWidth: 32,
    iconHeight: 32,
    alt: "at",
    icon: good,
    border: "border border-blue",
    colour: "text-blue",
  },
  {
    title: "My Pocket: @lissaboo",
    task: "Withdraw from your Piggyvest safer and faster ⚡",
    iconWidth: 32,
    iconHeight: 32,
    alt: "at",
    icon: atpurple,
    border: "border border-purple",
    colour: "text-purple",
  },
];

export default function Todo() {
  return (
    <main className="w-[60%]">
      <div>
        <h1 className="text-[#2d3748] text-xs font-semibold uppercase">
          Todo List
        </h1>
        <div className="my-2 ">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="border w-full flex space-x-3 p-3 items-center rounded-t-lg rounded-r-lg my-3"
            >
              <div className="h-5 w-5 rounded-full border-2 border-blue"></div>
              <p className="text-bodytext text-xs font-semibold">{todo.task}</p>
            </div>
          ))}
        </div>
        <div className="my-10 ">
          {activities.map((activity) => (
            <div
              key={activity.title}
              className={`${activity.border} w-full flex  space-x-3 p-3 items-center rounded-t-lg rounded-r-lg my-5`}
            >
              <Image
                src={activity.icon}
                alt={activity.alt}
                width={activity.iconWidth}
                height={activity.iconHeight}
                className=""
              />
              <div>
                <p
                  className={`text-bodytext text-sm font-semibold ${activity.colour}`}
                >
                  {activity.title}
                </p>
                <p className="text-bodytext text-xs font-semibold">
                  {activity.task}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
