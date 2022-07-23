import React from 'react'
import './styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='line'></div>
        <div className='footer-content'>
            <div className='footer-text'>Copyrighted by ...</div>
            <div>
                <img className='footer-image' src='https://socialject.netlify.app/static/media/SJ.ec255042.png' alt=''/>
                <div className='footer-text'>SocialJect</div>
            </div>
        </div>
    </div>
  )
}

export default Footer