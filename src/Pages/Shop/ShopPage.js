import React from "react";
import SHOPDATA from '../../ShopData'

import { Route } from "react-router-dom";
import CollectionPage from "../Collection/Collection";
import CollectionPreview from "../../components/Preview-Collection/PreviewCollection";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopItems } from "../../redux/shop/shop-selector";
import CollectionsOverview from "../../components/Collections-Overview/CollectionsOverview";

const ShopPage = ({match}) => {
    //console.log(collections);
    //const {match} = collections
        return(
            <div className="shop-page">
                {/* {
                    collections.map(({id,...otherSectionProps})=>(
                        <CollectionPreview key={id} {...otherSectionProps}/>
                    ))
                } */}
                {/* <CollectionsOverview collections={collections}/> */}
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:collectionid`} component={CollectionPage} />
            </div>
        )
}
//${match.path} is /shop
//collectionid is hats,jackets the category name

// const mapStateToProps = createStructuredSelector({
//     collections:selectShopItems
// })

export default ShopPage