import { url } from "inspector";
import {
    RxCrop,
    RxDesktop,
    RxPencil2,
    RxReader,
    RxRocket,
    RxAccessibility,
    RxHome,
    RxPerson,
    RxDashboard,
  } from "react-icons/rx";
  
  import { FaReact, FaAws } from "react-icons/fa";
  import { RiTailwindCssFill, RiVuejsLine, RiFirebaseFill } from "react-icons/ri";
  import { SiSass, SiTypescript, SiMongodb, SiNextdotjs } from "react-icons/si";


  export const Socials = [
    {
      name: "GitHUb",
      src: "/assets/github.png",
      url: "https://github.com/sofiagalkina",
    },
    {
      name: "LinkedIn",
      src: "/assets/linkedin.png",
      url: "https://www.linkedin.com/in/sofigalkina/",
    }
  ];
  
  export const NavLinks = [
    {
      name: "Home",
      icon: RxHome,
      link: "/",
    },
    {
      name: "About me",
      icon: RxPerson,
      link: "/about-me",
    },
    {
      name: "Projects",
      icon: RxDashboard,
      link: "/my-projects",
    },
  ];
  
  export const ProImages = [
    {
      src: "/assets/projects/comproject.png",
      url: "https://sofiagalkina.github.io/wdd230/chamber/directory.html",
    },
    {
      src: "/assets/projects/oldportfolio.png",
      url: "https://sofiagalkina.github.io/portfolio/",
    },
    {
      src: "/assets/projects/designprinciples.png",
      url: "https://sofiagalkina.github.io/wdd230/lesson2/design-principles.html",
    },
    {
      src: "/assets/projects/SpaceCity3.jpg",
      url: "",
    },
  ];
  
  export const ProImages2 = [
    {
      src: "/assets/projects/chessproject.png",
      url: "https://chess-orcin-ten.vercel.app/",
    },
    {
      src: "/assets/projects/todoappproject.png",
      url: "https://to-do-react-app-indol.vercel.app/",
    },
    {
      src: "/assets/projects/weatherapp.png",
      url: "https://weather-app-theta-three-66.vercel.app/",
    },
    {
      src: "/assets/projects/animations.png",
      url: "https://cssanimations-seven.vercel.app/",
    },
  ];
  
  export const ServiceData = [
    {
      icon: SiNextdotjs,
      title: "Next.js",
      content: "Framework for server-side rendering React apps",
      backgroundImage: "/assets/space/SpaceCity7.jpeg",
    },
    {
      icon: FaReact,
      title: "React",
      content: "Library for building user interfaces",
      backgroundImage: "/assets/space/SpaceCity9.jpeg",
    },
    {
      icon: RiTailwindCssFill,
      title: "Tailwind",
      content: "Utility-first CSS framework for fast styling",
      backgroundImage: "/assets/space/SpaceCity1.jpg",
    },
    {
      icon: SiSass,
      title: "SASS",
      content: "CSS preprocessor for advanced styling",
      backgroundImage: "/assets/space/SpaceCity6.jpeg",
    },
    {
      icon: RiVuejsLine,
      title: "Vue",
      content: "Progressive framework for building UIs and single-page apps",
      backgroundImage: "/assets/space/SpaceCity5.jpeg",
    },
    {
      icon: SiTypescript,
      title: "TypeScript",
      content: "Superset of JavaScript with type safety",
      backgroundImage: "/assets/space/SpaceCity8.jpeg",
    },
    {
      icon: RiFirebaseFill,
      title: "Firebase",
      content: "Backend-as-a-service for real-time data and auth",
      backgroundImage: "/assets/space/SpaceCity7.jpeg",
    },
    {
      icon: SiMongodb,
      title: "MongoDB",
      content: "NoSQL database for flexible data storage",
      backgroundImage: "/assets/space/SpaceCity9.jpeg",
    },
    {
      icon: FaAws,
      title: "AWS",
      content: "Cloud services for scalable infrastructure",
      backgroundImage: "/assets/space/SpaceCity6.jpeg",
    },
    
  ];