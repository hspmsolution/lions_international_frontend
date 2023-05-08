import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Grid,
  Box,
} from "@material-ui/core";
import useStyles from "./ContactStyles";


const ContactForm = () => {
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle form submission
  };

  return (
    <Box className={classes.box}>
        <item>
    <form onSubmit={handleSubmit} className={classes.formContainer}>
      <Typography variant="h5" className={classes.heading}>Contact Us</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
          <TextField
            label="First Name"
            variant="outlined"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={classes.textField}
            required
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            label="Last Name"
            variant="outlined"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={classes.textField}
            required
          />
        </Grid>
        <Grid item xs={12} lg={6}>

        <TextField
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={classes.textField}
        type="email"
        required
      />
        </Grid>
        <Grid item xs={12} lg={6}>
        <TextField
        label="Phone Number"
        variant="outlined"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className={classes.textField}
        required
      />
            
        </Grid>
       
        
        <Grid item xs={12} lg={12}>

        <TextField
        label="Subject"
        variant="outlined"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className={classes.textField}
        required
      />
        </Grid>
        <Grid item   xs={12} lg={12}>
        <TextField
        label="Message"
        variant="outlined"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className={classes.textField}
        multiline
        required
        rows={4}
      />
        </Grid>

        <Button
        variant="contained"
        color="primary"
        type="submit"
        className={classes.button}
      >
        Submit
      </Button>
      </Grid>
     
      
      
    </form>
    </item>
    </Box>
  );
};

export default ContactForm;
