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

function BasicCard(title,bgImage) {
    const classes = useStyles();
    
    return (
        <Card sx={{ minWidth: 275, maxWidth: 320 }}>
            <CardContent className={classes.eventCard}>
                <Typography variant='body1'>title</Typography>
                <Box sx={{ width: '100%', height: '10rem', my: '1rem', backgroundImage: "url('https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')" }}>
                </Box>
                <ResponsiveDialog />
            </CardContent>
        </Card>
    );
}


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
                <Paper variant="outlined" sx={{ width: '200px', padding: '0.5rem', margin: 'auto' }}>
                    <img src="/assets/img/helpingLions.jpg" alt='helping' style={{ width: '100%' }} />
                </Paper>
                <DialogContent>
                    <DialogContentText>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto vel id magnam eum ipsam accusantium sint deserunt similique nobis laudantium, nisi ipsa dolor natus quos vero totam nihil facilis. At sunt delectus doloribus quam, dolorum, nihil sit, libero repellat aspernatur praesentium assumenda ipsum nostrum ducimus numquam rerum mollitia dolore quis. Labore, nam, perspiciatis dolores asperiores et impedit ex autem alias provident incidunt voluptate perferendis dicta tempora earum quasi, laborum natus nihil soluta sunt quisquam iste blanditiis at expedita. Libero est sapiente molestiae optio eveniet ea minus hic recusandae animi voluptatibus reiciendis nobis voluptatum laudantium, quaerat non quae praesentium. Culpa, eaque!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto vel id magnam eum ipsam accusantium sint deserunt similique nobis laudantium, nisi ipsa dolor natus quos vero totam nihil facilis. At sunt delectus doloribus quam, dolorum, nihil sit, libero repellat aspernatur praesentium assumenda ipsum nostrum ducimus numquam rerum mollitia dolore quis. Labore, nam, perspiciatis dolores asperiores et impedit ex autem alias provident incidunt voluptate perferendis dicta tempora earum quasi, laborum natus nihil soluta sunt quisquam iste blanditiis at expedita. Libero est sapiente molestiae optio eveniet ea minus hic recusandae animi voluptatibus reiciendis nobis voluptatum laudantium, quaerat non quae praesentium. Culpa, eaque!
                    </DialogContentText>
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