import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { IoLogoPinterest } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Formik } from "formik";
import axios from "axios";
import { baseUrl } from "../../util.js/api";

const ContactForm = () => {
  return (
    <div className="form_div pt-24 lg:h-[950px]">
      <h1>GET IN TOUCH</h1>
      <p>Get started with your amazing project</p>
      <Container>
        <div className="mt-10">
          <Row>
            <Col md={4}>
              <div className="text-left mt-10">
                <h2 className="text-2xl font-bold">CONTACT</h2>
                <p className="flex">
                  <span>
                    <FaLocationDot />
                  </span>
                  405 Broadway, New York, NY 10013
                </p>
                <p className="flex">
                  <span>
                    <IoMdMail />
                  </span>
                  info@Charihope.com
                </p>
                <h4 className="text-lg flex">
                  <span>
                    <FaPhone />
                  </span>
                  +1 555-666-1111
                </h4>

                <div className="flex mt-10">
                  <TiSocialFacebook className="form_icon" />
                  <FaTwitter className="form_icon" />
                  <IoLogoPinterest className="form_icon" />
                  <FaInstagram className="form_icon" />
                </div>
              </div>
            </Col>

            <Col md={8}>
              <div className="border formik_div text-center lg:w-[600px]">
                <Formik
                  initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    contact: "",
                    textarea: "",
                  }}
                  validate={(values) => {
                    const errors = {};
                    if (!values.firstName) {
                      errors.name = "First name is Required";
                    }
                    if (!values.lastName) {
                      errors.name = "Last name is Required";
                    }
                    if (!values.email) {
                      errors.email = "Email is Required";
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        values.email
                      )
                    ) {
                      errors.email = "Invalid email address";
                    }
                    if (!values.password) {
                      errors.password = "Password is Required";
                    }
                    if (!values.contact) {
                      errors.contact = "Contact is Required";
                    }
                    if (!values.textarea) {
                      errors.textarea = "Textarea is Required";
                    }
                    return errors;
                  }}
                  onSubmit={(values, { setSubmitting,resetForm }) => {
                    axios.post(`${baseUrl}/add-user`,values)
                    .then((res)=>{
                      console.log(res)
                      alert("Data added successfully")
                      setSubmitting(false)
                      resetForm()
                    })
                    .catch((err)=>{
                      console.log(err)
                    })

                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <input
                        type="text"
                        name="firstName"
                        onChange={handleChange}
                        placeholder="First Name"
                        onBlur={handleBlur}
                        value={values.firstName}
                        className="form-control"
                      />
                      <p className="text-red-500">
                        {errors.firstName && touched.firstName && errors.firstName}
                      </p>

                      <input
                        type="text"
                        name="lastName"
                        onChange={handleChange}
                        placeholder="Last Name"
                        onBlur={handleBlur}
                        value={values.lastName}
                        className="form-control"
                      />
                      <p className="text-red-500">
                        {errors.lastName && touched.lastName && errors.lastName}
                      </p>

                      <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        placeholder="Your-mail@gmail.com"
                        onBlur={handleBlur}
                        value={values.email}
                        className="form-control"
                      />
                      <p className="text-red-500">
                        {errors.email && touched.email && errors.email}
                      </p>
                      <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        placeholder="Your Password"
                        onBlur={handleBlur}
                        value={values.password}
                        className="form-control"
                      />
                      <p className="text-red-500">
                        {errors.password && touched.password && errors.password}
                      </p>
                      <input
                        type="Number"
                        name="contact"
                        onChange={handleChange}
                        placeholder="Your Contact"
                        onBlur={handleBlur}
                        value={values.contact}
                        className="form-control"
                      />
                      <p className="text-red-500">
                        {errors.contact && touched.contact && errors.contact}
                      </p>
                      <textarea
                        type="text"
                        name="textarea"
                        id=""
                        cols="90"
                        rows="5"
                        onChange={handleChange}
                        placeholder="Your textarea"
                        onBlur={handleBlur}
                        value={values.textarea}
                        className="form-control"
                      >
                        Comment
                      </textarea>
                      <p className="text-red-500">
                        {errors.textarea && touched.textarea && errors.textarea}
                      </p>

                      <Button
                        type="submit"
                        className="form_btn lg:me-[74%]"
                        disabled={isSubmitting}
                      >
                        Submit
                      </Button>

                      
                    </form>
                  )}
                </Formik>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default ContactForm;
