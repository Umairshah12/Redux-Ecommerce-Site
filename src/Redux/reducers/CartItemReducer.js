import { Switch } from "@material-ui/core";
import { SingleBedSharp } from "@material-ui/icons";
import CartList from "../../Component/ItemsArray/ProductList";
import sliderImages from "../../Component/ItemsArray/sliderImages";

import {
  ADD_TO_CART,
  INC_CART_QUANTITY,
  DEC_CART_QUANTITY,
  REMOVE_CART_ITEM,
  CLEAR_CART,
  IMAGE_CLICKED,
  ACCESS_TOKEN,
} from "../actions/cartAction";

const initialState = {
  products: [...CartList],
  sliderImages: sliderImages,
  singleProduct: {},
  addedItems: [],
  totalPrice: 0,
  totalQuantity: 0,
};

export function CartItemReducer(state = initialState, action) {
  switch (action.type) {
    case IMAGE_CLICKED:
      return {
        ...state,
        singleProduct: state.products.find(
          (item) => item.id === action.payload
        ),
      };

    case ADD_TO_CART:
      const { products, quantity } = action.payload;
      const check = state.addedItems.find((item) => item.id === products.id);
      if (check) {
        return state;
      } else {
        let tPrice = state.totalPrice + products.prodPrice * quantity;
        let tQuantity = state.totalQuantity + quantity;
        products.quantity = quantity;
        products.inCart = true;

        return {
          ...state,
          addedItems: [...state.addedItems, products],
          totalPrice: tPrice,
          totalQuantity: tQuantity,
        };
      }
    case INC_CART_QUANTITY:
      const incrQuantity = state.addedItems.find(
        (item) => item.id === action.payload
      );
      const index = state.addedItems.findIndex(
        (product) => product.id === action.payload
      );
      incrQuantity.quantity += 1;
      state.addedItems[index] = incrQuantity;

      return {
        ...state,
        totalPrice: state.totalPrice + incrQuantity.prodPrice,
        totalQuantity: state.totalQuantity + 1,
      };

    case DEC_CART_QUANTITY:
      const decQuntity = state.addedItems.find(
        (item) => item.id === action.payload
      );
      const quantityIndex = state.addedItems.findIndex(
        (cartItems) => cartItems.id === action.payload
      );
      if (decQuntity.quantity > 1) {
        decQuntity.quantity -= 1;
        state.addedItems[quantityIndex] = decQuntity;
        return {
          ...state,
          totalPrice: state.totalPrice - decQuntity.prodPrice,
          totalQuantity: state.totalQuantity - 1,
        };
      } else {
        return state;
      }

    case REMOVE_CART_ITEM:
      const RemovedItem = state.addedItems.find(
        (item) => item.id === action.payload
      );
      const RemovedFilterItem = state.addedItems.filter(
        (item) => item.id !== action.payload
      );

      const newCartItems = state.products.map((item) => {
        return item.id === action.payload ? { ...item, inCart: false } : item;
      });

      return {
        ...state,
        addedItems: RemovedFilterItem,
        products: newCartItems,
        totalPrice:
          state.totalPrice - RemovedItem.prodPrice * RemovedItem.quantity,
        totalQuantity: state.totalQuantity - RemovedItem.quantity,
      };

    case CLEAR_CART:
      let cartAddedItems = state.products.map((item) => {
        return { ...item, inCart: false };
      });
      return {
        ...initialState,
        addedItems: [],
        products: cartAddedItems,
      };

    case ACCESS_TOKEN:
      const { token, addresses } = action.payload;
      console.log("token", { token, addresses });

    default:
      return state;
  }
}
