import React from "react";
import Typography from "@material-ui/core/Typography";
import img7 from "../assets/images/img7.jpg";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import currencyFormater from "currency-formatter";
import { Link } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";

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
  // console.log("totalPrice", totalPrice);

  // const cartItems = useSelector((state) => state.addedItems);
  // const cartSubTotal = useSelector((state) => state.total);
  const dispatch = useDispatch();

  // if (cartItems.length === 0) {
  //   return (
  //     <div className="flex m-2 uppercase w-full">
  //       <div className="flex-1 cart-heading  text-center w-full">
  //         <Typography variant="h3">YOUR CART</Typography>
  //         <Typography variant="h5">Is Currently Empty</Typography>
  //       </div>
  //     </div>
  //   );
  // } else {
  // }
  return (
    <>
      <div className="cart">
        <div className="container">
          {/* <h1>YOUR CART</h1> */}
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
                      <>
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
                      </>
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
                        <StripeCheckout
                          stripeKey="pk_test_ik94tbBkgkFCcAgqvZoUrYIn00oR37X0aE"
                          token={() => {
                            dispatch(tokenData());
                          }}
                        />
                        {/* <button className="checkout-button">checkout</button> */}
                        <button
                          className="clear-cart"
                          onClick={() => {
                            dispatch(clearCart);
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

      {/* <div className="flex m-2 uppercase w-full">
        <div className="flex-1 item-heading w-1/4  ">
          <Typography variant="h5" className="">
            Product
          </Typography>
        </div>
        <div className="flex w-1/4 text-center">
          <Typography variant="h5" className="">
            qty
          </Typography>
        </div>

        <div className="flex w-1/4 text-center">
          <Typography variant="h5" className="">
            Price
          </Typography>
        </div>
      </div>
      {cartItems &&
        cartItems.map((addedItems) => {
          return (
            <div className="flex w-full border-2 p-8 rounded">
              <div className="flex text-xl w-2/5">
                <div className="flex lg:w-1/4">
                  <img className="h-40" src={addedItems.prodImg} />
                </div>

                <div className="flex lg:w-2/3 sm:w-full md:w-full sm:flex-col md:flex-col flex-col mr-8">
                  <div className="flex flex-col ml-6 uppercase">
                    <p className="my-2">{addedItems.prodTitle}</p>
                    <p className="my-2">{addedItems.prodPrice}</p>
                    <p className="my-2">{addedItems.prodDetail}</p>
                    <Button
                      variant="contained"
                      className="w-24"
                      color="default"
                      onClick={() => dispatch(RemoveCartItem(addedItems.id))}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex lg:flex-row  w-1/4 justify-center">
                <button
                  className="bg-gray-400 h-12 text-3xl text-center rounded bg-gray-200 items-center w-10"
                  onClick={() => {
                    dispatch(SubCartQuantity(addedItems.id));
                  }}
                >
                  -
                </button>
                <div className="border-black-200 h-12 text-3xl mx-2 bg-gray-200 rounded text-center items-center w-10">
                  {addedItems.count}
                </div>
                <button
                  className="bg-gray-400 h-12 text-3xl text-center rounded bg-gray-200 items-center w-10"
                  onClick={() => dispatch(AddCartQuatity(addedItems.id))}
                >
                  +
                </button>
              </div>

              <div className="flex text-xl justify-center w-1/4">
                <h2>{addedItems.total}</h2>
              </div>
            </div>
          );
        })}

      <div className="flex p-2 mb-32 justify-end uppercase text-xl h-40 mt-8">
        <div className="flex w-2/5 p-6 shadow-lg justify-center flex-wrap bg-gray-200 rounded border-2">
          <div className="flex w-1/2">
            <p className="my-2">SubTotal</p>
          </div>
          <div className="flex w-1/2">
            <p className="my-2">
              {cartItems.reduce((a, c) => a + c.prodPrice * c.count, 0)}
            </p>
          </div>
          <div className="flex lg:w-1/2 sm:w-full md:w-1/2 xl:w-1/2 md:flex-row  lg:flex-row sm:flex-col xl:flex-row">
            <Button
              variant="contained"
              className=""
              size="small"
              color="secondary"
              onClick={() => {
                dispatch(clearCart());
              }}
            >
              CLEAR CART
            </Button>
          </div>
          <div className="flex lg:w-1/2 sm:w-full md:w-1/2 xl:w-1/2 md:flex-row  lg:flex-row sm:flex-col xl:flex-row">
            <Button variant="contained" size="small" color="primary">
              CHECKOUT
            </Button>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Cart;
