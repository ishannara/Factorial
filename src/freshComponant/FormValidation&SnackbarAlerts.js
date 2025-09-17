import {
  Box,
  Button,
  Container,
  InputLabel,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { fromValidation } from "../Validation/login-validation";

export default function FormValidationSnackbarAlerts() {
  const [open, setOpen] = useState(false);
  const fromik = useFormik({
    initialValues: {
      name: "",
      email: "",
      age: "",
      password: "",
    },
    validationSchema: fromValidation,
    onSubmit: () => {
      console.log("successfull data: ", values);
      resetForm();
    },
  });

  let { values, errors, handleChange, submitForm, resetForm } = fromik;

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleClick = () => {
    submitForm();
    if (Object.keys(errors).length > 0) {
      setSnackbar({
        open: true,
        message: "Please correct the errors!",
        severity: "error",
      });
    } else {
      setSnackbar({
        open: true,
        message: "Successful data!",
        severity: "success",
      });
    }
  };

  const handleClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <>
      <Container maxWidth="md" sx={{ py: 10 }}>
        <Typography variant="h3" mb={1}>
          FormValidationSnackbarAlerts
        </Typography>
        <InputLabel>Name: </InputLabel>
        <TextField
          id="name"
          name="name"
          placeholder="enter name"
          value={values.name}
          error={Boolean(errors.name)}
          helperText={errors.name}
          onChange={handleChange}
          size="small"
        />
        <InputLabel>Email: </InputLabel>
        <TextField
          id="email"
          size="small"
          placeholder="enter email"
          name="email"
          value={values.email}
          error={Boolean(errors.email)}
          helperText={errors.email}
          onChange={handleChange}
        />
        <InputLabel>Age: </InputLabel>
        <TextField
          type="number"
          id="age"
          name="age"
          placeholder="enter age"
          value={values.age}
          error={Boolean(errors.age)}
          helperText={errors.age}
          onChange={handleChange}
          size="small"
        />
        <InputLabel>Password: </InputLabel>
        <TextField
          id="password"
          name="password"
          placeholder="enter password"
          value={values.password}
          error={Boolean(errors.password)}
          helperText={errors.password}
          onChange={handleChange}
          size="small"
        />
        <br />
        <Button
          variant="contained"
          color="primary"
          size="medium"
          onClick={handleClick}
          sx={{ mt: 2 }}
        >
          Submit
        </Button>
        <Snackbar
          open={snackbar.open}
          message={snackbar.message}
          autoHideDuration={2000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          ContentProps={{
            style: {
              backgroundColor:
                snackbar.severity === "success" ? "green" : "red",
              color: "#fff",
            },
          }}
        />
      </Container>
    </>
  );
}
