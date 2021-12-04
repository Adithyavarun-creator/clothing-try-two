import {createSelector} from 'reselect'

const selectCart = state => state.cart //form rootreducer

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    //gets cartitems from selectcartitems
    [selectCartItems],
    (cartItems) => cartItems.reduce((accumulatedQuantity,cartItem)=>
    accumulatedQuantity + cartItem.quantity
    ,0)
)

export const selectCartHidden = createSelector(
    [selectCart],
    (cart)=>cart.cartHidden
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((accumulatedQuantity,cartItem)=>
    accumulatedQuantity + cartItem.quantity * cartItem.price
    ,0)
)