import React from 'react'
import { Link, Outlet } from "react-router-dom";
import './styles/Navigation.css'

function Navigation() {
  return (
    <div className='navigation'>
      <div className='nav-left'>
        <a href='/'>SOCIALJECT</a>
      </div>
      <div className='nav-right'>
        <button className='btn'>Create Your Profile</button>
        <Link to='/profile'>
          <div className='nav-profile-border'>
              <div className='nav-profile' style={{ backgroundImage: `url(https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=600)`}}>
              </div>
          </div>
        </Link>
        <h4>Angelina</h4>
      </div>
    </div>
  )
}

export default Navigation