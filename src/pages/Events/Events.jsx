import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Paper, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import useStyles from './Styles';

function ResponsiveDialog() {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open Event Details
            </Button>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            // sx={{ display: 'flex', justifyContent: 'center' }}
            >
                <DialogTitle id="responsive-dialog-title">
                    {"Past/Upcoming Event by Club"}
                </DialogTitle>
                <Paper variant="outlined" sx={{ width: '30vw', padding: '0rem', margin: 'auto' }}>
                    <img src="/assets/img/helpingLions.jpg" alt='helping' style={{ width: '100%' }} />
                </Paper>
                <DialogContent>
                    <table>
                        <tbody>
                            <tr>
                                <th style={{ display: 'flex' }}><Typography variant='subtitle1' sx={{ mr: '1rem' }}>Event Name : </Typography><Typography variant='subtitle1'>Food Donation</Typography></th>
                            </tr>
                            <tr>
                                <th style={{ display: 'flex' }}><Typography variant='subtitle1' sx={{ mr: '1rem' }}>Event Details : </Typography><Typography variant='subtitle1' sx={{ width: '24rem', textAlign: 'justify' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem magni soluta quis adipisci similique eaque voluptates velit, reiciendis eum aspernatur excepturi aliquam obcaecati deserunt error, quia pariatur expedita! Quibusdam, dicta.</Typography></th>
                            </tr>
                        </tbody>
                    </table>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick={handleClose} autoFocus>
                        Register
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

function BasicCard(title, bgImage) {
    const classes = useStyles();

    return (
        <Card sx={{ minWidth: 275, maxWidth: 520 }}>
            <CardContent className={classes.eventCard}>
                <Box sx={{ width: '100%', height: '15rem', mb: '3rem' }}>
                    <img src='/assets/img/helpingLions.jpg' />
                </Box>
                <ResponsiveDialog />
            </CardContent>
        </Card>
    );
}

export default function Events() {
    const filters = [
        {
            Title: 'a',
            bgImage: "url('https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')"
        },
        {
            Title: 'b',
            bgImage: ''
        },
        {
            Title: 'c',
            bgImage: ''
        },
    ]

    return (
        <>
            <Container sx={{ margin: '5rem auto' }}>
                <Typography variant='h4' sx={{ textAlign: 'center', marginBottom: '2rem' }}>
                    Events
                </Typography>

                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Box
                            sx={{
                                p: 2,
                                bgcolor: 'background.default',
                                display: 'grid',
                                gridTemplateColumns: { md: '4fr 4fr 4fr' },
                                gap: 2,
                            }}
                        >
                            {filters.map((filter, index) => (
                                <Box key={index}>
                                    <BasicCard title={filter.Title} bgImage={filter.bgImage} />
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}