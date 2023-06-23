import { applyMiddleware, legacy_createStore as createStore } from "redux";
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';

import { buyCake } from "./cake/cakeAction";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)))

export default store