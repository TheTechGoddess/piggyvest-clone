import { useState } from "react";
import { FaStar, FaPlus } from "react-icons/fa";
import { BsBuildingsFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";

interface AddModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddModal: React.FC<AddModalProps> = ({ isOpen, onClose }) => {
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
          Create Contact
        </h2>
        <div className="px-6  flex flex-col space-y-3 py-3">
          <div className="flex justify-between items-center">
            <div className="w-[10%] flex justify-center">
              <div
                className="w-14 h-14 rounded-full flex justify-center text-white items-center text-sm"
                style={{ backgroundColor: "#cccccc" }}
              >
                <FaPlus />
              </div>
            </div>

            <div className="w-[40%]">
              <input
                type="text"
                placeholder="First name"
                className="border-b-2 border-[#E5E5E5] focus:none p-1 w-full bg-greybg outline-none text-sm placeholder:text-[#BFBFBF] placeholder:font-semibold text-[#202020] font-semibold"
              />
            </div>
            <div className="w-[40%]">
              <input
                type="text"
                placeholder="Last name"
                className="border-b-2 border-[#E5E5E5] focus:none p-1 w-full bg-greybg outline-none text-sm placeholder:text-[#BFBFBF] placeholder:font-semibold text-[#202020] font-semibold"
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
                placeholder="Company"
                className="border-b-2 border-[#E5E5E5] focus:none p-1 w-full bg-greybg outline-none text-sm placeholder:text-[#BFBFBF] placeholder:font-semibold text-[#202020] font-semibold"
              />
            </div>
            <div className="w-[40%]">
              <input
                type="text"
                placeholder="Job Title"
                className="border-b-2 border-[#E5E5E5] focus:none p-1 w-full bg-greybg outline-none text-sm placeholder:text-[#BFBFBF] placeholder:font-semibold text-[#202020] font-semibold"
              />
            </div>
          </div>
          <div className="flex justify-between items-start">
            <div className="w-[10%] flex justify-center">
              <IoMdMail className="text-[#929292] text-lg" />
            </div>

            <div className="w-[85%]">
              <input
                type="text"
                placeholder="Email"
                className="border-b-2 border-[#E5E5E5] focus:none p-1 w-full bg-greybg outline-none text-sm placeholder:text-[#BFBFBF] placeholder:font-semibold text-[#202020] font-semibold"
              />
            </div>
          </div>
          <div className="flex justify-between items-start">
            <div className="w-[10%] flex justify-center">
              <FaPhoneAlt className="text-[#929292] text-lg" />
            </div>

            <div className="w-[85%]">
              <input
                type="text"
                placeholder="Phone"
                className="border-b-2 border-[#E5E5E5] focus:none p-1 w-full bg-greybg outline-none text-sm placeholder:text-[#BFBFBF] placeholder:font-semibold text-[#202020] font-semibold"
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
                placeholder="Notes"
                className="border-b-2 border-[#E5E5E5] focus:none p-1 w-full bg-greybg outline-none text-sm placeholder:text-[#BFBFBF] placeholder:font-semibold text-[#202020] font-semibold"
              />
            </div>
          </div>
          <div className="flex justify-end self-end space-x-8">
            <button onClick={onClose} className=" text-[#4527A0] font-semibold">
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className=" text-[#4527A0] font-semibold"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
