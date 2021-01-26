import { PlaylistAddOutlined } from "@material-ui/icons";
import CartList from "../../Component/ItemsArray/ProductList";
import sliderImages from "../../Component/ItemsArray/sliderImages";
import {
  ADD_TO_CART,
  IMAGE_CLICKED,
  ADD_CART_QUANTITY,
  SUB_CART_QUANTITY,
  REMOVE_CART_ITEM,
  CLEAR_CART,
} from "../actions/cartAction";

const initialState = {
  cartItems: [...CartList],
  addedItems: [],
  total: 0,
  sliderImages: sliderImages,
  cartSubTotal: 0,
  cartTotal: 0,
};

export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case IMAGE_CLICKED:
      let imageClicked = state.cartItems.find(
        (item) => item.id === action.payload
      );

      return {
        ...state,
        cartItemsdata: imageClicked,
      };

    case ADD_TO_CART:
      let addedItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      let exsitedItem = state.addedItems.find(
        (item) => item.id === action.payload
      );

      if (exsitedItem) {
        addedItem.quantity += 1;
        let newTotal = addedItem.count * addedItem.prodPrice;

        return {
          ...state,
          addedItems: [...state.addedItems, addedItem],
          total: newTotal,
        };
      } else {
        addedItem.quantity = 1;
        addedItem.inCart = true;
        let newTotal = addedItem.count * addedItem.prodPrice;
        return {
          ...state,
          addedItems: [...state.addedItems, addedItem],
          total: newTotal,
        };
      }

    case REMOVE_CART_ITEM:
      let tempCartItems = [...state.addedItems];
      tempCartItems = tempCartItems.filter(
        (item) => item.id !== action.payload
      );
      const newCartItems = state.cartItems.map((item) => {
        return item.id === action.payload ? { ...item, inCart: false } : item;
      });

      return {
        ...state,
        addedItems: tempCartItems,
        cartItems: newCartItems,
      };

    case ADD_CART_QUANTITY:
      let tempCart = state.addedItems.map((cartItem) => {
        if (cartItem.id === action.payload) {
          cartItem = {
            ...cartItem,
            count: cartItem.count + 1,
            total: state.total + cartItem.prodPrice * cartItem.count,
          };
        }
        return cartItem;
      });
      return {
        ...state,
        addedItems: tempCart,
      };

    case SUB_CART_QUANTITY:
      let removeCart = [...state.addedItems];
      const selectedItems = removeCart.find(
        (item) => item.id === action.payload // find method result a copy of obj not make changes in actual object
      );

      let index = removeCart.indexOf(selectedItems);
      let product = removeCart[index];
      if (product.count === 1) {
        removeCart = state.addedItems.filter(
          (item) => item.id !== action.payload
        );
        removeCart.inCart = false;
      } else {
        removeCart = state.addedItems.map((cartItem) => {
          if (cartItem.id === action.payload) {
            cartItem = {
              ...cartItem,
              count: cartItem.count - 1,
              total: cartItem.prodPrice * cartItem.count,
            };
          }
          return cartItem;
        });
      }
      return {
        ...state,
        addedItems: removeCart,
      };

    case CLEAR_CART:
      const removedItems = state.cartItems.map((item) => {
        return { ...item, inCart: false };
      });
      return {
        ...state,
        addedItems: [],
        cartItems: removedItems,
      };
    default:
      return state;
  }
}
