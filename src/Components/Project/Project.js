import React from 'react';
import './Project.css'

const Project = ({ project }) => {
  console.log(project)
  return (
    <div className="container">
      <div className="row mb-5">
        <div className="col-md-4 projectImg">
          <img src={project.img} alt="" className="img-fluid pb-5" />
        </div>
        <div className="col-md-8 project-details">
          <h3 class="project-card__title mt-md-0 mt-sm-5">{project.name}</h3>
          <p>{project.date}</p>
          <ul className="my-item">{
            project.des.map((item) => <li>{item}</li>)
          }</ul>
          <ul className="tags">{
            project.Technology.map((item) => <li>{item}</li>)
          }</ul>
          <div className="project-link">
            <a href={project?.website} target="_blank"><i class="fas fa-globe"></i> Live Site</a>
            <a href={project?.frontendGit} target="_blank"><i class="fa fa-github"></i> Client Side</a>
            {
              project?.backendGit && <a href={project?.backendGit} target="_blank"><i class="fa fa-github"></i> Server Side</a>
            }
            <a href={project?.linkedin} target="_blank"><i class="fa fa-linkedin-square"></i> Linkedin</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;