// import React, { useEffect, useRef, useState } from "react";
// import { IoClose } from "react-icons/io5";

// export default function OtpModal({ open, onClose, onVerify }) {
//   const [otp, setOtp] = useState(["", "", "", "", "", ""]);
//   const inputRefs = useRef([]);
//   const [timer, setTimer] = useState(60);

//   useEffect(() => {
//     if (open) {
//       setOtp(["", "", "", "", "", ""]);
//       setTimer(60);
//       setTimeout(() => {
//         inputRefs.current[0]?.focus();
//       }, 100);
//     }
//   }, [open]);

//   // TIMER
//   useEffect(() => {
//     if (timer <= 0) return;

//     const interval = setInterval(() => {
//       setTimer((prev) => prev - 1);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [timer]);

//   const handleChange = (value, index) => {
//     if (!/^[0-9]?$/.test(value)) return;

//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);

//     if (value && index < 5) {
//       inputRefs.current[index + 1].focus();
//     }
//   };

//   const handleKeyDown = (e, index) => {
//     if (e.key === "Backspace" && !otp[index] && index > 0) {
//       inputRefs.current[index - 1].focus();
//     }
//   };

//   const handleResend = () => {
//     if (timer === 0) {
//       setOtp(["", "", "", "", "", ""]);
//       setTimer(60);
//       inputRefs.current[0].focus();
//     }
//   };

//   if (!open) return null;

//   return (
//     <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-start z-50">
//       <div className="bg-white rounded-2xl shadow-xl w-[350px] p-6 text-center relative ml-130 animate-fadeIn">

//         {/* Close */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-500 hover:text-black"
//         >
//           <IoClose size={22} />
//         </button>

//         <h2 className="text-xl font-semibold mb-2">Enter Verification Code</h2>
//         <p className="text-gray-500 mb-6 text-sm">
//           A 6-digit OTP has been sent to your contact number.
//         </p>

//         {/* OTP Boxes */}
//         <div className="flex justify-center gap-2 mb-6">
//           {Array.from({ length: 6 }).map((_, i) => (
//             <input
//               key={i}
//               maxLength="1"
//               value={otp[i]}
//               onChange={(e) => handleChange(e.target.value, i)}
//               onKeyDown={(e) => handleKeyDown(e, i)}
//               ref={(el) => (inputRefs.current[i] = el)}
//               className="w-10 h-10 border border-gray-300 rounded-md text-center text-lg focus:ring-2 focus:ring-teal-500"
//             />
//           ))}
//         </div>

//         {/* Verify */}
//         <button
//           onClick={() => onVerify(otp.join(""))}
//           className="w-full py-2 rounded-md text-white bg-gradient-to-r from-teal-500 to-green-400 hover:opacity-90 font-medium"
//         >
//           Verify OTP
//         </button>

//         {/* Timer */}
//         <div className="mt-5 text-gray-600 text-sm">
//           Time remaining:{" "}
//           <span className="font-semibold">
//             00:{timer.toString().padStart(2, "0")}
//           </span>
//         </div>

//         {/* Resend */}
//         <button
//           onClick={handleResend}
//           disabled={timer !== 0}
//           className={`mt-2 text-sm ${
//             timer === 0
//               ? "text-teal-600 hover:underline"
//               : "text-gray-400 cursor-not-allowed"
//           }`}
//         >
//           Resend OTP
//         </button>
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function OtpModal({
  open,
  onClose,
  phone_number,
  userType,
  signupData,       // ★ NEW: pass the object with email, contact, name, password
  setSignupToken,
  setSignupRefToken
}) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const [timer, setTimer] = useState(60);
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);

  const navigate = useNavigate();

  // Reset when modal opens
  useEffect(() => {
    if (open) {
      setOtp(["", "", "", "", "", ""]);
      setTimer(60);
      setTimeout(() => inputRefs.current[0]?.focus(), 200);
    }
  }, [open]);

  // Timer countdown
  useEffect(() => {
    if (timer <= 0) return;
    const t = setInterval(() => setTimer((v) => v - 1), 1000);
    return () => clearInterval(t);
  }, [timer]);

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) inputRefs.current[index + 1]?.focus();
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    if (e.key === "Enter") handleVerifyOtp();
  };

  // ================= VERIFY OTP API =================
  const handleVerifyOtp = async () => {
    const finalOtp = otp.join("");
    if (finalOtp.length !== 6) {
      alert("Enter valid 6-digit OTP");
      return;
    }

    try {
      setLoading(true);

      const fd = new FormData();
      fd.append("phone_number", phone_number);
      fd.append("otp", finalOtp);

      const res = await axios.post(
        "https://atmayantra-10.onrender.com/api/auth/verify_signup/",
        fd
      );

      setSignupToken(res.data.signup_token);
      setSignupRefToken(res.data.signup_reference_token);

      if (userType === "Yoga Trainer") navigate("/trainer-form");
      else if (userType === "Yoga doctor (Psychiatrists)") navigate("/doctor-form");
      else if (userType === "Physiotherapist") navigate("/physio-form");
      else navigate("/");

      setLoading(false);
      onClose();
    } catch (err) {
      setLoading(false);
      alert(err?.response?.data?.message || "Invalid OTP");
    }
  };

  // ================= RESEND OTP =================
  const handleResendOtp = async () => {
    if (!signupData) {
      alert("Signup data missing!");
      return;
    }

    try {
      setResendLoading(true);

      const fd = new FormData();
      Object.entries(signupData).forEach(([key, value]) => fd.append(key, value));

      await axios.post(
        "https://atmayantra-10.onrender.com/api/auth/signup/",
        fd
      );

      // Reset timer & OTP inputs
      setTimer(60);
      setOtp(["", "", "", "", "", ""]);
      inputRefs.current[0]?.focus();

      alert("OTP sent again!");
    } catch (error) {
      console.log(error.response?.data || error.message);
      alert("Failed to resend OTP");
    } finally {
      setResendLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-start z-50">
      <div className="bg-white rounded-2xl shadow-xl w-[350px] p-6 text-center relative ml-130 animate-fadeIn">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <IoClose size={22} />
        </button>

        <h2 className="text-xl font-semibold mb-2">Enter Verification Code</h2>
        <p className="text-gray-500 mb-6 text-sm">
          A 6-digit OTP has been sent to your number.
        </p>

        {/* OTP BOXES */}
        <div className="flex justify-center gap-2 mb-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <input
              key={i}
              maxLength="1"
              ref={(el) => (inputRefs.current[i] = el)}
              value={otp[i]}
              onChange={(e) => handleChange(e.target.value, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              className="w-10 h-10 border border-gray-300 rounded-md text-center text-lg focus:ring-2 focus:ring-teal-500"
            />
          ))}
        </div>

        <button
          onClick={handleVerifyOtp}
          className="w-full py-2 rounded-md text-white bg-gradient-to-r from-teal-500 to-green-400 hover:opacity-90 font-medium"
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>

        <div className="mt-5 text-gray-600 text-sm">
          Time remaining:{" "}
          <span className="font-semibold">
            00:{String(timer).padStart(2, "0")}
          </span>
        </div>

        <button
          onClick={handleResendOtp}
          disabled={timer !== 0 || resendLoading}
          className={`mt-2 text-sm ${
            timer === 0
              ? "text-teal-600 hover:underline"
              : "text-gray-400 cursor-not-allowed"
          }`}
        >
          {resendLoading ? "Resending..." : "Resend OTP"}
        </button>
      </div>
    </div>
  );
}
