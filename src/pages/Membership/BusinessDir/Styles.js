import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  profileContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    minHeight: '80vh',
    alignItems:'center',
  },
  cardContent: {
    display: 'grid',
    alignItems: 'center',
    justifyItems: 'center'
  },
  cardHeaders: {
    display: 'grid',
    alignItems: 'center',
    justifyItems: 'center',
    gap:'0.5em',
  },
  avatar:{
    width: '100px',
    height: '100px',
  },
  socialIcons: {
    textAlign: 'center',
    '& a': {
        color: '#3d4750',
        margin: '10px',
        padding: '5px',
        backgroundColor: '#cdcdcd',
        borderRadius: '5px'
    }
}
}));