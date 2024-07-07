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
    jobit,
    tripguide,
    threejs,
    saturn,
    PortfolioProj
  
    
    
  } from "../assets";
  import finanze from "../assets/finanze.png";

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },

    {
          id:"Tech",
          title:"TechStack"
     },

    {
      id: "work",
      title: "Work",
    },
    

    {
        id:"projects",
        title:"Project"
    },

    {
        id:"education",
        title:"Education"
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
      title: "FrontEnd Developer ",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Machine Learning ",
      icon: creator,
    },
    
  ];

  //tech
  
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
      name: "TypeScript",
      icon: typescript,
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
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Research Intern",
      company_name: "IIIT Vadodra",
      icon: git,
      iconBg: "#383E56",
      date: "May 2024 - Present",
      points: [
        " Conducted research on ovarian cyst detection using various deep learning methods, including reviewing andanalyzing relevant research papers.",
        "Implemented ovarian cyst detection and feature extraction using Pyradiomics.",
        "Utilized Random Forest Classifier to classify the detected cysts, determining whether a tumor was present.",
      ],
    },
    {
      title: "Harvard We Code Scholar",
      company_name: "Harvard",
      icon: git,
      iconBg: "#E6DEDD",
      date: "Feb 2023-Feb 2023",
      points: [
        "Selected for the Largest student-run Women in Computer Science Tech Conference .",
        "I was offered a scholarship of $250 for attneding the conference In-Person.",
        "This conference gaves us the opportunity for 1:1 Resume Reiew,Mentorship, 1:1 Mock Interview and many other interesting tech events.",
      ],
    },
    {
      title: "Codess Cafe Mentee",
      company_name: "Codess Cafe",
      icon: git,
      iconBg: "#383E56",
      date: "Jan 2023- Present",
      points: [
        "Part of the coding Community of Empowered Women in Tech",
        "Here the program offers igorous coding practice, regular mock interviews, scholarship prep sessions, weekly progress tracking, career counseling, and access to a premium community to ensure all-round development and interview readiness.",
        "We collaborate and help solve real life problems",
        "Participating in resume reviews and providing constructive feedback to other developers.",
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
      name: "FinanazeDiary",
      description:[

        "Developed a finance platform for Gen Z, boosting user engagement by 35% with a stress-free Expense Tracker,improving money management efficiency by40% ",
        "Integrated live Stock Charts, providing users with real-time market insights and increasing user interaction by 50%.",
        "Designed 3D Finance Lessons, making learning engaging and enhancing knowledge retention by 60%.",
        "Implemented an AR-based Currency Quiz, increasing user interaction with the app by 45%."
        ],
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Context-Api",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image:finanze,
      source_code_link: "https://github.com/Viswaraje/finanaze_Diary_final",
      live_demo_link: "https://finanzediary.netlify.app/" // Add this property
    },
    {
      name: "ShareKaroBuildKaro",
      description:[
      "Implemented Authentication and Authorization using PassportJS (GithubAuth), enabling secure user access.",
      "Developed functionality for users to like GitHub profiles and view specific repositories, enhancing user engagement by 54%",
      "Engineered robust features to fetch and filter GitHub User Profiles and Repos (by stars, forks, recency,programming languages), resulting in a 50% increase in data retrieval efficiency and user satisfaction",
      ],
        
      tags: [
        {
          name: "mongodb",
          color: "blue-text-gradient",
        },
        {
          name: "express",
          color: "green-text-gradient",
        },
        {
          name: "react",
          color: "pink-text-gradient",
        },
        {
          name: "Nodejs",
          color: "blue-text-gradient",
        }, {
          name: "Passport Js",
          color: "green-text-gradient",
        },
      ],
      image:jobit,
      source_code_link: "https://github.com/Viswaraje/BuildKaroShareKaro",
      live_demo_link: "https://buildkarosharekaro.onrender.com/" // Add this property
    },
    {
      name: "Viswaraje_Portfolio",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Three.js",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: PortfolioProj,
      source_code_link: "https://githttps://github.com/Viswaraje/Viswaraje_Portfoliohub.com/",
      live_demo_link: "https://viswarajeportfolio.netlify.app/" // Add this property

    },
  ];


  const educationSec = [
    {
      title: "BTech in Computer Science ",
      institute_name: "Shiv Nadar University",
      icon: git,
      iconBg: "#383E56",
      date: "2021 -2025",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Senior Secondary Education",
      institute_name: "Puna International School",
      icon: git,
      iconBg: "#E6DEDD",
      date: "2019-2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Secondary Education",
      institute_name: "Asia English School",
      icon: git,
      iconBg: "#383E56",
      date: "2018-2019",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects,educationSec };
  