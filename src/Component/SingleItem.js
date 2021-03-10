import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import img7 from "../assets/images/img7.jpg";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import currencyFormater from "currency-formatter";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AddCartQuatity } from "../Redux/actions/cartAction";
import { SubCartQuantity } from "../Redux/actions/cartAction";
import { AddToCart } from "../Redux/actions/cartAction";
import { useParams } from "react-router-dom";

function SingleItem() {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { singleProduct } = useSelector((state) => state.CartItemReducer);
  console.log("single product", singleProduct);
  const decQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="container ">
      <div className="row mt-50">
        <div className="col-6">
          <div className="product-detail-img">
            <img src={singleProduct.prodImg} alt="single-product-image" />
          </div>
        </div>
        <div className="col-6">
          <div className="detail-title">{singleProduct.prodTitle}</div>
          <div className="product-detail-price">
            {currencyFormater.format(singleProduct.prodPrice, { code: "USD" })}
          </div>
          <div className="product-info">
            <div className="product-calculation">
              <span className="dec" onClick={decQuantity}>
                <RemoveIcon />
              </span>
              <span className="quantity">{quantity}</span>
              <span
                className="inc"
                onClick={() => {
                  setQuantity(quantity + 1);
                }}
              >
                <AddIcon />
              </span>

              <Button
                // className="cart-detal-button"
                className="add-to-cart "
                variant="contained"
                color="primary"
                disabled={singleProduct.inCart ? true : false}
                onClick={() => {
                  dispatch(AddToCart(singleProduct, quantity));
                }}
              >
                {/* <span>Add to Cart</span> */}
                {singleProduct.inCart ? (
                  <p className="text-capitalize  mb-0" disabled>
                    IN CART
                  </p>
                ) : (
                  <>
                    Add To Cart
                    <ShoppingCartIcon className="mx-1" />
                  </>
                )}
              </Button>
            </div>
          </div>

          <div className="product-details">
            <h4>details</h4>
            {singleProduct.prodDetail}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleItem;
