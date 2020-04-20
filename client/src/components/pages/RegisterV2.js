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
        value={formik.values.name}
        required
        type="text"
        placeholder="Your Name"
        onChange={formik.handleChange} />
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
    </Form.Group>
  )
}

const getEmailField = (formik) => {
  return (
    <Form.Group as={Col} md="12" controlId="validationEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        type="email"
        placeholder="user@domain.com"
        aria-describedby="inputGroupPrepend"
        required
      />
      <Form.Control.Feedback type="invalid">
        Please input a valid  email.
            </Form.Control.Feedback>
    </Form.Group>
  )
}

const getTimezoneField = (formik) => {
  return (
    <Form.Group as={Col} controlId="timezone-select">
      <Form.Label>Time Zone</Form.Label>
      <Form.Control
        name="timezone"
        value={formik.values.timeZone}
        as="select"
        onChange={formik.handleChange}
      >
        {timeZones.map((tz => {
          return (
            <option value={tz.value}> {tz.timezone} </option>
          )
        }))}
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
            value={formik.values.password}
            onChange={formik.handleChange}
            type="password"
            placeholder="Password"
            aria-describedby="inputGroupPrepend"
            required
            pattern="^[A-Za-z0-9\s$&+,:;=?@#|'<>.^*()%!-]{6,}$"
          />
          <Form.Control.Feedback type="invalid">
            Password must be at least 6 characters long.
            </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
      <Form.Group as={Col} md="6" controlId="validationPassword1">
        <Form.Label>Confirm password</Form.Label>
        <InputGroup>
          <Form.Control
            name="confirmPassword"
            type="password"
            placeholder="Reenter Password"
            aria-describedby="inputGroupPrepend"
            required
            value={formik.values.passwordConfirmation}
            onChange={formik.handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Passwords do not match.
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
        value={formik.values.role}
        onChange={formik.handleChange}
        as="select">
        <option value="student">Student/Parent</option>
        <option value="mentor">Mentor</option>
      </Form.Control>
    </Form.Group>
  )
}

const getBioField = (formik) => {
  return (
    <Form.Group as={Col} controlId="formBioTextArea">
      <Form.Label>Introduce Yourself!</Form.Label>
      <Form.Control name="bio"
        value={formik.values.bio}
        as="textarea"
        rows="3"
        onChange={formik.handleChange} />
    </Form.Group>
  )
}

const getSubjectField = (formik) => {
  return (
    <Form.Group as={Col} controlId="exampleForm.ControlSelect2">
      <Form.Label>Subjects</Form.Label>
      <Select
        value={formik.values.subjects}
        options={subjects}
        isMulti
        onChange={selected => formik.setFieldValue("subjects", selected)} />
    </Form.Group>
  )
}

const getTagField = (formik) => {
  return (
    <Form.Group as={Col} controlId="exampleForm.ControlSelect2">
      <Form.Label>Optional tags: </Form.Label>
      <Select
        value={formik.values.tags}
        options={tags}
        isMulti
        onChange={selected => formik.setFieldValue("tags", selected)} />
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
            value={formik.values.major}
            type="text"
            placeholder="Learning"
            aria-describedby="inputGroupPrepend"
            required
            onChange={formik.handleChange}
          />
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
          value={formik.guardian_name} 
          onChange={formik.handleChange} 
          required type="text" 
          placeholder="Parent Name" />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} md="6" controlId="validationEmail">
        <Form.Label>Parent Email</Form.Label>
        <InputGroup>
          <Form.Control
            name="guardian_email"
            value={formik.values.guardian_email}
            onChange={formik.handleChange}
            type="email"
            placeholder="youremail@mail.com"
            aria-describedby="inputGroupPrepend"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please input a valid email.
              </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
    </Form.Row>
  );
};


const validateSchema = () => {
  Yup.object().shape({
    name: Yup.string()
      .required('Required'),
    email: Yup.string()
      .email()
      .required('Required'),
    password: Yup.string()
      .required('Password Required'),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    timeZone: Yup.string()
      .required('Required'),
    
  })
}


const Register = () => {
  const formik = useFormik({
    initialValues: {
      role: 'student',
      subjects: [],
    },
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
            
            { roleFields }
            <Button type="submit">Submit</Button>
          </Form>
        </div>
      </Section>
    </Provider>
  )
}


export default Register;