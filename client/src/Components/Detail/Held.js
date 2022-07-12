import React from 'react'
import './Held.css'

function Held({ project }) {
  return (
    <div className='held'>
        <b>Held by</b>
        <img src={project.ava} alt={project.title} />
        <b>{project.author}</b>
    </div>
  )
}

export default Held