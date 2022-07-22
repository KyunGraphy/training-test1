import React from "react";
import "./Project.css";
import { Link } from "react-router-dom";

function Project({ project }) {
  return (
    <div className="project">
      <img className="projectImage" src={project.image} />
      <img className="projectAva" src={project.ava} />
      <div className="projectText">
        <div className="projectTitle">{project.title}</div>
        <div className="projectAuthor">by {project.author}</div>
      </div>
      <div className="projectDdl">Deadline: {project.deadline}</div>
    </div>
  );
}

export default Project;
