import React, { useState, useEffect } from "react";
import "./items.css";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../../store/actions/index";
import { Button } from "@material-ui/core";
import BottonBar from "../CartComp/BottomBar";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
function Item({ handleNext }) {
  const classes = useStyles();
  const [filterBy, setFilterBy] = useState("");
  const [data, setData] = useState([]);
  const [boxItem, setBoxItem] = useState(null);
  const [item, setItem] = useState(null);
  const dispatch = useDispatch();
  const boxes = useSelector((state) => state.box.boxes);
  const items = useSelector((state) => state.items.items);
  const handleChange = (event) => {
    sortArray(event.target.value);
  };
  useEffect(() => {
    Actions.getAllItems(dispatch);
    // Actions.getBox(dispatch);
  }, [dispatch]);
  useEffect(() => {
    setData(items);
    setBoxItem(boxes[0]);
  }, [items]);

  function handleAddItems(item1) {
    let item2 = [...boxItem.items];
    item2.push({
      Name: item1.Name,
      image: item1.image,
      Price: item1.Price,
    });
    Actions.updateBox(dispatch, window.localStorage.getItem("box"), {
      ...boxItem,
      items: item2,
    });
    alert("Item Added to Cart!");
  }
  // function removeItem(){
  //   setBoxItem(boxItem.filter())
  // }
  const sortArray = (type) => {
    const types = {
      under1000: "1000",
      between10002000: "1000-2000",
      more2000: "2000",
    };
    const sortProperty = types[type];
    const sorted = data.sort((a, b) => b[sortProperty] - a[sortProperty]);
    setData(sorted);
  };
  return (
    <React.Fragment>
      <h2 className="mt-5">
        <b>CHOOSE YOUR GIFTS</b>
      </h2>
      <p>
        We've curated the best products in one place.Select from the items below
      </p>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Filter</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={filterBy}
          onChange={handleChange}
          label="Filter"
        >
          <MenuItem value={10}>Price: Under 1000</MenuItem>
          <MenuItem value={20}>Price: between 100 and 2000</MenuItem>
          <MenuItem value={30}>Price: More than 2000</MenuItem>
        </Select>
      </FormControl>
      {data === null || data.length === 0 ? (
        <div>
          <h4>LOADING...!!</h4>
        </div>
      ) : (
        <div className="products">
          {data.map((i, index) => (
            <div className="product-card" key={index}>
              <div className="product-img">
                <img src={i.image} style={{ height: 300, width: 300 }} />
                <Button color="primary" onClick={() => handleAddItems(i)}>
                  Add to Cart
                </Button>
              </div>
              <div className="product-details mt-2">
                <h3>{i.Name}</h3>
                <p>Rs. {i.Price}</p>
              </div>
            </div>
          ))}
          {!boxItem.items || boxItem.items.length === 0 ? null : (
            <BottonBar items={boxItem.items} handleNext={handleNext} />
          )}
        </div>
      )}
    </React.Fragment>
  );
}
export default Item;
