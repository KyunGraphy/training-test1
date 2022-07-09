import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='line'></div>
        <div className='footerContent'>
            <div className='footerText'>Copyrighted by ...</div>
            <div>
                <img className='footerImage' src='https://socialject.netlify.app/static/media/SJ.ec255042.png' alt=''/>
                <div className='footerText'>SocialJect</div>
            </div>
        </div>
    </div>
  )
}

export default Footer