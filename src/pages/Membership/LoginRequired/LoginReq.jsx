import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { signInReq } from "../../../actions/auth";
import { ADMIN, IS_LOADING } from "../../../constants/actionTypes";
import { makeStyles } from "@mui/styles";
import { InputAdornment, IconButton } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const useStyles = makeStyles({
  label: {
    " & label.MuiInputLabel-root, & input.MuiInputBase-input": {
      color: "#39459b",
    },
    "& label.Mui-focused": {
      color: "#39459b",
    },
  },
  button: {
    "&.MuiButton-root": {
      backgroundColor: "transparent",
      border: "1px solid white",
      "&:hover, &:active": {
        color: "white",
        border: "1px solid white",
      },
      "&:active": {
        backgroundColor: "#0d99d7",
        color: "#39459b",
      },
    },
  },
});

const Login = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const isAdmin = useSelector((state) => state.auth.admin);

  const formik = useFormik({
    initialValues: {
      memberId: "",
      password: "",
    },
    validationSchema: Yup.object({
      memberId: Yup.number()
        .integer("Must be an integer")
        .required("Member Id is required"),
      password: Yup.string()
        .max(255)
        .required("Password must be of alphanumeric Example@123 min. 8"),
    }),
    onSubmit: (data) => {
      setTimeout(() => {
        dispatch(signInReq(data, navigate));
      }, 500);

      dispatch({ type: IS_LOADING, payload: true });
    },
  });

  useEffect(() => {
    dispatch({ type: ADMIN });
    if (isAdmin) navigate("/");
  }, []);

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box
      sx={{
        backgroundImage: 'url("/assets/img/loginPage.jpg")',
        backgroundSize: "cover",
        display: "flex",
        minHeight: "100vh",
        alignItems: "center",
        backdropFilter: "blur(5px)",
        color: "#39459b",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        boxShadow: "inset 0 0 0 1000px rgba(255, 255, 255, 0.1)",
      }}
    >
      <Helmet>
        <title> Login </title>
      </Helmet>
      <Box
        //component="main"
        sx={{
          background: " rgba( 255, 255, 255, 0.45 )",
          boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          backdropFilter: "blur( 5.5px )",
          backdropFilter: "blur( 5.5px )",
          borderRadius: "20px",
          border: "1px solid rgba( 255, 255, 255, 0.18 )",
          maxWidth: "758px",
          margin: "auto",
          // padding: "77px 99px 87px",
          padding: { xs: "3rem 0.5rem", sm: "3rem 3rem", lg: "3rem 5rem" },
          color: "#fff",
        }}
      >
        <Container maxWidth="sm">
          <Link to="/">
            <Button
              component="a"
              sx={{ color: "white" }}
              startIcon={<ArrowBackIcon fontSize="small" />}
            >
              Home
            </Button>
          </Link>
          <form onSubmit={formik.handleSubmit} className={classes.label}>
            <Box
              sx={{
                pb: 1,
                pt: 3,
                color: "white",
              }}
            >
              <Typography align="center" color="white" variant="h6">
                Login with Member Id
              </Typography>
            </Box>
            <TextField
              error={Boolean(formik.touched.memberId && formik.errors.memberId)}
              fullWidth
              helperText={formik.touched.memberId && formik.errors.memberId}
              label="Member Id"
              margin="normal"
              name="memberId"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="number"
              value={formik.values.email}
              variant="standard"
            />
            <TextField
              error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="Password"
              margin="normal"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type={showPassword ? "text" : "password"}
              value={formik.values.password}
              variant="standard"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Box sx={{ py: 2 }}>
              <Button
                className={classes.button}
                disabled={isLoading}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                {isLoading ? <CircularProgress /> : "Login In Now"}
              </Button>
            </Box>
          </form>
        </Container>
      </Box>
    </Box>
  );
};

export default Login;
