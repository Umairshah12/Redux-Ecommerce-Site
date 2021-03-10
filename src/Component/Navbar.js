import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import cartImg from "../assets/images/icon.png";
import { useSelector } from "react-redux";

function Navbar() {
  const cartItems = useSelector((state) => state.addedItems);
  const { totalQuantity } = useSelector((state) => state.CartItemReducer);
  return (
    <div className="nav app-color">
      <div className="container">
        <div className="nav-container">
          <div className="nav-left">
            <img className="" src={cartImg} />
          </div>
          <Typography variant="h6" className="title">
            <Link className="icon-color m-1 app-heading" to="/">
              Ecommerce App
            </Link>
          </Typography>

          <div className="nav-right">
            <Link to="/cartitems">
              <IconButton aria-label="cart">
                <Badge
                  className="badge"
                  badgeContent={totalQuantity ? totalQuantity : "0"}
                  color="secondary"
                >
                  <ShoppingCartIcon className="icon-color" />
                </Badge>
              </IconButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
