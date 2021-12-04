import React from 'react'
import './Collection.styles.scss'

import CollectionItem from '../../components/Collection-Item/CollectionItem'
import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop-selector'

const CollectionPage = ({collection}) => {
    console.log(collection);
    //console.log(match.params.collectionid);
    const {title,items} = collection
    //console.log(collection);
    return(
        <div className="collection-page">
            <div className="title">{title}</div>
            <div className="items">
            {
                items.map((item)=>(
                    <CollectionItem key={item.id} item={item}/>
                ))
            }
            </div>
        </div>
    )
}

const mapStateToProps = (state,ownProps) =>({
    collection:selectCollection(ownProps.match.params.collectionid)(state)
})

//ownprops props of the component that we are wrapping in our connect
export default connect(mapStateToProps)(CollectionPage)
