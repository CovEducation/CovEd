import React from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Select from "react-select";

import timeZones, { subjects, tags, registerDisclaimer } from "../Constants";
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

export const getNameField = (formik) => {
  return (
    <Form.Group as={Col} md="12" controlId="validationCustom01">
      <Form.Label>Name</Form.Label>
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
      <Form.Label>Email</Form.Label>
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
        <option value="student">Student/Parent</option>
        <option value="mentor">Mentor</option>
      </Form.Control>
      <Form.Control.Feedback type="invalid">{formik.errors.role}</Form.Control.Feedback>
    </Form.Group>
  );
};

export const getBioField = (formik) => {
  return (
    <Form.Group as={Col} controlId="formBioTextArea">
      <Form.Label>Introduce Yourself!</Form.Label>
      <Form.Control
        name="bio"
        {...formik.getFieldProps("bio")}
        isInvalid={formik.touched.bio && formik.errors.bio}
        as="textarea"
        rows="3"
      />
      <Form.Control.Feedback type="invalid">{formik.errors.bio}</Form.Control.Feedback>
    </Form.Group>
  );
};

export const getSubjectField = (formik) => {
  return (
    <Form.Group as={Col} controlId="validationSubject">
      <Form.Label>Subjects</Form.Label>

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
      <Form.Label>Optional tags: </Form.Label>
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
    <Form.Group as={Col} md={6} controlId="validationMajor">
      <Form.Label>Major</Form.Label>
      <Form.Control
        name="major"
        {...formik.getFieldProps("major")}
        isInvalid={formik.touched.major && formik.errors.major}
        type="text"
        placeholder="Learning"
        aria-describedby="inputGroupPrepend"
      />
      <Form.Control.Feedback type="invalid">{formik.errors.major}</Form.Control.Feedback>
    </Form.Group>
    <Form.Group as={Col} md={0} pd={0} controlId="validationPublic">
          <Form.Label>Privacy</Form.Label>
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

export const getMenteeFields = (formik) => {
  return (
    <>
      <Form.Group as={Col} md="6" controlId="validationGuadianName">
        <Form.Label>Parent's Name</Form.Label>
        <Form.Control
          name="guardian_name"
          {...formik.getFieldProps("guardian_name")}
          isInvalid={formik.touched.guardian_name && formik.errors.guardian_name}
          type="text"
          placeholder="Parent Name"
        />
        <Form.Control.Feedback type="invalid">{formik.errors.guardian_name}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} md="6" controlId="validationEmailGuardian">
        <Form.Label>Parent Email</Form.Label>
        <Form.Control
          name="guardian_email"
          {...formik.getFieldProps("guardian_email")}
          isInvalid={formik.touched.guardian_email && formik.errors.guardian_email}
          type="email"
          placeholder="youremail@mail.com"
          aria-describedby="inputGroupPrepend"
        />
        <Form.Control.Feedback type="invalid">{formik.errors.guardian_email}</Form.Control.Feedback>
      </Form.Group>
    </>
  );
};
