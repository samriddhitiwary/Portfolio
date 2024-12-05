import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
    {
      title: "Blockchain",
      icon: creator,
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
      name: "Redux Toolkit",
      icon: redux,
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
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    
  ];
  
  const experiences = [
    {
      title: "GSSOC-TOP 100 Certificate",
      company_name: "GirlScript Summer of code",
      
     
      date: "October 2024 - Novemeber 2024",
      points: [
       "For being one of the top 100 contributors, I was honored with a Certificate of Appreciation – a special recognition reserved for the top performers.",
       " I achieved the 68𝘁𝗵 position out of over **70,000+ participants**, with **3,900+ active contributors** worldwide!",
      ],
    },
    {
      title: "Hacktoberfest",
      company_name: "Digital Ocean",
     
      date: "October 2024",
      points: [
       " I’ve successfully completed my Hacktoberfest challenges and earned all the FOUR badges",
       "Hacktoberfest, conducted by DigitalOcean, GitHub, and other partners, has been an incredible experience. ",
       "It allowed me to contribute to open-source projects, learn from a diverse community of developers, and improve my coding skills.",
      ],
    },
    {
      title: "HackWeb3Conf Hackathon Semi-Finalist",
      company_name: "GirlScript Summer of code",
      
      date: "December 2024",
      points: [
        "My idea CryptoWarriors, has been selected among the Top 100 at HackWeb3Conf 2024, standing out from over 1,600 developers and 600 innovative submissions",
        "CryptoWarriors is a play-to-earn blockchain game that enables players to own NFT warriors, engage in challenging quests, trade valuable assets, and earn cryptocurrency rewards",
        "The game fosters collaboration through alliances and offers competitive tournaments, blending immersive gameplay with a decentralized economy to deliver tangible value to its players.",
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
      name: "Fern and Petal",
      description:
        "Built a responsive front-end clone of the Fern and Petal website using React. " +
        "Implemented React Router for seamless navigation and styled the UI with React Bootstrap for a mobile-friendly design. " +
        "Created interactive features like product displays and image sliders for enhanced user experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "JS",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/samriddhitiwary/fernNpetal",
    },
    {
      name: "Boat Website Clone",
      description:
        "I built a responsive clone of the Boat website using HTML, CSS, and JavaScript. The project involved creating product listings and a clean, intuitive navigation system. I implemented interactive features such as image sliders and product filters to enhance the user experience.",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JS",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/samriddhitiwary/Boat",
    },
  ];
  
  
  export { services, technologies, experiences, testimonials, projects };