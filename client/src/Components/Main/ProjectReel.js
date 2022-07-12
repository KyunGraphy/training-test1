import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProjectReel.css";
import Project from "./Project";
import { Link } from "react-router-dom";

function ProjectReel({ prjAPI }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get(prjAPI)
      .then((res) => {
        setProjects(res.data);
        console.log(projects);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="projectReel">
      {projects.map((project) => (
        <Link to={"/detail/" + project.id} key={project.id}>
          <Project project={project} />
        </Link>
      ))}
    </div>
  );
}

export default ProjectReel;
