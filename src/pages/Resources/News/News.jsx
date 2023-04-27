import { Box, Button, Container, TextField, Typography } from "@mui/material";
import CustomizedBreadcrumbs from "../../../components/Breadcrumb/Breadcrumb";
import ActivityCard from '../../../components/ActivityCard/ActivityCard'

const data = [
    {
        src: '',
        title: 'Hunger Relief Program',
        description: 'As part of the District’s Hunger Relief Program, LCB Shikshana Food',
    },
    {
        src: '',
        title: 'Health Camp',
        description: 'LCB Shikshana and Leo Club of Yuva Keerthi along with Metro Lions Services Trust, conducted a Dental &',
    },
    {
        src: '',
        title: 'Cleaning Drive',
        description: 'Lions cleaned the site and collected all the waste thrown',
    },
];

export default function News() {
    return (
        <>
            <Box sx={{ backgroundImage: "url('/assets/img/bggg.png')", backgroundAttachment: 'fixed' }}>
                <CustomizedBreadcrumbs label={'Resources'} subLabel={'News'} />
                <Container sx={{ my: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                    <TextField id="outlined-basic" label="Search" variant="outlined" sx={{ width: '30%', minWidth: '10rem' }} />
                    <Box sx={{ display: 'inline-flex', gap: '2rem' }}>
                        <Button variant="contained">Search</Button>
                        <Button variant="contained">Reset</Button>
                    </Box>
                </Container>
                <Box sx={{ display: 'flex', justifyContent: 'space-evenly', py: '3rem' }}>
                    {data.map((item, index) => (
                        <ActivityCard item={item} />
                    ))}
                </Box>
            </Box>
        </>
    )
}