import React, {useContext, useState, useEffect, useStateWithCallback} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import yellow from '@material-ui/core/colors/yellow';
import StarIcon from '@material-ui/icons/Star';
import Rating from '@material-ui/lab/Rating';

//helper function
import { calcAvgRating, calcStarRating } from '../helperFunctions.jsx';

import { ReviewsContext } from '../../../helpers/context';

const useStyles = makeStyles((theme) => ({
  parentContainer: {
    // border: "3px solid red",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  avgRating: {
    // border: "3px solid green",
    fontSize: "xxx-large",
    padding: "10px"
  },
  reviewStarRating: {
    // border: "3px solid green",
    padding: "10px"
  }
}));

const ReviewPercentageAndStars = () => {
  const { revsMetaData } = useContext(ReviewsContext);
  const [avgRating, setAvgRating] = useState(0);
  const [revStarRating, setRevStarRating] = useState(0);

  const getAvgRating = () => {
    if(Object.keys(revsMetaData).length !== 0) {
      if(Object.keys(revsMetaData.ratings).length !== 0) {
          let ratingsObject = revsMetaData.ratings;
          let increment = 1;

        setAvgRating( calcAvgRating(ratingsObject) );
      }
    }
  }

  useEffect( () => {
    getAvgRating();
  }, [revsMetaData]);

  useEffect( () => {
    setRevStarRating( calcStarRating(avgRating) );
  }, [avgRating]);

  const classes = useStyles();
  return (
    <div className={classes.parentContainer}>
      <div className={classes.avgRating}>{avgRating.toFixed(1)}</div>
      <Rating
      name="reviewStarRating"
      className={classes.reviewStarRating}
      readOnly={true}
      size="large"
      defaultValue={0}
      precision={0.1}
      value={revStarRating}
      />
    </div>
  );
}

export default ReviewPercentageAndStars;