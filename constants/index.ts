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
      icon: RxReader,
      title: "Seo",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: "/assets/space/SpaceCity7.jpeg",
    },
    {
      icon: RxCrop,
      title: "Development",
      content: "Lorem ipsum dolor sit /amet, consectetur adipiscing elit.",
      backgroundImage: "/assets/space/SpaceCity9.jpeg",
    },
    {
      icon: RxPencil2,
      title: "Branding",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: "/assets/space/SpaceCity1.jpg",
    },
    {
      icon: RxDesktop,
      title: "Design",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: "/assets/space/SpaceCity6.jpeg",
    },
    {
      icon: RxAccessibility,
      title: "Management",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: "/assets/space/SpaceCity5.jpeg",
    },
    {
      icon: RxRocket,
      title: "Production",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: "/assets/space/SpaceCity8.jpeg",
    },
  ];