import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  TextField,
  Typography,
  Link as MuiLink,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { signup } from '../../actions/auth';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const message = useSelector((state) => state.auth.message?.info);
  const [disabled, setDisabled] = useState(false);
  const [isotp, setIsotp] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: '',
      otp: '',
      policy: false,
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
      firstName: Yup.string().max(255).required('First name is required'),
      lastName: Yup.string().max(255).required('Last name is required'),
      password: Yup.string().max(255).required('Password is required'),
      confirmPassword: Yup.string().max(255).required('confirmPassword is required'),
      otp: Yup.string().when('condition', {
        is: isotp,
        then: Yup.string().max(255).required('otp is required'),
      }),
      policy: Yup.boolean().oneOf([true], 'This field must be checked'),
    }),
    onSubmit: (data) => {
      setTimeout(() => {
        dispatch(signup(data, navigate));
      }, 500);

      setDisabled(true);
    },
  });

  useEffect(() => {
    if (message) setDisabled(false);
    if (message === 'OTP Sent on Admin Email') setIsotp(true);
  }, [message]);

  return (
    <>
      <Helmet>
        <title> Register</title>
      </Helmet>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%',
        }}
      >
        <Container maxWidth="sm">
          <Link to="/dashboard/manage-admin">
            <Button component="a" startIcon={<ArrowBackIcon fontSize="small" />}>
              Back
            </Button>
          </Link>
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography color="textPrimary" variant="h4">
               Add new admin
              </Typography>
              <Typography color="textSecondary" gutterBottom variant="body2">
                Use unique email to create a new admin
              </Typography>
            </Box>
            <TextField
              error={Boolean(formik.touched.firstName && formik.errors.firstName)}
              fullWidth
              helperText={formik.touched.firstName && formik.errors.firstName}
              label="First Name"
              margin="normal"
              name="firstName"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.firstName}
              variant="outlined"
              disabled={isotp}
            />
            <TextField
              error={Boolean(formik.touched.lastName && formik.errors.lastName)}
              fullWidth
              helperText={formik.touched.lastName && formik.errors.lastName}
              label="Last Name"
              margin="normal"
              name="lastName"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.lastName}
              variant="outlined"
              disabled={isotp}
            />
            <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              label="Email Address"
              margin="normal"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="email"
              value={formik.values.email}
              variant="outlined"
              disabled={isotp}
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
              type="password"
              value={formik.values.password}
              variant="outlined"
              disabled={isotp}
            />
            <TextField
              error={Boolean(formik.touched.confirmPassword && formik.errors.confirmPassword)}
              fullWidth
              helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
              label="confirmPassword"
              margin="normal"
              name="confirmPassword"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              value={formik.values.confirmPassword}
              variant="outlined"
              disabled={isotp}
            />
            {isotp && (
              <TextField
                error={Boolean(formik.touched.otp && formik.errors.otp)}
                fullWidth
                helperText={formik.touched.otp && formik.errors.otp}
                label="otp"
                margin="normal"
                name="otp"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="otp"
                value={formik.values.otp}
                variant="outlined"
              />
            )}
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                ml: -1,
              }}
            >
              <Checkbox checked={formik.values.policy} name="policy" onChange={formik.handleChange} />
              <Typography color="textSecondary" variant="body2">
                I have read the{' '}
                <Link to="/terms">
                  <MuiLink color="primary" underline="always" variant="subtitle2">
                    Terms and Conditions
                  </MuiLink>
                </Link>
              </Typography>
            </Box>
            {Boolean(formik.touched.policy && formik.errors.policy) && (
              <FormHelperText error>{formik.errors.policy}</FormHelperText>
            )}
            <Box sx={{ py: 2 }}>
              <Button color="primary" disabled={disabled} fullWidth size="large" type="submit" variant="contained">
               Add Admin
              </Button>
            </Box>
            {/* <Typography color="textSecondary" variant="body2">
              Have an account?{' '}
              <Link to="/login">
                <MuiLink variant="subtitle2" underline="hover">
                  Sign In
                </MuiLink>
              </Link>
            </Typography> */}
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Register;
