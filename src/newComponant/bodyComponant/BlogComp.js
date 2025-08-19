import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  InputLabel,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useFormik } from "formik";
import { BlogCompValidation } from "../../Validation/login-validation";
import Select from "react-select";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import {
  addAgainData,
  updateAgainData,
  deleteAgaindata,
} from "../../store/reducers/AgainCrudSlice";

function BlogComp() {
  const dispatch = useDispatch();
  const ishanData = useSelector((state) => state.againCuedData);
  const [data, setData] = React.useState([]);
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("save");
  const [editId, setEditId] = useState(null);

  const fetchData = () => {
    fetch("https://fake-json-api.mock.beeceptor.com/users")
      .then(async (response) => {
        let res = await response.json();
        setData(res);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      company: "",
      address: "",
      zip: "",
      state: "",
      country: "",
    },
    validationSchema: BlogCompValidation,
    onSubmit: (values) => {
      if (mode === "save") {
        dispatch(addAgainData({ ...values, id: Date.now() }));
      } else if (mode === "update") {
        dispatch(updateAgainData({ ...values, id: editId }));
      }
      setOpen(false);
      resetForm();
      setMode("save");
      setEditId(null);
    },
  });

  let { values, errors, handleChange, handleSubmit, setValues, resetForm } =
    formik;

  const options1 = [
    { label: "Rajasthan", value: "Rajasthan" },
    { label: "MP", value: "MP" },
    { label: "Gurjat", value: "Gurjat" },
    { label: "J&K", value: "J&K" },
    { label: "HP", value: "HP" },
  ];

  const options = [
    { label: "Kuwait", value: "Kuwait" },
    { label: "India", value: "India" },
  ];

  const handleEdit = (item) => {
    setOpen(true);
    setMode("update");
    setEditId(item.id);
    setValues({
      name: item.name || "",
      email: item.email || "",
      company: item.company || "",
      address: item.address || "",
      zip: item.zip || "",
      state: item.state || "",
      country: item.country || "",
    });
  };

  const handleAdd = () => {
    setOpen(true);
    setMode("save");
    setEditId(null);
    resetForm();
  };

  const handleDelete1 = (id) => {
    dispatch(deleteAgaindata(id));
  };

  const handleDelete = (id) => {
    setData((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {mode === "save" ? "Add Blog Post" : "Edit Blog Post"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Box display="flex" flexDirection="column" gap={1}>
                      <InputLabel style={{ fontWeight: "bold" }}>
                        Name*
                      </InputLabel>
                      <TextField
                        value={values.name}
                        error={Boolean(errors.name)}
                        onChange={handleChange}
                        helperText={errors.name}
                        size="small"
                        id="name"
                        name="name"
                        variant="outlined"
                        placeholder="write here"
                      />
                      <InputLabel style={{ fontWeight: "bold" }}>
                        E-mail*
                      </InputLabel>
                      <TextField
                        value={values.email}
                        error={Boolean(errors.email)}
                        onChange={handleChange}
                        helperText={errors.email}
                        size="small"
                        id="email"
                        placeholder="name@example.com"
                        name="email"
                      />
                      <InputLabel style={{ fontWeight: "bold" }}>
                        Company*
                      </InputLabel>
                      <TextField
                        value={values.company}
                        error={Boolean(errors.company)}
                        onChange={handleChange}
                        helperText={errors.company}
                        id="company"
                        name="company"
                        variant="outlined"
                        size="small"
                        placeholder="write here"
                      />
                      <InputLabel style={{ fontWeight: "bold" }}>
                        Address*
                      </InputLabel>
                      <TextField
                        value={values.address}
                        error={Boolean(errors.address)}
                        onChange={handleChange}
                        helperText={errors.address}
                        id="address"
                        name="address"
                        variant="outlined"
                        size="small"
                        placeholder="write here"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box display="flex" flexDirection="column" gap={1}>
                      <InputLabel style={{ fontWeight: "bold" }}>
                        Zip*
                      </InputLabel>
                      <TextField
                        value={values.zip}
                        error={Boolean(errors.zip)}
                        onChange={handleChange}
                        helperText={errors.zip}
                        type="number"
                        id="zip"
                        name="zip"
                        variant="outlined"
                        size="small"
                        placeholder="zip here"
                      />
                      <InputLabel style={{ fontWeight: "bold" }}>
                        State*
                      </InputLabel>
                      <Select
                        options={options1}
                        value={options1.find(
                          (option) => option.value === values.state
                        )}
                        onChange={(option) =>
                          handleChange({
                            target: { name: "state", value: option.value },
                          })
                        }
                        name="state"
                      />
                      <InputLabel style={{ fontWeight: "bold" }}>
                        Country*
                      </InputLabel>
                      <Select
                        options={options}
                        value={options.find(
                          (option) => option.value === values.country
                        )}
                        onChange={(option) =>
                          handleChange({
                            target: { name: "country", value: option.value },
                          })
                        }
                        name="country"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} display="flex" gap={2}>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => {
                        setOpen(false);
                        resetForm();
                        setMode("save");
                        setEditId(null);
                      }}
                    >
                      Close
                    </Button>
                    <Button variant="contained" color="primary" type="submit">
                      {mode === "save" ? "Save" : "Update"}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </Modal>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <Typography
            variant="h4"
            component="h4"
            mt={9}
            style={{ color: "gray" }}
            display={"flex"}
            justifyContent={"space-between"}
            gutterBottom
          >
            BlogComp
            <Button
              size="medium"
              variant="contained"
              sx={{ fontSize: "15px" }}
              color="primary"
              onClick={handleAdd}
              startIcon={<AddIcon />}
            >
              Add
            </Button>
          </Typography>
          <TableContainer component={Paper} elevation={2}>
            <Table>
              <TableHead style={{ backgroundColor: "#f5f5f5" }}>
                <TableRow>
                  <TableCell>ID*</TableCell>
                  <TableCell>Name*</TableCell>
                  <TableCell>Email*</TableCell>
                  <TableCell>Company*</TableCell>
                  <TableCell>Address*</TableCell>
                  <TableCell>Zip*</TableCell>
                  <TableCell>State*</TableCell>
                  <TableCell>Country*</TableCell>
                  <TableCell>Manage*</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((item, id) => (
                  <TableRow key={item.id || id} variant="body1">
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.company}</TableCell>
                    <TableCell>{item.address}</TableCell>
                    <TableCell>{item.zip}</TableCell>
                    <TableCell>{item.state}</TableCell>
                    <TableCell>{item.country}</TableCell>
                    <TableCell style={{ display: "flex", gap: "2px" }}>
                      <Button
                        variant="contained"
                        color="primary"
                        size="medium"
                        onClick={() => handleEdit(item)}
                        startIcon={<EditIcon sx={{ fontSize: "20px" }} />}
                      >
                        Edit
                      </Button>
                      <Button
                        size="medium"
                        variant="contained"
                        color="error"
                        onClick={() => handleDelete(item.id)}
                        startIcon={<DeleteIcon sx={{ fontSize: "20px" }} />}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
                {ishanData.map((item, id) => (
                  <TableRow key={item.id || id} variant="body1">
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.company}</TableCell>
                    <TableCell>{item.address}</TableCell>
                    <TableCell>{item.zip}</TableCell>
                    <TableCell>{item.state}</TableCell>
                    <TableCell>{item.country}</TableCell>
                    <TableCell style={{ display: "flex", gap: "2px" }}>
                      <Button
                        variant="contained"
                        color="primary"
                        size="medium"
                        onClick={() => handleEdit(item)}
                        startIcon={<EditIcon sx={{ fontSize: "20px" }} />}
                      >
                        Edit
                      </Button>
                      <Button
                        size="medium"
                        variant="contained"
                        color="error"
                        onClick={() => handleDelete1(item.id)}
                        startIcon={<DeleteIcon sx={{ fontSize: "20px" }} />}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
}

export default BlogComp;
