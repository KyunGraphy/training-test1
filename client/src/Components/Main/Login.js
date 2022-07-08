import React from 'react'
import './Login.css'

function Login(props) {
  return (
    <div>
        <div>
            <div class='login-container'>
                <div class="create-profile-container">
                    <div class="create-profile__title">Create profile</div>
                    <div class="login-button">
                        <button class="login-button-google">Login with google</button>
                    </div>
                </div>
                <div class="feedback-container">
                    <div class="illustration-wrapper">
                        <img alt="error" class="illustration__image--person" src="https://socialject.netlify.app/static/media/long.744150db.png"></img>
                        <div class="illustration__feedback-wrapper">
                            <img alt="error" class="illustration__image--quote" src="data:image/png;base64,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"></img>
                            <p class="illustration__feedback">
                                I don't care if you're black, white, straight, bisexual, gay,
                                lesbian, short, tall, fat, skinny, rich or poor. I love you all
                            </p>
                            <p class="illustration__feedback--name">
                                Long the Weeb Lord 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}



export default Login
