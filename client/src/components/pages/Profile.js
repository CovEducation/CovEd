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
import {expectations_mentor_after, expectations_mentor_before} from "../Constants";

import {
    getNameField,
    getEmailField,
    getTimezoneField,
    getRoleField,
    getBioField,
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
    bio: Yup.string(),
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

    guardian_name: Yup.string().when("role", {
        is: (role) => role !== "mentor",
        then: Yup.string().required("Please enter a Parent or Guardian's name."),
    }),
    guardian_email: Yup.string()
        .email()
        .when("role", {
            is: (role) => role !== "mentor",
            then: Yup.string().required("Please input a valid email."),
        }),

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
    }

    const handleEdit = () => {
        setEdit(true);
        setSuccess(false);
    }

    const handleCancel = () => {
        setEdit(false);
    }

    const handleSubmit = async (values) => {
        let user = { ...values };
        user.subjects = user.subjects.map((sub) => sub.value);
        user.tags = user.tags.map((tag) => tag.value);
        updateUser(user, userProvider.user.token)
        .then((user) => {userProvider.user = user})
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
    }

    const getStaticEmailField = () => {
        return (
            <Form.Group as={Col} md="4" controlId="validationEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control plaintext readOnly type="text" defaultValue={userProvider.user.email} />
            </Form.Group>
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

    const getStaticBioField = () => { 
        return (
        <Form.Group as={Col} controlId="formBioTextArea">
            <Form.Label>Introduce Yourself!</Form.Label>
            <Form.Control as="textarea" readOnly defaultValue={userProvider.user.bio} />
        </Form.Group>);
    };

    const getStaticSubjectField = () => {
    
        return (<>
                <Form.Group as={Col} md="4" controlId="formControl.subjects">
                    <Form.Label>Subjects</Form.Label>
                    {userProvider.user.subjects && <Form.Control plaintext readOnly type="text" defaultValue={userProvider.user.subjects} />}
                </Form.Group>
            </>);
    };

    const getStaticOptionalTagField = () => {
        return (
            <Form.Group as={Col} controlId="exampleForm.ControlOptionalFields">
                <Form.Label>Optional Tags</Form.Label>
                {
                userProvider.user.tags && <Form.Control plaintext readOnly type="text" defaultValue={userProvider.user.tags} />
                }
            </Form.Group>
        );
    };

    const getStaticMentorFields = () => {
        return (
            <>
                    <Form.Group md="4" as={Col}>
                        <Form.Label>Major</Form.Label>
                            <Form.Control plaintext readOnly type="text" defaultValue={userProvider.user.major} />
                    </Form.Group>
                    <Form.Check checked={userProvider.user.public}
                        name="public"
                        type="checkbox" label="Listed as an Available Mentor." />
            </>
        );
    };

    const getStaticMenteeFields = () => {
        return (
            <>
                <Form.Group as={Col} md="4" controlId="validationGuadianName">
                    <Form.Label>Parent's Name</Form.Label>
                    <Form.Control name="guardian_name" plaintext readOnly defaultValue={userProvider.user.guardian_name} />
                
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationEmail">
                    <Form.Label>Parent Email</Form.Label>
                    <Form.Control name="guardian_email" plaintext readOnly defaultValue={userProvider.user.guardian_email} />
                </Form.Group>
            </>
        );
    };

    const getStaticFields = () => {
        let nameField = getStaticNameField();
        let emailField = getStaticEmailField();
        let timezoneField = getStaticTimeZoneField();
        let roleField = getStaticRoleField();
        let bioField = getStaticBioField();
        let subjectField = getStaticSubjectField();
        let optionalTagField = getStaticOptionalTagField();
        let mainFields = [nameField, emailField, timezoneField, roleField, bioField, subjectField, optionalTagField];

        if (userProvider.user.role === "mentor") {
            return mainFields.concat(getStaticMentorFields());
        } else {
            return mainFields.concat(getStaticMenteeFields());
        }
    }

    const getExpectationsToast = () => {
        return (
                <Alert severity="info">
                    <AlertTitle>Expectations</AlertTitle>
                    {expectations_mentor_before}
                    <br />
                    {expectations_mentor_after}
                </Alert>
        );
    };
    const getEditFields = (formik) => {
        const fieldGetters = [
            getNameField,
            getEmailField,
            getTimezoneField,
            getRoleField,
            getBioField,
            getSubjectField,
            getTagField,
        ];
        
        const mainFields = fieldGetters.map((generator) => generator(formik));
        const roleFields =
            formik.values.role === "mentor" ? getMentorFields(formik) : getMenteeFields(formik);
        return mainFields.concat(roleFields);
        
    }
    
    if (!userProvider.user) userProvider.refreshUser();

    const user = userProvider.user || {
        timezone: "",
        role: "",
        subjects: [],
        tags: [],
        guardian_email: "",
        guardian_name: "",
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
            subjects: user.subjects.map(s => { return { value: s, label: s }; }),
            tags: user.tags.map(s => { return { value: s, label: s }; }),
            guardian_email: user.guardian_email,
            guardian_name: user.guardian_name,
            major: user.major,
            name: user.name,
            email: user.email,
            bio: user.bio,
            public: user.public,
        },
        validationSchema: ProfileEditSchema,
        onSubmit: handleSubmit,
        enableReinitialize: true,
    })
    if (userProvider.user === undefined ) { return <h1>Loading..</h1> }
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
                {edit && <Button type="submit">Submit</Button>}
                {edit && <Button variant="danger" onClick={handleCancel}>Cancel</Button>}
            </Form>
            {!edit && <Button type="button" onClick={handleEdit}>Edit</Button>}       
            {success && <Alert variant="success">Profile updated successfully!</Alert>}

            <div style={{ padding: 4 }}>
                {getExpectationsToast()}
            </div>
        </Section>
               
        </Provider>
    </div>
    )
}

export default Profile;