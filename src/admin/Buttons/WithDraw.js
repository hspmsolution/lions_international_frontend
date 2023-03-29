import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { makeStyles } from '@mui/styles';

const useStyles=makeStyles({
  textField:{
    '& .css-1fi1ijh-MuiFormLabel-root-MuiInputLabel-root':{
      position:'relative',
    },
  }

})

export default function WithDraw() {
  const classes=useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
       WithDraw
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>WithDraw</DialogTitle>
        <DialogContent>
         <form>

         <TextField
         className={classes.textField}
            required
            id="date"
            label="Date Of Expence"
            type="date"
            fullWidth
            variant="outlined"
            
          />
          <TextField
          required
            autoFocus
            margin="dense"
            id="Amount"
            label="Amount"
            type="number"
            fullWidth
            variant="outlined"
          />
          <TextField
          required
            autoFocus
            margin="dense"
            id="purpose"
            label="Purpose"
            type="text"
            fullWidth
            variant="outlined"
          />
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Payment</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
            >
                <FormControlLabel value="cash" control={<Radio />} label="Cash" />
                <FormControlLabel value="cheque" control={<Radio />} label="Cheque" />
            </RadioGroup>
            </FormControl>
          

    
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type='submit'>Submit</Button>
        </DialogActions>
        </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}