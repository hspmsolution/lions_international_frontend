import { useMediaQuery } from '@mui/material';
import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    activitiesCont: {
        background: '#112E57'
    },
    activeH: {
        color: 'white',
        textAlign: 'center'
    },
    activityImage:{
       '@media screen and (max-width: 600px)' :{
        height:'250px'
        },
        width:'100%',
        height:'300px'
    },
    activityHeading:{
        color:'white'
    }

}))