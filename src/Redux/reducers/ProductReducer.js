import CartList from "../../Component/ItemsArray/ProductList";
import sliderImages from "../../Component/ItemsArray/sliderImages";
import { IMAGE_CLICKED } from "../actions/cartAction";

const initialState = {
  products: [...CartList],
  sliderImages: sliderImages,
  singleProduct: {},
};

export function ProductReducer(state = initialState, action) {
  switch (action.type) {
    case IMAGE_CLICKED:
      return {
        ...state,
        singleProduct: state.products.find(
          (item) => item.id === action.payload
        ),
      };
    default:
      return state;
  }
}
