import React from 'react'
import './Navigation.css'

function Navigation() {
  return (
    <div className='navigation'>
        <a className='navLeft' href='#'>SOCIALJECT</a>
        <div className='navRight'>
          <button className='btn'>Create Your Profile</button>
          <div className='navProfileBorder'>
              <div className='navProfile' style={{ backgroundImage: `url(https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=600)`}}>
              </div>
          </div>
          <h4>Angelina</h4>
        </div>
    </div>
  )
}

export default Navigation