import React, { useState } from "react";
import { TextField, Button, Typography, Grid, Box } from "@mui/material";
import useStyles from "./ContactStyles";
import { Paper } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

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

  const contacts = [
    {
      name: "B S Nagaraj",
      designation: "DG",
      phone: "9844033835",
    },
    {
      name: "V K Rajesh",
      designation: "DCS",
      phone: "9972245375",
    },
    {
      name: "R K Hegde",
      designation: "DCT",
      phone: "9448012200",
    },
    {
      name: "Email",
      email: "lions317f2324@gmail.com",
    },
  ];

  function createData(name, designation, phone) {
    return { name, designation, phone };
  }

  const rows = [
    createData("B S Nagaraj", "DG", 9844033835),
    createData("V K Rajesh", "DCS", 9972245375),
    createData("R K Hegde", "DCT", 9448012200),
  ];

  return (
    <>
      <Box sx={{ paddingTop: '6rem', backgroundImage: "url('/assets/img/bggg.png')" }}>
        <Box className={classes.box}>
          <Grid
            container
            spacing={2}
          >
            <Grid
              item
              xs={12}
              md={4}
              lg={4}
              sx={{ margin: 'auto' }}
            >
              <Paper
                elevation={3}
                sx={{ padding: "1rem", maxWidth: "600px", margin: "auto" }}
              >
                <Typography
                  variant="h6"
                  align="center"
                  className={classes.heading}
                >
                  Contact Details of District
                </Typography>
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Designation</TableCell>
                        <TableCell align="right">Phone No.</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.name}>
                          <TableCell align="left">{row.name}</TableCell>
                          <TableCell align="center">{row.designation}</TableCell>
                          <TableCell align="right">{row.phone}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell colSpan={12}>
                        Email: lions317f2324@gmail.com
                      </TableCell>
                    </TableRow>
                  </Table>
                </TableContainer>
              </Paper>
            </Grid>
            <Grid
              item
              xs={12}
              md={8}
              lg={8}
            >
              <form
                onSubmit={handleSubmit}
                className={classes.formContainer}
              >
                <Typography
                  variant="h5"
                  className={classes.heading}
                >
                  Contact Us
                </Typography>
                <Grid
                  container
                  spacing={3}
                >
                  <Grid
                    item
                    xs={12}
                    lg={6}
                  >
                    <TextField
                      label="First Name"
                      variant="outlined"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className={classes.textField}
                      required
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    lg={6}
                  >
                    <TextField
                      label="Last Name"
                      variant="outlined"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className={classes.textField}
                      required
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    lg={6}
                  >
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
                  <Grid
                    item
                    xs={12}
                    lg={6}
                  >
                    <TextField
                      label="Phone Number"
                      variant="outlined"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={classes.textField}
                      required
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    lg={12}
                  >
                    <TextField
                      label="Subject"
                      variant="outlined"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className={classes.textField}
                      required
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    lg={12}
                  >
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
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default ContactForm;
