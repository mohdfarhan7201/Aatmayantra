import React, { useState } from "react";

const courses = [
  {
    id: 1,
    category: "Photography",
    title: "Create An LMS Website With LearnPress",
    author: "DeterminedPoitras",
    duration: "2 Weeks",
    students: "156 Students",
    price: "$29.0",
    offer: "Free",
  },
  {
    id: 2,
    category: "Photography",
    title: "Create An LMS Website With LearnPress",
    author: "DeterminedPoitras",
    duration: "2 Weeks",
    students: "156 Students",
    price: "$29.0",
    offer: "Free",
  },
  {
    id: 3,
    category: "Photography",
    title: "Create An LMS Website With LearnPress",
    author: "DeterminedPoitras",
    duration: "2 Weeks",
    students: "156 Students",
    price: "$29.0",
    offer: "Free",
  },
  {
    id: 4,
    category: "Photography",
    title: "Create An LMS Website With LearnPress",
    author: "DeterminedPoitras",
    duration: "2 Weeks",
    students: "156 Students",
    price: "$29.0",
    offer: "Free",
  },
  {
    id: 5,
    category: "Photography",
    title: "Create An LMS Website With LearnPress",
    author: "DeterminedPoitras",
    duration: "2 Weeks",
    students: "156 Students",
    price: "$29.0",
    offer: "Free",
  },
];

const AboutCourseGallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 4;

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);

  const totalPages = Math.ceil(courses.length / coursesPerPage);

  return (
    <div className="py-10 bg-white px-4 sm:px-6 md:px-10 lg:px-20 lg:-mt-40">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-xl sm:text-2xl font-semibold lg:text-4xl">All Courses</h2>
        <div className="flex items-center space-x-3 sm:space-x-4 lg:mr-15">
          <div className="relative w-full lg:w-75 max-w-[400px]">
            <input
              type="text"
              placeholder="Search"
              className="w-full border border-gray-300 rounded-full px-4 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <span className="absolute right-2 top-[6px] text-gray-400 text-sm">🔍</span>
          </div>
          <button className="text-xl text-gray-600 hover:text-black">≡</button>
          <button className="text-xl text-gray-600 hover:text-black">▦</button>
        </div>
      </div>

      {/* Course Cards */}
      <div className="flex justify-center">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6"
        >
          {currentCourses.map((course) => (
            <div
              key={course.id}
              className="w-full sm:w-[320px] md:w-[360px] lg:w-[400px] xl:w-[480px] h-auto border border-gray-200 rounded-[20px] shadow-md p-4 bg-white flex flex-col justify-between transition-transform duration-300 transform hover:scale-105"
            >
              <div className="w-full h-[180px] sm:h-[220px] md:h-[240px] lg:h-[260px] xl:h-[292px] bg-gray-200 rounded-[16px] mb-4 overflow-hidden flex justify-between items-start p-2">
                <span className="text-xs bg-black text-white px-3 py-1 rounded-full">
                  {course.category}
                </span>
              </div>
              <div className="px-2">
                <p className="text-xs text-gray-600 mb-1">by {course.author}</p>
                <h3 className="font-semibold text-base mb-2">{course.title}</h3>
                <div className="flex flex-wrap items-center text-sm text-gray-500 mb-2 gap-4">
                  <p className="flex items-center">
                    <span className="text-green-500 mr-1">●</span>
                    {course.duration}
                  </p>
                  <p className="flex items-center">
                    <span className="text-green-500 mr-1">●</span>
                    {course.students}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xs text-gray-400 line-through">{course.price}</p>
                  <p className="text-green-600 font-semibold text-sm">{course.offer}</p>
                  <button className="text-sm text-blue-500 font-medium">View More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-10 flex justify-center flex-wrap gap-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`w-8 h-8 rounded-full border ${
              currentPage === index + 1
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AboutCourseGallery;
