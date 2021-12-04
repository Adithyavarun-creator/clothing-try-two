import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51K2vRzCaNeFCPoEyRoh8CmUguUddbO0sLgNkqfigVXwkxrMopkIpLJy7l2W8ZiGerFyrumDA8yiGDrquwUgx2M7i00eyq1F5wg'

    const onToken = (token) =>{
        console.log(token);
        alert(`Payment success with token : ${token}`)
    }

    return(
        <StripeCheckout 
        label="Pay Now"
        name="CLothing store"
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description= {`Your total is ${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
       
    )
}

export default StripeCheckoutButton