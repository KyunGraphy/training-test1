import React from "react";
import "./styles/Project.css";
import { Link } from "react-router-dom";

function Project({ project }) {
  return (
    <div className="project">
      <img className="project-image" src={project.image} />
      <img className="project-ava" src={project.ava} />
      <div className="project-text">
        <div className="project-title">{project.title}</div>
        <div className="project-author">by {project.author}</div>
      </div>
      <div className="project-ddl">Deadline: {project.deadline}</div>
    </div>
  );
}

export default Project;
