import { cakeReducer } from "./cake/cakeReducer";
import { iceCreamReducer } from "./icecream/iceCreamReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
})

export default rootReducer