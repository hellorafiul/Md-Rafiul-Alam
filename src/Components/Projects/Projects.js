import React from 'react';
import './Projects.css'
import Project from './../Project/Project';

const projectsData = [
  {
    "id": 1,
    "img": "https://i.ibb.co/zPV19kc/aments-Project.png",
    "name": "❖ Aments - Best Car Accessories Shop",
    "date": "Nov 2021 - Nov 2021",
    "des": [
      "➣ A responsive, fully-functional niche website",
      "➣ Allowing customers to create an account, browse products, buy products & write reviews.",
      "➣ Admins have the ability to add new products, remove existing products, remove user products, update shipping status, and create new admin accounts.",
      "➣ Reviews are dynamic."
    ],
    "Technology": [
      "MUI",
      "JS",
      "React"
    ]
  },
  {
    "id": 2,
    "img": "https://i.ibb.co/zPV19kc/aments-Project.png",
    "name": "❖ Aments - Best Car Accessories Shop",
    "date": "Nov 2021 - Nov 2021",
    "des": [
      "➣ A responsive, fully-functional niche website",
      "➣ Allowing customers to create an account, browse products, buy products & write reviews.",
      "➣ Admins have the ability to add new products, remove existing products, remove user products, update shipping status, and create new admin accounts.",
      "➣ Reviews are dynamic."
    ],
    "Technology": [
      "MUI",
      "JS",
      "React"
    ]
  }
]
const Projects = () => {
  return (
    <div>
      <h2 id="projects">My projects_</h2>
      {projectsData.map((project) => <Project key={project.id} project={project}></Project>)}
    </div>
  );
};

export default Projects;