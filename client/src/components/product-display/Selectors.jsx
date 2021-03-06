import React, {
  useState, useEffect, useContext, createRef
} from 'react';
import PropTypes from 'prop-types';
import {
  Grid, Button, Popover, Typography
} from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import useStyles from './MaterialUi.jsx';
import { SkusContext } from './ProductDisplay.jsx';
import SizeDD from './DropDowns/SizeDD.jsx';
import QuantityDD from './DropDowns/QuantityDD.jsx';

const Selectors = ({ addToBag }) => {
  const classes = useStyles();
  const { skusState } = useContext(SkusContext);
  const [selectSizeValue, setSelectSizeValue] = useState('');
  const [selectQuantityValue, setSelectQuantityValue] = useState('');
  const [sizeForQuantity, setSizeForQuantity] = useState('');
  const [sizeQuantity, setSizeQuantity] = useState(0);
  const [quantitiySelected, setQuantitiySelected] = useState('');
  const [skusId, setSkusId] = useState(0);
  const [quantityArr, setQuantityArr] = useState([]);
  const [open, setOpen] = useState(false);
  const [anchorElQuantity, setAnchorElQuantity] = useState(null);
  const [anchorElSize, setAnchorElSize] = useState(null);

  const popoverOpenQuantity = Boolean(anchorElQuantity);
  const popoverOpenSize = Boolean(anchorElSize);
  const inputElQuantity = createRef();
  const inputElSize = createRef();

  // Allows for users to leave DD with no crash
  const handleClickAway = () => {
    setOpen(false);
  };

  const handleSizeChange = (event) => {
    setSelectSizeValue(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setSelectQuantityValue(event.target.value);
  };

  // Quantity popover
  const handlePopoverQuantityOpen = () => {
    setAnchorElQuantity(inputElQuantity.current);
  };

  const handleCloseQuantity = () => {
    setAnchorElQuantity(null);
  };

  // Size Popover
  const handlePopoverSizeOpen = () => {
    setAnchorElSize(inputElSize.current);
  };

  const handleCloseSize = () => {
    setAnchorElSize(null);
  };
  // Rendering quantity DD
  const getStyleId = (size) => {
    skusState.forEach((stlyeObj) => {
      if (stlyeObj.size === size) {
        setSkusId(parseInt(stlyeObj.id, 10));
      }
    });
  };

  // Used for generating Quantity DD
  const quantityArrayMaker = (maxNum) => {
    let count = 0;
    const resultArr = [];
    while (count !== maxNum) {
      resultArr.push(count);
      count += 1;
    }
    setQuantityArr(resultArr);
  };

  // Used for creating quantity DD
  const getQuantityForSize = (size) => {
    let resultNum;
    if (sizeForQuantity !== '') {
      if (sizeForQuantity === undefined) {
        return;
      }
      skusState.forEach((styleSkus) => {
        if (size === styleSkus.size) {
          resultNum = styleSkus.quantity;
        }
      });
      setSizeQuantity(resultNum);
      quantityArrayMaker(resultNum);
    }
  };

  useEffect(() => {
    getQuantityForSize(sizeForQuantity);
    getStyleId(sizeForQuantity);
  }, [sizeForQuantity]);

  return (
    <Grid item xs={12} spacing={1} container>
      <Grid item xs={6}>

        <SizeDD
          ref={inputElSize}
          handleSizeChange={handleSizeChange}
          setSizeForQuantity={setSizeForQuantity}
          selectSizeValue={selectSizeValue}
          setSelectQuantityValue={setSelectQuantityValue}
          open={open}
          handleClickAway={handleClickAway}
          setSkusId={setSkusId}
        />

      </Grid>
      <Grid item xs={6}>

        <QuantityDD
          ref={inputElQuantity}
          selectQuantityValue={selectQuantityValue}
          handleQuantityChange={handleQuantityChange}
          selectSizeValue={selectSizeValue}
          quantityArr={quantityArr}
          setQuantitiySelected={setQuantitiySelected}
        />

      </Grid>
      <Grid item xs={9}>

        <Button
          className={classes.button}
          variant="outlined"
          onClick={(event) => {
            if (sizeForQuantity === '' || quantityArr.length === 0) {
              handlePopoverSizeOpen(event);
            } else if (sizeForQuantity !== '' && (quantitiySelected === undefined || quantitiySelected === '')) {
              handlePopoverQuantityOpen(event);
            }
            if (sizeForQuantity !== '' && quantitiySelected !== '') {
              addToBag(skusId);
            }
          }}
        >
          Add To Bag
        </Button>
        <Popover
          open={popoverOpenQuantity}
          onClose={handleCloseQuantity}
          anchorEl={anchorElQuantity}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
        >
          <Typography className={classes.popoverContent}>
            Please choose an amount.
          </Typography>
        </Popover>
        <Popover
          open={popoverOpenSize}
          onClose={handleCloseSize}
          anchorEl={anchorElSize}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
        >
          <Typography className={classes.popoverContent}>
            Please choose a Size.
          </Typography>
        </Popover>

      </Grid>
      <Grid item xs={3}>

        <Button className={classes.button} variant="outlined">
          <FavoriteBorderIcon className={classes.icon} />
        </Button>

      </Grid>
    </Grid>
  );
};

Selectors.propTypes = {
  addToBag: PropTypes.func
};
Selectors.defaultProps = {
  addToBag: () => {}
};

export default Selectors;
