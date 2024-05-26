import { useState } from "react";
import { FaEdit, FaStar, FaPlus } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { BsBuildingsFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { MdClose } from "react-icons/md";

interface ViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: MenuItem | null;
}

const ViewModal: React.FC<ViewModalProps> = ({ isOpen, onClose, item }) => {
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
      {item && (
        <>
          <div className="bg-white w-[50%]">
            <div className="p-5 bg-[#F7F7F7] flex justify-between items-center">
              <div className="text-xl font-semibold   text-[#202020] flex space-x-5 items-center">
                <div
                  className="w-14 h-14 rounded-full flex justify-center text-white items-center text-sm"
                  style={{ backgroundColor: item.color }}
                >
                  {item.img}
                </div>
                <h2 className="">{item.name}</h2>
              </div>
              <div className="flex space-x-3">
                <FaStar className="text-[#F80054] cursor-pointer" />
                <MdEdit className="text-gray-600 cursor-pointer" />
                <MdDelete className="text-gray-500 cursor-pointer" />
                <MdClose onClick={onClose} className="cursor-pointer" />
              </div>
            </div>

            <div className="px-6  flex flex-col space-y-3 py-5">
              <p className="font-semibold mb-6">Contact Details</p>
              <div className=" flex flex-col space-y-3">
                <div className="flex space-x-5 items-center">
                  <BsBuildingsFill className="text-[#929292] text-lg" />
                  <p className="font-semibold">{item.work}</p>
                </div>
                <div className="flex space-x-5 items-center">
                  <IoMdMail className="text-[#929292] text-lg" />
                  <p className="font-semibold text-[#4527A0]">{item.email}</p>
                </div>
                <div className="flex space-x-5 items-center">
                  <FaPhoneAlt className="text-[#929292] text-lg" />
                  <p className="font-semibold text-[#4527A0]">{item.number}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ViewModal;
