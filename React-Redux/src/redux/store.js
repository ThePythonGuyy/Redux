import { legacy_createStore as createStore } from "redux";

import { buyCake } from "./cake/cakeAction";
import { cakeReducer } from "./cake/cakeReducer";


const store = createStore(cakeReducer)

export default store