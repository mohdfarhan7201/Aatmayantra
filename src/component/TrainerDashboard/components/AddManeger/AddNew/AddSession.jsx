import { useState } from "react";
import SessionHeader from "./SessionHeader";
import SessionForm from "./SessionForm";
import SessionSettings from "./SessionSettings";

export default function AddSession() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "Yoga",
    duration: "60",
    level: "Beginner",
    link: "",
    thumbnail: null,
    sessionType: "recorded",
    privacy: "public",
    comments: true,
  });

  const handleSubmit = () => {
    console.log("SESSION DATA 👉", formData);
    alert("Session Posted Successfully!");
  };

  return (
    <div className="p-6 max-w-6xl mx-auto border-gray-300 border rounded-2xl -mb-3">
      <SessionHeader onSubmit={handleSubmit} />
      <SessionForm formData={formData} setFormData={setFormData} />
      <SessionSettings formData={formData} setFormData={setFormData} />
    </div>
  );
}
