import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProjectReel.css";
import Project from "./Project";
import { Link } from "react-router-dom";
import SkeletonLoading from "./SkeletonLoading";

function ProjectReel({ prjAPI }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(prjAPI)
      .then((res) => {
        setProjects(res.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="projectReel">
      {loading && <SkeletonLoading />}
      {projects.map((project) => (
        <Link to={"/detail/" + project.id} key={project.id}>
          <Project project={project} />
        </Link>
      ))}
    </div>
  );
}

export default ProjectReel;
