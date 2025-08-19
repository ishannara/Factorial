import { Box, TextField } from "@mui/material";
import React, { useState } from "react";
import {
  addCrudData,
  deleteCrudData,
  updateCrudData,
} from "../store/reducers/CrudSilce";
import { useDispatch, useSelector } from "react-redux";
import { CurdValidation } from "../Validation/login-validation";
import { useFormik } from "formik";

function  CURD() {
  const dispatch = useDispatch();
  const crudData = useSelector((state) => state.crudData);
  const [isUpdate, setIsUpdate] = useState(false);
  const [editId, setEditId] = useState(null);

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      age: "",
    },
    validationSchema: CurdValidation,
    onSubmit: (values, { resetForm }) => {
      if (isUpdate && editId !== null) {
        dispatch(
          updateCrudData({
            id: editId,
            firstname: values.firstname,
            lastname: values.lastname,
            age: values.age,
          })
        );
        setIsUpdate(false);
        setEditId(null);
      } else {
        dispatch(
          addCrudData({
            id: Date.now(),
            firstname: values.firstname,
            lastname: values.lastname,
            age: values.age,
          })
        );
      }
      resetForm();
    },
  });

  const { values, errors, handleChange, handleSubmit, resetForm } = formik;

  const handleDelete = (id) => {
    dispatch(deleteCrudData(id));
    if (isUpdate && editId === id) {
      setIsUpdate(false);
      setEditId(null);
      resetForm();
    }
  };

  const handleEdit = (item) => {
    formik.setValues({
      firstname: item.firstname || "",
      lastname: item.lastname || "",
      age: item.age || "",
    });
    setIsUpdate(true);
    setEditId(item.id);
  };  

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <div>
            <label>Fname : </label>
            <TextField
              placeholder="enter first name"
              size="small"
              name="firstname"
              value={values.firstname}
              error={Boolean(errors.firstname)}
              helperText={errors.firstname}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>lname :</label>
            <TextField
              placeholder="enter last name"
              size="small"
              name="lastname"
              value={values.lastname}
              error={Boolean(errors.lastname)}
              helperText={errors.lastname}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Age :</label>
            <TextField
              placeholder="enter age"
              size="small"
              name="age"
              value={values.age}
              error={Boolean(errors.age)}
              helperText={errors.age}
              onChange={handleChange}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <button
              className="btn btn-success"
              type="submit"
              disabled={isUpdate}
            >
              Save
            </button>
            <button
              className="btn btn-primary"
              type="button"
              disabled={!isUpdate}
              onClick={handleSubmit}
            >
              Update
            </button>
            {isUpdate && (
              <button
                className="btn btn-secondary"
                type="button"
                onClick={() => {
                  setIsUpdate(false);
                  setEditId(null);
                  resetForm();
                }}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </Box>
      <br />
      <table
        className="table table-hover"
        style={{ marginTop: "30px", minWidth: "600px" }}
      >
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>Id</th>
            <th>Fname</th>
            <th>lname</th>
            <th>age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {crudData?.length === 0 ? (
            <tr>
              <td colSpan={6} style={{ textAlign: "center" }}>
                No data found
              </td>
            </tr>
          ) : (
            crudData?.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.id}</td>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.age}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    style={{ marginRight: "5px" }}
                    onClick={() => handleEdit(item)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
}

export default CURD;
