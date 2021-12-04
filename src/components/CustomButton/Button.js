import React from "react";
import './Button.styles.scss'

const Button = ({children,inverted,isGoogleSignIn,...otherProps}) =>{
    return(
        <button className={`${inverted ? 'inverted' : ''}
        ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} 
        {...otherProps}>
        {children} 
        </button>
    )
}

export default Button