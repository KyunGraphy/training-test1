import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './ProjectReel.css'
import Project from './Project'

function ProjectReel({ prjAPI }) {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        axios.get(prjAPI)
          .then(res => {
            setProjects(res.data);
            console.log(projects);
          })
          .catch(error => console.log(error));
    }, [])

    return (
    <div className='projectReel'>
      {projects.map(project => (
          <Project 
            key={project.id}
            project={project}
          />
      ))}

      {/* <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project /> */}
    </div>
  )
}

export default ProjectReel