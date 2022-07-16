import React from 'react'
import Project from './Project'
import './ProjectList.css'

function ProjectList() {
    return (
        <div className="projectList">
            <div className="projectsList-container">
                <b>Projects</b>
                <button>Add a Project</button>
            </div>
            <Project />
            <Project />
        </div>
    )
}

export default ProjectList