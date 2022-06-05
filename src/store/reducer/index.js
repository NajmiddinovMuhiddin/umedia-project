import {combineReducers} from 'redux';
import OrdersReducer from "./OrdersReducer";
import ServiceReducer from "./ServiceReducer"
import NewsReducer from "./NewsReducer";
import PortfolioReducer from "./PortfolioReducer";

const reducer = combineReducers({
    portfol: PortfolioReducer,
    serve: ServiceReducer,
    img: OrdersReducer,
    newsImg: NewsReducer
})

export  default  reducer;