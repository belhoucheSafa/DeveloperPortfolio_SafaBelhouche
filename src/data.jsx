import { FaPaintBrush } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { FaCodeCompare } from "react-icons/fa6";
import { GiIdea } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { FaCode, FaProjectDiagram } from "react-icons/fa";

import {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  profile3,
  profile4,
  profile5,
  profile6,
  figma,
  sketch,
  xd,
  css,
  html,
  javascript,
  tailwind,
  bootstrap,
  react,
  reactnative,
  emailicon,
  messengericon,
  whatsappicon,
  mongodb,
  nodejs,
  reactjs,
  redux,
  threejs,
  jwt,
  apex,
  gsap,
  scss,
} from "./assets";

import MezoughiLandingPage from "./assets/projectsDemos/MezoughiLandingPage.mp4";
import MezoughiDashRecord from "./assets/projectsDemos/MezoughiDashRecord.mp4";
import SplytProteinLanding from "./assets/projectsDemos/SplytProject.mp4";
import StockManagementApp from "./assets/projectsDemos/StockManagementApp.mp4";
import PSCManagementApp from "./assets/projectsDemos/PSC_MANAGEMENT_APP_V0.mp4";
import RefineGaming from "./assets/projectsDemos/refineGamingLanding.mp4";
import BluePapilio from "./assets/projectsDemos/DjangoBluePapilio.mp4";
import BridgeEd from "./assets/projectsDemos/BridgeEdProject.mp4";


export const menu = [
  { name: "About" },
  { name: "Services" },
  { name: "Education & Experience" },
  { name: "Projects" },
  // { name: "Testimonial" },
  { name: "Contact" },
];

export const services = [
  {
    title: "UI / UX Design",
    color: "#2563eb",
    colorRGB: "37, 99, 235",
    icon: <FaPaintBrush />,
    description: `As a software engineering student, I design intuitive and engaging interfaces. 
                  From wireframes to polished prototypes, I focus on user-centric designs 
                  that combine creativity and functionality, ensuring seamless experiences across all platforms.`,
  },
  {
    title: "Web Development",
    icon: <FaCode />,
    color: "blueviolet",
    colorRGB: "138, 43, 226",
    description: `I build responsive and high-performance applications using modern technologies 
                  like React, Node.js, and more. My work covers everything from frontend to backend, 
                  creating scalable, maintainable, and efficient solutions for real-world problems.`,
  },
  {
    title: "Project Conception",
    icon: <FaProjectDiagram />,
    color: "var(--color-success)",
    colorRGB: "var(--color-success-rgb)",
    description: `I am involved in the full lifecycle of software projects, including planning, 
                  architecture design, and implementation. I ensure that ideas are transformed 
                  into practical and robust solutions that meet technical and business requirements.`,
  },
];

export const projects = [
  {
    title: "Recycling Plastic Landing Page",
    image: project1,
    category: "Landing Page",
    description: `A modern, fully designed landing page for a recycling plastic business. The business collects plastic bottles from suppliers and transforms them into multiple types of granules. The landing page features a unique design with smooth pastel colors, 3D icons, and custom images. I handled the full UI/UX design.`,
    demoLink: "https://google.com/",
    stacks: [
      { name: "React", logo: react },
      { name: "SCSS", logo: scss },
    ],
    video: MezoughiLandingPage,
    projectCode: `
const project = {
  name: "Recycling Plastic Landing Page",
  description: \`A modern, fully designed landing page for a recycling plastic business. The business collects plastic bottles from suppliers and transforms them into multiple types of granules. The landing page features a unique design with smooth pastel colors, 3D icons, and custom images. I handled the full UI/UX design.\`,
  techs: ["React", "SCSS"],
  github: "Contact me for the code 😉",
  tasks: [
    "Full UI/UX design",
    "3D icons and images",
    "Landing page implementation",
  ],
  notes: () => {
    // Smooth pastel colors
    // Unique modern design
    // Fully responsive
  }
};
    `,
  },
  {
    title: "Recycling Plastic Admin Platform",
    image: project1,
    category: "Web App | Platform",
    description: `A platform for managing the recycling business operations. Built with React, Node.js, MongoDB, JWT authentication, ApexCharts, and SCSS. The system manages admins, employees, suppliers, orders, and products securely with full CRUD functionality.`,
    demoLink: "https://google.com/",
    stacks: [
      { name: "React", logo: react },
      { name: "Node.js", logo: nodejs },
      { name: "MongoDB", logo: mongodb },
      { name: "JWT", logo: jwt },
      { name: "ApexCharts", logo: apex },
      { name: "SCSS", logo: scss },
    ],
    video: MezoughiDashRecord,
    projectCode: `
const project = {
  name: "Recycling Plastic Admin Platform",
  description: \`A platform for managing the recycling business operations. Built with React, Node.js, MongoDB, JWT authentication, ApexCharts, and SCSS. The system manages admins, employees, suppliers, orders, and products securely with full CRUD functionality.\`,
  techs: ["React", "Node.js", "MongoDB", "JWT", "ApexCharts", "SCSS"],
  github: "Contact me for the code 😉",
  tasks: [
    "Admin, employees, clients, orders, suppliers, stock and products management",
    "Orders and products CRUD",
    "Secure login with JWT",
    "Dashboard with ApexCharts",
  ],
  notes: () => {
    // Secure authentication
    // Full CRUD
    // Dashboard analytics
  }
};
    `,
  },
  {
    title: "Splyt Protein Landing Page",
    image: project1,
    category: "Landing Page",
    description: `A highly modern landing page for Splyt Protein, a fizzy beverage. Built with React, TailwindCSS, and GSAP. Every section includes smooth modern animations, 3D effects, and interactive elements. This project was my first time using GSAP, and I applied it while learning in a Three.js + GSAP bootcamp.`,
    demoLink: "https://google.com/",
    stacks: [
      { name: "React", logo: react },
      { name: "TailwindCSS", logo: tailwind },
      { name: "GSAP", logo: gsap },
    ],
    video: SplytProteinLanding,
    projectCode: `
const project = {
  name: "Splyt Protein Landing Page",
  description: \`A highly modern landing page for Splyt Protein, a fizzy beverage. Built with React, TailwindCSS, and GSAP. Every section includes smooth modern animations, 3D effects, and interactive elements. This project was my first time using GSAP, and I applied it while learning in a Three.js + GSAP bootcamp.\`,
  techs: ["React", "TailwindCSS", "GSAP"],
  github: "Contact me for the code 😉",
  tasks: [
    "GSAP animations for all sections",
    "3D effects and interactive design",
    "TailwindCSS responsive implementation",
  ],
  notes: () => {
    // First GSAP project
    // Modern animations applied
    // Interactive UX
  }
};
    `,
  },
];

export const contactInfo = [
  {
    name: "Email",
    value: "safabelhouch@gmail.com",
    link: "mailto:safabelhouch@gmail.com",
    icon: emailicon,
    btnIcon: <MdOutlineEmail />,
    color: "rgb(56,115,205)",
  },
  {
    name: "Messenger",
    value: "safa Belhouche",
    link: "#",
    icon: messengericon,
    btnIcon: <RiMessengerLine />,
    color: "rgb(139,74,251)",
  },
  {
    name: "WhatsApp",
    value: "+216 50122080",
    link: "https://api.whatsapp.com/send?phone=+21650122080",
    icon: whatsappicon,
    btnIcon: <BsWhatsapp />,
    color: "rgb(38,234,112)",
  },
];
export const socialHandles = [
  {
    name: "Fiverr",
    icon: <SiFiverr />,
    link: "",
  },
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "",
  },
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin />,
    link: "",
  },
  {
    name: "Youtube",
    icon: <AiFillYoutube />,
    link: "https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
  },
];
