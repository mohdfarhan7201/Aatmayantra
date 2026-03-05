const membersData = [
  {
    id: 1,
    name: "Member A",
    photo: "https://randomuser.me/api/portraits/women/1.jpg",
    membership: "Payment Due",
    status: "Active",
    sessions: 56,
    feedback: 4.0,
    phone: 1234567890,
    email: "abc@example.com" ,
  },
  {
    id: 2,
    name: "Member B",
    photo: "https://randomuser.me/api/portraits/men/2.jpg",
    membership: "Payment Due",
    status: "Plan Expiring Soon",
    sessions: 77,
    feedback: 3.0,
  },
  {
    id: 3,
    name: "Member C",
    photo: "https://randomuser.me/api/portraits/women/3.jpg",
    membership: "Yoga Doctor",
    status: "Beginner",
    sessions: 24,
    feedback: 3.9,
  },
  {
    id: 4,
    name: "Member D",
    photo: "https://randomuser.me/api/portraits/men/4.jpg",
    membership: "Yoga Doctor",
    status: "Intermediate",
    sessions: 98,
    feedback: 4.9,
  },
  {
    id: 5,
    name: "Member E",
    photo: "https://randomuser.me/api/portraits/women/5.jpg",
    membership: "Yoga Doctor",
    status: "Senior",
    sessions: 78,
    feedback: 3.3,
  },

  // EXTRA 30+ DUMMY ROWS FOR PAGINATION TEST
  ...Array.from({ length: 30 }).map((_, i) => ({
    id: i + 6,
    name: `Member ${i + 6}`,
    photo: `https://randomuser.me/api/portraits/men/${i + 6}.jpg`,
    membership: i % 2 === 0 ? "Yoga Doctor" : "Payment Due",
    status: ["Active", "Beginner", "Senior", "Intermediate"][i % 4],
    sessions: Math.floor(Math.random() * 100),
    feedback: (Math.random() * 5).toFixed(1),
  })),
];

export default membersData;
