import * as React from "react";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { makeStyles } from "@mui/styles";
import { expense } from "../../../actions/expense";

const useStyles = makeStyles({
  textField: {
    "& .css-1fi1ijh-MuiFormLabel-root-MuiInputLabel-root": {
      position: "relative",
    },
  },
});

export default function PopupMenu({ type }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const initialState = {
    date: "",
    amount: "",
    purpose: "",
    paymentMode: "cash",
    type: type,
  };
  const [open, setOpen] = React.useState(false);
  const [paymentDetails, setPaymentDetails] = React.useState(initialState);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    if ((e.target.name === "amount") && (paymentDetails.type === "expense" || paymentDetails.type === "withdraw")) {
      setPaymentDetails({ ...paymentDetails, [e.target.name]: -e.target.value });
    }else{
      setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
    }
  
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(expense(paymentDetails));
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        {type}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{type.toUpperCase()}</DialogTitle>
        <DialogContent>
          <form onSubmit={onSubmit}>
            <TextField
              className={classes.textField}
              required
              id="date"
              // label="Date Of Expence"
              type="date"
              fullWidth
              name="date"
              variant="outlined"
              onChange={handleChange}
            />
            <TextField
              required
              autoFocus
              margin="dense"
              id="Amount"
              label="Amount"
              type="number"
              name="amount"
              fullWidth
              variant="outlined"
              onChange={handleChange}
            />
            <TextField
              required
              autoFocus
              margin="dense"
              id="purpose"
              label="Purpose"
              name="purpose"
              type="text"
              fullWidth
              variant="outlined"
              onChange={handleChange}
            />
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Payment</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="cash"
                required
                name="paymentMode"
                onChange={handleChange}
              >
                <FormControlLabel
                  value="cash"
                  control={<Radio />}
                  label="Cash"
                />
                <FormControlLabel
                  value="cheque"
                  control={<Radio />}
                  label="Cheque"
                />
              </RadioGroup>
            </FormControl>

            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit" onClick={handleClose}>Submit</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
