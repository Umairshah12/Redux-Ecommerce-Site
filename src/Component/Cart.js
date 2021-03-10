import React from "react";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import currencyFormater from "currency-formatter";
import { Link } from "react-router-dom";

import {
  incCartQuatity,
  DecCartQuantity,
  RemoveCartItem,
  clearCart,
  tokenData,
} from "../Redux/actions/cartAction";

function Cart() {
  const { addedItems, totalQuantity, totalPrice } = useSelector(
    (state) => state.CartItemReducer
  );

  const dispatch = useDispatch();

  return (
    <>
      <div className="cart">
        <div className="container">
          {addedItems.length > 0 ? (
            <>
              <Typography variant="h4" className="cart-heading-message">
                YOUR CART
              </Typography>
              <div className="row mt-4">
                <div className="col-9">
                  <div className="cart-heading-color items-heading">
                    <div className="row">
                      <div className="col-2">picture</div>
                      <div className="col-2">Name</div>
                      <div className="col-2">PRICE</div>
                      <div className="col-2">inc/dec</div>
                      <div className="col-2">Total Price</div>
                      <div className="col-2">Remove</div>
                    </div>
                  </div>
                  {addedItems.map((item) => {
                    return (
                      <div key={item.id}>
                        <div className="row vertical-align">
                          <div className="col-2">
                            <div className="cart-image cart-size-image">
                              <img src={item.prodImg} alt="" />
                            </div>
                          </div>

                          <div className="col-2">
                            <Link to={`/singleitem/${item.id}`}>
                              <div className="cart-name">{item.prodTitle}</div>
                            </Link>
                          </div>

                          <div className="col-2">
                            <div className="cart-product-price">
                              {currencyFormater.format(item.prodPrice, {
                                code: "USD",
                              })}
                            </div>
                          </div>

                          <div className="col-2">
                            <div className="product-info  product-inc-dec">
                              <div className="product-calculation">
                                <span
                                  className="dec"
                                  onClick={() => {
                                    dispatch(DecCartQuantity(item.id));
                                  }}
                                >
                                  <RemoveIcon />
                                </span>
                                <span className="quantity">
                                  {item.quantity}
                                </span>
                                <span
                                  className="inc"
                                  onClick={() => {
                                    dispatch(incCartQuatity(item.id));
                                  }}
                                >
                                  <AddIcon />
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="col-2">
                            <div className="cart-total">
                              {currencyFormater.format(
                                item.prodPrice * item.quantity,
                                { code: "USD" }
                              )}
                            </div>
                          </div>

                          <div className="col-2">
                            <div
                              className="cart-remove"
                              onClick={() => {
                                dispatch(RemoveCartItem(item.id));
                              }}
                            >
                              <DeleteIcon />
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="col-3">
                  <div className="summary">
                    <div className="summary-heading">summary</div>
                    <div className="summary-detail">
                      <div className="row total-mb ">
                        <div className="col-6">TOTAL ITEMS:</div>
                        <div className="col-6">{totalQuantity}</div>
                      </div>

                      <div className="row total-mb">
                        <div className="col-6">TOTAL Price:</div>
                        <div className="col-6">
                          {currencyFormater.format(totalPrice, { code: "USD" })}
                        </div>

                        {/* <button className="checkout-button">checkout</button> */}
                        <button
                          className="clear-cart"
                          onClick={() => {
                            dispatch(clearCart());
                          }}
                        >
                          clear cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <Typography variant="h4" className="cart-heading-message">
              YOUR CART IS EMPTY
            </Typography>
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
