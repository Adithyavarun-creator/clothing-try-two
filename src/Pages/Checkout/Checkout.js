import React from 'react'

import './Checkout.styles.scss'
import { connect } from 'react-redux'
import { createSelector, createStructuredSelector } from 'reselect'

import { selectCartItems } from '../../redux/cart/cart-selector'
import { selectCartTotal } from '../../redux/cart/cart-selector'

import Checkoutitem from '../../components/Checkout-Item/Checkoutitem'
import StripeCheckoutButton from '../../components/Stripe-Button/Stripebutton'


const CheckoutPage = ({cartItems,total}) => {
    return(
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>

                <div className="header-block">
                    <span>Description</span>
                </div>

                <div className="header-block">
                    <span>Quantity</span>
                </div>

                <div className="header-block">
                    <span>Price</span>
                </div>

                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map((cartItem) => (
                    <Checkoutitem key={cartItem.id}
                    cartItem={cartItem}/>
                ))
            }
            <div className="total">Total amount is: ${total}</div>
            <div className="test-warning">
            Please use following card elements
            <br />
            4242 4242 4242 4242 - expiry date is 01/22 - cvv:123
            </div>
            <StripeCheckoutButton price={total} />
            </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)