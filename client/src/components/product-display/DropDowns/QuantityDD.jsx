import React, { forwardRef } from 'react';
import {
  Select, MenuItem, FormControl, FormHelperText, InputLabel
} from '@material-ui/core';
import useStyles from '../MaterialUi.jsx';

const QuantityDD = forwardRef((props, ref) => {
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl} ref={ref}>
      <InputLabel id="Select-Quantity-DD">Quantity</InputLabel>
      <Select
        labelId="Select-Quantity-DD"
        id="SelectQuantity"
        value={props.selectQuantityValue}
        onChange={(event) => {
          props.handleQuantityChange(event);
        }}
        onClick={(event) => {
          props.setQuantitiySelected(event.target.quantity + 1);
        }}
        disabled={props.selectSizeValue === ''}
      >

        <MenuItem value="">
          <em>Select Quantity</em>
        </MenuItem>

        {props.quantityArr.map((quantity, i) => (
          <MenuItem value={quantity} key={quantity}>
            {i + 1}
          </MenuItem>
        ))}

      </Select>
      <FormHelperText>Select Quantity</FormHelperText>
    </FormControl>
  );
});

export default QuantityDD;
