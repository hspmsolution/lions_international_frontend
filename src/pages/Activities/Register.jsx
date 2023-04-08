import { Avatar, Box, Button, DialogActions, DialogContent, DialogTitle, Paper, TextField, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function Register() {
    const [open, setOpen] = React.useState(true);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));


    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            // sx={{ display: 'flex', justifyContent: 'center' }}
            >
                <DialogTitle id="responsive-dialog-title">
                    {"Activity Registration"}
                </DialogTitle>
                <DialogContent>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio />} label="No" />
                    </RadioGroup>
                    <Box sx={{ display: 'flex', gap: '1.5rem', mt: '0.5rem', mb: '1.5rem' }}>
                        <TextField id="outlined-basic" label="Enter Club Name" variant="outlined" />
                        <TextField id="outlined-basic" label="Enter Lion Member ID" variant="outlined" />
                    </Box>
                    <Box sx={{ display: 'flex', gap: '1.5rem' }}>
                        <TextField id="outlined-basic" label="Full Name" variant="outlined" />
                        <TextField id="outlined-basic" label="Contact Number" variant="outlined" />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick={handleClose}>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}