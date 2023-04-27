import { Box, Card, Typography } from "@mui/material";
import useStyle from './Styles';
import Chip from '@mui/material/Chip';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export default function ActivityCard({ item }) {
    const classes = useStyle();


    return (
        <Card variant="outlined" sx={{ maxWidth: '450px', minWidth: '250px', minheight: '320px' }}>
            <Box
                sx={{ flexBasis: 120, borderRadius: 'sm', height: '200px' }}
            >
                <img
                    src={`${item.src}?w=120&fit=crop&auto=format`}
                    srcSet={`${item.src}?w=120&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    className={classes.activityImage}
                />
                <Chip icon={<CalendarTodayIcon />} label={'dd/mm/yy'} className={classes.dateChip} />
            </Box>
            <Box sx={{ padding: '1rem' }}>
                <Typography variant='h6' className={classes.activityTitle}>{item.title}</Typography>
                <Typography className={classes.activityDesc}>{item.description}</Typography>
            </Box>
        </Card>
    )
}