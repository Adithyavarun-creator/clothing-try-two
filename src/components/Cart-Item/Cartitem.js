import React from "react";
import './Cartitem.styles.scss'

const Cartitem = ({item}) => {
    const {imageUrl,price,name,quantity} = item
    return(
        <div className="cart-item">
            <img src={imageUrl} alt="item"/>
            <div className="item-details">
            <span className="name">{name}</span>
            <span className="price">{quantity} X ${price}</span>
            </div>
        </div>
    )
}

export default Cartitem