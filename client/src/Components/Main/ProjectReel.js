import React from 'react'
import axios from 'axios'
import './ProjectReel.css'
import Project from './Project'

function ProjectReel({ prjAPI }) {
  var projects

  axios.get(prjAPI)
    .then(res => {
      projects = res.data;
      console.log(projects);
    })
    .catch(error => console.log(error));
  
  // setTimeout(() =>{
  //   console.log(projects);
  // }, 3000)
  return (
    <div className='projectReel'>
      {/* {
        projects.map(project => {
          <List 
            key={project.id}
            project={project}
          />
        })
      } */}

      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
    </div>
  )
}

export default ProjectReel