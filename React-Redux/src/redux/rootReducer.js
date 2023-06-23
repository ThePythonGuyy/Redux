import { cakeReducer } from "./cake/cakeReducer";
import { iceCreamReducer } from "./icecream/iceCreamReducer";
import { combineReducers } from "redux";

import { userReducer } from "./user/userReducer";

const rootReducer = combineReducers({
    user: userReducer,
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    
})

export default rootReducer