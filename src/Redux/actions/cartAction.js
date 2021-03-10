export const IMAGE_CLICKED = "IMAGE_CLICKED";
export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_CART_QUANTITY = "ADD_CART_QUANTITY";
export const DEC_CART_QUANTITY = "DEC_CART_QUANTITY";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
export const CLEAR_CART = "CLEAR_CART";
export const INC_CART_QUANTITY = "INC_CART_QUANTITY";
export const ACCESS_TOKEN = "ACCESS_TOKEN";
export const FILTER_ITEM = "FILTER_ITEM";
export const FETCH_ITEM = "FETCH_ITEM";
export const USERS_ERROR = "USERS_ERROR";

export const SingleImageClicked = (id) => {
  return {
    type: IMAGE_CLICKED,
    payload: id,
  };
};

export const AddToCart = (products, quantity) => {
  return {
    type: ADD_TO_CART,
    payload: { products, quantity },
  };
};

export const incCartQuatity = (id) => {
  return {
    type: INC_CART_QUANTITY,
    payload: id,
  };
};

export const DecCartQuantity = (id) => {
  return {
    type: DEC_CART_QUANTITY,
    payload: id,
  };
};

export const RemoveCartItem = (id) => {
  return {
    type: REMOVE_CART_ITEM,
    payload: id,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};

export const tokenData = (token, addresses) => {
  return {
    type: ACCESS_TOKEN,
    payload: { token, addresses },
  };
};

export const filterAction = (products, size) => {
  return {
    type: FILTER_ITEM,
    payload: {
      size: size,
      item:
        size === ""
          ? products
          : products.filter(
              (a) => a.availableSizes.indexOf(size.toUpperCase()) >= 0
            ),
    },
  };
};
