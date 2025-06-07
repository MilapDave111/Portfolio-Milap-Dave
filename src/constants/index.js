import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  project,
  jobit,
  tripguide,
  threejs,
  breafcase,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  
];

const experiences = [
  {
    title: "FullStack PHP Developer",
    company_name: "Fuerte Developers",
    icon: breafcase,
    iconBg: "#383E56",
    date: "June 2023 - August 2023",
    points: [
      "Developing and maintaining advanced ERP systems for school management using PHP, HTML, CSS, JavaScript,Bootstrap,Ajax and XAMPP as Database.",
      "Collaborating with designers and product managers, following a genuine workflow with a friendly and supportive approach.",
      "Implementing responsive design and ensuring cross-browser compatibility by checking errors and debugging.",
      "Actively contributing to high-quality product development through full-stack expertise.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "School Management System",
    description:
      "I develop and maintain advanced ERP systems for school management. Project consists of three panels—Admin, Student, and Teacher—each with their respective rights. It includes features such as class and section management, transport management, student management, attendance management, library management, and a timetable tailored to each student's class and section.",
    tags: [
      {
        name: "Php",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "Ajax",
        color: "pink-text-gradient",
      },
      {
        name: "Javascript",
        color: "red-text-gradient",
      },
    ],
    image: project,
    source_code_link: "https://github.com/MilapDave111/School-Management-System",
  },
  {
    name: "School Management System",
    description:
      "I develop and maintain advanced ERP systems for school management. Project consists of three panels—Admin, Student, and Teacher—each with their respective rights. It includes features such as class and section management, transport management, student management, attendance management, library management, and a timetable tailored to each student's class and section.",
    tags: [
      {
        name: "Php",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "Ajax",
        color: "pink-text-gradient",
      },
      {
        name: "Javascript",
        color: "red-text-gradient",
      },
    ],
    image: project,
    source_code_link: "https://github.com/MilapDave111/School-Management-System",
  },
  {
    name: "School Management System",
    description:
      "I develop and maintain advanced ERP systems for school management. Project consists of three panels—Admin, Student, and Teacher—each with their respective rights. It includes features such as class and section management, transport management, student management, attendance management, library management, and a timetable tailored to each student's class and section.",
    tags: [
      {
        name: "Php",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "Ajax",
        color: "pink-text-gradient",
      },
      {
        name: "Javascript",
        color: "red-text-gradient",
      },
    ],
    image: project,
    source_code_link: "https://github.com/MilapDave111/School-Management-System",
  },

];

export { services, technologies, experiences, testimonials, projects };