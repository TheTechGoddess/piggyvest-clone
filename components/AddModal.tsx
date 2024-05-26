import { useState } from "react";
import { FaStar, FaPlus } from "react-icons/fa";
import { BsBuildingsFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";

interface AddModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (newContact: MenuItem) => void;
}

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const AddModal: React.FC<AddModalProps> = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    jobTitle: "",
    email: "",
    phone: "",
    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    const newContact: MenuItem = {
      img: formData.firstName.charAt(0).toUpperCase(),
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      number: formData.phone,
      work: formData.jobTitle,
      starred: false,
      color: getRandomColor(),
    };
    onSave(newContact);
    onClose();
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
        <div className="px-6 flex flex-col space-y-3 py-3">
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
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                className="border-b-2 border-[#E5E5E5] p-1 w-full bg-greybg outline-none text-sm placeholder:text-[#BFBFBF] placeholder:font-semibold text-[#202020] font-semibold"
              />
            </div>
            <div className="w-[40%]">
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                className="border-b-2 border-[#E5E5E5] p-1 w-full bg-greybg outline-none text-sm placeholder:text-[#BFBFBF] placeholder:font-semibold text-[#202020] font-semibold"
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
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
                className="border-b-2 border-[#E5E5E5] p-1 w-full bg-greybg outline-none text-sm placeholder:text-[#BFBFBF] placeholder:font-semibold text-[#202020] font-semibold"
              />
            </div>
            <div className="w-[40%]">
              <input
                type="text"
                name="jobTitle"
                placeholder="Job Title"
                value={formData.jobTitle}
                onChange={handleChange}
                className="border-b-2 border-[#E5E5E5] p-1 w-full bg-greybg outline-none text-sm placeholder:text-[#BFBFBF] placeholder:font-semibold text-[#202020] font-semibold"
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
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="border-b-2 border-[#E5E5E5] p-1 w-full bg-greybg outline-none text-sm placeholder:text-[#BFBFBF] placeholder:font-semibold text-[#202020] font-semibold"
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
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="border-b-2 border-[#E5E5E5] p-1 w-full bg-greybg outline-none text-sm placeholder:text-[#BFBFBF] placeholder:font-semibold text-[#202020] font-semibold"
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
                name="notes"
                placeholder="Notes"
                value={formData.notes}
                onChange={handleChange}
                className="border-b-2 border-[#E5E5E5] p-1 w-full bg-greybg outline-none text-sm placeholder:text-[#BFBFBF] placeholder:font-semibold text-[#202020] font-semibold"
              />
            </div>
          </div>
          <div className="flex justify-end self-end space-x-8">
            <button onClick={onClose} className="text-[#4527A0] font-semibold">
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="text-[#4527A0] font-semibold"
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
