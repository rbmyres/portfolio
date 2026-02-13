export type NavLink = {
  label: string;
  href: string;
};

export type PersonalInfo = {
  name: string;
  title: string;
  email: string;
  linkedInUrl: string;
  githubUrl: string;
  resumePath: string;
  profileImagePath: string;
  aboutParagraphs: string[];
};

export type Skill = {
  name: string;
  iconPath: string | null;
};

export type SkillCategory = {
  category: string;
  skills: Skill[];
};

export type Project = {
  title: string;
  description: string;
  imagePath: string;
  techStack: string[];
  liveUrl: string | null;
  githubUrl: string | null;
};


export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const personalInfo: PersonalInfo = {
  name: "Reese Myres",
  title: "Full Stack Software Engineer",
  email: "reese.myres1@gmail.com",
  linkedInUrl: "https://linkedin.com/in/reese-myres",
  githubUrl: "https://github.com/rbmyres", 
  resumePath: "/Reese_Myres_Resume.pdf",
  profileImagePath: "/images/profile.png",
  aboutParagraphs: [
    "Full-stack developer passionate about building responsive, user-focused web applications using modern technologies. Experienced in designing and optimizing algorithms, relational databases, and RESTful APIs for scalable performance.",
    "With a strong foundation in both frontend and backend development, I bring a well-rounded skill set and a proven ability to deliver full-featured, dynamic platforms. My background in management roles has also equipped me with excellent leadership, communication, and problem-solving skills that translate effectively to collaborative development environments.",
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "TypeScript", iconPath: "/icons/typescript.svg" },
      { name: "JavaScript", iconPath: "/icons/javascript.svg" },
      { name: "Java", iconPath: "/icons/java.svg" },
      { name: "Python", iconPath: "/icons/python.svg" },
      { name: "SQL", iconPath: "/icons/sql.svg" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", iconPath: "/icons/react.svg" },
      { name: "Next.js", iconPath: "/icons/nextjs.svg" },
      { name: "Tailwind CSS", iconPath: "/icons/tailwindcss.svg" },
      { name: "HTML", iconPath: "/icons/html5.svg" },
      { name: "CSS", iconPath: "/icons/css3.svg" },
      { name: "Sass", iconPath: "/icons/sass.svg" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", iconPath: "/icons/nodejs.svg" },
      { name: "Express.js", iconPath: "/icons/express.svg" },
      { name: "PHP", iconPath: "/icons/php.svg" },
      { name: "REST APIs", iconPath: "/icons/rest-api.svg" },
      { name: "JWT", iconPath: "/icons/jwt.svg" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", iconPath: "/icons/mysql.svg" },
      { name: "PostgreSQL", iconPath: "/icons/postgresql.svg" },
    ],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      { name: "AWS Lightsail", iconPath: "/icons/aws.svg" },
      { name: "Route 53", iconPath: "/icons/aws.svg" },
      { name: "Linux (Ubuntu)", iconPath: "/icons/linux.svg" },
      { name: "Nginx", iconPath: "/icons/nginx.svg" },
      { name: "PM2", iconPath: "/icons/pm2.svg" },
      { name: "Cloudflare R2", iconPath: "/icons/cloudflare.svg" },
      { name: "Git", iconPath: "/icons/git.svg" },
      { name: "CI/CD Pipeline", iconPath: "/icons/cicd.svg" },
      { name: "Agile", iconPath: "/icons/agile.svg" },
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Mixer",
    description:
      "Full-Stack social media application",
    imagePath: "/images/mixer.png",
    techStack: ["Vite + React", "Node.js", "Express.js", "Sass", "MySQL", "JWT", "Cloudflare R2"],
    liveUrl: "https://mixer.rbmyres.com/",
    githubUrl: "https://github.com/rbmyres/CocktailRecipes",
  },
  {
    title: "Event Planner", 
    description:
      "Full-Stack event management application",
    imagePath: "/images/events.png",
    techStack: ["HTML", "CSS", "JavaScript", "MySQL", "PHP"],
    liveUrl: "https://events.rbmyres.com/",
    githubUrl: "https://github.com/rbmyres/EventPlanner",
  },
];
