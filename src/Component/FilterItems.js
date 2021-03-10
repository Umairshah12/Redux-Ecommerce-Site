import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { filterAction } from "../Redux/actions/cartAction";
import { useDispatch } from "react-redux";

function FilterItems(props) {
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

        <div className="col-6">
          <div className="filter-by-latest">
            <FormControl
              variant="outlined"
              className="formControl filter-order"
            >
              <InputLabel htmlFor="outlined-age-native-simple">
                Filter By Size
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
