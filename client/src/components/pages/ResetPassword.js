import React from "react";
import "./Register.css";

import Form from "react-bootstrap/Form";
import { Provider } from "rebass";
import { Section } from "react-landing-page";
import { Col, Row, Button, Container, Alert } from 'react-bootstrap'
// import Alert from '@material-ui/lab/Alert';

import { sendPasswordReset } from "../../api";
import { theme } from "../Constants.js";
import { getEmailField } from "../modules/FormFields";

import * as Yup from "yup";
import { useFormik } from "formik";

const ResetPasswordSchema = Yup.object().shape({
    email: Yup.string().email().required("Please input a valid email.")
});

const ResetPassword = () => {
  const [err, setErr] = React.useState((<></>));

  const handleSubmit = (values) => {
     sendPasswordReset(values.email)
     .then(() => setErr((<Alert variant="success">Email sent.</Alert>)))
     .catch((err) => {
         if (err.code === "auth/user-not-found") {
            setErr((<Alert variant="danger">No user was found associated with this email.</Alert>));
         }
         
     });
  }

  const formik = useFormik({
    initialValues: {
        email: "",
    },
    validationSchema: ResetPasswordSchema,
    onSubmit: handleSubmit
  });

  return (
    <>
      <Provider theme={theme}>
        <Section fontSize={[2]} bg="white" heading="" subhead="" p={[1, 2, 2, 2]} mt={7} mb={7}>
          <Container fluid="sm">
            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                <h1>Reset Password</h1>
                <p>Please enter the email you used to register with CovEd. We'll email you the instructions to reset your password.</p>
                {err}
                <Form>
                  { getEmailField(formik) }       
                
                  <Button className="submit" block onClick={(event) => formik.submitForm()}>
                    Send
                  </Button>

                </Form>
                
              </Col>
            </Row>
          </Container>
        </Section>
      </Provider>
    </>
  );
};

export default ResetPassword;
