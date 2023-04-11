import {
  Alert,
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Contact = () => {
  const paperStyle = {
    padding: 20,
    height: 400,
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
    textAlign: "center",
  };

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("data")) ?? []
  );
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      userName: userName,
      email: email,
      feedback: feedback,
    },
    validationSchema: Yup.object({
      userName: Yup.string().required("username is required"),
      email: Yup.string().email().required("email is required"),
      feedback: Yup.string().required("feedback is required"),
    }),
    onSubmit: (value) => {
      setUserName(value.userName);
      setEmail(value.email);
      setFeedback(value.feedback);
      console.log(value, "formik");

      var arr = data;
      arr.push(value);
      setData(arr);
      localStorage.setItem("data", JSON.stringify(arr));
      formik.resetForm();
      setIsSubmitted(true);
      setTimeout(() => {setIsSubmitted(false)}, 3000);
    },
  });

  return (
    <Grid>
      <Paper style={paperStyle} elevation={12}>
        <Avatar style={avatarStyle}></Avatar>
        <h2 style={headerStyle}>Contact Us</h2>
        <Typography variant="heading" sx={{ textAlign: "center" }}>
          Fill the form given below:
        </Typography>
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
            name="feedback"
            value={formik.values.feedback}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.touched.feedback && formik.errors.feedback)}
            helperText={formik.touched.feedback && formik.errors.feedback}
            label="Feedback"
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
              <Alert severity="success">Form submitted successfully</Alert>
            </>
          ) : (
            []
          )}
        </form>
      </Paper>
    </Grid>
  );
};

export default Contact;
