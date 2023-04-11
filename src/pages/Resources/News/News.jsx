import { Box, Button, Container, TextField, Typography } from "@mui/material";
import CustomizedBreadcrumbs from "../../../components/Breadcrumb/Breadcrumb";
import helpingLions from "../../../components/Slider/img/helpingLions.jpg";
import helpingLions1 from "../../../components/Slider/img/helpingLions(1).jpg";
import helpingLions2 from "../../../components/Slider/img/helpingLions(2).jpeg";
import ImageSlider, { Slide } from "react-auto-image-slider";
import Card from '@mui/material/Card';
import ActivityCard from '../../../components/ActivityCard/ActivityCard'

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

export default function News() {
    return (
        <>
            <CustomizedBreadcrumbs label={'Resources'} subLabel={'News'} />
            <Box sx={{ pt: '1rem', backgroundImage: "url('/assets/img/bggg.png')", backgroundAttachment: 'fixed' }}>
                <Container sx={{ my: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                    <TextField id="outlined-basic" label="Search" variant="outlined" sx={{ width: '30%', minWidth: '10rem' }} />
                    <Box sx={{ display: 'inline-flex', gap: '2rem' }}>
                        <Button variant="contained">Search</Button>
                        <Button variant="contained">Reset</Button>
                    </Box>
                </Container>
                <Box sx={{ display: 'flex', justifyContent: 'space-evenly', py: '3rem' }}>
                    {data.map((item, index) => (
                        // <Card variant="outlined" sx={{ width: '30%', height: '300px' }}>
                        //     <Box
                        //         sx={{ flexBasis: 120, borderRadius: 'sm' }}
                        //     >
                        //         <img
                        //             src={`${item.src}?w=120&fit=crop&auto=format`}
                        //             srcSet={`${item.src}?w=120&fit=crop&auto=format&dpr=2 2x`}
                        //             alt={item.title}
                        //             style={{ width: '100%', height: '200px' }}
                        //         />
                        //     </Box>
                        //     <Typography variant='h6'>{item.title}</Typography>
                        //     <Typography>{item.description}</Typography>
                        // </Card>
                        <ActivityCard item={item} />
                    ))}
                </Box>
            </Box>
        </>
    )
}