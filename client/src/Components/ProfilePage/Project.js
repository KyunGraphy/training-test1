import React from 'react'
import './styles/Project.css'

function Project() {
    return (
        <div className="project-element">
            <img className='detail-project-image' src="https://firebasestorage.googleapis.com/v0/b/socialject-alpha-1.appspot.com/o/images%2F2129143.jpg?alt=media&token=d5b14ae5-62a8-42ff-949e-1392ec1dbb3e" alt='' />
            <div className='detail-project-title'>
                <b>Ủng hộ miền Trung</b>
                <small>20/10/2020</small>
                <small>Ho Chi Minh</small>
            </div>
        </div>
    )
}

export default Project