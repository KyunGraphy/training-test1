import React from 'react'
import './Project.css'

function Project({ project }) {
  return (
    <div className='project'>
        <img className='projectImage' src='https://firebasestorage.googleapis.com/v0/b/socialject-alpha-1.appspot.com/o/images%2F%C4%90%E1%BB%93ng%20Kh%C6%A1i.jpg?alt=media&token=42943827-6fb2-4345-9321-d4ba6bc328c3'/>
        <img className='projectAva' src='https://lh3.googleusercontent.com/a-/AOh14GhoEu9U8ce_FBpNtNTPj5e1G_9VWOryds6WcT_r'/>
        <div className='projectText'>
          <div className='projectTitle'>Digital Logic Design Project</div>
          <div className='projectAuthor'>by Mogzzer</div>
        </div>
        <div className='projectDdl'>Deadline: Tomorrow</div>
    </div>
  )
}

export default Project