// import sitelogo from '../../assets/images/site-logo.png';
import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../constant/constant";
// import { makeStyles } from '@mui/styles';

const footerStyle = makeStyles((theme) => ({
  footerWrapper: {
    backgroundColor: '#032a64',
    padding: '20px',
  },
  siteFooter: {
    borderTop: '1px solid #ccc',
    paddingTop: '10px',
  },
  bottomFooter: {

    textAlign: 'center',
  },
  footerLogo: {

    '& img': {
      width: '10px',
      height:'auto',
      
    },
  },
  p: {
    textAlign: 'center',
  },
}));

export {footerStyle};