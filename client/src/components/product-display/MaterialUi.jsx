import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  avatarSmall: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    '&:hover': {
      cursor: 'pointer'
    },
    border: '1px solid black'
  },
  avatarLarge: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    '&:hover': {
      cursor: 'pointer'
    },
    border: '1px solid black'
  },
  avatarIndicators: {
    '&:hover': {
      cursor: 'pointer'
    },
    border: '1px solid black',
    margin: '1px'
  },
  button: {
    padding: '7px',
    border: '1px solid black',
    width: '100%',
    borderRadius: '0px'
  },
  form: {
    background: 'purple'
  },
  media: {
    height: 0,
    paddingTop: '56.25%'
  },
  img: {
    height: 550,
    maxWidth: '100%',
    padding: '10px'
  },
  icon: {
    color: 'black'
  },
  selectTag: {
    padding: '10px',
    border: '1px solid black',
    borderRadius: '4px',
    width: '100%',
    fontWeight: 'bold'
  },
  card: {
    maxWidth: '100%'
  },
  loadingSpinner: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2)
    }
  },
  carousel: {
    height: '90%',
    width: '100%',
    boxShadow: '0px 1px 2px 1px rgba(0, 0, 0, .3)',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '6px'
  },
  carouselThumbs: {
    height: '50px',
    width: '50px',
    position: 'absolute',
    top: '60px',
    left: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
    border: '2px solid black'
  },
  navButtonWrapper: {
    top: '250px'
  },
  mainGrid: {
    textAlign: 'center',
    color: 'white',
    maxWidth: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#b3c0d7',
    borderRadius: '3px',
    padding: '5px',
    boxShadow: '0 4px 8px 0 rgb(0 0 0 / 5%), 0 6px 5px 0 rgb(0 0 0 / 4%)'
  },
  grid: {
    textAlign: 'center',
    color: 'white',
    maxWidth: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#b3c0d7',
    borderRadius: '3px',
    padding: '5px'
  },
  carouselGrid: {
    color: 'white',
    maxWidth: '100%',
    backgroundColor: '#b3c0d7',
    borderRadius: '3px',
    padding: '5px'
  },
  mainImg: {
    maxWidth: '100%',
    '&:hover': {
      cursor: 'zoom-in'
    }
  },
  sideImg: {
    maxHeight: '50px',
    maxWidth: '50px',
    border: '2px solid black',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  imgGrid: {
    position: 'relative',
    left: 0,
    top: 0
  },
  discountPrice: {
    color: 'red'
  },
  orignalPrice: {
    textDecoration: 'line-through'
  },
  popoverContent: {
    padding: '5px',
    backgroundColor: '#ffcccb',
    border: '2px solid red',
    borderRadius: '6px'
  },
  linkToReviews: {
    color: 'rgb(117 117 117)'
  }
}));

export default useStyles;
