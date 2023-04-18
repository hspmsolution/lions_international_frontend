import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    priority: {
        '& .MuiPaper-root': {
            display: 'flex',
            alignItems: 'center',
            height: '150px',
            textAlign: 'justify',
        },
        '& .MuiBox-root': {
            justifyContent: 'center',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem'
        }
    }
}))