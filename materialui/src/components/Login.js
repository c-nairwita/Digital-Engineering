import {
  Alert,
  Avatar,
  Button,
  Grid,
  IconButton,
  Paper,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Login = ({ handleChange }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(0);

  const paperStyle = {
    padding: 20,
    height: 300,
    width: "350px",
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "purple", margin: "0px 155px" };
  const headerStyle = { margin: "0", textAlign: "center" };
  const marginTop = { marginTop: "8px" };
  const buttonStyle = {
    borderRadius: "10px",
    width: "100px",
    height: "40px",
    margin: "auto",
    marginTop: "15px",
  };

  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      email: email,
      password: password,
    },

    validationSchema: Yup.object({
      email: Yup.string().email().required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),

    onSubmit: (value) => {
      setEmail(value.email);
      setPassword(value.password);
      console.log(value, "formik");

      const data = JSON.parse(localStorage.getItem("data"));

      //fix the logic, it cannot access the previous array object

      data.map((data) => {
        if (data.email === value.email) {
          if (data.password === value.password) {
            setIsLoggedin(1);
            formik.resetForm();
            sessionStorage.setItem("loggedData", JSON.stringify(data));
          }
        } else {
          setIsLoggedin(-1);
        }
        // console.log(isLoggedin);
      });
      console.log(data);
    },
  });

  useEffect((e) => {
    if (isLoggedin === 1) {
      // handleChange(e,0);
      navigate('/home')
      sessionStorage.setItem("isStored", true);
    }
  }, [isLoggedin]);

  const handleClickShowPassword = () => {
    setShowPassword({ showPassword: !showPassword });
  };

  return (
    <>
      <Grid>
        {isLoggedin === -1 && (
          <>
            <Alert
              severity="error"
              sx={{ width: "30%", margin: "auto", marginTop: "1%" }}
            >
              Please try again!
            </Alert>
          </>
        )}
        <Paper style={paperStyle} elevation={12}>
          <Avatar style={avatarStyle}></Avatar>
          <h2 style={headerStyle}>Sign-in</h2>
          <form onSubmit={formik.handleSubmit} style={{ textAlign: "center" }}>
            <TextField
              id="outlined-basic"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={Boolean(formik.touched.email && formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              label="Email"
              style={marginTop}
              fullWidth
            ></TextField>
            <TextField
              id="outlined-basic"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="off"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={Boolean(formik.touched.password && formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              label="Password"
              style={marginTop}
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword}>
                      {showPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            ></TextField>
            <Button
              type="submit"
              variant="outlined"
              color="secondary"
              style={buttonStyle}
            >
              Log-in
            </Button>
          </form>
        </Paper>
      </Grid>
    </>
  );
};

export default Login;
