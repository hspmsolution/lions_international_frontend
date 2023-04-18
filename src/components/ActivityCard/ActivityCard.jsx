import { Box, Card, Typography } from "@mui/material";
import helpingLions from "../Slider/img/helpingLions.jpg";
import helpingLions1 from "../Slider/img/helpingLions(1).jpg";
import helpingLions2 from "../Slider/img/helpingLions(2).jpeg";
import useStyle from './Styles';
import { Link } from "react-router-dom";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const data = [
    {
        src: helpingLions,
        title: 'Hunger Relief Program',
        description: 'As part of the District’s Hunger Relief Program, LCB Shikshana Food',
    },
    {
        src: helpingLions1,
        title: 'Health Camp',
        description: 'LCB Shikshana and Leo Club of Yuva Keerthi along with Metro Lions Services Trust, conducted a Dental &',
    },
    {
        src: helpingLions2,
        title: 'Cleaning Drive',
        description: 'Lions cleaned the site and collected all the waste thrown',
    },
];


export default function ActivityCard({ item }) {
    const classes = useStyle();


    return (
        <Card variant="outlined" sx={{ width: '450px', minWidth: '250px', minheight: '320px' }}>
            <Box
                sx={{ flexBasis: 120, borderRadius: 'sm' }}
            >
                <img
                    src={`${item.src}?w=120&fit=crop&auto=format`}
                    srcSet={`${item.src}?w=120&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
            </Box>
            <Box sx={{ padding: '1rem' }}>
                <Typography variant='h6' className={classes.activityTitle}>{item.title}</Typography>
                <Typography className={classes.activityDesc}>{item.description}</Typography>
                <Link to={'/activities'} style={{ color: '#4285f4' }}>View More <FontAwesomeIcon icon={faCircleChevronRight} /></Link>
            </Box>
        </Card>
    )
}