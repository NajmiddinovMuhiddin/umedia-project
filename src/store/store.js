import {createStore, applyMiddleware} from "redux";
import  {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk"
import reducer from "./reducer";

const composeEnhancer = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(reducer, composeEnhancer);
export default store;