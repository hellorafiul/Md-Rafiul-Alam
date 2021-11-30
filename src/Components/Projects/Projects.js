import React from 'react';
import './Projects.css'
import Project from './../Project/Project';

const projectsData = [
  {
    "id": 1,
    "img": "https://i.ibb.co/zPV19kc/aments-Project.png",
    "name": "❖ Aments - Best Car Accessories Shop",
    "date": "Nov 2021 - Nov 2021",
    "website": "https://aments-9b6e4.web.app/",
    "frontendGit": "https://github.com/hellorafiul/Aments-Car-Accessories-Client",
    "backendGit": "https://github.com/hellorafiul/Aments-Car-Accessories-server",
    "linkedin": "https://www.linkedin.com/in/hellorafiul/",
    "des": [
      "➣ A responsive, fully-functional niche website",
      "➣ Allowing customers to create an account, browse products, buy products & write reviews.",
      "➣ Admins have the ability to add new products, remove existing products, remove user products, update shipping status, and create new admin accounts.",
      "➣ Reviews are dynamic."
    ],
    "Technology": [
      "#MUI",
      "#JS",
      "#React",
      "#Aso",
      "#React router",
      "#Heroku",
      "#Firebase",
      "#Node JS",
      "#Node Express",
      "#MongoDB",
    ]
  },
  {
    "id": 2,
    "img": "https://i.ibb.co/XJPf5xP/yatra.png",
    "name": "❖ Yatra - Best Travel Agency",
    "date": "Nov 2021 - Nov 2021",
    "website": "https://yatra-62295.web.app/",
    "frontendGit": "https://github.com/hellorafiul/Yatra-Travel-Agency-Client",
    "backendGit": "https://github.com/hellorafiul/Yatra-Travel-Agency-Server",
    "linkedin": "https://www.linkedin.com/in/hellorafiul/",
    "des": [
      "➣ Travel agency website with dynamic functions and responsive design.",
      "➣ Allows user to create an account, book packages, add custom packages, and delete them.",
      "➣ Google firebase authentication has been added.",
      "➣ Reviews are dynamic."
    ],
    "Technology": [
      "#BootStrap",
      "#JS",
      "#React",
      "#React router",
      "#Heroku",
      "#Firebase",
      "#Node JS",
      "#Node Express",
      "#MongoDB",
    ]
  },
  {
    "id": 3,
    "img": "https://i.ibb.co/DffF163/honulare.png",
    "name": "❖ HounLare - Medical & Health Care Services",
    "date": "Oct 2021 - Oct 2021",
    "website": "https://hounlare.web.app/",
    "frontendGit": "https://github.com/hellorafiul/HounLare",
    "linkedin": "https://www.linkedin.com/in/hellorafiul/",
    "des": [
      "➣ A fully functional dynamic responsive website",
      "➣ User can see his name and profile picture in the header after signin with Google.",
      "➣ Navigate different pages is possible through navbar without reloading.",
    ],
    "Technology": [
      "#Html5",
      "#Css3",
      "#BootStrap",
      "#JS",
      "#React",
      "#React router",
      "#Firebase"
    ]
  },
  {
    "id": 4,
    "img": "https://i.ibb.co/3mbq7xd/hondaCBR.png",
    "name": "❖ Honda CBR - Best Bike Accessories Shop",
    "date": "July 2021 - July 2021",
    "website": "https://honda-cbr-rafi.netlify.app/",
    "frontendGit": "https://github.com/hellorafiul/honda-cbr",
    "linkedin": "https://www.linkedin.com/in/hellorafiul/",
    "des": [
      "➣  This was my very first static responsive website focused on UI using HTML5, CSS3, Bootstrap and JavaScript",
      "➣ Used fancy carousel & hosted on netlify",
      "➣ Amzging UI exprience",
    ],
    "Technology": [
      "#HTML5",
      "#CSS3",
      "#BootStrap",
      "#JavaScript",
    ]
  }
]
const Projects = () => {
  return (
    <div id="projects">
      <h2 className="text-start pb-5 mb-5 container">My projects_</h2>
      {projectsData.map((project) => <Project key={project.id} project={project}></Project>)}
    </div>
  );
};

export default Projects;