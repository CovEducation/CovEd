import React from "react";
import "./Register.css";

import Form from "react-bootstrap/Form";
import { Provider } from "rebass";
import { Section } from "react-landing-page";
import Button from "react-bootstrap/Button";
import { createNewUser } from "../../api";

import { useNavigate } from "@reach/router";
import { theme } from "../Constants.js";

import * as Yup from "yup";
import { useFormik } from "formik";

import {
  getNameField,
  getEmailField,
  getPasswordField,
  getTimezoneField,
  getRoleField,
  getTermsAndConditions,
  getSubjectField,
  getTagField,
  getMentorFields,
  getMenteeFields,
} from "../modules/FormFields";

import "./Profile.css";

/**
 * This is logic to validate the form schema.
 * https://github.com/jquense/yup
 *
 * This is the place that you should define the validation and
 * error messages.
 */
const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("Please enter your name."),
  timezone: Yup.string().required("Required"),
  role: Yup.string().required("Required"),
  subjects: Yup.array(),
  tags: Yup.array(),
  email: Yup.string()
    .email()
    .required("Please input a valid email.")
    .when("role", {
      is: (role) => role === "mentor",
      then: Yup.string()
        .email()
        .matches(/.+@*.edu/i, "Mentors are required to use an .edu email.")
        .required("Please input a valid .edu email."),
    }),
  password: Yup.string()
    .required("Password Required")
    .matches(
      /^[A-Za-z0-9\s$&+,:;=?@#|'<>.^*()%!-]{6,}$/,
      "Password must be at least 6 characters long."
    ),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match.")
    .required("Password Confirmation Required."),

  student_name: Yup.string().when("role", {
    is: (role) => role === "student",
    then: Yup.string().required("Please enter your student's name."),
  }),
  student_email: Yup.string()
    .email()
    .when("role", {
      is: (role) => role === "student",
      then: Yup.string().required("Please input a valid email."),
    }),

  major: Yup.string().when("role", {
    is: (role) => role === "mentor",
    then: Yup.string().required("Major is a required field."),
  }),
  bio: Yup.string().when("role", {
    is: (role) => role === "mentor",
    then: Yup.string().required("Introduce yourself!"),
  }),
  agreed: Yup.boolean().required("You must agree to the terms and conditions")
});

/**
 * Register Page Component
 *
 * This page handles user sign up.
 */
const Register = () => {
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    const user = { ...values };
    user.subjects = user.subjects.map((sub) => sub.value);
    user.tags = user.tags.map((tag) => tag.value);
    createNewUser(user).then( () => navigate("/"))
    .catch((err) => {
      alert("Unable to register, make sure this email was not registered before.")
    });
  };

  // Set up the form and validation
  const formik = useFormik({
    initialValues: {
      timezone: "GMT-4",
      role: "student",
      subjects: [],
      tags: [],
      password: "",
      passwordConfirmation: "",
      student_email: "",
      student_name: "",
      major: "",
      name: "",
      email: "",
      bio: "",
      public: true,
      agreed: false,
    },
    validationSchema: RegisterSchema,
    onSubmit: handleSubmit,
  });

  // Get all the required fields
  const fieldGetters = [
    getRoleField,
    getNameField,
    getEmailField,
    getPasswordField,
    getTimezoneField,
    getSubjectField,
    getTagField,
  ];
  const mainFields = fieldGetters.map((generator) => generator(formik));
  const roleFields =
    formik.values.role === "mentor" ? getMentorFields(formik) : getMenteeFields(formik);

  const fields = mainFields.concat(roleFields);
  return (
    <Provider theme={theme}>
      <Section width={[1]} heading="" subhead="" p={6} mt={2} mb={7}>
        <h2>
          <span className="light-h2">
            Register <br />
            <hr className="hr-primary" />
            <br />
          </span>
        </h2>
        <Form className="Register-form" noValidate onSubmit={formik.handleSubmit}>
          {fields.map((field, i) => {
            return <Form.Row key={i}>{field}</Form.Row>;
          })}
          {getTermsAndConditions(formik)}
          <Button onClick={(event) => formik.submitForm()}> Submit </Button>
        </Form>
      </Section>
    </Provider>
  );
};

export default Register;
