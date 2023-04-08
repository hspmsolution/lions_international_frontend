import { Box, Card, Typography } from "@mui/material";
import helpingLions from "../Slider/img/helpingLions.jpg";
import helpingLions1 from "../Slider/img/helpingLions(1).jpg";
import helpingLions2 from "../Slider/img/helpingLions(2).jpeg";

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

const item = {
    src: helpingLions,
    title: 'Hunger Relief Program',
    description: 'As part of the District’s Hunger Relief Program, LCB Shikshana Food',
}

export default function ActivityCard({item}) {
    return (
        <Card variant="outlined" sx={{ width: '30%', height: '300px' }}>
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
            <Typography variant='h6'>{item.title}</Typography>
            <Typography>{item.description}</Typography>
        </Card>
    )
}