import React from "react";
import Navigation from "../Main/Navigation";
import "./Overview.css";

function Overview({ project }) {
  console.log(project);
  return (
    <div className="overview">
      <div className="title">
        <div className="subject">
          <h3>{project.title}</h3>
          <p>{project.address}</p>
        </div>
        <div className="author">
          <img src={project.ava} />
          <b>{project.author}</b>
        </div>
        <div className="deadline">
          <b>{project.deadline}</b>
          <p>Deadline</p>
        </div>
        <button className="btn btn-success">Apply Now</button>
      </div>

      <div className="image">
        <img src={project.image}/>
      </div>
    </div>
  );
}

export default Overview;
