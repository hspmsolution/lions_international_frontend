import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
    activityTitle: {
        textAlign: 'center',
    },
    dateChip: {
        position: 'relative',
        transform: 'translateX(-50%)',
        left: '50%',
    },
    activityImage: {
        width: '100%',
        height: '200px !important',
        objectFit: 'contain',
        position: 'absolute',
    }
}))