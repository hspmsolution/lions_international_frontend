import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  profileContainer: {
    display: 'flex',
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
    width: '130px',
    height: '130px',
  }
}));