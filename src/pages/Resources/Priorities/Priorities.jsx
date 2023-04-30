import { Box, Grid, Typography } from "@mui/material";
import CustomizedBreadcrumbs from "../../../components/Breadcrumb/Breadcrumb";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import useStyles from './Styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Priorities() {
    const classes = useStyles();

    return (
        <>
            <Box sx={{ backgroundImage: "url('/assets/img/bggg.png')", backgroundAttachment: 'fixed' }}>
                <CustomizedBreadcrumbs label={'Resources'} subLabel={'Global Priorities'} />
                <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ padding: '3rem 3rem 5rem' }}>
                    <Grid item xs={12} md={6} className={classes.priority}>
                        <Item>
                            <Box>
                                <Typography variant="h4">SPECIALITY CLUBS</Typography>
                                While Lions serve a wide range of needs in their communities ,
                                more and more clubs are forming around a specific area of interest,
                                a single cause or comman backgound. Speciality clubs allow people to join a community focussed on comman
                                pursuits and interest growing membership and helping our organization do even greater good.
                            </Box>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.priority}>
                        <Item>
                            <Box>
                                <Typography variant="h4">GLOBAL CAUSES</Typography>
                                Our new global cause give lions arounf the world new opportunities to unite so we can address some of the most
                                pressing issue facing humanity. This year , we’re encouraging all clubs to expand their service and use the
                                resources available to them to make an even bigger diffrence in their communities.
                            </Box>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.priority}>
                        <Item>
                            <Box>
                                <Typography variant="h4">SUPPORTING OUR FOUNDATION</Typography>
                                While Lions serve a wide range of needs in their communities , more and more clubs are forming around a
                                specific area of interest, a single cause or comman backgound. Speciality clubs allow people to join a
                                community focussed on comman pursuits and interest growing membership and helping our organization do even
                                greater good.
                            </Box>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.priority}>
                        <Item>
                            <Box>
                                <Typography variant="h4">SERVICE JOURNEY</Typography>
                                Companion 100 is a three- year effort by Lions Clubs International to raise $US300 million with the goal of
                                empowering the service of Lions around the world . As we enter the second year of the campaign, we want to
                                keep your momentum going by encouraging everyone to give what they can. Toghether, we bring long-term change
                                and lasting hope to the communities that need us most.
                            </Box>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}