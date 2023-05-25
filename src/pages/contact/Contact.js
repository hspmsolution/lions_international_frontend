import React, { useState } from "react";
import { TextField, Button, Typography, Grid, Box } from "@mui/material";
import useStyles from "./ContactStyles";
import { Paper } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
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
      <Box
        sx={{
          paddingTop: "6rem",
          backgroundImage: "url('/assets/img/bggg.png')",
        }}
      >
        <Box className={classes.box}>
          <Grid
            container
            spacing={2}
          >
            <Grid
              item
              xs={12}
              md={4}
              lg={3}
              sx={{ margin: "auto" }}
            >
              <Typography
                variant="h6"
                align="center"
                className={classes.heading}
              >
                Contact Details of District
              </Typography>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}
              >
                {rows.map((item, index) => (
                  <Card sx={{ MaxWidth: 350, borderLeft: "4px solid #37F90D" }}>
                    <CardContent>
                      <Typography
                        variant="h5"
                        component="div"
                      >
                        Name : {item.name}
                      </Typography>
                      <Typography color="text.secondary">
                        Designation: {item.designation}
                      </Typography>
                      <Typography color="text.secondary">
                        Phone: {item.phone}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Box>
              <Card
                sx={{
                  MaxWidth: 350,
                  borderLeft: "4px solid #37F90D",
                  marginTop: "2rem",
                }}
              >
                <CardContent>
                  <Typography>
                    <strong>Email: lions317f2324@gmail.com</strong>
                  </Typography>
                </CardContent>
              </Card>
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
