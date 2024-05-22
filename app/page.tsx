import { useEffect, useState } from "react";
import { FaEdit, FaStar, FaPlus } from "react-icons/fa";

interface MenuItem {
  img: string;
  name: string;
  email: string;
  number: string;
  starred: boolean;
}

const menuItems: MenuItem[] = [
  {
    img: "A",
    name: "Abdulazeez Shittu",
    email: "abdul1@gmail.com",
    number: "+1234567889",
    starred: true,
  },
  {
    img: "A",
    name: "Another Name",
    email: "another@gmail.com",
    number: "+1234567890",
    starred: true,
  },
  {
    img: "S",
    name: "Someone Else",
    email: "someone@gmail.com",
    number: "+1234567891",
    starred: false,
  },
  {
    img: "D",
    name: "Different Person",
    email: "different@gmail.com",
    number: "+1234567892",
    starred: false,
  },
  {
    img: "N",
    name: "New Person",
    email: "new@gmail.com",
    number: "+1234567893",
    starred: true,
  },
  {
    img: "#",
    name: "500 lv",
    email: "lv@gmail.com",
    number: "+1234567893",
    starred: false,
  },
];

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export default function Home() {
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  useEffect(() => {
    setHighlightedIndex(0);
  }, []);

  const starredCount = menuItems.filter((item) => item.starred).length;

  const ContactItem = ({ item, index }: { item: MenuItem; index: number }) => (
    <div
      className={`flex justify-between items-center w-full mb-4 text-sm ${
        highlightedIndex === index ? "bg-[#F5F5F5]" : ""
      }`}
    >
      <div
        className="w-8 h-8 rounded-full flex justify-center text-white items-center text-sm"
        style={{ backgroundColor: getRandomColor() }}
      >
        {item.img}
      </div>
      <p className="text-[#212121] font-bold w-[30%] ml-[10%]">{item.name}</p>
      <p className="text-[#212121] font-medium w-[30%]">{item.email}</p>
      <p className="text-[#212121] font-medium w-[30%]">{item.number}</p>
      {highlightedIndex === index && (
        <div className="flex space-x-2">
          <FaEdit className="text-gray-600" />
          <FaStar className="text-yellow-500" />
          <FaPlus className="text-green-500" />
        </div>
      )}
    </div>
  );

  const sortedMenuItems = menuItems.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const getDisplayCharacter = (char: string) => {
    const upperChar = char.toUpperCase();
    return upperChar >= "A" && upperChar <= "Z" ? upperChar : "#";
  };

  return (
    <main className="flex min-h-screen h-full flex-col p-8 w-full">
      <div className="w-full">
        <p className="text-[#616161] font-medium text-sm">
          Starred Contacts ({starredCount})
        </p>
        <div className="my-4 flex flex-col space-y-4 w-full items-start">
          <div className="w-full flex items-start">
            <div className="w-[10%]">⭐</div>
            <div className="w-[90%]">
              {menuItems
                .filter((item) => item.starred)
                .map((item, index) => (
                  <ContactItem key={item.email} item={item} index={index} />
                ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-[#616161] font-medium text-sm">
          Contacts ({menuItems.length})
        </p>
        <div className="my-4 flex flex-col space-y-4 w-full items-start">
          {sortedMenuItems.reduce((acc, item, index, array) => {
            const currentFirstLetter = getDisplayCharacter(item.name.charAt(0));
            const previousFirstLetter =
              index > 0
                ? getDisplayCharacter(array[index - 1].name.charAt(0))
                : "";

            if (currentFirstLetter !== previousFirstLetter) {
              acc.push(
                <div key={currentFirstLetter}>
                  <div className="w-full flex items-start mb-2">
                    <div className="text-[#212121] font-semibold w-[10%] -mb-20">
                      {currentFirstLetter}
                    </div>
                    <div className="w-[90%]"></div>
                  </div>
                </div>
              );
            }

            acc.push(
              <div
                key={item.email}
                className="flex items-start ml-[10%] w-[90%]"
              >
                <ContactItem item={item} index={index} />
              </div>
            );
            return acc;
          }, [] as JSX.Element[])}
        </div>
      </div>
    </main>
  );
}
