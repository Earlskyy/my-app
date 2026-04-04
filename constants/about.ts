export type Experience = {
  year: string;
  title: string;
  description: string;
  company?: string;
};

export const EXPERIENCES: Experience[] = [
  {
    year: "2023",
    title: "Junior Developer",
    company: "Tech Startup",
    description: "Started my journey as a junior developer, learning the fundamentals of web development and contributing to small projects.",
  },
  {
    year: "2024",
    title: "Full Stack Developer",
    company: "Digital Agency",
    description: "Transitioned to full stack development, working on both frontend and backend systems using React and Node.js.",
  },
  {
    year: "2025",
    title: "Senior Developer",
    company: "Tech Company",
    description: "Advanced to senior developer role, leading projects and mentoring junior developers in the team.",
  },
  {
    year: "2026",
    title: "Tech Lead",
    company: "Enterprise Co.",
    description: "Currently serving as tech lead, architecting solutions and driving technical decisions across the organization.",
  },
];
