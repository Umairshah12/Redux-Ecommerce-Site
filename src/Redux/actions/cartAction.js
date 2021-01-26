export const IMAGE_CLICKED = "IMAGE_CLICKED";
export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_CART_QUANTITY = "ADD_CART_QUANTITY";
export const DEC_CART_QUANTITY = "DEC_CART_QUANTITY";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
export const CLEAR_CART = "CLEAR_CART";
export const INC_CART_QUANTITY = "INC_CART_QUANTITY";
export const ACCESS_TOKEN = "ACCESS_TOKEN";

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
