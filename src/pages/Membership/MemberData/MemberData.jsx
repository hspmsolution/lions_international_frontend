import { Box, Checkbox, Container, FormControlLabel, FormGroup, Grid, Paper, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import useStyles from './Styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const formLabel1 = ["himym (test-club)","MALEGAON","NASHIK","POONA","POONA KIRKEE","SHRIRAMPUR"];
const formLabel2 = ["Lion Member","Club Administrator","Club Director","Club Treasurer","Club President","ZONE CHAIRPERSON"];

export default function MemberData() {
    const classes = useStyles();

    return (
        <>
            <Typography variant='h4' sx={{ textAlign: 'center', my: '2rem' }}>
                Member Data
            </Typography>
            <Container sx={{ mb: '2rem' }}>
                <Box sx={{ width: '100%' }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <Item className={classes.checkItems}>
                                <Typography variant="h6">Select Clubs</Typography>
                                <Box sx={{ border: '1px solid #c9c9c9', margin: '1rem', padding: '0.5rem', borderRadius: '5px'}}>
                                    <FormGroup>
                                        {formLabel1.map((label,index) => (
                                            <FormControlLabel control={<Checkbox />} label={label} key={index} />
                                        ))}
                                    </FormGroup>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item className={classes.checkItems}>
                                <Typography variant="h6">Select Positions</Typography>
                                <Box sx={{ border: '1px solid #c9c9c9', margin: '1rem', padding: '0.5rem', borderRadius: '5px' }}>
                                    <FormGroup>
                                        {formLabel2.map((label,index) => (
                                            <FormControlLabel control={<Checkbox />} label={label} key={index} />
                                        ))}
                                    </FormGroup>
                                </Box>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}