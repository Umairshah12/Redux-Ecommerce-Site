// import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// // import reducers from "./Redux/reducers/RootReducer";
// import { cartReducer } from "./Redux/reducers/cartReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
// // let root = combineReducers({
// //   cartReducer,
// // });
// const store = createStore(
//   cartReducer,
//   composeWithDevTools(applyMiddleware(thunk, logger))
// );
// export default store;

import { createStore, combineReducers, applyMiddleware } from "redux";
import { ProductReducer } from "./Redux/reducers/ProductReducer";
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
