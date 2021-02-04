import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { filterAction } from "../Redux/actions/cartAction";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function FilterItems(props) {
  // console.log("props products", props.products);
  // const { products, size } = useSelector((state) => state.CartItemReducer);
  const dispatch = useDispatch();
  return (
    <div className="filter-item-container">
      <div className="filter-item-row">
        <div className="col-3">
          <div className="total-count">
            <span>
              <h5>Filterd Products:</h5>
            </span>
            <span>{props.filterImages.length}</span>
          </div>
        </div>
        <div className="col-3">
          <div className="filter-item">
            {/* <h5>ORDER BY</h5> */}
            <FormControl
              variant="outlined"
              className="formControl filter-order"
            >
              <InputLabel htmlFor="outlined-age-native-simple">
                Filter Items
              </InputLabel>
              <Select
                native
                // value={props.size}
                // onChange={(e) => {
                //   dispatch(props.product, e.target.value);
                // }}
                label="Filter Items"
                inputProps={{
                  name: "Filter Items",
                  id: "outlined-age-native-simple",
                }}
              >
                <option aria-label="None" value="" />
                <option value={"lowest"}>Lowest</option>
                <option value={"higest"}>higest</option>
              </Select>
            </FormControl>
          </div>
        </div>

        <div className="col-3">
          <div className="filter-by-latest">
            {/* <h5>ORDER BY</h5> */}
            <FormControl
              variant="outlined"
              className="formControl filter-order"
            >
              <InputLabel htmlFor="outlined-age-native-simple">
                Filter Items
              </InputLabel>
              <Select
                native
                onChange={(e) => {
                  dispatch(filterAction(props.products, e.target.value));
                }}
                label="Filter Items"
                inputProps={{
                  name: "Filter Items",
                  id: "outlined-age-native-simple",
                }}
              >
                <option aria-label="None" value={props.size} />
                <option value={""}>All</option>
                <option value={"x"}>XS</option>
                <option value={"s"}>SMALL</option>
                <option value={"m"}>MEDIUM</option>
                <option value={"l"}>LARGE</option>
                <option value={"xl"}>XL</option>
                <option value={"xxl"}>XXL</option>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterItems;
