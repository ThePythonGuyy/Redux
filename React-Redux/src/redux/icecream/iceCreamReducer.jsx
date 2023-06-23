import { buyIceCream } from "./iceCreamAction";
import { BUY_ICECREAM } from "./iceCreamTypes";

const initialState = {
    numOfIceCream : 15,
}

export const iceCreamReducer = (state=initialState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCream : state.numOfIceCream - action.payload
        };

        default: return state
    }
}