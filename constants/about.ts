export type Experience = {
  year: string;
  title: string;
  description: string;
  company?: string;
};

export type Education = {
  level: string;
  school: string;
  course?: string;
  duration: string;
  honors?: string;
};

export const EXPERIENCES: Experience[] = [
  
  {
    year: "2025 - 2026",
    title: "Web Design",
    company: "Freelance / Small Clients",
    description: "Built UI/UX designs based on client needs and wants using Figma.",
  },
  {
    year: "2024 - 2026",
    title: "Video Editor / Filmmaker / Graphic Designer",
    company: "Freelance",
    description: "Created video content, edited films, and designed graphics for various clients. Managed projects from concept to final output, ensuring high-quality visuals and meeting client requirements.",
  },
  {
    year: "2023 - 2024",
    title: "Customer Support",
    company: "Family Business",
    description: "Handled customer inquiries, resolved issues, and maintained positive client relationships. Developed communication and problem-solving skills in a fast-paced environment.",
  },
  
  {
    year: "2022 - 2026",
    title: "Delivery Rider",
    company: "Lalamove / Maxim / Shopee",
    description: "Provided reliable delivery services while managing time efficiently. Maintained strong work ethic, adaptability, and consistency under varying conditions.",
  },
  {
    year: "2023",
    title: "Junior Frontend Developer",
    company: "Personal Projects",
    description: "Learned web development fundamentals including HTML, CSS, JavaScript, and React. Built small projects to practice component-based development.",
  },
];

export const EDUCATION: Education[] = [
  {
    level: "College",
    school: "Cordova Public College",
    course: "Bachelor of Science in Information Technology",
    duration: "2023 - Present",
  },
  {
    level: "Secondary",
    school: "Cordova National High School",
    course: "Information and Communications Technology",
    honors: "With Honors",
    duration: "2016 - 2023",
  },
  {
    level: "Elementary",
    school: "Catarman Elementary School",
    honors: "Third Honorable Mention",
    duration: "2010 - 2016",
  },
];
