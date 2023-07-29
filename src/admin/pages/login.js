import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { Link as MuiLink } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { forgetPassword, signIn } from "../../actions/auth";
import Dialog from "@mui/material/Dialog";
import { ADMIN, IS_LOADING } from "../../constants/actionTypes";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { InputAdornment, IconButton } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAdmin = useSelector((state) => state.auth.admin);
  const isLoading = useSelector((state) => state.auth.isLoading);

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
        dispatch(signIn(data, navigate));
      }, 500);
      dispatch({ type: IS_LOADING, payload: true });
    },
  });

  useEffect(() => {
    dispatch({ type: ADMIN });
    if (isAdmin) navigate("/dashboard/app");
  }, []);


  // Dialog
  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const resetFormik = useFormik({
    initialValues: {
      memberId: "",
      email: "",
    },
    validationSchema: Yup.object({
      memberId: Yup.number()
        .integer("Must be an integer")
        .required("Member Id is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: (data) => {
      setTimeout(() => {
        dispatch(forgetPassword(data, navigate));
      }, 500);
      dispatch({ type: IS_LOADING, payload: true });
    },

  });
  return (
    <>
      {" "}
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
          component="main"
          sx={{
            background: " rgba( 255, 255, 255, 0.45 )",
            boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            backdropFilter: "blur( 5.5px )",
            backdropFilter: "blur( 5.5px )",
            borderRadius: "20px",
            border: "1px solid rgba( 255, 255, 255, 0.18 )",
            maxWidth: "758px",
            margin: "auto",
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
            <form onSubmit={formik.handleSubmit}>
              <Box
                sx={{
                  pb: 1,
                  pt: 3,
                }}
              >
                <Typography
                  align="center"
                  color="textSecondary"
                  variant="body1"
                >
                  login with Member Id
                </Typography>
              </Box>
              <TextField
                error={Boolean(
                  formik.touched.memberId && formik.errors.memberId
                )}
                fullWidth
                helperText={formik.touched.memberId && formik.errors.memberId}
                label="Member Id"
                margin="normal"
                name="memberId"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="number"
                value={formik.values.memberId}
                variant="outlined"
              />
              <TextField
                error={Boolean(
                  formik.touched.password && formik.errors.password
                )}
                fullWidth
                helperText={formik.touched.password && formik.errors.password}
                label="Password"
                margin="normal"
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
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Box
                sx={{
                  color: "primary",
                  textAlign: "right",
                  cursor: "pointer",
                }}
              >
                <MuiLink underline="hover" onClick={handleClickOpen}>
                  Forgot Password
                </MuiLink>
              </Box>

              <Box sx={{ py: 2 }}>
                <Button
                  color="primary"
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

          {/* Forgot Password Dialog */}

          <Dialog maxWidth={"none"} open={open} onClose={handleClose}>
            <DialogTitle>Forgot Password</DialogTitle>
            <DialogContent sx={{ width: "500px" }}>
              <form onSubmit={resetFormik.handleSubmit}>
                {" "}
                <TextField
                  error={Boolean(
                    resetFormik.touched.memberId && resetFormik.errors.memberId
                  )}
                  fullWidth
                  helperText={
                    resetFormik.touched.memberId && resetFormik.errors.memberId
                  }
                  label="Member Id"
                  margin="normal"
                  name="memberId"
                  onBlur={resetFormik.handleBlur}
                  onChange={resetFormik.handleChange}
                  type="number"
                  value={resetFormik.values.memberId}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(
                    resetFormik.touched.email && resetFormik.errors.email
                  )}
                  fullWidth
                  helperText={
                    resetFormik.touched.email && resetFormik.errors.email
                  }
                  label="Email"
                  margin="normal"
                  name="email"
                  onBlur={resetFormik.handleBlur}
                  onChange={resetFormik.handleChange}
                  type="email"
                  value={resetFormik.values.email}
                  variant="outlined"
                />
                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    disabled={isLoading}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    {isLoading ? <CircularProgress /> : "Submit"}
                  </Button>
                </Box>
              </form>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Close</Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Box>
    </>
  );
};

export default Login;
