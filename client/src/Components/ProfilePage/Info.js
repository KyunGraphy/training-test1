import React from 'react'
import './styles/Info.css'

function Info() {
    return (
        <div className='info'>
            <div className='generic'>
                <img className='generic-image' src="https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
            <div className='contact'>
                <b>Angelina</b>
                <div>Ho Chi Minh / Stylish / RMIT</div>
                <small>We are young people</small>
                <button>Button</button>
            </div>
        </div>
    )
}

export default Info