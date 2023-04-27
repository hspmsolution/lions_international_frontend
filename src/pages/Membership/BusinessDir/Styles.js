import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  profileContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContent: {
    display: 'grid',
    alignItems: 'center',
    justifyItems: 'center',
    padding: '0',
  },
  cardHeaders: {
    display: 'grid',
    alignItems: 'center',
    justifyItems: 'center',
    gap: '3.5em',
  },
  avatar: {
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
  },
  avatarBg: {
    height: '50%',
    width: '100%',
    backgroundImage: "url('https://unsplash.imgix.net/45/ZLSw0SXxThSrkXRIiCdT_DSC_0345.jpg?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=857f07b76abac23a7fb7161cc7b12a46')",
    backgroundSize: 'cover',
  },
  contentList: {
    padding: 0,
    '& .MuiListItem-root': {
      padding: '0 !important',
    }
  }
}));