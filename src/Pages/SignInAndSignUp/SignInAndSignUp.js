import React from 'react'
import './SignInAndSignUp.styles.scss'

import Signin from '../../components/SignIn/Signin'
import Signup from '../../components/Sign-Up/Signup'

const SignInAndSignUp = () => {
    return(
        <div className="sign-in-and-sign-up">
           <Signin />
           <Signup />
        </div>
    )
}

export default SignInAndSignUp