import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  TextField,
  Button,
  Box,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import { resetPass} from "../../actions/auth";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "5%",
    backgroundImage: "url('assets/img/bg.avif')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundBlur: "1",
  },
  insideBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "5%",
  },
});
export default function Password() {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const message = useSelector((state) => state.auth.message?.info);
  const [disabled, setDisabled] = useState(false);
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string().max(255).required("Password is required"),
      confirmPassword: Yup.string()
        .max(255)
        .required("Confirm Password is required"),
    }),
    onSubmit: (data) => {
      dispatch(resetPass(data,navigate));
      setDisabled(true);
    },
  });

  useEffect(() => {
    if (message) setDisabled(false);
  }, [message]);
  return (
    <>
      <Helmet>
        <title> Reset Password </title>
      </Helmet>
      <Paper
        className={classes.root}
        elevation={3}
        component="main"
        sx={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
        }}
      >
        <Paper maxWidth="sm" elevation={3} className={classes.insideBox}>
          <form onSubmit={formik.handleSubmit}>
            <Box
              sx={{
                pb: 1,
                pt: 3,
              }}
            >
              <Typography align="center" color="textSecondary" variant="body1">
                Reset Password
              </Typography>
            </Box>

            <TextField
              error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              margin="normal"
              label="Enter Password"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              value={formik.values.password}
              variant="outlined"
            />
            <TextField
              error={Boolean(
                formik.touched.confirmPassword && formik.errors.confirmPassword
              )}
              fullWidth
              helperText={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
              label="Confirm Password"
              margin="normal"
              name="confirmPassword"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              value={formik.values.confirmPassword}
              variant="outlined"
            />
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                disabled={disabled}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Update Password
              </Button>
            </Box>
          </form>
        </Paper>
      </Paper>
    </>
  );
}
