import React from 'react'
import './CollectionItem.styles.scss'
import Button from '../CustomButton/Button'

import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart-actions'

const CollectionItem = ({item,addItem}) =>{

    const {name,price,imageUrl} = item

    return(
        <div className="collection-item">
            <div 
            className="image"
            style={{backgroundImage:`url(${imageUrl})`}}
             />
                <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button inverted 
            onClick={()=>addItem(item)}>
                Add to cart</Button>
        </div>
    )
}

const mapDisptachToProps = (dispatch) => ({
    addItem:(item)=>dispatch(addItem(item))
})

export default connect(null,mapDisptachToProps)(CollectionItem)