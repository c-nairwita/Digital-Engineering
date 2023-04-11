import {
  Alert,
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("data")) ?? []
  );
  const [isSubmitted, setIsSubmitted] = useState(false);
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const paperStyle = {
    padding: 20,
    height: 580,
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

  const formik = useFormik({
    initialValues: {
      userName: userName,
      email: email,
      phone: phone,
      password: password,
      confirmPassword: confirmPassword,
    },

    validationSchema: Yup.object({
      userName: Yup.string().required("Username is required"),
      email: Yup.string().email().required("Email is required"),
      phone: Yup.string()
        .required("Phone number is required")
        .matches(phoneRegExp, "Phone number is not valid")
        .min(10, "Too short. Must be 10 digits")
        .max(10, "Too long. Must be 10 digits"),
      password: Yup.string()
        .min(8, "Must Contain 8 Characters")
        .required("Password is required")
        .matches(/^(?=.*[a-z])/, "Must Contain One Lowercase Character")
        .matches(/^(?=.*[A-Z])/, "Must Contain One Uppercase Character")
        .matches(/^(?=.*[0-9])/, "Must Contain One Number Character")
        .matches(
          /^(?=.*[!@#$%^&*])/,
          "Must Contain One Special Case Character"
        ),
      confirmPassword: Yup.string()
        .required("Enter password again")
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
    }),

    onSubmit: (value) => {
      setUserName(value.userName);
      setEmail(value.email);
      setPhone(value.phone);
      setPassword(value.password);
      setConfirmPassword(value.confirmPassword);
      console.log(value, "formik");

      var arr = data;
      arr.push(value);
      setData(arr);
      localStorage.setItem("data", JSON.stringify(arr));
      formik.resetForm();
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    },
  });

  return (
    <>
      <Grid>
        <Paper style={paperStyle} elevation={12}>
          <Avatar style={avatarStyle}></Avatar>
          <h2 style={headerStyle}>Sign-Up</h2>
          <form onSubmit={formik.handleSubmit} style={{textAlign: 'center'}}>
            <TextField
              id="outlined-basic"
              name="userName"
              value={formik.values.userName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={Boolean(formik.touched.userName && formik.errors.userName)}
              helperText={formik.touched.userName && formik.errors.userName}
              label="Username"
              style={marginTop}
              fullWidth
            ></TextField>
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
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={Boolean(formik.touched.phone && formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
              label="Phone Number"
              style={marginTop}
              fullWidth
            ></TextField>
            <TextField
              id="outlined-basic"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={Boolean(formik.touched.password && formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              label="Password"
              style={marginTop}
              fullWidth
            ></TextField>
            <TextField
              id="outlined-basic"
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={Boolean(
                formik.touched.confirmPassword && formik.errors.confirmPassword
              )}
              helperText={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
              label="Confirm Password"
              style={marginTop}
              fullWidth
            ></TextField>
            <Button
              type="submit"
              variant="outlined"
              color="secondary"
              style={buttonStyle}
            >
              Submit
            </Button>
            {isSubmitted ? (
              <>
                <Alert severity="success">Successfully signed up!</Alert>
              </>
            ) : (
              []
            )}
          </form>
        </Paper>
      </Grid>
    </>
  );
};

export default SignUp;
