import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, TextField } from '@material-ui/core';

const Contact = () => {
  return (
    <Formik
      initialValues={{
        firtName: '',
        lastName: '',
        email: '',
        message: '',
      }}
      onSubmit={(data) => {}}
    >
      {({ values }) => (
        <div className="contact-page-wrapper">
          <div className="inner-form-wrapper">
            <Form className="form-wrapper">
              <Field
                name="firstName"
                label="First Name"
                value={values.firstName}
                as={TextField}
                variant="outlined"
                InputLabelProps={{ style: { color: 'rgb(82, 109, 231)' } }}
              />
              <Field
                name="lastName"
                label="Last Name"
                value={values.lastName}
                as={TextField}
                variant="outlined"
                InputLabelProps={{ style: { color: 'rgb(82, 109, 231)' } }}
              />
              <Field
                name="email"
                label="Email"
                value={values.email}
                as={TextField}
                variant="outlined"
                InputLabelProps={{ style: { color: 'rgb(82, 109, 231)' } }}
              />
              <Field
                name="message"
                label="Message Here"
                value={values.message}
                as={TextField}
                variant="outlined"
                multiline
                rows="4"
                InputLabelProps={{ style: { color: 'rgb(82, 109, 231)' } }}
              />
              <Button variant="contained" type="submit">
                Send
              </Button>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Contact;
