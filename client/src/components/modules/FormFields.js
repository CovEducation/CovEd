import React from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Select from "react-select";
import { Link } from "@reach/router";

import timeZones, { subjects, tags, registerDisclaimer, subjectMentor, subjectMentee} from "../Constants";

import { Jumbotron } from "react-bootstrap";

export const getDisclaimer = () =>  {
  return (
    <Jumbotron>
      <p>
        {registerDisclaimer}
      </p>
    </Jumbotron>
  )
}

export const getParentDisclaimer = () =>  {
  return (
    <Jumbotron>
    <p> <b>For Parents and Guardians:</b> CovEd is a matchmaking platform that connects K-12 students seeking tutoring with volunteer college students offering to mentor students during the COVID-19 pandemic. You can review CovEd’s expectations and requirements for our mentors <a target="_blank" href="/mentorguidelines" className="dark-a">here</a>. </p>
      <p>Registering a student for mentorship requires that a parent or guardian provide the information requested below and consent to the use of CovEd’s services. This information will be used, among other things, to create a CovEd account and to help you connect to a mentor. For more information on the data we collect and how we use it, please see our <a target="_blank" href="/privacy" className="dark-a">Privacy Policy</a>. </p>
      <p>When you register, you will receive an email from CovEd with a more information about our privacy practices, including how you can request to delete your information about your child. </p>
      <p>If you have any questions or have any issues with the registration process, please contact us at <a href="mailto:coveducation@gmail.com" target="_blank" className="dark-a">coveducation@gmail.com.</a></p>
      </Jumbotron>
  )
}

export const getNameField = (formik) => {
  return (
    <Form.Group as={Col} md="12" controlId="validationCustom01">
      <Form.Label>{formik.values.role === "mentee" ? <>Parent Name</> : <>Name</>}</Form.Label>
      <Form.Control
        name="name"
        {...formik.getFieldProps("name")}
        isInvalid={formik.touched.name && formik.errors.name}
        required
        type="text"
        placeholder="Your Name"
      />
      <Form.Control.Feedback type="invalid">{formik.errors.name}</Form.Control.Feedback>
    </Form.Group>
  );
};

export const getEmailField = (formik) => {
  return (
    <Form.Group as={Col} md="12" controlId="validationEmail">
      <Form.Label>{formik.values.role === "mentee" ? <>Parent Email (Username)</> : <>Email (Username)</>}</Form.Label>
      <Form.Control
        name="email"
        {...formik.getFieldProps("email")}
        isInvalid={formik.touched.email && formik.errors.email}
        type="email"
        placeholder="user@domain.com"
        aria-describedby="inputGroupPrepend"
        required
      />
      <Form.Control.Feedback type="invalid">{formik.errors.email}</Form.Control.Feedback>
    </Form.Group>
  );
};

export const getTimezoneField = (formik) => {
  return (
    <Form.Group as={Col} controlId="timezone-select">
      <Form.Label>Time Zone</Form.Label>
      <Form.Control
        name="timezone"
        {...formik.getFieldProps("timezone")}
        isInvalid={formik.touched.timezone && formik.errors.timezone}
        as="select"
      >
        {timeZones.map((tz) => {
          return <option value={tz.timezone}> {tz.timezone} </option>;
        })}
        <Form.Control.Feedback type="invalid">{formik.errors.timezone}</Form.Control.Feedback>
      </Form.Control>
    </Form.Group>
  );
};

export const getPasswordField = (formik) => {
  return (
    <>
      <Form.Group as={Col} md="6" controlId="validationPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          {...formik.getFieldProps("password")}
          isInvalid={formik.touched.password && formik.errors.password}
          type="password"
          placeholder="Password"
          aria-describedby="inputGroupPrepend"
        />
        <Form.Control.Feedback type="invalid">{formik.errors.password}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} md="6" controlId="validationPassword1">
        <Form.Label>Confirm password</Form.Label>
        <Form.Control
          name="passwordConfirmation"
          {...formik.getFieldProps("passwordConfirmation")}
          isInvalid={formik.touched.passwordConfirmation && formik.errors.passwordConfirmation}
          type="password"
          placeholder="Reenter Password"
          aria-describedby="inputGroupPrepend"
          required
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.passwordConfirmation}
        </Form.Control.Feedback>
      </Form.Group>
    </>
  );
};

export const getRoleField = (formik) => {
  return (
    <Form.Group as={Col} controlId="role-select">
      <Form.Label>Role</Form.Label>
      <Form.Control
        name="role"
        {...formik.getFieldProps("role")}
        isInvalid={formik.touched.role && formik.errors.role}
        as="select"
      >
        <option value="student">I’m a parent or guardian of a student seeking a mentor.</option>
        <option value="mentor">I’m a college student signing up to be a mentor.</option>
      </Form.Control>
      <Form.Control.Feedback type="invalid">{formik.errors.role}</Form.Control.Feedback>
    </Form.Group>
  );
};


export const getSubjectField = (formik) => {
  return (
    <Form.Group as={Col} controlId="validationSubject">
      <Form.Label>{formik.values.role === "mentee" ? <><i>{subjectMentee}</i></> : <><i>{subjectMentor}</i></>}</Form.Label>
      <Select
        value={formik.values.subjects}
        className={!!formik.errors.subjects && formik.touched.subjects ? "is-invalid" : ""}
        onChange={(selected) => formik.setFieldValue("subjects", selected)}
        isInvalid={formik.touched.subjects && formik.errors.subjects}
        onBlur={() => formik.setFieldTouched("subjects")}
        options={subjects}
        isMulti
      />
      <div className="invalid-feedback">{formik.errors.subjects}</div>
    </Form.Group>
  );
};

export const getTagField = (formik) => {
  return (
    <Form.Group as={Col} controlId="validationTag">
      <Form.Label>{formik.values.role === "mentee" ? <>School level tags (Optional)</> : <>School levels you are comfortable teaching (Optional)</>}</Form.Label>
      <Select
        value={formik.values.tags}
        className={!!formik.errors.tags && formik.touched.tags ? "is-invalid" : ""}
        onChange={(selected) => formik.setFieldValue("tags", selected)}
        isInvalid={formik.touched.tags && formik.errors.tags}
        onBlur={() => formik.setFieldTouched("tags")}
        options={tags}
        isMulti
      />
      <div className="invalid-feedback">{formik.errors.tags}</div>
    </Form.Group>
  );
};

export const getMentorFields = (formik) => {
  return (
    <>
    <Form.Group as={Col} md="12" controlId="formBioTextArea">
        <Form.Label>Introduce Yourself!</Form.Label>
        <Form.Control
          name="bio"
          {...formik.getFieldProps("bio")}
          isInvalid={formik.touched.bio && formik.errors.bio}
          as="textarea"
          rows="3"
          placeholder="Feel free to mention any hobbies you have, languages you speak, and any experience you may have working with particular groups/communities!"
        />
        <Form.Control.Feedback type="invalid">{formik.errors.bio}</Form.Control.Feedback>
    </Form.Group>
    <Form.Group as={Col} md="12" controlId="validationMajor">
      <Form.Label>Major(s)</Form.Label>
      <Form.Control
        name="major"
        {...formik.getFieldProps("major")}
        isInvalid={formik.touched.major && formik.errors.major}
        type="text"
        placeholder="Major: avoid abbreviations please!"
        aria-describedby="inputGroupPrepend"
      />
      <Form.Control.Feedback type="invalid">{formik.errors.major}</Form.Control.Feedback>
    </Form.Group>
    <Form.Group as={Col} md={0} pd={0} controlId="validationPublic">
          <Form.Label><b>Privacy</b></Form.Label>
          <Form.Check
            name="public"
            onChange={() => formik.setFieldValue("public", !formik.values.public)}
            checked={formik.values.public}
            type="checkbox"
            label="Listed as an Available Mentor." />
    </Form.Group>
    </>
  );
};

export const getTermsAndConditions = (formik )=> {
  return (<Form.Group as={Col} md={0} pd={0} controlId="validationPublic">
    <Form.Label><b>Terms and conditions</b></Form.Label>
    <Form.Check
      checked={formik.values.agreed}
      name="agreed"
      onChange={() => formik.setFieldValue("agreed", !formik.values.agreed)}
      isInvalid={formik.touched.agreed && formik.errors.agreed}
      type="checkbox" 
      label="By checking this box, I agree to the CovEd Terms of Service and Privacy Policy." 
      feedback={formik.errors.agreed}/>
    <a href="/termsconditions" href="/termsconditions" target="_blank">
      Terms and Conditions
    </a>
    <br/>
    <a href="/privacy" target="_blank">
      Privacy Policy
    </a>
  </Form.Group>)
};

export const getMenteeFields = (formik) => {
  return (
    <>
      <Form.Group as={Col} md="6" controlId="validationStudentName">
        <Form.Label>Student's Name</Form.Label>
        <Form.Control
          name="student_name"
          {...formik.getFieldProps("student_name")}
          isInvalid={formik.touched.student_name && formik.errors.student_name}
          type="text"
          placeholder="Student Name"
        />
        <Form.Control.Feedback type="invalid">{formik.errors.student_name}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} md="6" controlId="validationEmailGuardian">
        <Form.Label>Student's Email (Optional)</Form.Label>
        <Form.Control
          name="student_email"
          {...formik.getFieldProps("student_email")}
          isInvalid={formik.touched.student_email && formik.errors.student_email}
          type="email"
          placeholder="youremail@mail.com"
          aria-describedby="inputGroupPrepend"
        />
        <Form.Control.Feedback type="invalid">{formik.errors.student_email}</Form.Control.Feedback>
      </Form.Group>
    </>
  );
};
