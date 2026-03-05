import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaEdit, FaSave, FaTimes } from "react-icons/fa";

export default function Profile() {
  const navigate = useNavigate();

  const initialData = {
    name: "Farhana Bhatt",
    dob: "2001-01-01",
    gender: "Female",
    phone: "+55 9876543210",
    email: "abc123@gmail.com",
    state: "Kashmir",
    city: "Srinagar",
    pincode: "278901",
    language: "English",
  };

  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState(initialData);
  const [originalData, setOriginalData] = useState(initialData); // ✅ backup

  const handleEdit = () => {
    setOriginalData(formData); // save old data
    setIsEdit(true);
  };

  const handleCancel = () => {
    setFormData(originalData); // restore old data
    setIsEdit(false);
  };

  const handleSave = () => {
    setIsEdit(false);
    // 👉 API call can go here
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-4 text-gray-600 hover:text-black"
      >
        <FaArrowLeft /> Back
      </button>

      {/* HEADER */}
      <div className="flex items-center gap-6 mb-6">
        <img
          src="https://randomuser.me/api/portraits/women/68.jpg"
          className="w-28 h-28 rounded-full"
          alt="Profile"
        />
        <div>
          <h1 className="text-2xl font-semibold">{formData.name}</h1>
          <p className="text-gray-500">Yoga Trainer | 5+ Years</p>
          <p className="text-green-600 text-sm">⭐ 4.5 (123 Reviews)</p>
        </div>
      </div>

      {/* PERSONAL DETAILS */}
      <div className="bg-[#f6fbfa] p-6 rounded-xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-lg">Personal Details</h2>

          {!isEdit ? (
            <button
              onClick={handleEdit}
              className="flex items-center gap-2 border px-4 py-1 rounded-md text-sm"
            >
              <FaEdit /> Edit
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={handleSave}
                className="flex items-center gap-1 border px-3 py-1 rounded-md text-sm"
              >
                <FaSave /> Save
              </button>
              <button
                onClick={handleCancel}
                className="flex items-center gap-1 border px-3 py-1 rounded-md text-sm"
              >
                <FaTimes /> Cancel
              </button>
            </div>
          )}
        </div>

          <Input label="Name" name="name" value={formData.name} onChange={handleChange} disabled={!isEdit}  />
        <div className="grid grid-cols-2 gap-4 mt-4">
          <Select label="Gender" name="gender" value={formData.gender} onChange={handleChange} disabled={!isEdit}
            options={["Male", "Female", "Other"]} />

          <Input label="Date of Birth" type="date" name="dob" value={formData.dob} onChange={handleChange} disabled={!isEdit} />
          <Input label="Email Address" name="email" value={formData.email} onChange={handleChange} disabled={!isEdit} />
          <Input label="Contact Number" name="phone" value={formData.phone} onChange={handleChange} disabled={!isEdit} />

          <Select label="City" name="city" value={formData.city} onChange={handleChange} disabled={!isEdit}
            options={["Srinagar", "Delhi", "Mumbai", "Bangalore"]} />

          <Select label="State" name="state" value={formData.state} onChange={handleChange} disabled={!isEdit}
            options={["Kashmir", "Delhi", "Maharashtra", "Karnataka"]} />

          <Select label="Language" name="language" value={formData.language} onChange={handleChange} disabled={!isEdit}
            options={["English", "Hindi", "Urdu"]} />

          <Input label="Pincode" name="pincode" value={formData.pincode} onChange={handleChange} disabled={!isEdit} />
        </div>
      </div>
    </div>
  );
}

/* INPUT */
function Input({ label, name, value, onChange, disabled, type = "text" }) {
  return (
    <div>
      <label className="text-sm text-gray-500">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`w-full mt-1 p-2 border rounded-md ${
          disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white"
        }`}
      />
    </div>
  );
}

/* SELECT */
function Select({ label, name, value, onChange, disabled, options }) {
  return (
    <div>
      <label className="text-sm text-gray-500">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`w-full mt-1 p-2 border rounded-md ${
          disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white"
        }`}
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
