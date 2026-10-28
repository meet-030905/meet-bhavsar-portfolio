// =============================================================
// portfolioData.js — All personal content lives here.
// =============================================================

export const personal = {
  name: "Meet Bhavsar",
  initials: "MB",
  tagline: "MCA Student | Full Stack Developer",
  headline: "Building Digital Experiences,\nOne Project at a Time.",
  bio: `I'm an MCA student at Shrimad Rajchandra Institute of Management and Computer Application, Surat, with hands-on internship experience in web development at Rayzon Solar Limited. I build full-stack web applications using React.js, JavaScript, PHP, MySQL, and MongoDB.`,
  about: `I'm currently pursuing my Master of Computer Applications (MCA) at Shrimad Rajchandra Institute of Management and Computer Application, Surat. I completed my BCA from Vimal Tormal Poddar BCA & Commerce College with First Class Distinction, which gave me a strong foundation in computer science and application development.

During my internship at Rayzon Solar Limited, I worked as a Web Development Intern where I built landing pages and admin panels, learning how real-world frontend systems are structured and maintained.

I'm passionate about full-stack development — from crafting responsive UIs with React.js to building server-side logic with PHP and MongoDB. I love taking ideas and turning them into functional, clean, and user-friendly web applications.

I'm actively seeking internship and placement opportunities where I can contribute meaningfully while growing alongside experienced developers.`,

  focusAreas: [
    { icon: "Code2",        text: "Building full-stack web applications" },
    { icon: "Layers",       text: "Developing practical academic & personal projects" },
    { icon: "BrainCircuit", text: "Improving problem-solving & clean code skills" },
    { icon: "Briefcase",    text: "Seeking internship & placement opportunities" },
  ],

  location: "Surat, Gujarat",
  email: "bhavsarm169@gmail.com",
  phone: "+91 9978641342",
  github: "https://github.com/meet-030905",
  linkedin: "https://www.linkedin.com/in/meet-bhavsar03/",

  // Resume PDF path in /public/
  resumeFile: "/resume.pdf",
};

// =============================================================
// Work Experience (Internship)
// =============================================================
export const experience = [
  {
    id: 1,
    role: "Web Development Intern",
    company: "Rayzon Solar Limited",
    location: "Surat, Gujarat",
    period: "August 2025 – September 2025",
    duration: "~6 weeks",
    description: "Worked as a Web Development Intern at Rayzon Solar Limited, one of India's leading solar energy companies. Gained hands-on experience in frontend development within a professional environment.",
    responsibilities: [
      "Developed and deployed landing pages for company products and services",
      "Built an admin panel to manage user data and product information",
      "Learned real-world frontend development workflows and best practices",
      "Collaborated with the development team on UI/UX improvements",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "React.js", "MongoDB"],
    certificate: true,
    offerLetter: true,
  },
];

// =============================================================
// Education
// =============================================================
export const education = [
  {
    id: 1,
    degree: "Master of Computer Applications (MCA)",
    institution: "Shrimad Rajchandra Institute of Management and Computer Application",
    period: "July 2026 – 2028 (Expected)",
    status: "current",
    description: "Pursuing MCA with focus on software engineering, web technologies, database management, and full-stack development.",
    gpa: null, // Add SGPA/CGPA once available
  },
  {
    id: 2,
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Vimal Tormal Poddar BCA & Commerce College",
    period: "2023 – February 2026",
    status: "completed",
    description: "Graduated with First Class Distinction. Sem 6 score: 445/550. Built a strong foundation in computer science, programming, and application development.",
    gpa: "7.0 CGPA · First Class Distinction",
  },
];

// =============================================================
// Skills
// =============================================================
export const skills = {
  Frontend: [
    { name: "React.js",    icon: "react" },
    { name: "JavaScript",  icon: "js" },
    { name: "HTML5",       icon: "html5" },
    { name: "CSS3",        icon: "css3" },
    { name: "Tailwind CSS",icon: "tailwind" },
    { name: "Bootstrap",   icon: "bootstrap" },
  ],
  Backend: [
    { name: "PHP",         icon: "php" },
    { name: "Node.js",     icon: "nodejs" },
    { name: "Python",      icon: "python" },
    { name: "C / C++",     icon: "cpp" },
  ],
  Database: [
    { name: "MySQL",       icon: "mysql" },
    { name: "MongoDB",     icon: "mongodb" },
    { name: "Firebase",    icon: "firebase" },
  ],
  Tools: [
    { name: "Git",         icon: "git" },
    { name: "GitHub",      icon: "github" },
    { name: "VS Code",     icon: "vscode" },
    { name: "XAMPP",       icon: "xampp" },
  ],
};

// =============================================================
// Projects
// =============================================================
export const projects = [
  {
    id: 1,
    title: "Ecokart - Online Mobile Accessories Store",
    subtitle: "Responsive eCommerce platform with PHP & MySQL",
    description: "A full-featured, responsive eCommerce web application for mobile accessories. Includes product browsing, item detail views, interactive shopping cart, and a robust MySQL database backend.",
    thumbnail: null,
    technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
    features: [
      "Product listing with intuitive navigation and category sorting",
      "Dynamic shopping cart with quantity controls and checkout flow",
      "Product detail pages with high-resolution imagery and specifications",
      "Relational MySQL database integration for managing product and order data",
    ],
    contribution: "Built the full-stack web application from scratch — created responsive front-end pages, handled cart logic, and connected PHP scripts with MySQL database.",
    github: null,
    demo: null,
    category: "Full Stack",
    status: "complete",
  },
  {
    id: 2,
    title: "College Management System",
    subtitle: "Centralized system for managing academic operations",
    description: "A full-stack web application that digitizes college administrative tasks — managing student records, courses, attendance tracking, and result management through a clean admin interface.",
    thumbnail: null,
    technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
    features: [
      "Student registration and profile management",
      "Course and subject assignment system",
      "Attendance tracking with date-wise records",
      "Result entry and grade report generation",
    ],
    contribution: "Built the full-stack system including database schema design in MySQL, PHP backend for CRUD operations, and the frontend admin interface.",
    github: null,
    demo: null,
    category: "Full Stack",
    status: "complete",
  },
  {
    id: 3,
    title: "Expense Tracker",
    subtitle: "Personal finance tool to track income and spending",
    description: "A responsive personal finance web application that helps users track their income and expenses, visualize spending patterns through interactive charts, and manage monthly budgets effectively.",
    thumbnail: null,
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3"],
    features: [
      "Add and categorize income and expense entries",
      "Interactive charts for visual spending analysis",
      "Monthly budget setting with progress tracking",
      "Summary dashboard showing balance, income, and total expenses",
    ],
    contribution: "Developed the complete React.js application including state management for transactions, chart integration for data visualization, and responsive UI design.",
    github: null,
    demo: null,
    category: "Frontend",
    status: "complete",
  },
];

// =============================================================
// Certifications & Achievements
// =============================================================
export const certifications = [
  {
    id: 1,
    title: "Web Development Internship Completion Certificate",
    issuer: "Rayzon Solar Limited",
    date: "September 2025",
    description: "Awarded upon successful completion of a 6-week Web Development Internship. Worked on landing pages and admin panel development using HTML, CSS, JavaScript, PHP, React.js, and MongoDB.",
    verifyUrl: null,
    type: "certification",
  },
];
