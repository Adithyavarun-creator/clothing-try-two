import React from "react";

import './Header.styles.scss'
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from "../../Firebase/Firebase.utils";
import Carticon from "../CartIcon/Carticon";
import Cartdropdown from "../CartDropDown/Cartdropdown";
//for redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart-selector";
import { selectCurrentUser } from "../../redux/user/user-selector";

const Header = ({currentUser,hidden}) =>{
    return(
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>

                <Link className="option" to="/contact">
                    CONTACT
                </Link>
                {
                    currentUser ? 
                    <div className="option"
                     onClick={()=>auth.signOut()}>Sign out</div>
                     :
                    <Link to="/signin"
                    className="option">Sign in</Link>
                }
                <Carticon />
            </div>
            {
                hidden ? null :  <Cartdropdown />

            }
        </div>
    )
}



// const mapStateToProps = ({user:{currentUser},cart:{hidden}}) => ({ 
//     //or
//     // const mapStateToProps = ({user}) => ({
//     //     currentUser: user.currentUser
//     //   })
//     currentUser: currentUser, //state.rootreducer.currentUser
//     hidden:hidden
// })

const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
})

export default connect(mapStateToProps)(Header)