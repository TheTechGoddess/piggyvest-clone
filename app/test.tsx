import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
  ];
  const starredCount = menuItems.filter((item) => item.starred).length;
  const ContactItem = ({ item }: { item: MenuItem }) => (
    <div
      key={item.email}
      className="flex justify-between items-center w-full mb-4 text-sm"
    >
      <div className="w-8 h-8 bg-black rounded-full flex justify-center text-white items-center">
        {item.img}
      </div>
      <p className="text-[#212121] font-bold">{item.name}</p>
      <p className="text-[#212121] font-medium">{item.email}</p>
      <p className="text-[#212121] font-medium">{item.number}</p>
    </div>
  );

  return (
    <main className="flex min-h-screen h-full flex-col p-8 w-full">
      <div className="w-full">
        <p className="text-[#616161] font-medium">
          Starred Contacts ({starredCount})
        </p>
        <div className="my-4 flex flex-col space-y-4 w-full items-start">
          <div className="w-full flex items-start">
            <div className="w-[10%]">⭐</div>
            <div className="w-[90%]">
              {menuItems
                .filter((item) => item.starred)
                .map((item) => (
                  <ContactItem key={item.email} item={item} />
                ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-[#616161] font-medium">
          Contacts ({menuItems.length})
        </p>
        <div className="my-4 flex flex-col space-y-4 w-full items-start">
          <div className="w-full flex items-start">
            <div className="w-[10%]">⭐</div>
            <div className="w-[90%]">
              {menuItems.map((item) => (
                <ContactItem key={item.email} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
