// ============================================================
// EDIT THIS FILE to add your personal information.
// Empty strings / empty arrays are automatically hidden.
// ============================================================

export const profile = {
  name: "Raiyan",
  fullName: "Md Raiyan Bin Rafin",
  intro:
    "A student, programmer, networking enthusiast, gamer and a lifelong learner.",
  tagline: ["More Than Just a", "Developer."],
  labels: ["Student", "Programmer", "Networking Enthusiast", "Gamer"],
  bio: "I'm Raiyan, a passionate student with a strong interest in technology, programming, networking and gaming. I love exploring new things, learning continuously and building a better version of myself every day.",
  status: "University Student",
  hometown: "Bangladesh",
  interests: ["Technology", "Gaming", "Sports", "Learning"],
  goals: [
    "Become a skilled developer",
    "Gain networking expertise (CCNA)",
    "Build real world projects",
    "Make a positive impact",
  ],
};

export const education = [
  {
    level: "University",
    institution: "Northern University Bangladesh",
    qualification: "B.Sc. in Computer Science & Engineering",
    dates: "2024 – Present",
    description: "Currently pursuing my Bachelor's degree in Computer Science & Engineering, focusing on programming, networking and software development.",
  },
  {
    level: "College",
    institution: "Govt Model College, Dhaka",
    qualification: "Higher Secondary Certificate (HSC)",
    dates: "2021 – 2023",
    description: " Completed my Higher Secondary education with a focus on Science, preparing for a career in technology and engineering.",
  },
  {
    level: "School",
    institution: "Govt Model School, Dhaka",
    qualification: "Secondary School Certificate (SSC)",
    dates: "2019 – 2020",
    description: " Completed my Secondary education with a strong foundation in Science and Mathematics.",
  },
];

export const certificates = [
  {
    title: "CCNA — Networking",
    provider: "CSL Training Center",
    status: "Completed Training",
    description:
      "Learned networking fundamentals: IP addressing, subnetting, routing & switching, DHCP, DNS and hands-on lab practice with Cisco devices.",
    topics: ["Routing & Switching", "Subnetting", "Network Configuration"],
  },
  {
    title: "Web Development",
    provider: "Programming Hero",
    status: "Completed Course",
    description:
      "Full-stack web development course covering HTML, CSS, JavaScript, React and Node.js with real project building.",
    topics: ["HTML & CSS", "JavaScript", "React", "Node.js"],
  },
  {
    title: "Database — SQL",
    provider: "Oracle",
    status: "Completed Course",
    description:
      "Database design and management with SQL: queries, joins, normalization and real database projects on Oracle.",
    topics: ["SQL Queries", "Database Design", "Normalization"],
  },
];

export type SkillStatus = "Learning" | "Practicing" | "Familiar";
export const skills: { category: string; items: string[]; status: string; note: string }[] = [
  { category: "Programming", items: ["C", "C++", "Java", "Python"], status: "Learning / Practicing", note: "Problem solving & fundamentals" },
  { category: "Web Development", items: ["HTML", "CSS", "JavaScript", "React", "Node.js"], status: "Practicing", note: "Building interfaces & apps" },
  { category: "Database", items: ["MySQL", "SQL"], status: "Learning / Practicing", note: "Queries, design & normalization" },
  { category: "Networking", items: ["IP Addressing", "Subnetting", "DHCP", "DNS", "Routing", "Switching"], status: "Learning", note: "How the internet really works" },
  { category: "CCNA Learning", items: ["Networking Concepts", "Lab Practice", "Routing & Switching"], status: "Learning", note: "Not certified yet — in progress" },
  { category: "Tools", items: ["Git", "GitHub", "VS Code", "Cisco Packet Tracer"], status: "Familiar / Practicing", note: "Daily workflow" },
];

export const projects = [
  { title: "Academic Class & Assessment Management System", description: "Inspired by Google Classroom, but designed mainly for university faculty to manage classes, students, attendance, assessments, marks, grading, notices and academic reports.", tech: ["Nextjs", "Google auth", "TypeScript", "Supabase"], demo: "https://software-dev3.vercel.app", github: "https://github.com/raiyan3341/Faculty-Greading-System" },
  { title: "Tuition Management System", description: "TuitionBd is a dynamic web application designed to bridge the gap between skilled Tutors and Students/Parents.", tech: ["React", "Node.js", "MongoDB"], demo: "https://tuition-bd-frontend.vercel.app", github: "https://github.com/raiyan3341/TuitionBd-Frontend" },
  { title: "Network Lab (CCNA)", description: "Network simulation and configuration using Cisco Packet Tracer.", tech: ["Cisco Packet Tracer"], demo: "", github: "https://github.com/raiyan3341/DHCP-Configuration" },
];
export const portfolioUrl = "http://raiyan-shk.vercel.app";

export const leadership = [
  { role: "Assistant Class Representative (CR)", dates: "2024 - 2026 ", points: ["Representing classmates", "Communication & coordination", "Problem solving & support"] },
  { role: "University Activities", dates: "Ongoing", points: ["Participated in various events", "Teamwork and group projects", "Campus life and community"] },
  { role: "Personal Growth", dates: "Ongoing", points: ["Improving communication", "Building leadership skills", "Exploring new opportunities"] },
];

export const sports = [
  { name: "Cricket", image: "cricket", text: "Love playing cricket and watching matches.", fav: "Favorite Team: TBD" },
  { name: "Football", image: "football", text: "Enjoy football and its amazing community.", fav: "Favorite Team: TBD" },
  { name: "Carrom", image: "carrom", text: "A simple game, full of fun.", fav: "Favorite Player: TBD" },
] as const;

// ---- Other Hobbies (marquee sections) ----
export const music = {
  note: "Always a vibe — my favorite tracks on repeat",
  english: [
    "Shape of You — Ed Sheeran",
    "Believer — Imagine Dragons",
    "Faded — Alan Walker",
    "Perfect — Ed Sheeran",
    "Blinding Lights — The Weeknd",
    "See You Again — Wiz Khalifa",
    "Until I Found You — Stephen Sanchez",
    "Night Changes — One Direction",
  ],
  bangla: [
    "Beche Thakar Gaan — Autograph",
    "Ami Tomakei Bole Debo — Sanjeeb Chowdhury",
    "Tumi Jake Bhalobasho — Habib Wahid",
    "Ondhokar Ghore — Warfaze",
    "Shei Tumi — Ayub Bachchu (LRB)",
    "Bhalo Achi Bhalo Theko — Asif Akbar",
    "Moner Manush — Lalon Shah",
    "Chena Chena Mukh — Arnob",
  ],
};

export const travel = {
  note: "Places I've explored across beautiful Bangladesh",
  places: [
    "Dhaka", "Narayanganj", "Thakurgaon", "Sylhet", "Sundarbans",
    "Bandarban", "Cox's Bazar", "Kuakata", "Barisal",
  ],
};

export const photography = {
  note: "Capturing moments through my lens — demo shots, will replace with my own",
  captions: ["Old Dhaka Streets", "Monsoon Macro", "City Light Trails", "Morning Catch"],
};

export const reading = {
  note: "Books that grow my mind",
  books: [
    { title: "A Brief History of Time", author: "Stephen Hawking", genre: "Science" },
    { title: "The Alchemist", author: "Paulo Coelho", genre: "Fiction" },
    { title: "Sapiens", author: "Yuval Noah Harari", genre: "Science / History" },
    { title: "Feluda Series", author: "Satyajit Ray", genre: "Golper Boi" },
    { title: "The Time Machine", author: "H.G. Wells", genre: "Sci-Fi" },
    { title: "Himur Hate Koyekta Nil Poddo", author: "Humayun Ahmed", genre: "Golper Boi" },
    { title: "Astrophysics for People in a Hurry", author: "Neil deGrasse Tyson", genre: "Science" },
    { title: "Misir Ali Series", author: "Humayun Ahmed", genre: "Golper Boi" },
  ],
};

export const games = [
  { name: "Valorant", text: "Tactical FPS, love the strategy and teamwork.", mode: "Favorite Mode: Unrated" },
  { name: "eFootball", text: "Enjoy realistic football gameplay and building teams.", mode: "Favorite Mode: Online" },
  { name: "Free Fire", text: "Fast-paced and full of excitement.", mode: "Favorite Mode: BR" },
];
export const moreGames = ["PUBG", "GTA V", "Minecraft", "Others…"];

export const contact = [
  { label: "Email", value: "raiyan.edu.bd1@gmail.com", href: "mailto:raiyan.edu.bd1@gmail.com" },
  { label: "GitHub", value: "github.com/raiyan3341", href: "https://github.com/raiyan3341" },
  { label: "LinkedIn", value: "linkedin.com/in/rayan-bin-rafin", href: "https://www.linkedin.com/in/rayan-bin-rafin" },
  { label: "Facebook", value: "facebook.com/md.rayan", href: "https://www.facebook.com/md.rayan.526875" },
  { label: "Instagram", value: "instagram.com/rayanbi13", href: "https://www.instagram.com/rayanbin13?vrfl=MWNrczNpcWFsNmFiYg==" },
  { label: "WhatsApp", value: "+8801871093089", href: "https://wa.me/8801871093089" },
  { label: "Discord", value: "discord.gg/raiyan_shk69", href: "https://discord.gg/raiyan_shk69" },
  { label: "Twitter / X", value: "x.com/yourname", href: "https://x.com/yourname" },
];
