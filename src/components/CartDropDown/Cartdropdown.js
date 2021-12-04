import React from "react";
import Button from "../CustomButton/Button";
import './Cartdropdown.styles.scss'
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart-selector";

import Cartitem from "../Cart-Item/Cartitem";
import { createStructuredSelector } from "reselect";
import {toggleCartHidden} from '../../redux/cart/cart-actions'

import {withRouter} from 'react-router-dom'

const Cartdropdown = ({cartItems,history,dispatch,...otherProps}) => {
    //console.log(otherProps); gives dispatch as it has connect
    return(
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ? 
                    (cartItems.map((item)=>(
                        <Cartitem key={item.id}
                        item={item}
                        />
                    ))) :
                    <span className="empty-message">
                        Your cart is empty
                    </span>
                }
            </div>
            <Button
            onClick={()=>{
                history.push('/checkout')
            dispatch(toggleCartHidden())
            }}>
                Go to checkout
                </Button>
        </div>
    )
}

// const mapStateToProps = ({cart:{cartItems}}) => ({
//     cartItems:cartItems
// })
//both are same
const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems
})

export default withRouter(connect(mapStateToProps)(Cartdropdown))

//withRouter gives you history