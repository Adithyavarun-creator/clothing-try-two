import React from "react";
import './Carticon.styles.scss'
import {ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart-actions";

import {  selectCartItemsCount } from "../../redux/cart/cart-selector";
import { createStructuredSelector } from "reselect";

const Carticon = ({toggleCartHidden,itemCount}) =>{
    return(
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{itemCount}</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

//const mapStateToPorops = ({cart:{cartItems}}) => ({
    // itemCount:cartItems.reduce((accumulatedQuantity,cartItem)=>
    // accumulatedQuantity + cartItem.quantity
    // ,0)
    const mapStateToPorops = createStructuredSelector({
    itemCount:selectCartItemsCount

})

export default connect(mapStateToPorops,mapDispatchToProps)(Carticon)