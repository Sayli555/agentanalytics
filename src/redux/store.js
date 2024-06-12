import { legacy_createStore,combineReducers, compose, applyMiddleware } from "redux";
import {allReducer} from "./allProducts/allReducer";

import thunk from "redux-thunk";;


const rootRuducer=combineReducers({
    allReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store=legacy_createStore(rootRuducer,composeEnhancers(applyMiddleware(thunk)))