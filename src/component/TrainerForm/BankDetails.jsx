// import React, { useState } from "react";
// import { FaUser, FaUniversity, FaKey, FaQrcode } from "react-icons/fa";
// import { MdOutlinePayment } from "react-icons/md";

// export default function BankDetails({ prev, onSubmit }) {
//   const initialData = {
//     accountHolder: "",
//     accountNumber: "",
//     ifsc: "",
//     upi: "",
//     accountType: "",
//     netBanking: "",
//     qrCode: "",
//   };

//   const isAdmin = true;

//   const [formData, setFormData] = useState(initialData);
//   const [bank, setBank] = useState("");
//   const [qrCode, setQrCode] = useState("");

//   const banks = [
//     { name: "SBI", icon: "/icons/sbi.png" },
//     { name: "HDFC", icon: "/icons/hdfc.png" },
//     { name: "ICICI", icon: "/icons/icici.png" },
//     { name: "Axis", icon: "/icons/axis.png" },
//     { name: "PNB", icon: "/icons/pnb.png" },
//   ];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleQrUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const qrUrl = URL.createObjectURL(file);
//       setQrCode(qrUrl);
//     }
//   };

//   const handleSubmit = () => {
//     const finalData = { ...formData, netBanking: bank, qrCode };
//     console.log("Bank Details Submitted:", finalData);

//     if (onSubmit) onSubmit(finalData);
//   };

//   return (
//     <div className="border-20 bg-[#1D7464] border-[#1D7464] rounded-xl ">
//     <div className="shadow-md rounded-lg p-6 bg-white text-black border border-gray-300">
//       {/* Heading */}
//       <div className="mb-4">
//         <h2 className="text-3xl font-semibold flex items-center gap-2 text-[#0E7F70]">
//           <span className="text-xl text-black">4)</span> Bank Details
//         </h2>

//         {/* ③ this is a 3 under the circle  */}
        
//         <p className="text-gray-600 text-lg ml-8">
//           Fill in bank details for Salary credit
//         </p>
//       </div>

//       <div className="flex">
//         {/* QR Code Section */}
//         <div className="w-1/3 flex flex-col items-center justify-center p-6 text-center">
//           <h3 className="font-bold mb-2 text-2xl">Bank QR Code</h3>
//           <p className="text-gray-500 text-lg mb-4">Supports PNG, JPG</p>

//           {qrCode ? (
//             <div className="flex flex-col items-center">
//               <img
//                 src={qrCode}
//                 alt="Bank QR Code"
//                 className="w-40 h-40 object-contain border rounded-md mb-4"
//               />

//               <label className="bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-700">
//                 Upload New QR Code
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleQrUpload}
//                   className="hidden"
//                 />
//               </label>
//             </div>
//           ) : (
//             <div className="flex flex-col items-center">
//               <FaQrcode size={80} className="text-gray-400 mb-4" />

//               <label className="bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-700">
//                 Upload QR Code
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleQrUpload}
//                   className="hidden"
//                 />
//               </label>
//             </div>
//           )}
//         </div>

//         {/* Divider */}
//         <div className="w-px mx-6 bg-gray-300"></div>

//         {/* Form Section */}
//         <div className="w-2/3 space-y-6">
//           {/* Account Holder */}
//           <div className="relative">
//             <label className="absolute -top-2 left-3 px-1 text-sm text-gray-500 bg-white">
//               Account Holder Name
//             </label>

//             <div className="flex items-center border rounded-md p-2 border-gray-300">
//               <input
//                 type="text"
//                 name="accountHolder"
//                 value={formData.accountHolder}
//                 onChange={handleChange}
//                 className="w-full outline-none"
//               />
//               <FaUser className="text-gray-400 ml-2" />
//             </div>
//           </div>

//           {/* Account Number */}
//           <div className="relative">
//             <label className="absolute -top-2 left-3 px-1 text-sm text-gray-500 bg-white">
//               Account Number
//             </label>

//             <div className="flex items-center border rounded-md p-2 border-gray-300">
//               <input
//                 type="text"
//                 name="accountNumber"
//                 value={formData.accountNumber}
//                 onChange={handleChange}
//                 className="w-full outline-none"
//               />
//               <FaUniversity className="text-gray-400 ml-2" />
//             </div>
//           </div>
//           {/*Confirm Account Number */}
//           <div className="relative">
//             <label className="absolute -top-2 left-3 px-1 text-sm text-gray-500 bg-white">
//              Confirm Account Number
//             </label>

//             <div className="flex items-center border rounded-md p-2 border-gray-300">
//               <input
//                 type="text"
//                 name="accountNumber"
//                 value={formData.accountNumber}
//                 onChange={handleChange}
//                 className="w-full outline-none"
//               />
//               <FaUniversity className="text-gray-400 ml-2" />
//             </div>
//           </div>

//           {/* IFSC Code */}
//           <div className="relative">
//             <label className="absolute -top-2 left-3 px-1 text-sm text-gray-500 bg-white">
//               IFSC Code
//             </label>

//             <div className="flex items-center border rounded-md p-2 border-gray-300">
//               <input
//                 type="text"
//                 name="ifsc"
//                 value={formData.ifsc}
//                 onChange={handleChange}
//                 className="w-full outline-none"
//               />
//               <FaKey className="text-gray-400 ml-2" />
//             </div>
//           </div>

//           {/* UPI ID */}
//           <div className="relative">
//             <label className="absolute -top-2 left-3 px-1 text-sm text-gray-500 bg-white">
//               UPI ID (Optional)
//             </label>

//             <div className="flex items-center border rounded-md p-2 border-gray-300">
//               <input
//                 type="text"
//                 name="upi"
//                 value={formData.upi}
//                 onChange={handleChange}
//                 className="w-full outline-none"
//               />
//               <MdOutlinePayment className="text-gray-400 ml-2" />
//             </div>
//           </div>

//           {/* Account Type */}
//           <div className="relative mt-4">
//             <label className="absolute -top-2 left-3 px-1 text-sm text-gray-500 bg-white">
//               Account Type
//             </label>

//             <div className="flex items-center border rounded-md p-2 border-gray-300">
//               <select
//                 name="accountType"
//                 value={formData.accountType}
//                 onChange={handleChange}
//                 className="w-full outline-none bg-white"
//               >
//                 <option value="">Select Account Type</option>
//                 <option>Saving Account</option>
//                 <option>Current Account</option>
//               </select>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Divider */}
//       <div className="flex items-center mb-8 mt-8 mr-10">
//         <div className="flex-grow border-t border-gray-300"></div>
//         <p className="text-gray-500 text-left mx-4 text-sm">Option</p>
//         <div className="flex-grow border-t border-gray-300"></div>
//       </div>

//       {/* Net Banking */}
//       <div className="relative mt-4">
//         <label className="absolute -top-2 left-3 px-1 text-sm text-gray-500 bg-white">
//           Net Banking
//         </label>

//         <div className="flex items-center border rounded-md p-2 border-gray-300">
//           <div
//             onClick={() => setBank(bank ? "" : "open")}
//             className="w-full cursor-pointer"
//           >
//             {bank && bank !== "open" ? bank : "– Select Bank –"}
//           </div>
//         </div>

//         {bank === "open" && (
//           <div className="absolute mt-1 w-full rounded-md shadow-lg bg-white z-10">
//             <div className="grid grid-cols-3 gap-2 p-2">
//               {banks.map((b, i) => (
//                 <div
//                   key={i}
//                   onClick={() => setBank(b.name)}
//                   className="flex flex-col items-center p-2 border rounded-md hover:bg-gray-100 cursor-pointer"
//                 >
//                   <img src={b.icon} alt={b.name} className="w-8 h-8 mb-1" />
//                   <span className="text-sm">{b.name}</span>
//                 </div>
//               ))}
//             </div>

//             <button className="bg-gradient-to-r from-teal-700 via-teal-500 to-teal-400 text-white px-4 py-2 rounded-md w-full mt-2">
//               View All Banks
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Bottom Buttons */}
//       <div className="flex justify-between mt-10">
        
//         {/* BACK BUTTON */}
//           <button
//             onClick={prev}
//             className="bg-gray-300 hover:bg-gray-400 text-black py-3 px-8 rounded-lg shadow-md"
//           >
//             Back
//           </button>

//         <button
//           onClick={handleSubmit}
//           className="bg-blue-600 text-white px-6 py-2 rounded-md"
//         >
//           Submit
//         </button>
//       </div>
//     </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import { FaUser, FaUniversity, FaKey, FaQrcode } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";

export default function BankDetails({ prev, trainerData, setTrainerData, personalData }) {
  const navigate = useNavigate();

  const initialData = {
    account_holder_name: "",
    account_number: "",
    confirm_account_number: "",
    ifsc_code: "",
    upi_id: "",
    account_type: "",
    netBanking: "",
  };

  const [formData, setFormData] = useState(initialData);
  const [bank, setBank] = useState("");
  const [qrFile, setQrFile] = useState(null);
  const [qrPreview, setQrPreview] = useState("");

  const [popupOpen, setPopupOpen] = useState(false);
  const [popupMsg, setPopupMsg] = useState("");

  const banks = [
    { name: "SBI", icon: "/icons/sbi.png" },
    { name: "HDFC", icon: "/icons/hdfc.png" },
    { name: "ICICI", icon: "/icons/icici.png" },
    { name: "Axis", icon: "/icons/axis.png" },
    { name: "PNB", icon: "/icons/pnb.png" },
  ];

  const mapAccountType = (type) => {
    if (type === "Saving Account") return "SAVING";
    if (type === "Current Account") return "CURRENT";
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "account_type") {
      setFormData((prev) => ({ ...prev, account_type: mapAccountType(value) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleQrUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setQrFile(file);
      setQrPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async () => {
    if (formData.account_number !== formData.confirm_account_number) {
      alert("Account number and confirm account number must match!");
      return;
    }

    const bankDetails = new FormData();
    bankDetails.append("trainer", personalData.contact_number);
    bankDetails.append("account_holder_name", formData.account_holder_name);
    bankDetails.append("account_number", formData.account_number);
    bankDetails.append("confirm_account_number", formData.confirm_account_number);
    bankDetails.append("ifsc_code", formData.ifsc_code);
    bankDetails.append("upi_id", formData.upi_id || "");
    bankDetails.append("account_type", formData.account_type);
    bankDetails.append("netBanking", bank || "");

    if (qrFile) bankDetails.append("qr_code_upload", qrFile);

    try {
      const response = await axios.post(
        "https://atmayantra-11.onrender.com/api/trainers/bank-details/",
        bankDetails,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      // ⭐ CHECK SUCCESS PROPERLY
      if (response.data?.status === "success") {
        const english = response.data?.message?.en || "";
        const hindi = response.data?.message?.hi || "";

        // ⭐ SHOW BOTH LANGUAGES
        setPopupMsg(`${english}\n\n${hindi}`);
        setPopupOpen(true);

        setTrainerData((prev) => ({
          ...prev,
          bankDetails: formData,
          qr_code_upload: qrFile,
        }));
      } else {
        // ❌ If backend returns error
        alert(response.data?.message || "Something went wrong.");
      }

    } catch (error) {
      console.error("BANK UPLOAD FAILED:", error.response);

      // alert(
      //   error.response?.data?.message ||
      //   error.response?.data?.error ||
      //   "Error submitting bank details"
      // );                                 // ye mujhe krna padh rha hai kyu ki ye sahi hi nhi ho rha hai 
    }
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
    navigate("/login");
  };

  return (
    <div className="border-20 bg-[#1D7464] border-[#1D7464] rounded-xl">
      <div className="shadow-md rounded-lg p-6 bg-white text-black border border-gray-300 max-w-5xl mx-auto">
        
        {/* UI SAME AS YOUR ORIGINAL CODE */}
        
        <div className="mb-4">
          <h2 className="text-3xl font-semibold flex items-center gap-2 text-[#0E7F70]">
            <span className="text-xl text-black">4)</span> Bank Details
          </h2>
          <p className="text-gray-600 text-lg ml-8">
            Fill in bank details for Salary credit
          </p>
        </div>

        <div className="flex">
          <div className="w-1/3 flex flex-col items-center justify-center p-6 text-center">
            <h3 className="font-bold mb-2 text-2xl">Bank QR Code</h3>
            <p className="text-gray-500 text-lg mb-4">Supports PNG, JPG</p>

            {qrPreview ? (
              <div className="flex flex-col items-center">
                <img
                  src={qrPreview}
                  alt="Bank QR Code"
                  className="w-40 h-40 object-contain border rounded-md mb-4"
                />
                <label className="bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-700">
                  Upload New QR Code
                  <input type="file" accept="image/*" onChange={handleQrUpload} className="hidden" />
                </label>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <FaQrcode size={80} className="text-gray-400 mb-4" />
                <label className="bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-700">
                  Upload QR Code
                  <input type="file" accept="image/*" onChange={handleQrUpload} className="hidden" />
                </label>
              </div>
            )}
          </div>

          <div className="w-2/3 space-y-6">
            <InputField
              label="Account Holder Name"
              name="account_holder_name"
              value={formData.account_holder_name}
              icon={<FaUser className="text-gray-400 ml-2" />}
              onChange={handleChange}
            />

            <InputField
              label="Account Number"
              name="account_number"
              value={formData.account_number}
              icon={<FaUniversity className="text-gray-400 ml-2" />}
              onChange={handleChange}
            />

            <InputField
              label="Confirm Account Number"
              name="confirm_account_number"
              value={formData.confirm_account_number}
              icon={<FaUniversity className="text-gray-400 ml-2" />}
              onChange={handleChange}
            />

            <InputField
              label="ifsc Code"
              name="ifsc_code"
              value={formData.ifsc_code}
              icon={<FaKey className="text-gray-400 ml-2" />}
              onChange={handleChange}
            />

            <InputField
              label="upi ID (Optional)"
              name="upi_id"
              value={formData.upi_id}
              icon={<MdOutlinePayment className="text-gray-400 ml-2" />}
              onChange={handleChange}
            />

            {/* Account Type */}
            <div className="relative mt-4">
              <label className="absolute -top-2 left-3 px-1 text-sm text-gray-500 bg-white">
                Account Type
              </label>
              <div className="flex items-center border rounded-md p-2 border-gray-300">
                <select
                  name="account_type"
                  value={
                    formData.account_type === "SAVING"
                      ? "Saving Account"
                      : formData.account_type === "CURRENT"
                      ? "Current Account"
                      : ""
                  }
                  onChange={handleChange}
                  className="w-full outline-none bg-white"
                >
                  <option value="">Select Account Type</option>
                  <option>Saving Account</option>
                  <option>Current Account</option>
                </select>
              </div>
            </div>

            {/* Net Banking */}
            <div className="relative mt-4">
              <label className="absolute -top-2 left-3 px-1 text-sm text-gray-500 bg-white">
                Net Banking
              </label>
              <div className="flex items-center border rounded-md p-2 border-gray-300">
                <div
                  onClick={() => setBank(bank ? "" : "open")}
                  className="w-full cursor-pointer"
                >
                  {bank && bank !== "open" ? bank : "– Select Bank –"}
                </div>
              </div>

              {bank === "open" && (
                <div className="absolute mt-1 w-full rounded-md shadow-lg bg-white z-10">
                  <div className="grid grid-cols-3 gap-2 p-2">
                    {banks.map((b, i) => (
                      <div
                        key={i}
                        onClick={() => setBank(b.name)}
                        className="flex flex-col items-center p-2 border rounded-md hover:bg-gray-100 cursor-pointer"
                      >
                        <img src={b.icon} alt={b.name} className="w-8 h-8 mb-1" />
                        <span className="text-sm">{b.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
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
            className="bg-blue-600 text-white px-6 py-2 rounded-md"
          >
            Submit
          </button>
        </div>
      </div>
 {/* ⭐ POPUP MODAL */}
      {popupOpen && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-white w-96 p-6 rounded-xl shadow-xl relative">
            <button
              onClick={handleClosePopup}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              <IoClose size={25} />
            </button>

            <h2 className="text-xl font-bold mb-3">Message</h2>
            <p className="text-gray-700 whitespace-pre-line">{popupMsg}</p>

            <button
              onClick={handleClosePopup}
              className="mt-5 bg-blue-600 text-white px-6 py-2 rounded-md w-full"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function InputField({ label, name, value, icon, onChange }) {
  return (
    <div className="relative">
      <label className="absolute -top-2 left-3 px-1 text-sm text-gray-500 bg-white">
        {label}
      </label>
      <div className="flex items-center border rounded-md p-2 border-gray-300">
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          className="w-full outline-none"
        />
        {icon}
      </div>
    </div>
  );
}
