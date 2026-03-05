// import React, { useState } from "react";
// import { FaPlus, FaUpload } from "react-icons/fa";

// export default function Certification({ next, prev }) {
//   const [photo, setPhoto] = useState(null);

//   const handlePhotoUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setPhoto(URL.createObjectURL(file));
//     }
//   };

//   return (
//     <div className="border-20 bg-[#1D7464] border-[#1D7464] rounded-xl ">
//       <div className="bg-white p-8 rounded-xl border border-gray-300 shadow-sm max-w-5xl mx-auto">

//         {/* Header */}
//         <h2 className="text-2xl font-semibold text-[#0E7F70] flex items-center gap-2 mb-8">
//           <span className="text-xl text-black">2)</span> Certification
//         </h2>

//         {/* FORM GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//           {/* Highest Degree */}
//           <div className="relative mt-4">
//             <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-teal-700">
//               Highest Degree
//             </label>
//             <input
//               type="text"
//               placeholder="Enter your highest Degree"
//               className="w-full border border-gray-300 rounded-md p-3 pt-4 text-gray-800
//               placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-700"
//             />
//           </div>

//           {/* Specializations */}
//           <div className="relative mt-4">
//             <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-teal-700">
//               Specializations
//             </label>
//             <input
//               type="text"
//               placeholder="e.g., Meditation, Pranic Healing, etc."
//               className="w-full border border-gray-300 rounded-md p-3 pt-4 text-gray-800
//               placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-700"
//             />
//           </div>

//           {/* Year of Graduation */}
//           <div className="relative mt-4">
//             <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-teal-700">
//               Year of Graduation
//             </label>
//             <select
//               className="w-full border border-gray-300 rounded-md p-3 pt-4 focus:outline-none 
//               focus:ring-2 focus:ring-teal-700"
//             >
//               <option>Select your graduation year</option>
//               {Array.from({ length: 30 }, (_, i) => (
//                 <option key={i}>{2025 - i}</option>
//               ))}
//             </select>
//           </div>

//           {/* Work Experience */}
//           <div className="relative mt-4">
//             <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-teal-700">
//               Work Experience
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Location or Years, Number"
//               className="w-full border border-gray-300 rounded-md p-3 pt-4 focus:outline-none 
//               focus:ring-2 focus:ring-teal-700"
//             />
//           </div>

//           {/* Certified Yoga Professional? */}
//           <div className="relative mt-4">
//             <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-teal-700">
//               Are You a Certified Yoga Professional?
//             </label>
//             <select
//               className="w-full border border-gray-300 rounded-md p-3 pt-4 focus:outline-none 
//               focus:ring-2 focus:ring-teal-700"
//             >
//               <option>Select</option>
//               <option>Yes</option>
//               <option>No</option>
//             </select>
//           </div>

//           {/* Registration Number */}
//           <div className="relative mt-4">
//             <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-teal-700">
//               Registration Number
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Highest Degree"
//               className="w-full border border-gray-300 rounded-md p-3 pt-4 focus:outline-none 
//               focus:ring-2 focus:ring-teal-700"
//             />
//           </div>

//           {/* Certification Type */}
//           <div className="relative mt-4">
//             <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-teal-700">
//               Certification Type
//             </label>
//             <select
//               className="w-full border border-gray-300 rounded-md p-3 pt-4 focus:outline-none 
//               focus:ring-2 focus:ring-teal-700"
//             >
//               <option>Select Certification Type</option>
//               <option>RYT-200</option>
//               <option>RYT-500</option>
//               <option>QCI Level 1</option>
//               <option>QCI Level 2</option>
//               <option>Other</option>
//             </select>
//           </div>

//           {/* Issuing Authority */}
//           <div className="relative mt-4">
//             <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-teal-700">
//               Issuing Authority
//             </label>
//             <select
//               className="w-full border border-gray-300 rounded-md p-3 pt-4 focus:outline-none 
//               focus:ring-2 focus:ring-teal-700"
//             >
//               <option>Select Authority</option>
//               <option>Yoga Alliance</option>
//               <option>Govt. of India</option>
//               <option>Private Institute</option>
//             </select>
//           </div>

//         </div>

//         {/* PHOTO UPLOAD */}
//         <div className="mt-6">
//           <div className="border border-gray-300 rounded-lg p-4 flex items-center justify-between">
//             <div className="flex items-center gap-3">
//               <FaUpload className="text-blue-600 text-lg" />
//               <span className="font-medium text-gray-700">Passport Size Photo</span>
//             </div>

//             <label className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg cursor-pointer">
//               <FaPlus />
//               Add
//               <input type="file" onChange={handlePhotoUpload} className="hidden" />
//             </label>
//           </div>

//           {photo && (
//             <div className="mt-3">
//               <img
//                 src={photo}
//                 alt="Uploaded"
//                 className="h-24 w-24 object-cover rounded-lg border"
//               />
//             </div>
//           )}
//         </div>

//         {/* BUTTONS */}
//         <div className="flex justify-between mt-10">

//           {/* Back Button */}
//           <button
//             onClick={prev}
//             className="bg-gray-300 hover:bg-gray-400 text-black py-3 px-8 rounded-lg shadow-md"
//           >
//             Back
//           </button>

//           {/* Next Button */}
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
import { FaPlus, FaUpload } from "react-icons/fa";
import axios from "axios";

export default function Certification({ next, prev, data, setData, personalData }) {
  const [photo, setPhoto] = useState(null);

  const handleInput = (field, value) => {
    setData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));
      setData((prev) => ({
        ...prev,
        certificate_photo: file,
      }));
    }
  };

  const handleSubmit = async () => {
    try {
      const trainerID = personalData.contact_number;

      const payload = {
        highest_degree: data.highest_degree || "",
        specialization: data.specialization || "",
        year_of_graduation: data.graduation_year || "",
        work_experience: data.work_experience || "",
        yoga_certified: data.certified_yoga || "",
        registration_number: data.registration_number || "",
        certification_type: data.certification_type || "",
        issuing_authority: data.issuing_authority || "",
        trainer: trainerID,
      };

      const response = await axios.post(
        "https://atmayantra-11.onrender.com/api/trainers/certifications/",
        payload
      );

      // ✅ SUCCESS MESSAGE FROM API
      alert(response?.data?.message || "Certification saved successfully!");

      next();
    } catch (error) {
      console.log("Error:", error);

      // ❌ ERROR MESSAGE FROM API
      const errorMsg =
        error?.response?.data?.message ||
        error?.response?.data?.error ||
        error?.message ||
        "Something went wrong!";

      alert(errorMsg);
    }
  };

  return (
    <div className="border-20 bg-[#1D7464] border-[#1D7464] rounded-xl ">
      <div className="bg-white p-8 rounded-xl border border-gray-300 shadow-sm max-w-5xl mx-auto">

        <h2 className="text-2xl font-semibold text-[#0E7F70] flex items-center gap-2 mb-8">
          <span className="text-xl text-black">2)</span> Certification
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="relative mt-4">
            <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-teal-700">
              Highest Degree
            </label>
            <input
              type="text"
              value={data.highest_degree || ""}
              onChange={(e) => handleInput("highest_degree", e.target.value)}
              placeholder="Enter your highest Degree"
              className="w-full border border-gray-300 rounded-md p-3 pt-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-700"
            />
          </div>

          <div className="relative mt-4">
            <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-teal-700">
              Specializations
            </label>
            <input
              type="text"
              value={data.specialization || ""}
              onChange={(e) => handleInput("specialization", e.target.value)}
              placeholder="e.g., Meditation, Pranic Healing, etc."
              className="w-full border border-gray-300 rounded-md p-3 pt-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-700"
            />
          </div>

          <div className="relative mt-4">
            <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-teal-700">
              Year of Graduation
            </label>
            <select
              value={data.graduation_year || ""}
              onChange={(e) => handleInput("graduation_year", e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3 pt-4 focus:outline-none focus:ring-2 focus:ring-teal-700"
            >
              <option>Select your graduation year</option>
              {Array.from({ length: 30 }, (_, i) => (
                <option key={i}>{2025 - i}</option>
              ))}
            </select>
          </div>

          <div className="relative mt-4">
            <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-teal-700">
              Work Experience
            </label>
            <input
              type="text"
              value={data.work_experience || ""}
              onChange={(e) => handleInput("work_experience", e.target.value)}
              placeholder="Enter Location or Years, Number"
              className="w-full border border-gray-300 rounded-md p-3 pt-4 focus:outline-none focus:ring-2 focus:ring-teal-700"
            />
          </div>

          <div className="relative mt-4">
            <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-teal-700">
              Are You a Certified Yoga Professional?
            </label>
            <select
              value={data.certified_yoga || ""}
              onChange={(e) => handleInput("certified_yoga", e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3 pt-4 focus:outline-none focus:ring-2 focus:ring-teal-700"
            >
              <option>Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          <div className="relative mt-4">
            <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-teal-700">
              Registration Number
            </label>
            <input
              type="text"
              value={data.registration_number || ""}
              onChange={(e) => handleInput("registration_number", e.target.value)}
              placeholder="Enter Registration Number"
              className="w-full border border-gray-300 rounded-md p-3 pt-4 focus:outline-none focus:ring-2 focus:ring-teal-700"
            />
          </div>

          <div className="relative mt-4">
            <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-teal-700">
              Certification Type
            </label>
            <select
              value={data.certification_type || ""}
              onChange={(e) => handleInput("certification_type", e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3 pt-4 focus:outline-none focus:ring-2 focus:ring-teal-700"
            >
              <option>Select Certification Type</option>
              <option>RYT-200</option>
              <option>RYT-500</option>
              <option>QCI Level 1</option>
              <option>QCI Level 2</option>
              <option>Other</option>
            </select>
          </div>

          <div className="relative mt-4">
            <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-teal-700">
              Issuing Authority
            </label>
            <select
              value={data.issuing_authority || ""}
              onChange={(e) => handleInput("issuing_authority", e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3 pt-4 focus:outline-none focus:ring-2 focus:ring-teal-700"
            >
              <option>Select Authority</option>
              <option>Yoga Alliance</option>
              <option>Govt. of India</option>
              <option>Private Institute</option>
            </select>
          </div>
        </div>

        <div className="flex justify-between mt-10">
          <button
            onClick={prev}
            className="bg-gray-300 hover:bg-gray-400 text-black py-3 px-8 rounded-lg shadow-md"
          >
            Back
          </button>

          <button
            onClick={handleSubmit}
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg shadow-md"
          >
            Save & Continue
          </button>
        </div>
      </div>
    </div>
  );
}
