import { useState } from "react";
import { FaEdit, FaStar, FaPlus } from "react-icons/fa";
import { BsBuildingsFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { MenuItem } from "../app/page/types";
import { FaPhoneAlt } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: MenuItem | null;
}

const EditModal: React.FC<EditModalProps> = ({ isOpen, onClose, item }) => {
  const [editedItem, setEditedItem] = useState<MenuItem | null>(null);

  // Function to handle form submission
  const handleSubmit = () => {
    // Implement form submission logic here
    onClose(); // Close the modal after submission
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
        <div className="px-6  flex flex-col space-y-3 py-3">
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
                    First name
                  </p>
                  <input
                    type="text"
                    placeholder={item.name.split(" ")[0]}
                    className="border-b-2 border-[#E5E5E5] focus:none p-1 w-full bg-greybg outline-none text-sm placeholder:text-[#202020] placeholder:font-semibold text-[#202020] font-semibold"
                  />
                </div>
                <div className="w-[40%]">
                  <p className="text-xs font-medium text-gray-400">Last Name</p>
                  <input
                    type="text"
                    placeholder={item.name.split(" ").slice(1).join(" ")}
                    className="border-b-2 border-[#E5E5E5] focus:none p-1 w-full bg-greybg outline-none text-sm placeholder:text-[#202020] placeholder:font-semibold text-[#202020] font-semibold"
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
                    placeholder="Fluid angle"
                    className="border-b-2 border-[#E5E5E5] focus:none p-1 w-full bg-greybg outline-none text-sm placeholder:text-[#202020] placeholder:font-semibold text-[#202020] font-semibold"
                  />
                </div>
                <div className="w-[40%]">
                  <input
                    type="text"
                    placeholder="Technical (Lead Africa)"
                    className="border-b-2 border-[#E5E5E5] focus:none p-1 w-full bg-greybg outline-none text-sm placeholder:text-[#202020] placeholder:font-semibold text-[#202020] font-semibold"
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
                    placeholder={item.email}
                    className="border-b-2 border-[#E5E5E5] focus:none p-1 w-full bg-greybg outline-none text-sm placeholder:text-[#202020] placeholder:font-semibold text-[#202020] font-semibold"
                  />
                </div>
                <div className="w-[40%]">
                  <input
                    type="text"
                    placeholder="Label"
                    className="border-b-2 border-[#E5E5E5] focus:none p-1 w-full bg-greybg outline-none text-sm placeholder:text-[#202020] placeholder:font-semibold text-[#202020] font-semibold"
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
                    placeholder={item.number}
                    className="border-b-2 border-[#E5E5E5] focus:none p-1 w-full bg-greybg outline-none text-sm placeholder:text-[#202020] placeholder:font-semibold text-[#202020] font-semibold"
                  />
                </div>
                <div className="w-[40%]">
                  <input
                    type="text"
                    placeholder="Mobile"
                    className="border-b-2 border-[#E5E5E5] focus:none p-1 w-full bg-greybg outline-none text-sm placeholder:text-[#202020] placeholder:font-semibold text-[#202020] font-semibold"
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
                    className="border-b-2 border-[#E5E5E5] focus:none p-1 w-full bg-greybg outline-none text-sm placeholder:text-[#202020] placeholder:font-semibold text-[#202020] font-semibold"
                  />
                </div>
              </div>
              <div className="flex justify-end self-end space-x-8">
                <button
                  onClick={onClose}
                  className=" text-[#4527A0] font-semibold"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className=" text-[#4527A0] font-semibold"
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
