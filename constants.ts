
import { Experience, SkillGroup, Education, Award } from './types';

export const PERSONAL_INFO = {
  name: "NAGARAJ RAMANATH ALVA",
  role: "Senior Full-Stack Engineer",
  experience_years: "10+",
  email: "nagarajalva5790@gmail.com",
  phone: "+91 9164198608",
  location: "India (Open for Relocation to US)",
  visa_status: "Valid H1B Visa (Stamp Approved)",
  linkedin: "https://linkedin.com",
  github: "https://github.com",
  summary: "Senior Full-Stack Engineer with 10+ years of experience specializing in ReactJS, Next.js, and Node.js. Proven record leading development teams and architecting scalable, high-performance e-commerce and OTT media platforms. Skilled in state management (Redux/RTK Query), performance optimization (SSR/SSG), and CI/CD pipelines. Adept at bridging technical solutions with business needs across Banking, Media, and GRC domains. Authorized to work in the United States."
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      { name: "ReactJS", level: 95 },
      { name: "Next.js", level: 92 },
      { name: "TypeScript", level: 90 },
      { name: "Redux / RTK Query", level: 94 },
      { name: "GraphQL", level: 85 },
      { name: "HTML5/CSS", level: 95 }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 90 },
      { name: "REST APIs", level: 95 },
      { name: "Azure Services", level: 82 }
    ]
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Oracle PL/SQL", level: 92 },
      { name: "MySQL", level: 85 }
    ]
  },
  {
    category: "DevOps",
    skills: [
      { name: "CI/CD Pipelines", level: 88 },
      { name: "Azure AD B2C", level: 85 },
      { name: "Git/GitLab", level: 95 },
      { name: "Jenkins/JIRA", level: 90 }
    ]
  },
  {
    category: "Expertise Areas",
    skills: [
      { name: "Architecture", level: 90 },
      { name: "Performance Opt", level: 94 },
      { name: "Team Leadership", level: 92 },
      { name: "Client Facing", level: 95 }
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Hitachi Vantara / Hitachi Digital Services",
    role: "Senior Consultant / Full-Stack Developer",
    duration: "Nov 2021 – Present",
    achievements: [
      "Led a team of seven front-end developers, overseeing development, code reviews, and requirements analysis for a key e-commerce portal.",
      "Engineered Next.js applications using SSR, SSG, and ISR, substantially improving performance and SEO rankings.",
      "Architected application-wide state management with Redux Toolkit (RTK Query) and custom hooks.",
      "Optimized load times through lazy loading and code-splitting for superior device performance.",
      "Automated CI/CD pipelines and integrated Google Analytics and GTM for user behavior insights."
    ],
    projects: [
      {
        title: "JPL Parts Hub (E-commerce Portal)",
        stack: "Next.js / React / Node.js",
        description: ["Major e-commerce transformation project involving scalable frontend architecture."],
        highlights: ["Team leadership (7 devs)", "Performance optimization"]
      },
      {
        title: "Unified Freight System (UFS)",
        stack: "React / Redux",
        description: [
          "Developed customer-facing unified freight solutions with ReactJS, Redux Thunk, and Hooks.",
          "Collaborated with API teams for seamless endpoint integration and maintained code quality."
        ]
      }
    ]
  },
  {
    company: "RoboSoft Technologies",
    role: "Senior Software Engineer",
    duration: "Dec 2020 – Oct 2021",
    achievements: [
      "Developed critical modules for Discovery Plus OTT, including authentication flows and payment gateways.",
      "Gained hands-on experience integrating third-party analytical tools such as Adobe, Blueshift, and Branch Ads.",
      "Enhanced UI with React best practices and component optimizations."
    ]
  },
  {
    company: "ISYX Technologies International Co",
    role: "Techno-Functional Lead",
    duration: "Feb 2019 – Nov 2020",
    achievements: [
      "Built full-stack features for Operational Risk Management using MERN Stack (React, Redux, MUI, Node, Express, MongoDB).",
      "Implemented JWT authentication processes for secure access.",
      "Acted as Techno-Functional Consultant at Qatar Development Bank, ensuring effective client engagement.",
      "Managed vendor coordination ensuring smooth project delivery and solution functionality."
    ]
  },
  {
    company: "Metric Stream Infotech Pvt Ltd",
    role: "Senior Software Engineer",
    duration: "Jan 2014 – Oct 2018",
    achievements: [
      "Delivered 9+ GRC projects for global clients (BlackBerry, SSM Health, Lion Nathan).",
      "Specialized in backend reporting/data migration with Oracle SQL, PL/SQL Procedures, and Packages.",
      "Developed client-side functionality with JavaScript for form validations and UI enhancements.",
      "Awarded STAR Award for exceptional work on Lion Nathan Project."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "AIMIT, St. Aloysius College (Autonomous), Mangalore",
    year: "2014",
    details: "First Class Distinction"
  }
];

export const AWARDS: Award[] = [
  {
    title: "STAR Award",
    issuer: "Metric Stream",
    description: "Awarded for exceptional work on the Lion Nathan Project."
  }
];
