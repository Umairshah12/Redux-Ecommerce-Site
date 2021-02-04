import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, combineReducers, applyMiddleware } from "redux";
// import { ProductReducer } from "./Redux/reducers/ProductReducer";
import { CartItemReducer } from "./Redux/reducers/CartItemReducer";

const root = combineReducers({
  // ProductReducer,
  CartItemReducer,
});
const store = createStore(
  root,
  composeWithDevTools(applyMiddleware(thunk, logger))
);
export default store;
