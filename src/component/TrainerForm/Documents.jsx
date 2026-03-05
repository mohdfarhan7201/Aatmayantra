// import React, { useState } from "react";
// import { FaPlus, FaFilePdf } from "react-icons/fa";

// export default function Documentation({ next, prev }) {
//   const [files, setFiles] = useState({
//     aadharFront: null,
//     aadharBack: null,
//     pancard: null,
//     resume: null,
//     certificate: null,
//   });

//   const [viewer, setViewer] = useState(null);

//   // ---------------- HANDLE UPLOAD ----------------
//   const handleUpload = (e, key) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const preview = {
//       url: URL.createObjectURL(file),
//       name: file.name,
//       isPdf: file.type === "application/pdf",
//     };

//     // SMART AADHAR LOGIC
//     if (key === "aadharAuto") {
//       setFiles((prev) => {
//         if (!prev.aadharFront) {
//           return { ...prev, aadharFront: preview };
//         } else if (!prev.aadharBack) {
//           return { ...prev, aadharBack: preview };
//         } else {
//           // after both filled → replace front
//           return { ...prev, aadharFront: preview };
//         }
//       });
//       return;
//     }

//     // Normal uploads
//     setFiles((prev) => ({ ...prev, [key]: preview }));
//   };

//   return (
//     <div className="border-20 bg-[#1D7464] border-[#1D7464] rounded-xl">
//       <div className="bg-white p-8 rounded-xl border border-gray-300 shadow-sm max-w-5xl mx-auto">

//         <h2 className="text-2xl font-semibold text-[#0E7F70] mb-8">
//           <span className="text-xl text-black">3)</span> Documentation
//         </h2>

//         <h3 className="text-xl font-bold text-[#1D7464] mt-10 mb-4 ">
//           Identification Verification
//         </h3>

//         {/* ----------- ROW 1 → Aadhar + PAN ----------- */}
//         <div className="grid justify-center grid-cols-1 md:grid-cols-2 gap-6">

//           {/* Aadhar Box */}
//           <div className="border border-gray-400 rounded-lg p-5 shadow-sm shadow-gray-500">
//             <div className="flex justify-between mb-4">
//               <div className="shadow justify-between w-full rounded-xl flex">

//                 <span className="font-semibold text-blue-500 mt-2 ml-2">📄 Aadhar Card</span>

//                 <label className="bg-[#035BA8] text-white px-4 py-2 rounded cursor-pointer flex items-center gap-2">
//                   <FaPlus />
//                   Add
//                   <input
//                     type="file"
//                     className="hidden"
//                     accept="image/*,application/pdf"
//                     onChange={(e) => handleUpload(e, "aadharAuto")}
//                   />
//                 </label>
//               </div>
//             </div>

//             {/* Buttons */}
//             <div className="flex lg:gap-25 mb-3 justify-center">
//               <label className="bg-gray-100 border border-gray-400 px-5 py-2 rounded cursor-pointer">
//                 Front
//                 <input
//                   type="file"
//                   className="hidden"
//                   accept="image/*,application/pdf"
//                   onChange={(e) => handleUpload(e, "aadharFront")}
//                 />
//               </label>

//               <label className="bg-gray-100 border border-gray-400 px-5 py-2 rounded cursor-pointer">
//                 Back
//                 <input
//                   type="file"
//                   className="hidden"
//                   accept="image/*,application/pdf"
//                   onChange={(e) => handleUpload(e, "aadharBack")}
//                 />
//               </label>
//             </div>

//             {/* Preview two boxes */}
//             <div className="flex grid-cols-2 gap-10 justify-center">
//               <PreviewCard file={files.aadharFront} onClick={() => setViewer(files.aadharFront)} label="Front" />
//               <PreviewCard file={files.aadharBack} onClick={() => setViewer(files.aadharBack)} label="Back" />
//             </div>
//           </div>

//           {/* PAN Box */}
//           <div className="border border-gray-400 rounded-lg p-5 shadow-sm shadow-gray-500">
//             <div className="flex justify-between mb-3 shadow w-full rounded-xl">
//               <span className="font-semibold text-blue-500 mt-2 ml-2">📄 PAN Card</span>

//               <label className="bg-[#035BA8] text-white px-4 py-2 rounded cursor-pointer flex items-center gap-2">
//                 <FaPlus />
//                 Add
//                 <input
//                   type="file"
//                   className="hidden"
//                   accept="image/*,application/pdf"
//                   onChange={(e) => handleUpload(e, "pancard")}
//                 />
//               </label>
//             </div>

//             <PreviewCard
//               file={files.pancard}
//               onClick={() => setViewer(files.pancard)}
//               label="No file uploaded"
//               height="h-36"
//             />
//           </div>
//         </div>

//         {/* ----------- ROW 2 → Resume + Certificate ----------- */}
//         <h3 className="text-xl font-bold text-[#1D7464] mt-10 mb-4">
//           Experience Verification
//         </h3>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <SingleUploadBox
//             title="Resume / CV"
//             file={files.resume}
//             onUpload={(e) => handleUpload(e, "resume")}
//             onPreview={() => setViewer(files.resume)}
//           />

//           <SingleUploadBox
//             title="Certificate"
//             file={files.certificate}
//             onUpload={(e) => handleUpload(e, "certificate")}
//             onPreview={() => setViewer(files.certificate)}
//           />
//         </div>

//         {/* Bottom Buttons */}
//         <div className="flex justify-between mt-10">
//           <button onClick={prev} className="bg-gray-300 hover:bg-gray-400 text-black py-3 px-8 rounded-lg shadow-md">
//             Back
//           </button>

//           <button onClick={next} className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg shadow-md">
//             Save & Continue
//           </button>
//         </div>
//       </div>

//     {/* ------------------- FILE VIEWER MODAL ------------------- */}
// {viewer && (
//   <div
//     className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
//     onClick={() => setViewer(null)}
//   >
//     <div
//       className="bg-white p-5 rounded-lg max-w-xl shadow-xl relative"
//       onClick={(e) => e.stopPropagation()}
//     >
//       {/* ❌ CLOSE BUTTON (does NOT remove file) */}
//       <button
//         className="absolute top-2 right-2 bg-red-600 text-black px-3 py-1 rounded-full"
//         onClick={() => setViewer(null)}
//       >
//         ✖
//       </button>

//       {viewer.isPdf ? (
//         <embed src={viewer.url} type="application/pdf" className="w-[500px] h-[500px]" />
//       ) : (
//         <img src={viewer.url} className="max-w-[500px] rounded-lg" />
//       )}
//     </div>
//   </div>
// )}
//    </div>
//   );
// }

// /* ---------------- PREVIEW CARD ---------------- */
// function PreviewCard({ file, label, onClick, height = "h-20 w-36" }) {
//   return (
//     <div
//       className={`border border-gray-400 rounded-lg  flex items-center justify-center bg-gray-50 cursor-pointer ${height}`}
//       onClick={file ? onClick : null}
//     >
//       {file ? (
//         file.isPdf ? (
//           <FaFilePdf className="text-red-600 text-4xl" />
//         ) : (
//           <img src={file.url} className="h-full w-full object-cover rounded-lg" />
//         )
//       ) : (
//         <span className="text-gray-400 text-sm">{label}</span>
//       )}
//     </div>
//   );
// }

// /* ---------------- SINGLE UPLOAD BOX ---------------- */
// function SingleUploadBox({ title, file, onUpload, onPreview }) {
//   return (
//     <div className="border border-gray-400 rounded-lg p-5 shadow-sm shadow-gray-500">
//       <div className="flex justify-between mb-3 shadow w-full rounded-xl ">
//         <span className="font-semibold text-blue-500 mt-2 ml-2 ">📄 {title}</span>

//         <label className="bg-[#035BA8] text-white px-4 py-2 rounded cursor-pointer flex items-center gap-2">
//           <FaPlus />
//           Add
//           <input type="file" className="hidden" accept="image/*,application/pdf" onChange={onUpload} />
//         </label>
//       </div>

//       <PreviewCard file={file} onClick={onPreview} label="No file uploaded" height="h-36" />
//     </div>
//   );
// }






import React, { useState } from "react";
import { FaPlus, FaFilePdf } from "react-icons/fa";
import axios from "axios";

export default function Documentation({
  next,
  prev,
  trainerData,
  setTrainerData,
  personalData,
}) {
  const [files, setFiles] = useState({
    aadharFront: null,
    aadharBack: null,
    pancard: null,
    resume: null,
    certificate: null,
  });

  const [viewer, setViewer] = useState(null);

  const handleUpload = (e, key) => {
    const file = e.target.files[0];
    if (!file) return;

    const preview = {
      file,
      url: URL.createObjectURL(file),
      name: file.name,
      isPdf: file.type === "application/pdf",
    };

    if (key === "aadharAuto") {
      setFiles((prev) => {
        if (!prev.aadharFront) return { ...prev, aadharFront: preview };
        if (!prev.aadharBack) return { ...prev, aadharBack: preview };
        return { ...prev, aadharFront: preview };
      });
      return;
    }

    setFiles((prev) => ({ ...prev, [key]: preview }));
  };

  // ------------------------------------------------------------
  // 🔥 FIXED: All uploads wait using Promise.all()
  // 🔥 Response message from backend shown in alert()
  // ------------------------------------------------------------
  const handleSubmitDocuments = async () => {
    setTrainerData({
      aadharFront: files.aadharFront?.file || null,
      aadharBack: files.aadharBack?.file || null,
      pancard: files.pancard?.file || null,
      resume: files.resume?.file || null,
      certificate: files.certificate?.file || null,
    });

    const docList = [
      { key: "aadharFront", type: "AADHAR", side: "front" },
      { key: "aadharBack", type: "AADHAR", side: "back" },
      { key: "pancard", type: "PAN", side: null },
      { key: "resume", type: "RESUME", side: null },
      { key: "certificate", type: "CERTIFICATE", side: null },
    ];

    try {
      // WAIT for all uploads to complete
      const uploadResponses = await Promise.all(
        docList.map(async (doc) => {
          if (!files[doc.key]) return null;

          const formData = new FormData();
          formData.append("trainer", personalData.contact_number);
          formData.append("document_type", doc.type);
          if (doc.side) formData.append("side", doc.side);
          formData.append("document_file", files[doc.key].file);

          const res = await axios.post(
            "https://atmayantra-11.onrender.com/api/trainers/documents/",
            formData,
            { headers: { "Content-Type": "multipart/form-data" } }
          );

          return res.data;
        })
      );

      // 🔥 Show response message from backend if available
      const msg =
        uploadResponses?.find((r) => r?.message)?.message ||
        "All documents uploaded successfully!";

      alert(msg);

      next();
    } catch (error) {
      console.error("UPLOAD FAILED:", error.response?.data || error);
      alert(error.response?.data?.error || "Error uploading files");
    }
  };

  return (
    <div className="border-20 bg-[#1D7464] border-[#1D7464] rounded-xl">
      <div className="bg-white p-8 rounded-xl border border-gray-300 shadow-sm max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-[#0E7F70] mb-8">
          <span className="text-xl text-black">3)</span> Documentation
        </h2>

        <h3 className="text-xl font-bold text-[#1D7464] mt-10 mb-4">
          Identification Verification
        </h3>

        <div className="grid justify-center grid-cols-1 md:grid-cols-2 gap-6">
          {/* Aadhar Box */}
          <div className="border border-gray-400 rounded-lg p-5 shadow-sm shadow-gray-500">
            <div className="flex justify-between mb-4">
              <div className="shadow justify-between w-full rounded-xl flex">
                <span className="font-semibold text-blue-500 mt-2 ml-2">
                  📄 Aadhar Card
                </span>

                <label className="bg-[#035BA8] text-white px-4 py-2 rounded cursor-pointer flex items-center gap-2">
                  <FaPlus />
                  Add
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*,application/pdf"
                    onChange={(e) => handleUpload(e, "aadharAuto")}
                  />
                </label>
              </div>
            </div>

            <div className="flex lg:gap-25 mb-3 justify-center">
              <label className="bg-gray-100 border border-gray-400 px-5 py-2 rounded cursor-pointer">
                Front
                <input
                  type="file"
                  className="hidden"
                  accept="image/*,application/pdf"
                  onChange={(e) => handleUpload(e, "aadharFront")}
                />
              </label>

              <label className="bg-gray-100 border border-gray-400 px-5 py-2 rounded cursor-pointer">
                Back
                <input
                  type="file"
                  className="hidden"
                  accept="image/*,application/pdf"
                  onChange={(e) => handleUpload(e, "aadharBack")}
                />
              </label>
            </div>

            <div className="flex grid-cols-2 gap-10 justify-center">
              <PreviewCard
                file={files.aadharFront}
                onClick={() => setViewer(files.aadharFront)}
                label="Front"
              />
              <PreviewCard
                file={files.aadharBack}
                onClick={() => setViewer(files.aadharBack)}
                label="Back"
              />
            </div>
          </div>

          {/* PAN Box */}
          <div className="border border-gray-400 rounded-lg p-5 shadow-sm shadow-gray-500">
            <div className="flex justify-between mb-3 shadow w-full rounded-xl">
              <span className="font-semibold text-blue-500 mt-2 ml-2">
                📄 PAN Card
              </span>

              <label className="bg-[#035BA8] text-white px-4 py-2 rounded cursor-pointer flex items-center gap-2">
                <FaPlus />
                Add
                <input
                  type="file"
                  className="hidden"
                  accept="image/*,application/pdf"
                  onChange={(e) => handleUpload(e, "pancard")}
                />
              </label>
            </div>

            <PreviewCard
              file={files.pancard}
              onClick={() => setViewer(files.pancard)}
              label="No file uploaded"
              height="h-36"
            />
          </div>
        </div>

        <h3 className="text-xl font-bold text-[#1D7464] mt-10 mb-4">
          Experience Verification
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SingleUploadBox
            title="Resume / CV"
            file={files.resume}
            onUpload={(e) => handleUpload(e, "resume")}
            onPreview={() => setViewer(files.resume)}
          />

          <SingleUploadBox
            title="Certificate"
            file={files.certificate}
            onUpload={(e) => handleUpload(e, "certificate")}
            onPreview={() => setViewer(files.certificate)}
          />
        </div>

        <div className="flex justify-between mt-10">
          <button
            onClick={prev}
            className="bg-gray-300 hover:bg-gray-400 text-black py-3 px-8 rounded-lg shadow-md"
          >
            Back
          </button>

          <button
            onClick={handleSubmitDocuments}
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg shadow-md"
          >
            Save & Continue
          </button>
        </div>
      </div>

      {/* Viewer Modal */}
      {viewer && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setViewer(null)}
        >
          <div
            className="bg-white p-5 rounded-lg max-w-xl shadow-xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 bg-red-600 text-black px-3 py-1 rounded-full"
              onClick={() => setViewer(null)}
            >
              ✖
            </button>

            {viewer.isPdf ? (
              <embed
                src={viewer.url}
                type="application/pdf"
                className="w-[500px] h-[500px]"
              />
            ) : (
              <img src={viewer.url} className="max-w-[500px] rounded-lg" />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------------- PREVIEW CARD ---------------- */
function PreviewCard({ file, label, onClick, height = "h-20 w-36" }) {
  return (
    <div
      className={`border border-gray-400 rounded-lg flex items-center justify-center bg-gray-50 cursor-pointer ${height}`}
      onClick={file ? onClick : null}
    >
      {file ? (
        file.isPdf ? (
          <FaFilePdf className="text-red-600 text-4xl" />
        ) : (
          <img
            src={file.url}
            className="h-full w-full object-cover rounded-lg"
          />
        )
      ) : (
        <span className="text-gray-400 text-sm">{label}</span>
      )}
    </div>
  );
}

/* ---------------- SINGLE UPLOAD BOX ---------------- */
function SingleUploadBox({ title, file, onUpload, onPreview }) {
  return (
    <div className="border border-gray-400 rounded-lg p-5 shadow-sm shadow-gray-500">
      <div className="flex justify-between mb-3 shadow w-full rounded-xl">
        <span className="font-semibold text-blue-500 mt-2 ml-2">📄 {title}</span>

        <label className="bg-[#035BA8] text-white px-4 py-2 rounded cursor-pointer flex items-center gap-2">
          <FaPlus />
          Add
          <input
            type="file"
            className="hidden"
            accept="image/*,application/pdf"
            onChange={onUpload}
          />
        </label>
      </div>

      <PreviewCard
        file={file}
        onClick={onPreview}
        label="No file uploaded"
        height="h-36"
      />
    </div>
  );
}
