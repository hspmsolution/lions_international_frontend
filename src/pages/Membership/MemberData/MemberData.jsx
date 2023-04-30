import { Box, Button, Checkbox, Container, FormControlLabel, FormGroup, Grid, Paper, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import useStyles from './Styles';
import CustomizedBreadcrumbs from "../../../components/Breadcrumb/Breadcrumb";
import React from "react";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const formLabel1 = ["himym (test-club)", "MALEGAON", "NASHIK", "POONA", "POONA KIRKEE", "SHRIRAMPUR"];
const formLabel2 = ["Lion Member", "Club Administrator", "Club Director", "Club Treasurer", "Club President", "ZONE CHAIRPERSON"];

export default function MemberData() {
    const classes = useStyles();
    const [checkedAllClubs, setCheckedAllClubs] = React.useState(false);
    const [checkedAllPositions, setCheckedAllPositions] = React.useState(false);
    const [checkedClubs, setCheckedClubs] = React.useState(new Array(formLabel1.length).fill(false));
    const [checkedPositions, setCheckedPositions] = React.useState(new Array(formLabel2.length).fill(false));

    const handleSelectAllClubs = () => {
        const newCheckedItems = checkedClubs.map(() => !checkedAllClubs);
        setCheckedAllClubs(!checkedAllClubs);
        setCheckedClubs(newCheckedItems);
    };

    const handleCheckboxChangeClub = (index) => (event) => {
        const newCheckedItems = [...checkedClubs];
        newCheckedItems[index] = event.target.checked;
        setCheckedClubs(newCheckedItems);
        setCheckedAllClubs(newCheckedItems.every(Boolean));
    };

    const handleSelectAllPositions = () => {
        const newCheckedItems = checkedPositions.map(() => !checkedAllPositions);
        setCheckedAllPositions(!checkedAllPositions);
        setCheckedPositions(newCheckedItems);
    };

    const handleCheckboxChangePosition = (i) => (event) => {
        const newCheckedItems = [...checkedPositions];
        newCheckedItems[i] = event.target.checked;
        setCheckedPositions(newCheckedItems);
        setCheckedAllPositions(newCheckedItems.every(Boolean));
    };

    return (
        <>
            <Box sx={{ backgroundImage: "url('/assets/img/bggg.png')", backgroundAttachment: 'fixed' }}>
                <CustomizedBreadcrumbs label={'Membership'} subLabel={'Download Member Data'} />
                <Container sx={{ pb: '5rem', textAlign: 'center' }}>
                    <Box sx={{ width: '100%', mb: '2rem' }}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={6}>
                                <Item className={classes.checkItems}>
                                    <Typography variant="h6">Select Clubs</Typography>
                                    <Box sx={{ border: '1px solid #c9c9c9', margin: '1rem', padding: '0.5rem', borderRadius: '5px' }}>
                                        <FormGroup>
                                            {formLabel1.map((label, index) => (
                                                <FormControlLabel
                                                    key={index}
                                                    control={
                                                        <Checkbox
                                                            checked={checkedClubs[index]}
                                                            onChange={handleCheckboxChangeClub(index)}
                                                            inputProps={{ 'aria-label': 'controlled' }}
                                                        />
                                                    }
                                                    label={label}
                                                />
                                            ))}
                                        </FormGroup>
                                    </Box>
                                    <Box sx={{ display: 'inline-flex', gap: '2rem' }}>
                                        <Button variant="contained" onClick={handleSelectAllClubs}>
                                            {checkedAllClubs ? 'Deselect All' : 'Select All'}
                                        </Button>
                                    </Box>
                                </Item>
                            </Grid>
                            <Grid item xs={6}>
                                <Item className={classes.checkItems}>
                                    <Typography variant="h6">Select Positions</Typography>
                                    <Box sx={{ border: '1px solid #c9c9c9', margin: '1rem', padding: '0.5rem', borderRadius: '5px' }}>
                                        <FormGroup>
                                            {formLabel2.map((label, i) => (
                                                <FormControlLabel
                                                    key={i}
                                                    control={
                                                        <Checkbox
                                                            checked={checkedPositions[i]}
                                                            onChange={handleCheckboxChangePosition(i)}
                                                            inputProps={{ 'aria-label': 'controlled' }}
                                                        />
                                                    }
                                                    label={label}
                                                />
                                            ))}
                                        </FormGroup>
                                    </Box>
                                    <Box sx={{ display: 'inline-flex', gap: '2rem' }}>
                                        <Button variant="contained" onClick={handleSelectAllPositions}>
                                            {checkedAllPositions ? 'Deselect All' : 'Select All'}
                                        </Button>
                                    </Box>
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                    <Button variant="contained">Download</Button>
                </Container>
            </Box>
        </>
    )
}