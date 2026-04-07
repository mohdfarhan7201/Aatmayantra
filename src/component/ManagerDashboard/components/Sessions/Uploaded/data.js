export const sessions = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  status: "Completed",
  title:
    i % 2 === 0
      ? "Morning Yoga For Beginners"
      : "Evening Relax Yoga",
  date: `${30 + (i % 5)} Aug 2023`,
  time: i % 2 === 0 ? "7:00 AM" : "6:00 PM",
  rating: (4 + (i % 3) * 0.2).toFixed(1),
  thumbnail: "https://i.ibb.co/VW0y3QF/yoga1.jpg",

  /* Session Report Data */
  duration: `${45 + (i % 4) * 5}m`,
  totalViews: `${15 + i}k`,
  peakAttendance: `${8 + i}k`,
  avgWatchTime: `${30 + (i % 5) * 5}m`,
  performance: 60 + (i % 5) * 8,
  videoUrl: "",

  members: Array.from({ length: 12 }, (_, j) => ({
    name: `Member ${String.fromCharCode(65 + j)}`,
    time:
      j % 3 === 0
        ? "0m"
        : `${20 + (j % 4) * 10}m`,
    level:
      j % 3 === 0
        ? "Not Started"
        : j % 3 === 1
        ? "Partial"
        : "Completed",
    attendance:
      j % 3 === 0 ? "Unwatched" : "Watched",
    rating: j % 6,
    avatar: `https://i.pravatar.cc/100?img=${(i + j) % 70}`,
  })),
}));
