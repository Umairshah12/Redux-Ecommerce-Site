import React from "react";
import "./styles/tailwind.css";
import Navbar from "./Component/Navbar";
import "./styles/styles.css";
import ProductList from "./Component/ProductList";
import SingleItem from "./Component/SingleItem";
import Cart from "./Component/Cart";
import Footer from "./Component/Footer";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/cartitems" component={Cart} />
          <Route path="/singleitem/:id" exact component={SingleItem} />
          {/* <Route component={Default} /> */}
        </Switch>
        {/* <Footer /> */}
      </Router>
    </Provider>
  );
}

export default App;
