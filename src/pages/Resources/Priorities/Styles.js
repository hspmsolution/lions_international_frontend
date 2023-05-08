import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    priority: {
        '& .MuiPaper-root': {
            display: 'flex',
            alignItems: 'center',
            textAlign: 'justify',
            padding: '2rem',
            backgroundColor: '#33338f',
            color: 'white'
        },
        '& .MuiBox-root': {
            justifyContent: 'center',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem'
        }
    }
}))