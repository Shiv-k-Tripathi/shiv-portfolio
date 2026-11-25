export const profileData = {
  name: "Shiv Kumar Tripathi",
  shortName: "Shiv Kumar",
  role: "Full Stack & Mobile Application Developer",
  location: "Pune, India",
  phone: "+91 8299535242",
  email: "shivkumartripathi36@gmail.com",
  availability: "Available for Software Engineering & Consulting Roles",
  summary:
    "Results-driven Full Stack Developer with 4+ years of experience architecting scalable, high-performance web and mobile applications. Specialized in React, React Native, Android/iOS development, Node.js, and MongoDB, with deep expertise in API design, real-time systems, and POS hardware integrations.",
  highlights: [
    { label: "Experience", value: "4+ Years" },
    { label: "Core Focus", value: "Web, Mobile & POS" },
    { label: "Location", value: "Pune, India" },
  ],
};

export const skillCategories = [
  {
    title: "Frontend",
    skills: ["React.js", "React Native", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Ant Design"],
  },
  {
    title: "Mobile & Hardware",
    skills: ["Android Development", "iOS Development", "Thermal Printer SDKs", "Bluetooth / Wi-Fi / USB / LAN"],
  },
  {
    title: "Backend & Database",
    skills: ["Node.js", "Express.js", "GraphQL", "MongoDB", "Mongoose", "REST APIs"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "Git", "GitLab", "CI/CD Pipelines"],
  },
];

export const experienceData = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Amonex Technology Pvt. Ltd.",
    location: "Pune, India",
    period: "August 2021 – Present",
    bullets: [
      "Designed and developed cross-platform mobile and web applications using React and React Native.",
      "Built a unified thermal printer SDK supporting Android and iOS platforms for POS and billing systems.",
      "Implemented printer connectivity via Bluetooth, USB, Wi-Fi, and LAN, ensuring compatibility across multiple hardware vendors.",
      "Managed device discovery, pairing, connection lifecycle, and error handling across mobile platforms.",
      "Optimized print performance for receipts, invoices, and custom layouts in high-volume retail environments.",
      "Collaborated closely with product, QA, and backend teams within an Agile development workflow.",
    ],
  },
];

export const projectsData = [
  {
    id: 1,
    title: "Recaho POS — Point of Sale System",
    role: "App Developer",
    category: "Mobile & POS",
    description:
      "Modular printing SDK for Android and iOS powering retail and restaurant POS billing workflows with seamless multi-vendor thermal printer support.",
    highlights: [
      "Cross-platform Bluetooth, Wi-Fi, USB & LAN printer discovery and lifecycle management",
      "Consistent receipt & kitchen ticket rendering across diverse hardware models",
    ],
    tags: ["React Native", "Android", "iOS", "Thermal SDK", "POS"],
  },
  {
    id: 2,
    title: "TBSL CVR — Customer Visit Report System",
    role: "Frontend Developer",
    category: "Web App",
    description:
      "React.js web platform enabling B2B and B2C field sales teams to log, track, and manage customer visits in real time.",
    highlights: [
      "Reusable form architecture for rapid field data entry and streamlined UX",
      "Real-time API integration for instant storage and retrieval of visit reports",
    ],
    tags: ["React.js", "JavaScript", "Ant Design", "REST API"],
  },
  {
    id: 3,
    title: "Sigma Product — Medical Price Comparison",
    role: "Frontend Developer",
    category: "Analytics Dashboard",
    description:
      "Data-driven pricing intelligence dashboard built to compare medical products and service rates across competitors.",
    highlights: [
      "Multi-parameter filtering, sorting, and side-by-side price comparison tables",
      "Actionable market visibility tools supporting competitive pricing decisions",
    ],
    tags: ["React.js", "TypeScript", "Data Visualization", "UI/UX"],
  },
];

export const educationData = [
  {
    degree: "Bachelor of Science (B.Sc)",
    institution: "Dr. Ram Manohar Lohia Avadh University",
  },
  {
    degree: "Diploma in Engineering",
    institution: "M.P. Polytechnic, Gorakhpur",
  },
];

export const initialTestimonials = [
  {
    id: 1,
    name: "Rohan Sharma",
    role: "Product Lead, Retail & POS",
    category: "Mobile & POS",
    rating: 5,
    date: "Oct 2026",
    message:
      "Shiv architected our multi-vendor thermal printer SDK across Android and iOS without a hitch. His grasp of hardware edge cases saved us weeks of QA.",
  },
  {
    id: 2,
    name: "Ananya Verma",
    role: "Operations Manager",
    category: "Web App",
    rating: 5,
    date: "Aug 2026",
    message:
      "The Customer Visit Report portal transformed how our field sales team logs daily meetings. Fast, intuitive, and rock-solid on every device.",
  },
  {
    id: 3,
    name: "Vikram Patel",
    role: "Engineering Manager",
    category: "Analytics Dashboard",
    rating: 5,
    date: "Jun 2026",
    message:
      "Consistently delivers clean, maintainable React and Node.js code. Great communicator who takes full ownership from API integration to final UI polish.",
  },
];