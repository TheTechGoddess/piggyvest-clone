"use client";
import { useEffect, useState } from "react";
import { FaEdit, FaStar, FaPlus } from "react-icons/fa";
import { BiDotsVerticalRounded } from "react-icons/bi";
import EditModal from "@/components/EditModal";
import ViewModal from "@/components/ViewModal";
import AddModal from "@/components/AddModal";

interface MenuItem {
  img: string;
  name: string;
  email: string;
  number: string;
  starred: boolean;
  color: string; // Add a color property to MenuItem
}

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const menuItems: MenuItem[] = [
  {
    img: "A",
    name: "Abdulazeez Shittu",
    email: "abdul1@gmail.com",
    number: "+1234567889",
    starred: true,
    color: getRandomColor(),
  },
  {
    img: "A",
    name: "Another Name",
    email: "another@gmail.com",
    number: "+1234567890",
    starred: true,
    color: getRandomColor(),
  },
  {
    img: "S",
    name: "Someone Else",
    email: "someone@gmail.com",
    number: "+1234567891",
    starred: false,
    color: getRandomColor(),
  },
  {
    img: "D",
    name: "Different Person",
    email: "different@gmail.com",
    number: "+1234567892",
    starred: false,
    color: getRandomColor(),
  },
  {
    img: "N",
    name: "New Person",
    email: "new@gmail.com",
    number: "+1234567893",
    starred: true,
    color: getRandomColor(),
  },
  {
    img: "#",
    name: "500 lv",
    email: "lv@gmail.com",
    number: "+1234567893",
    starred: false,
    color: getRandomColor(),
  },
];

export default function Home() {
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const handleEditClick = (item: MenuItem) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleViewClick = (item: MenuItem) => {
    setSelectedItem(item);
    setShowViewModal(true);
  };

  const handleClick = () => {
    setShowAddModal(true);
  };

  useEffect(() => {
    setHighlightedIndex(0);
  }, []);

  const starredCount = menuItems.filter((item) => item.starred).length;

  const ContactItem = ({
    item,
    index,
    isStarredSection,
  }: {
    item: MenuItem;
    index: number;
    isStarredSection: boolean;
  }) => (
    <div
      onClick={() => !isStarredSection && setHighlightedIndex(index)}
      className={`flex justify-between items-center w-full mb-4 text-sm py-2 px-6 cursor-pointer ${
        highlightedIndex === index && !isStarredSection ? "bg-[#F5F5F5]" : ""
      }`}
    >
      <div
        className={`w-9 h-8 rounded-full flex justify-center text-white items-center text-sm ${
          highlightedIndex === index && !isStarredSection ? "w-10" : ""
        }`}
        style={{ backgroundColor: item.color }} // Use the stored color
      >
        {item.img}
      </div>
      <p
        className={`text-[#212121] font-bold w-[30%] ml-[10%] ${
          highlightedIndex === index && !isStarredSection ? "ml-[9%]" : ""
        }`}
      >
        {item.name}
      </p>
      <p className="text-[#212121] font-medium w-[30%]">{item.email}</p>
      <p className="text-[#212121] font-medium w-[30%]">{item.number}</p>
      {!isStarredSection && highlightedIndex === index && (
        <div className="flex space-x-4">
          <FaStar className="text-yellow-500" />
          <FaEdit
            className="text-gray-600"
            onClick={() => handleEditClick(item)}
          />
          <BiDotsVerticalRounded
            className="text-green-500"
            onClick={() => handleViewClick(item)}
          />
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
    <main className="flex min-h-screen h-full flex-col p-8 w-full relative">
      <div className="w-full">
        <p className="text-[#616161] font-medium text-sm">
          Starred Contacts ({starredCount})
        </p>
        <div className="my-4 flex flex-col space-y-4 w-full items-start">
          <div className="w-full flex items-start">
            <div className="w-[10%]">⭐</div>
            <div className="w-[90%] -mt-2">
              {menuItems
                .filter((item) => item.starred)
                .map((item, index) => (
                  <ContactItem
                    key={item.email}
                    item={item}
                    index={index}
                    isStarredSection={true}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-[#616161] font-medium text-sm">
          Contacts ({menuItems.length})
        </p>
        <div className="my-4 flex flex-col w-full items-start mt-10">
          {sortedMenuItems.reduce((acc, item, index, array) => {
            const currentFirstLetter = getDisplayCharacter(item.name.charAt(0));
            const previousFirstLetter =
              index > 0
                ? getDisplayCharacter(array[index - 1].name.charAt(0))
                : "";

            if (currentFirstLetter !== previousFirstLetter) {
              acc.push(
                <div key={currentFirstLetter}>
                  <div className="w-full flex items-start">
                    <div className="text-[#212121] font-semibold w-[10%] -mb-6">
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
                className={`flex items-start ml-[10%] w-[90%] mb-3 -mt-3 ${
                  highlightedIndex === index ? "w-[100%]" : ""
                }`}
              >
                <ContactItem
                  item={item}
                  index={index}
                  isStarredSection={false}
                />
              </div>
            );
            return acc;
          }, [] as JSX.Element[])}
        </div>
      </div>
      <div
        onClick={() => handleClick()}
        className="fixed bottom-10 right-10 cursor-pointer h-10 w-10 bg-[#CC1A58] rounded-full flex justify-center items-center content-center"
      >
        <FaPlus />
      </div>
      <EditModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        item={selectedItem}
      />
        <ViewModal
        isOpen={showViewModal}
        onClose={() => setShowViewModal(false)}
        item={selectedItem}
      />
      <AddModal isOpen={showAddModal} onClose={() => setShowAddModal(false)} />
    </main>
  );
}
