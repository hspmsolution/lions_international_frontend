import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate,useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  TextField,
  Button,
  Box,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import { InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import { resetPass } from "../../actions/auth";
import CircularProgress from "@mui/material/CircularProgress";
import { IS_LOADING } from "../../constants/actionTypes";

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
  const location = useLocation();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const queryParams = new URLSearchParams(location.search);
  const resetToken = queryParams.get("token") || null;


  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string().max(255).required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: (data) => {
      dispatch(resetPass(data, navigate,resetToken));
      dispatch({ type: IS_LOADING, payload: true });
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
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
        }}>
        <Paper
          maxWidth="sm"
          elevation={3}
          className={classes.insideBox}>
          <form onSubmit={formik.handleSubmit}>
            <Box
              sx={{
                pb: 1,
                pt: 3,
              }}>
              <Typography
                align="center"
                color="textSecondary"
                variant="h3">
                Reset Password
              </Typography>
              <Typography
                align="center"
                color="textSecondary"
                variant="body3">
                Password should contain uppercase,lowercase,digit and symbol
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
              type={showPassword ? "text" : "password"}
              value={formik.values.password}
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
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
                disabled={isLoading}
                fullWidth
                size="large"
                type="submit"
                variant="contained">
             {isLoading ? <CircularProgress /> : "Update Password"}
              </Button>
            </Box>
          </form>
        </Paper>
      </Paper>
    </>
  );
}
