import React, { useContext, useState } from "react";
import "./Profile.css";

import Button from "react-bootstrap/Button";
import * as Yup from "yup";
import { useFormik } from "formik";
import { UserContext } from "../../providers/UserProvider";
import { updateUser } from "../../api";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Provider } from "rebass";
import { Section } from "react-landing-page";
import { theme } from "../Constants";
import AlertTitle from "@material-ui/lab/AlertTitle";
import Alert from "@material-ui/lab/Alert";
import { sendEmailVerification } from "../../api";

import {
  getNameField,
  getTimezoneField,
  getSubjectField,
  getTagField,
  getMentorFields,
  getMenteeFields,
} from "../modules/FormFields";

/**
 * This is logic to validate the form schema.
 * https://github.com/jquense/yup
 *
 * This is the place that you should define the validation and
 * error messages.
 */
const ProfileEditSchema = Yup.object().shape({
  name: Yup.string().required("Please enter your name."),
  timezone: Yup.string().required("Required"),
  role: Yup.string().required("Required"),
  subjects: Yup.array(),
  tags: Yup.array(),
  bio: Yup.string().when("role", {
    is: (role) => role === "mentor",
    then: Yup.string(),
  }),
  email: Yup.string()
    .email()
    .required("Please input a valid email."),

  student_name: Yup.string().when("role", {
    is: (role) => role !== "mentor",
    then: Yup.string().required("Please enter a Parent or Guardian's name."),
  }),
  student_email: Yup.string().email("Please input a valid email. "),
  major: Yup.string().when("role", {
    is: (role) => role === "mentor",
    then: Yup.string().required("Major is a required field."),
  }),
  public: Yup.boolean(),
});

/*
 * Profile Page Component
 * This component shows the profile information and allows
 * the user to edit their info.
 */
const Profile = () => {
  const userProvider = useContext(UserContext);
  const [edit, setEdit] = useState(false);
  const [success, setSuccess] = useState(false);

  const displaySuccess = () => {
    setEdit(false);
    setSuccess(true);
  };

  const handleEdit = () => {
    setEdit(true);
    setSuccess(false);
  };

  const handleCancel = () => {
    setEdit(false);
  };

  const handleSubmit = async (values) => {
    let user = { ...values };
    user.subjects = user.subjects.map((sub) => sub.value);
    user.tags = user.tags.map((tag) => tag.value);
    updateUser(user, userProvider.user.token)
      .then(async (user) => {
        await userProvider.refreshUser();
        userProvider.user = user;
      })
      .then(displaySuccess)
      .catch((err) => {
        console.log(err);
      });
  };

  /*
      Form Rendering
  */

  const getStaticTimeZoneField = () => {
    return (
      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>Time Zone</Form.Label>
        <Form.Control plaintext readOnly type="text" defaultValue={userProvider.user.timezone} />
      </Form.Group>
    );
  };

  const getStaticEmailField = () => {
    return (
      <Form.Group as={Col} md="4" controlId="validationEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control plaintext readOnly type="text" defaultValue={userProvider.user.email} />
      </Form.Group>
    );
  };

  const getEmailVerifiedField = () => {
    return (
      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>
          {userProvider.user.verified ? (
            <>Email Verified</>
          ) : (
            <>
              Please Verify Your Email and refresh the page. (
              <a href="#resend" onClick={() => sendEmailVerification()}>
                Resend Verification
              </a>
              )
            </>
          )}
        </Form.Label>
      </Form.Group>
    );
  };
  const getExpectationsToast = () => {
    var style = {
      width: "100%",
      marginBottom: 8,
    };

    return (
      <Alert style={style} severity="info">
        <AlertTitle>Important</AlertTitle>
        {"Please take time to review our "}
        <a href="/mentorguidelines">Mentor Guidelines</a>
      </Alert>
    );
  };
  const getStaticNameField = () => {
    return (
      <Form.Group as={Col} md="4" controlId="validationCustom01">
        <Form.Label>Name</Form.Label>
        <Form.Control plaintext readOnly type="text" defaultValue={userProvider.user.name} />
      </Form.Group>
    );
  };

  const getStaticRoleField = () => {
    const role = userProvider.user.role === "mentor" ? "Mentor" : "Student";
    return (
      <Form.Group as={Col} md="4" controlId="formControl.role">
        <Form.Label>Role</Form.Label>
        <Form.Control plaintext readOnly type="text" defaultValue={role} />
      </Form.Group>
    );
  };

  const getStaticSubjectField = () => {
    return (
      <>
        <Form.Group as={Col} md="4" controlId="formControl.subjects">
          <Form.Label>Subjects</Form.Label>
          {userProvider.user.subjects && (
            <Form.Control
              plaintext
              readOnly
              type="text"
              defaultValue={userProvider.user.subjects}
            />
          )}
        </Form.Group>
      </>
    );
  };

  const getStaticOptionalTagField = () => {
    return (
      <Form.Group as={Col} controlId="exampleForm.ControlOptionalFields">
        <Form.Label>Optional Tags</Form.Label>
        {userProvider.user.tags && (
          <Form.Control plaintext readOnly type="text" defaultValue={userProvider.user.tags} />
        )}
      </Form.Group>
    );
  };

  const getStaticMentorFields = () => {
    return (
      <>
        <Form.Group as={Col} md="12" controlId="formBioTextArea">
          <Form.Label>Introduce Yourself!</Form.Label>
          <Form.Control as="textarea" readOnly defaultValue={userProvider.user.bio} />
        </Form.Group>
        <Form.Group md="4" as={Col}>
          <Form.Label>Major</Form.Label>
          <Form.Control plaintext readOnly type="text" defaultValue={userProvider.user.major} />
        </Form.Group>
        <Form.Check
          checked={userProvider.user.public}
          name="public"
          type="checkbox"
          label="Listed as an Available Mentor."
        />
      </>
    );
  };

  const getStaticMenteeFields = () => {
    return (
      <>
        <Form.Group as={Col} md="4" controlId="validationStudentName">
          <Form.Label>Student Name</Form.Label>
          <Form.Control
            name="student_name"
            plaintext
            readOnly
            defaultValue={userProvider.user.student_name}
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationStudentEmail">
          <Form.Label>Student Email</Form.Label>
          <Form.Control
            name="student_email"
            plaintext
            readOnly
            defaultValue={userProvider.user.student_email}
          />
        </Form.Group>
      </>
    );
  };

  const getStaticFields = () => {
    let expectations = getExpectationsToast();
    let nameField = getStaticNameField();
    let emailField = getStaticEmailField();
    let emailVerified = getEmailVerifiedField();
    let timezoneField = getStaticTimeZoneField();
    let roleField = getStaticRoleField();
    let subjectField = getStaticSubjectField();
    let optionalTagField = getStaticOptionalTagField();
    let mainFields = [
      expectations,
      nameField,
      emailField,
      emailVerified,
      timezoneField,
      roleField,
      subjectField,
      optionalTagField,
    ];

    if (userProvider.user.role === "mentor") {
      return mainFields.concat(getStaticMentorFields());
    } else {
      return mainFields.concat(getStaticMenteeFields());
    }
  };

  const getEditFields = (formik) => {
    const fieldGetters = [getNameField, getTimezoneField, getSubjectField, getTagField];

    const mainFields = fieldGetters.map((generator) => generator(formik));
    const roleFields =
      formik.values.role === "mentor" ? getMentorFields(formik) : getMenteeFields(formik);
    return mainFields.concat(roleFields);
  };

  const user = userProvider.user || {
    timezone: "",
    role: "",
    subjects: [],
    tags: [],
    student_email: "",
    student_name: "",
    major: "",
    name: "",
    email: "",
    bio: "",
    public: true,
  };

  let formik = useFormik({
    initialValues: {
      timezone: user.timezone,
      role: user.role,
      subjects: user.subjects.map((s) => {
        return { value: s, label: s };
      }),
      tags: user.tags.map((s) => {
        return { value: s, label: s };
      }),
      student_name: user.student_name,
      student_email: user.student_email,
      major: user.major,
      name: user.name,
      email: user.email,
      bio: user.bio,
      public: user.public,
    },
    validationSchema: ProfileEditSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
  });
  if (userProvider.user === undefined) {
    return <h1>Loading..</h1>;
  }
  let fields = edit && userProvider.user ? getEditFields(formik) : getStaticFields();

  return (
    <div className="ProfileEdit-form">
      <Provider theme={theme}>
        <Section width={[1]} p={0} mt={0} mb={0}>
          <h2>
            {userProvider.user.name} <br />
            <hr className="hr-primary" />
            <br />
          </h2>
          <Form noValidate onSubmit={formik.handleSubmit}>
            {fields.map((field, i) => {
              return <Form.Row key={i}>{field}</Form.Row>;
            })}
            {edit && (
              <Button type="submit" style={{ marginTop: 10 }}>
                Submit
              </Button>
            )}
            {edit && (
              <Button variant="danger" onClick={handleCancel} style={{ marginTop: 10 }}>
                Cancel
              </Button>
            )}
          </Form>
          {!edit && (
            <Button type="button" onClick={handleEdit}>
              Edit
            </Button>
          )}
          {success && <Alert variant="success">Profile updated successfully!</Alert>}
        </Section>
      </Provider>
    </div>
  );
};

export default Profile;
