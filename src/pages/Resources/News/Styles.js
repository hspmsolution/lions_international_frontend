import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
    newsTitle: {
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
        objectFit: 'cover',
        position: 'absolute',
    },
    newsPagination: {
        '& ul': {
            gap: '10px'
        }
    }
}))