import React, { useState } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import Input from "./Input";

const Members = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    otp: "",
  };
  const [formData, setFormData] = useState(initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <>
          <Input
            name="firstName"
            label="First Name"
            handleChange={handleChange}
            autoFocus
            half
          />
          <Input
            name="lastName"
            label="Last Name"
            handleChange={handleChange}
            half
          />
        </>

        <Input
          name="email"
          label="Email Address"
          handleChange={handleChange}
          type="email"
        />
      </Grid>

      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        style={{ marginTop: "1em" }}
        disableElevation
      >
        Login to Account
      </Button>
    </form>
  );
};

export default Members;
