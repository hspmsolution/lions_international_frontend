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
    },
    activityDate:{
        position:'absolute',
        top:'6%',
        right:'4%',
        backgroundColor:'white',
        padding:'0.2rem 0.6rem',
        borderRadius:'1rem',
        color:'red',
    },
    itemButton:{
        width:"100%"
    }

}))