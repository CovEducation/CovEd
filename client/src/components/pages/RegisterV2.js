import React, { Component } from "react";
import "./Register.css";
import "../../utilities.css";
import { post } from "../../utilities";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Select from "react-select";

import { Provider } from "rebass";
import { Section } from "react-landing-page";

import timeZones, { subjects, tags } from "../Constants";
import TermsDialog from "../modules/TermsOfServiceDialog";
// auth
import { auth } from "../../firebase-config";
import { useNavigate } from "@reach/router";
import { theme } from "../Constants.js";

import * as Yup from "yup";
import { useFormik } from "formik";


import "./Profile.css";


const getNameField = (formik) => {
  return (
    <Form.Group as={Col} md="12" controlId="validationCustom01">
      <Form.Label>Name</Form.Label>
      <Form.Control
        name="name"
        {...formik.getFieldProps('name')}
        isInvalid={formik.touched.name && formik.errors.name}
        required
        type="text"
        placeholder="Your Name"
      />
      <Form.Control.Feedback type="invalid">
        {formik.errors.name}
      </Form.Control.Feedback>
    </Form.Group>
  )
}

const getEmailField = (formik) => {
  return (
    <Form.Group as={Col} md="12" controlId="validationEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control
        name="email"
        {...formik.getFieldProps('email')}
        isInvalid={formik.touched.email && formik.errors.email}
        type="email"
        placeholder="user@domain.com"
        aria-describedby="inputGroupPrepend"
        required
      />
      <Form.Control.Feedback type="invalid">
        {formik.errors.email}
      </Form.Control.Feedback>
    </Form.Group>
  )
}

const getTimezoneField = (formik) => {
  return (
    <Form.Group as={Col} controlId="timezone-select">
      <Form.Label>Time Zone</Form.Label>
      <Form.Control
        name="timeZone"
        {...formik.getFieldProps('timeZone')}
        isInvalid={formik.touched.timeZone && formik.errors.timeZone}
        as="select"
      >
        {timeZones.map((tz => {
          return (
            <option value={tz.value}> {tz.timezone} </option>
          )
        }))}
        <Form.Control.Feedback type="invalid">
          {formik.errors.timeZone}
        </Form.Control.Feedback>
      </Form.Control>
    </Form.Group>
  )
}

const getPasswordField = (formik) => {
  return (
    <>
      <Form.Group as={Col} md="6" controlId="validationPassword">
        <Form.Label>Password</Form.Label>
        <InputGroup>
          <Form.Control
            name="password"
            {...formik.getFieldProps('password')}
            isInvalid={formik.touched.password && formik.errors.password}
            type="password"
            placeholder="Password"
            aria-describedby="inputGroupPrepend"
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.password}
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
      <Form.Group as={Col} md="6" controlId="validationPassword1">
        <Form.Label>Confirm password</Form.Label>
        <InputGroup>
          <Form.Control
            name="passwordConfirmation"
            {...formik.getFieldProps('passwordConfirmation')}
            isInvalid={formik.touched.passwordConfirmation && formik.errors.passwordConfirmation}
            type="password"
            placeholder="Reenter Password"
            aria-describedby="inputGroupPrepend"
            required
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.passwordConfirmation}
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
    </>
  )
}

const getRoleField = (formik) => {
  return (
    <Form.Group as={Col} controlId="role-select">
      <Form.Label>Role</Form.Label>
      <Form.Control
        name="role"
        {...formik.getFieldProps('role')}
        isInvalid={formik.touched.role && formik.errors.role}
        as="select">
        <option value="student">Student/Parent</option>
        <option value="mentor">Mentor</option>
      </Form.Control>
      <Form.Control.Feedback type="invalid">
        {formik.errors.role}
      </Form.Control.Feedback>
    </Form.Group>
  )
}

const getBioField = (formik) => {
  return (
    <Form.Group as={Col} controlId="formBioTextArea">
      <Form.Label>Introduce Yourself!</Form.Label>
      <Form.Control name="bio"
        {...formik.getFieldProps('bio')}
        isInvalid={formik.touched.bio && formik.errors.bio}
        as="textarea"
        rows="3" />
      <Form.Control.Feedback type="invalid">
        {formik.errors.bio}
      </Form.Control.Feedback>
    </Form.Group>
  )
}

const getSubjectField = (formik) => {
  return (
    <Form.Group as={Col} controlId="exampleForm.ControlSelect2">
      <Form.Label>Subjects</Form.Label>
      
      <Select
        value={formik.values.subjects}
        className={!!formik.errors.subjects && formik.touched.subjects ?"is-invalid":""}
        onChange={selected => formik.setFieldValue("subjects", selected)}
        isInvalid={formik.touched.subjects && formik.errors.subjects}
        onBlur={() => formik.setFieldTouched("subjects")}
        options={subjects}
        isMulti
      />
      <div className="invalid-feedback">
        {formik.errors.subjects} 
      </div>
     
    </Form.Group>
    
  )
}

const getTagField = (formik) => {
  return (
    <Form.Group as={Col} controlId="exampleForm.ControlSelect2">
      <Form.Label>Optional tags: </Form.Label>
      <Select
        value={formik.values.tags}
        className={!!formik.errors.tags && formik.touched.tags ?"is-invalid":""}
        onChange={selected => formik.setFieldValue("tags", selected)}
        isInvalid={formik.touched.tags && formik.errors.tags}
        onBlur={() => formik.setFieldTouched("tags")}
        options={tags}
        isMulti
      />
      <div className="invalid-feedback">
        {formik.errors.tags} 
      </div>
    </Form.Group>
  )
}

const getMentorFields = (formik) => {
  return (
    <>
      <Form.Group md="12" as={Col}>
        <Form.Label>Major</Form.Label>
        <InputGroup>
          <Form.Control
            name="major"
            {...formik.getFieldProps('major')}
            isInvalid={formik.touched.major && formik.errors.major}
            type="text"
            placeholder="Learning"
            aria-describedby="inputGroupPrepend"
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.major}
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
    </>
  );
};

const getMenteeFields = (formik) => {
  return (
    <Form.Row>
      <Form.Group as={Col} md="6" controlId="validationGuadianName">
        <Form.Label>Parent's Name</Form.Label>
        <Form.Control
          name="guardian_name"
          {...formik.getFieldProps('guardian_name')}
          isInvalid={formik.touched.guardian_name && formik.errors.guardian_name}
          type="text"
          placeholder="Parent Name" />
        <Form.Control.Feedback type="invalid">
          {formik.errors.guardian_name}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} md="6" controlId="validationEmail">
        <Form.Label>Parent Email</Form.Label>
        <InputGroup>
          <Form.Control
            name="guardian_email"
            {...formik.getFieldProps('guardian_email')}
            isInvalid={formik.touched.guardian_email && formik.errors.guardian_email}
            type="email"
            placeholder="youremail@mail.com"
            aria-describedby="inputGroupPrepend"
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.guardian_email}
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
    </Form.Row>
  );
};


const RegisterSchema =
  Yup.object().shape({
    name: Yup.string().required('Please enter your name.'),
    timeZone: Yup.string().required('Required'),
    role: Yup.string().required('Required'),
    bio: Yup.string(),
    subjects: Yup.array().required('Please select at least one subject'),
    tags: Yup.array(),

    email: Yup.string().email().required('Please input a valid email.')
      .when("role", {
        is: role => role === "mentor",
        then: Yup.string().email().matches(/.+@*.edu/i, "Mentors are required to use an .edu email.")
                  .required("Please input a valid .edu email.")
      }),

    password: Yup.string()
      .required('Password Required')
      .matches(
        /^[A-Za-z0-9\s$&+,:;=?@#|'<>.^*()%!-]{6,}$/,
        "Password must be at least 6 characters long."
      ),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match.')
      .required('Password Confirmation Required.'),

    guardian_name: Yup.string()
      .when("role", {
        is: role => role === "student",
        then: Yup.string().required("Please enter a Parent or Guardian's name.")
      }),
    guardian_email: Yup.string()
      .email()
      .when("role", {
        is: role => role === "student",
        then: Yup.string().required("Please input a valid email.")
      }),

    major: Yup.string()
      .when("role", {
        is: role => role === "mentor",
        then: Yup.string().required("Major is a required field.")
      })
  });



const Register = () => {
  const formik = useFormik({
    initialValues: {
      role: 'student',
      subjects: [],
    },
    validationSchema: RegisterSchema,
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));
    },

  });

  const fieldGetters = [
    getNameField,
    getEmailField,
    getPasswordField,
    getTimezoneField,
    getRoleField,
    getBioField,
    getSubjectField,
    getTagField
  ];

  const fields = fieldGetters.map(generator => generator(formik));

  const roleFields = formik.values.role === "mentor" ? getMentorFields(formik) : getMenteeFields(formik);
  return (
    <Provider theme={theme}>
      <Section width={[1]} heading="" subhead="" p={6} mt={2} mb={7}>
        <h2><span className="light-h2">Register <br /><hr className="hr-primary" /><br /></span></h2>
        <div className="ProfileEdit-form">
          <Form noValidate onSubmit={formik.handleSubmit}>
            {
              fields.map((field, i) => {
                return <Form.Row key={i}>{field}</Form.Row>
              })
            }

            {roleFields}
            <Button type="submit">Submit</Button>
          </Form>
        </div>
      </Section>
    </Provider>
  )
}


export default Register;