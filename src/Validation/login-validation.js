import * as yup from "yup";

export const CurdValidation = yup.object().shape({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  age: yup.string().required(),
});

export const AgainValidatiion = yup.object().shape({
  name: yup.string().required("Name is required"),
  lastname: yup.string().required("Last name is required"),
  contact: yup.string().required("Contact is required"),
});

export const BlogCompValidation = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  company: yup.string().required("Company is required"),
  address: yup.string().required("Address is required"),
  zip: yup.string().required("Zip is required"),
  state: yup.string().required("State is required"),
  country: yup.string().required("Country is required"),
});

export const fromValidation = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  age: yup.string().required("Age is required"),
  password: yup.string().required("Password is required"),
});
