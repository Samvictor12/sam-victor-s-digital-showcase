export const roles = [
  "Full-Stack Engineer",
  "React Developer",
  "Problem Solver",
  "Software Architect",
];

export const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "Java", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 80 },
    ],
  },
  {
    category: "Frameworks",
    items: [
      { name: "React", level: 92 },
      { name: "Spring Boot", level: 80 },
      { name: "Express", level: 85 },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", level: 85 },
      { name: "PostgreSQL", level: 82 },
    ],
  },
  {
    category: "Web Technologies",
    items: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "Tailwind CSS", level: 92 },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Git", level: 88 },
      { name: "Docker", level: 78 },
      { name: "REST APIs", level: 90 },
      { name: "n8n", level: 75 },
    ],
  },
];

export const experiences = [
  {
    role: "Software Engineer",
    company: "BinaryWavesSolutions",
    period: "Aug 2023 – Present",
    current: true,
    bullets: [
      "Spearheaded digitalization initiatives achieving 20% efficiency increase and 30% error reduction",
      "Developed production monitoring systems boosting productivity by 25%",
      "Built full-stack applications with React, Express/Java, MySQL/PostgreSQL",
      "Implemented Docker containerization for seamless deployments",
    ],
  },
  {
    role: "Associate Engineer",
    company: "PROV Infotech",
    period: "Feb 2022 – Jul 2023",
    bullets: [
      "ServiceNow development using Java, JavaScript, React, HTML, CSS",
      "Built and maintained enterprise service management solutions",
      "Collaborated with cross-functional teams on client deliverables",
    ],
  },
  {
    role: "Mapping Engineer",
    company: "EDR",
    period: "Feb 2021 – Jan 2022",
    bullets: [
      "Created HD Maps for Tesla using Google Maps and Lidar technology",
      "Ensured precision and accuracy in geospatial data processing",
    ],
  },
  {
    role: "Material Engineer",
    company: "INFO PLUS",
    period: "Oct 2019 – Feb 2021",
    bullets: [
      "Data enrichment and vendor verification for Tata Projects",
      "Managed material data accuracy and procurement workflows",
    ],
  },
  {
    role: "Machine Operator",
    company: "Bonfiglioli",
    period: "Oct 2018 – Oct 2019",
    bullets: [
      "Operated CNC machines for precision manufacturing",
      "Maintained quality standards and production targets",
    ],
  },
];

export const projects = [
  {
    title: "Production Monitoring System",
    description:
      "Plan and monitor live production processes in real-time with comprehensive dashboards and alerts.",
    tech: ["React", "Java", "Express", "MySQL", "PostgreSQL"],
    metric: "Optimized workflows by 25%",
  },
  {
    title: "Accounting & Budgeting App",
    description:
      "Budget planning, income/expense tracking, and financial reports including P&L and Balance Sheet.",
    tech: ["React", "Express", "MySQL", "PostgreSQL", "Docker"],
    metric: "Automated 80% of reports",
  },
  {
    title: "SMT Line Monitoring",
    description:
      "Full visibility on production lines with dashboards for outlets, scraps, and line efficiency.",
    tech: ["React", "Tailwind", "Spring Boot", "MySQL"],
    metric: "30% error reduction",
  },
  {
    title: "Production Planning System",
    description:
      "Line planning with OEE and ANDON insights for real-time production intelligence.",
    tech: ["React", "Express", "PostgreSQL", "n8n", "Docker"],
    metric: "20% efficiency increase",
  },
];

export const certificates = [
  {
    name: "CSA Certified — ServiceNow",
    issuer: "ServiceNow",
    description: "Certified System Administrator with expertise in ServiceNow platform configuration and management.",
  },
  {
    name: "Selenium with Java",
    issuer: "Course Completion",
    description: "Comprehensive certification in automated testing using Selenium WebDriver with Java.",
  },
];

export const highlights = [
  { value: 20, suffix: "%", label: "Efficiency Increase" },
  { value: 30, suffix: "%", label: "Error Reduction" },
  { value: 25, suffix: "%", label: "Productivity Boost" },
  { value: 4, suffix: "+", label: "Major Projects" },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];
