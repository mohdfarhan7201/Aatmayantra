import { useState, useEffect } from "react";
import { FaUpload, FaRedo } from "react-icons/fa";

export default function ThumbnailUpload({ setFormData }) {
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFormData((prev) => ({ ...prev, thumbnail: file }));
    setPreview(URL.createObjectURL(file));
  };

  // cleanup memory
  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  return (
    <div className="border rounded-lg p-4 flex flex-col items-center justify-center text-center h-72 relative">
      {/* PREVIEW */}
      {preview ? (
        <>
          <img
            src={preview}
            alt="Thumbnail Preview"
            className="w-full h-full object-cover rounded-md"
          />

          {/* Replace Button */}
          <label
            htmlFor="thumb"
            className="absolute bottom-3 bg-black/70 text-white px-3 py-1 rounded-md text-sm flex items-center gap-2 cursor-pointer"
          >
            <FaRedo /> Replace Thumbnail
          </label>
        </>
      ) : (
        <>
          <FaUpload className="text-2xl mb-2" />
          <p className="text-sm font-medium">Choose Thumbnail (16:9)</p>
          <p className="text-xs text-gray-500 mb-4">
            Drag and drop or click to upload
          </p>

          <label
            htmlFor="thumb"
            className="px-4 py-2 border rounded cursor-pointer text-sm"
          >
            Upload Thumbnail
          </label>
        </>
      )}

      {/* Hidden Input */}
      <input
        type="file"
        id="thumb"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
}
