import { Avatar, Box, Button, DialogActions, DialogContent, DialogTitle, Paper, TextField, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function Register({ activityId }) {
  const [open, setOpen] = React.useState(true);
  const [isMember, setIsMember] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const initialData = { memberId: "", name: "", contact: "" };
  const [registrationData, setRegistrationData] = React.useState(initialData);

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setRegistrationData({
      ...registrationData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setRegistrationData(initialData);
    handleClose();
    console.log(registrationData);
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Activity Registration"}
        </DialogTitle>
        <DialogContent>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            defaultValue={"No"}
            onChange={() => {
              setIsMember(!isMember);
            }}
            sx={{ mb: '1rem', gap: '1rem', alignItems: 'center' }}
          >
            Are You a Lion Member
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
          <form onSubmit={onSubmit}>
            {isMember && (
              <Box
                sx={{
                  display: "flex",
                  gap: "1.5rem",
                  mt: "0.5rem",
                  mb: "1.5rem",
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="Enter Lion Member ID"
                  variant="outlined"
                  name="memberId"
                  type="number"
                  onChange={handleChange}
                  required={isMember}
                />
              </Box>
            )}
            <Box sx={{ display: "flex", gap: "1.5rem" }}>
              <TextField
                id="outlined-basic"
                label="Full Name"
                name="name"
                type="text"
                required
                onChange={handleChange}
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Contact Number"
                type="number"
                name="contact"
                required
                onChange={handleChange}
                variant="outlined"
              />
            </Box>
            <DialogActions>
              <Button autoFocus onClick={handleClose}>
                Close
              </Button>
              <Button type="submit">Submit</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
