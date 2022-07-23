import React from 'react'
import Project from './Project'
import './styles/ProjectList.css'

function ProjectList() {
    return (
        <div className="projects-list">
            <div className="projects-list-container">
                <b>Projects</b>
                <button>Add a Project</button>
            </div>
            <Project />
            <Project />
        </div>
    )
}

export default ProjectList