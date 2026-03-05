import React from "react";

const jobData = [
  {
    title: "Yoga Instructor",
    type: "Full-Time",
    location: "Onsite",
  },
  {
    title: "Social Media Intern",
    type: "Internship",
    location: "Remote",
  },
  {
    title: "Studio Manager",
    type: "Full-Time",
    location: "Remote",
  },
];

const processSteps = [
  "Getting to know you",
  "Take home task",
  "A chat in Slack",
  "Valuable feedback",
];

const JobSection = () => {
  return (
    <div className="bg-[rgba(240, 253, 251, 0.24)] px-4 py-10 sm:px-6 lg:px-16 xl:px-24 min-h-screen">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-10 text-gray-800">
        Open Job positions
      </h2>

      {/* Job Table */}
      <div className="overflow-x-auto max-w-6xl mx-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden shadow">
          <thead className="bg-gray-100 text-gray-700 text-sm md:text-base">
            <tr>
              <th className="py-3 px-4 text-left">POSITION</th>
              <th className="py-3 px-4 text-left">Commitment</th>
              <th className="py-3 px-4 text-left">Location</th>
              <th className="py-3 px-4 text-left">Apply Button</th>
            </tr>
          </thead>
          <tbody>
            {jobData.map((job, idx) => (
              <tr key={idx} className="border-t">
                <td className="py-4 px-4 text-sm sm:text-base">{job.title}</td>
                <td className="py-4 px-4 text-sm sm:text-base">{job.type}</td>
                <td className="py-4 px-4 text-sm sm:text-base">{job.location}</td>
                <td className="py-4 px-4">
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded text-sm sm:text-base">
                    Apply Now
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Application Process */}
      <div className="mt-16 max-w-6xl mx-auto">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">Your application process</h3>
        <p className="text-gray-600 text-sm sm:text-base mb-8">
          We value your time and the effort you put in applying for a role, so we do our best to make your application and interview process as enjoyable as possible. <br />
          While it’s more than four interviews in total, we inform you about what to expect at every stage.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {processSteps.map((step, index) => (
            <div key={index} className="flex justify-between items-center bg-white p-4 rounded shadow border hover:shadow-md transition">
              <span className="text-gray-800 font-medium text-sm sm:text-base">
                {index + 1}. {step}
              </span>
              <span className="text-2xl text-gray-400">+</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobSection;
