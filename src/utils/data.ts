import { FaReact } from "react-icons/fa";
import { IconType } from "react-icons";
import {
  SiMui,
  SiTypescript,
  SiJavascript,
  SiGit,
  SiNextdotjs,
  SiStyledcomponents,
  SiGraphql,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiLaravel
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

type Skill = {
  id: number;
  name: string;
  icon: IconType;
  color?: string;
};

export const menuData = {
  menu: {
    items: [
      {
        id: 1,
        text: "About",
        url: "#about",
      },
      {
        id: 2,
        text: "Experience",
        url: "#experience",
      },
      {
        id: 3,
        text: "Projects",
        url: "#projects",
      },
      {
        id: 4,
        text: "Contact",
        url: "#contact",
      },
    ],
  },
};

export const heroData = {
  nameTitle: "M.JAWAD AWAN",
  subtitle: "SOFTWARE DEVELOPER",
  intro: "Crafting stunning web experiences.",
};

export const aboutData = {
  description:
    "As a Web Developer with a solid background in modern web technologies, I specialize in crafting responsive,\n" +
    "stateful and user-centric web applications. My experience spans across diverse, high-impact projects in various" +
    "industries, where I have consistently delivered engaging and intuitive web experiences." +
    "I am a self-driven and quick learner who thrives in agile team environments, always eager to expand my knowledge" +
    "and adapt to new challenges. My commitment to staying current with industry trends and best practices allows me to" +
    "create innovative solutions that align with user needs and business goals.",
  skills: [
    {
      id: 1,
      name: "ReactJS",
      icon: FaReact,
      color: "#139ECA",
    },
    {
      id: 2,
      name: "NextJS",
      icon: SiNextdotjs,
      color: "#D9D9D9",
    },
    {
      id: 9,
      name: "NodeJS",
      icon: SiNodedotjs,
      color: "#68A063",
    },
    {
      id: 10,
      name: "Express",
      icon: SiExpress,
      color: "#FFF",
    },
    {
      id: 11,
      name: "MongoDB",
      icon: SiMongodb,
      color: "#47A248",
    },
    {
      id: 3,
      name: "Material UI",
      icon: SiMui,
      color: "#027FFE",
    },
    {
      id: 4,
      name: "TypeScript",
      icon: SiTypescript,
      color: "#007ACC",
    },
    {
      id: 5,
      name: "JavaScript",
      icon: SiJavascript,
      color: "#F7DF1E",
    },
    {
      id: 6,
      name: "Git",
      icon: SiGit,
      color: "#F05032",
    },
    {
      id: 7,
      name: "php/Laravel",
      icon: SiLaravel,
      color: "#F05032",
    },
  ] as Skill[],
};

type Experience = {
  id: number;
  title: string;
  company: string;
  url: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: string[];
};

export const experienceData = [
  {
    id: 0,
    title: "Full Stack Developer",
    company: "DevEntia",
    url: "https://deventiatech.com/",
    startDate: "Feb 2024",
    endDate: "present",
    description:
      "As a Full Stack Developer at DevEntia, I am responsible for designing and implementing both the front-end and back-end of web applications." +
      "My role involves collaborating with cross-functional teams to gather requirements and develop user-friendly interfaces, ensuring a seamless user experience." + 
      "I utilize technologies such as TypeScript and React to build responsive and dynamic web applications. On the back-end, I leverage Node.js and REST APIs to create robust server-side solutions, integrating various services and databases." +
      "I also prioritize code quality and maintainability, conducting thorough testing and code reviews to ensure the highest standards of software development.",
    skills: [
      "ReactJS",
      "Nodejs",
      "TypeScript",
      "REST API",
      "MUI",
      "Tailwind",
    ],
  },
  {
    id: 1,
    title: "Freelancer",
    company: "Freelancer",
    url: "https://www.miguelgnz.com/",
    startDate: "Jan 2023",
    endDate: "present",
    description:
      "During my journey as a Freelancer enthusiast, I've dedicated substantial time to continuous learning and skill development. I've eagerly pursued courses and certifications across a spectrum of cutting-edge web technologies, ensuring that my knowledge remains current and adaptable. Moreover, I've embraced personal projects as valuable learning opportunities, allowing me to put theory into practice and gain hands-on experience.",
      skills: [
        "ReactJS",
        "ExpressJS",
        "TypeScript",
        "REST API",
        "MUI",
        "Tailwind",
        "shadcn/ui"
      ],
  },
] as Experience[];

type Project = {
  title: string;
  url: string;
  sourceLink: string;
  description: string;
  image: string;
  skills: string[];
};

export const projectsData = [
  {
    title: "MakeWell.life : Your Gateway to Profitable Facilitation",
    url: "https://makewell.life",
    sourceLink: "https://github.com/deventialimited/MakeWell-Web",
    description:
      "A dynamic single-page portfolio site built with Next.js and MUI. Showcasing my software engineering journey and expertise.",
    image: "/makewell-life.png",
    skills: ["ReactJS", "ExpressJS", "Tailwind CSS", "shadcn/ui"]
  },
  {
    title: "Dadi Rent Boat",
    url: "https://www.dadirent.it/",
    sourceLink: "https://www.dadirent.it/",
    description:
      "A user-friendly boat rental service built with the MERN stack, designed to connect boat owners with potential renters. Users can easily browse available boats, book rentals, and manage their reservations through an intuitive interface.",
    image: "/dadi-rent-boat.png",
    skills: ["MongoDB", "Express", "ReactJS", "NodeJS"],
  },
  {
    title: "simpple :)",
    url: "https://www.simpple.tax/",
    sourceLink: "https://github.com/deventialimited/GetSimple",
    description:
      "A user-friendly tax calculation app built with ReactJS that simplifies the tax filing process. It features an intuitive interface that guides users through various tax scenarios, ensuring accurate calculations and easy navigation. Simpple helps users stay compliant with tax regulations while maximizing their deductions.",
    image: "/simpple.png",
    skills: ["ReactJS", "ExpressJS","headless UI", "Tailwind CSS"]
  },
  {
    title: "RS Global Ties",
    url: "https://www.rsglobalties.com/",
    sourceLink: "https://github.com/deventialimited/RS-Global-Ties",
    description:
      "A responsive B2B platform designed to connect businesses and enhance collaboration. It features user-friendly dashboards for project management and performance tracking, ensuring seamless communication and resource sharing among partners. Built for scalability, it provides a consistent experience across all devices.",
    image: "/rs-global-ties.png",
    skills: ["ReactJS", "ExpressJS","MUI", "Tailwind"],
  },
  {
    title: "Starbucks Clone",
    url: "https://github.com/jawad989/starbucks-clone-frontend",
    sourceLink: "https://github.com/jawad989/starbucks-clone-frontend",
    description:
      "A dynamic and user-friendly single-page web application built using HTML, and Tailwind CSS. Using mobile first approach.",
    image: "/starbucks.png",
    skills: [
      "HTML",
      "Tailwind",
      "CSS",
      "Javascript",
    ],
  },
] as Project[];

type Contact = {
  linkedin: string;
  github: string;
};

export const contactData = {
  linkedin: "https://www.linkedin.com/in/jawadawan077/",
  github: "https://github.com/jawad989",
} as Contact;
