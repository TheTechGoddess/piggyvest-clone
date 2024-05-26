import { useState, useEffect } from "react";
import { BsBuildingsFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";

interface MenuItem {
  img: string;
  name: string;
  email: string;
  number: string;
  work: string;
  starred: boolean;
  color: string;
}

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: MenuItem | null;
  onSave: (updatedItem: MenuItem) => void;
}

const EditModal: React.FC<EditModalProps> = ({
  isOpen,
  onClose,
  item,
  onSave,
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [work, setWork] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (item) {
      const nameParts = item.name.split(" ");
      setFirstName(nameParts[0] || "");
      setLastName(nameParts.slice(1).join(" ") || "");
      setWork(item.work);
      setEmail(item.email);
      setNumber(item.number);
      // setNotes(item.notes);
    }
  }, [item]);

  const handleSubmit = () => {
    if (item) {
      const updatedItem = {
        ...item,
        name: `${firstName} ${lastName}`,
        work,
        email,
        number,
        notes,
      };
      onSave(updatedItem);
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-gray-500 w-full bg-opacity-75 z-50 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="bg-white w-[50%]">
        <h2 className="text-xl font-semibold p-5 bg-[#F7F7F7] text-[#202020]">
          Edit Contact
        </h2>
        <div className="px-6 flex flex-col space-y-3 py-3">
          {item && (
            <>
              <div className="flex justify-between items-start">
                <div className="w-[10%] flex justify-center">
                  <div
                    className="w-14 h-14 rounded-full flex justify-center text-white items-center text-sm"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.img}
                  </div>
                </div>

                <div className="w-[40%]">
                  <p className="text-xs font-medium text-gray-400">
                    First Name
                  </p>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="border-b-2 border-[#E5E5E5] p-1 w-full bg-greybg outline-none text-sm text-[#202020] font-semibold"
                  />
                </div>
                <div className="w-[40%]">
                  <p className="text-xs font-medium text-gray-400">Last Name</p>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="border-b-2 border-[#E5E5E5] p-1 w-full bg-greybg outline-none text-sm text-[#202020] font-semibold"
                  />
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div className="w-[10%] flex justify-center">
                  <BsBuildingsFill className="text-[#929292] text-lg" />
                </div>
                <div className="w-[40%]">
                  <input
                    type="text"
                    value={work}
                    onChange={(e) => setWork(e.target.value)}
                    className="border-b-2 border-[#E5E5E5] p-1 w-full bg-greybg outline-none text-sm text-[#202020] font-semibold"
                  />
                </div>
                <div className="w-[40%]">
                  <input
                    type="text"
                    name="jobTitle"
                    placeholder="Job Title"
                    className="border-b-2 border-[#E5E5E5] p-1 w-full bg-greybg outline-none text-sm text-[#202020] font-semibold"
                  />
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div className="w-[10%] flex justify-center">
                  <IoMdMail className="text-[#929292] text-lg" />
                </div>
                <div className="w-[40%]">
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-b-2 border-[#E5E5E5] p-1 w-full bg-greybg outline-none text-sm text-[#202020] font-semibold"
                  />
                </div>
                <div className="w-[40%]">
                  <input
                    type="text"
                    name="label"
                    placeholder="Label"
                    className="border-b-2 border-[#E5E5E5] p-1 w-full bg-greybg outline-none text-sm text-[#202020] font-semibold"
                  />
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div className="w-[10%] flex justify-center">
                  <FaPhoneAlt className="text-[#929292] text-lg" />
                </div>
                <div className="w-[40%]">
                  <input
                    type="text"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    className="border-b-2 border-[#E5E5E5] p-1 w-full bg-greybg outline-none text-sm text-[#202020] font-semibold"
                  />
                </div>
                <div className="w-[40%]">
                  <input
                    type="text"
                    name="phoneType"
                    placeholder="Mobile"
                    className="border-b-2 border-[#E5E5E5] p-1 w-full bg-greybg outline-none text-sm text-[#202020] font-semibold"
                  />
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div className="w-[10%] flex justify-center">
                  <CgNotes className="text-[#929292] text-lg" />
                </div>
                <div className="w-[85%]">
                  <input
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="border-b-2 border-[#E5E5E5] p-1 w-full bg-greybg outline-none text-sm text-[#202020] font-semibold"
                  />
                </div>
              </div>
              <div className="flex justify-end self-end space-x-8">
                <button
                  onClick={onClose}
                  className="text-[#4527A0] font-semibold"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="text-[#4527A0] font-semibold"
                >
                  Save
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditModal;
