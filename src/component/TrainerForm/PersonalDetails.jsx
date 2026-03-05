// import React, { useState } from "react";
// import { FaCamera } from "react-icons/fa";
// import bgForm from "../../assets/bgform.svg";

// export default function PersonalDetails({ next }) {
//   const [profileImage, setProfileImage] = useState(null);

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setProfileImage(URL.createObjectURL(file));
//     }
//   };

//   return (
//     <div className="border-20 bg-[#1D7464] border-[#1D7464] rounded-xl -mt-5">
//       <div className="bg-white p-8 rounded-xl border border-gray-300 shadow-sm max-w-5xl mx-auto">
        
//        {/* Header */}
//         <div className="flex justify-between items-start mb-8">
//           <h2 className="text-2xl font-semibold text-[#0E7F70] flex items-center gap-2">
//             <span className="text-xl text-black">1)</span> Personal Details
//           </h2>

//           {/* Profile Image */}
//           <div className="relative">
//             <img
//               src={profileImage || "https://i.pravatar.cc/150?img=47"}
//               alt="Profile"
//               className="w-20 h-20 rounded-full object-cover border"
//             />

//             <label className="absolute bottom-0 right-0 bg-[#0E7F70] text-white p-2 rounded-full cursor-pointer text-sm">
//               <FaCamera />
//               <input type="file" onChange={handleImageUpload} className="hidden" />
//             </label>
//           </div>
//         </div>

//         {/* Form */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//           {/* Name (Floating Label) */}
//           <div className="col-span-2 relative mt-4">
//             <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-teal-700">
//               Name
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Full Name (as per official ID)"
//               className="w-full border border-gray-300 rounded-md p-3 pt-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-700"
//             />
//           </div>

//           {/* DOB */}
//           <div className="relative mt-4">
//             <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-teal-700">
//               Date of Birth
//             </label>
//             <input
//               type="date"
//               className="w-full border border-gray-300 rounded-md p-3 pt-4 focus:outline-none focus:ring-2 focus:ring-teal-700"
//             />
//           </div>

//           {/* Gender */}
//           <div className="relative mt-4">
//             <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-teal-700">
//               Gender
//             </label>
//             <select className="w-full border border-gray-300 rounded-md p-3 pt-4 focus:outline-none focus:ring-2 focus:ring-teal-700">
//               <option>Select Gender</option>
//               <option>Male</option>
//               <option>Female</option>
//               <option>Other</option>
//             </select>
//           </div>

//           {/* Contact Number */}
//           <div className="relative mt-4">
//             <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-teal-700">
//               Contact Number
//             </label>
//             <input
//               type="text"
//               placeholder="Enter contact number"
//               className="w-full border border-gray-300 rounded-md p-3 pt-4 focus:outline-none focus:ring-2 focus:ring-teal-700"
//             />
//           </div>

//           {/* Email */}
//           <div className="relative mt-4">
//             <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-teal-700">
//               Email Address
//             </label>
//             <input
//               type="email"
//               placeholder="Enter the email address"
//               className="w-full border border-gray-300 rounded-md p-3 pt-4 focus:outline-none focus:ring-2 focus:ring-teal-700"
//             />
//           </div>

//           {/* State */}
//           <div className="relative mt-4">
//             <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-teal-700">
//               State
//             </label>
//             <select className="w-full border border-gray-300 rounded-md p-3 pt-4 focus:outline-none focus:ring-2 focus:ring-teal-700">
//               <option>Select State</option>
//               <option>Delhi</option>
//               <option>Mumbai</option>
//               <option>Uttar Pradesh</option>
//             </select>
//           </div>

//           {/* City */}
//           <div className="relative mt-4">
//             <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-teal-700">
//               City
//             </label>
//             <select className="w-full border border-gray-300 rounded-md p-3 pt-4 focus:outline-none focus:ring-2 focus:ring-teal-700">
//               <option>Select City</option>
//               <option>Noida</option>
//               <option>Kanpur</option>
//               <option>Lucknow</option>
//             </select>
//           </div>

//           {/* Pincode */}
//           <div className="relative mt-4">
//             <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-teal-700">
//               Pincode
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Pincode"
//               className="w-full border border-gray-300 rounded-md p-3 pt-4 focus:outline-none focus:ring-2 focus:ring-teal-700"
//             />
//           </div>

//           {/* Language */}
//           <div className="relative mt-4">
//             <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-teal-700">
//               Language
//             </label>
//             <select className="w-full border border-gray-300 rounded-md p-3 pt-4 focus:outline-none focus:ring-2 focus:ring-teal-700">
//               <option>Select Language</option>
//               <option>Hindi</option>
//               <option>English</option>
//               <option>Both</option>
//             </select>
//           </div>
//         </div>

//         {/* Continue Button */}
//         <div className="flex justify-center mt-10">
//           <button
//             onClick={next}
//             className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg shadow-md"
//           >
//             Save & Continue
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }




import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import axios from "axios";

export default function PersonalDetails({ data, setData, next }) {
  const [loading, setLoading] = useState(false);

  const DEFAULT_IMAGE = null;

  const convertToBase64 = (file, callback) => {
    const reader = new FileReader();
    reader.onloadend = () => callback(reader.result);
    reader.readAsDataURL(file);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    convertToBase64(file, (base64) => {
      setData((prev) => ({
        ...prev,
        profileImage: base64,
      }));
    });
  };

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // --- Submit Form ---
  const handleSubmit = async () => {
    try {
      setLoading(true);

      const formDataToSend = new FormData();

      Object.keys(data).forEach((key) => {
        if (key !== "profileImage") {
          formDataToSend.append(key, data[key]);
        }
      });

      if (data.profileImage && data.profileImage.startsWith("data")) {
        const res = await fetch(data.profileImage);
        const blob = await res.blob();
        formDataToSend.append("profile_photo", blob, "profile.jpg");
      }

      const response = await axios.post(
        "https://atmayantra-11.onrender.com/api/trainers/personal-details/",
        formDataToSend,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      // ✅ Show backend response message
      alert(response.data.message || "Personal details saved successfully!");

      next();
    } catch (err) {
      console.error(err.response?.data || err.message);

      // ❌ Show backend error message
      alert(
        err.response?.data?.message ||
          "Failed to save personal details"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border-20 bg-[#1D7464] border-[#1D7464] rounded-xl -mt-5">
      <div className="bg-white p-8 rounded-xl border border-gray-300 shadow-sm max-w-5xl mx-auto">
        
        <div className="flex justify-between items-start mb-8">
          <h2 className="text-2xl font-semibold text-[#0E7F70] flex items-center gap-2">
            <span className="text-xl text-black">1)</span> Personal Details
          </h2>

          <div className="relative">
            {data.profileImage ? (
              <img
                src={data.profileImage}
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover border"
              />
            ) : (
              <div className="w-20 h-20 rounded-full border flex items-center justify-center text-4xl text-gray-400">
                <FaUser />
              </div>
            )}

            <label className="absolute bottom-0 right-0 bg-[#0E7F70] text-white p-2 rounded-full cursor-pointer text-sm">
              <FaCamera />
              <input type="file" onChange={handleImageUpload} className="hidden" />
            </label>
          </div>
        </div>

        {/* FORM FIELDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="col-span-2 relative mt-4">
            <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-teal-700">
              Name
            </label>
            <input
              type="text"
              name="full_name"
              value={data.full_name}
              onChange={handleChange}
              placeholder="Enter Full Name (as per official ID)"
              className="w-full border border-gray-300 rounded-md p-3 pt-4"
            />
          </div>

          <div className="relative mt-4">
            <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-teal-700">
              Date of Birth
            </label>
            <input
              type="date"
              name="date_of_birth"
              value={data.date_of_birth}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-3 pt-4"
            />
          </div>

          <div className="relative mt-4">
            <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-teal-700">
              Gender
            </label>
            <select
              name="gender"
              value={data.gender}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-3 pt-4"
            >
              <option value="" disabled>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div className="relative mt-4">
            <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-teal-700">
              Contact Number
            </label>
            <input
              type="text"
              name="contact_number"
              value={data.contact_number}
              onChange={handleChange}
              placeholder="Enter contact number"
              className="w-full border border-gray-300 rounded-md p-3 pt-4"
            />
          </div>

          <div className="relative mt-4">
            <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-teal-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              placeholder="Enter the email address"
              className="w-full border border-gray-300 rounded-md p-3 pt-4"
            />
          </div>

          <div className="relative mt-4">
            <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-teal-700">
              State
            </label>
            <select
              name="state"
              value={data.state}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-3 pt-4"
            >
              <option value="" disabled>Select State</option>
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Uttar Pradesh</option>
            </select>
          </div>

          <div className="relative mt-4">
            <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-teal-700">
              City
            </label>
            <select
              name="city"
              value={data.city}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-3 pt-4"
            >
              <option value="" disabled>Select City</option>
              <option>Noida</option>
              <option>Kanpur</option>
              <option>Lucknow</option>
            </select>
          </div>

          <div className="relative mt-4">
            <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-teal-700">
              Pincode
            </label>
            <input
              type="text"
              name="pincode"
              value={data.pincode}
              onChange={handleChange}
              placeholder="Enter Pincode"
              className="w-full border border-gray-300 rounded-md p-3 pt-4"
            />
          </div>

          <div className="relative mt-4">
            <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-teal-700">
              Language
            </label>
            <select
              name="spoken_language"
              value={data.spoken_language}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-3 pt-4"
            >
              <option value="" disabled>Select Language</option>
              <option>Hindi</option>
              <option>English</option>
              <option>Both</option>
            </select>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg shadow-md"
          >
            {loading ? "Saving..." : "Save & Continue"}
          </button>
        </div>
      </div>
    </div>
  );
}
