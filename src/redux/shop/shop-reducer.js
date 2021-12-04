import SHOPDATA from "../../ShopData";

const INITIALDATA = {
    collections:SHOPDATA
}

const shopReducer = (state=INITIALDATA,action) => {
    if(action.type){
        return{
            ...state
        }
    }

    return state
}

export default shopReducer