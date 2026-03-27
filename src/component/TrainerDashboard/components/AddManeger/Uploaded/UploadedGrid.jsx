import { sessions } from "./data";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";

export default function UploadedGrid() {
  const navigate = useNavigate();

  return (
    /* Scrollable Wrapper */
    <div className="h-[70vh] overflow-y-auto pr-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
        {sessions.map((item) => (
          <div
            key={item.id}
            className=" rounded-xl bg-white shadow-sm hover:shadow-md transition overflow-hidden"
          >
            {/* Thumbnail */}
            <div
              className="h-36 bg-gray-200 relative bg-cover bg-center"
              style={{
                backgroundImage: `url(${item.thumbnail})`,
              }}
            >
              {/* Status */}
              <span className="absolute top-2 right-2 text-xs font-semibold px-2 py-1 rounded-full bg-green-100 text-green-600">
                {item.status}
              </span>
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-semibold text-gray-800">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                {item.date}, {item.time}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-1 mt-3 text-sm text-gray-700">
                <FaStar className="text-yellow-400" />
                <span>{item.rating}</span>

              <button
                onClick={() => navigate(`/trainer/session/view/${item.id}`)}
                className="w-1/2 text-sm font-medium border rounded-lg py-2 hover:bg-gray-50 ml-auto"
                >
                View Report
              </button>
                  </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
