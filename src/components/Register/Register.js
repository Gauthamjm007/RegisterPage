import React from "react";
import { Formik } from "formik";
import { Container, Row, Col, Button } from "react-bootstrap";
import * as Yup from "yup";
import Header from "./styled-components/Header";
import AvatarUploader from "react-avatar-uploader";
export default function Register() {
  const RegisterSchema = Yup.object().shape({
    name: Yup.string()
      .min(4, "Too Short!")
      .max(20, "Too Long!")
      .required("Username Required"),
    email: Yup.string().email().required("Email Required"),
    gender: Yup.string().required("Please Select a gender"),
    phone: Yup.string()
      .matches(/[0-9]{10}/g, "Must contain 10 numbers without any spaces")
      .min(10, "Phone Number must contain 10 Digits")
      .max(10, "Phone Number must contain 10 Digits only")
      .required("Phone number valid phone number required"),
    terms_services: Yup.boolean().required("please click on checkbox"),
  });

  const handleImageUpload = () => {
    alert("image uploaded");
  };

  return (
    <div className="body-main">
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          gender: "",
          image_url: "PNGs/dummy_profile_pic.png",
          terms_services: false,
        }}
        validationSchema={RegisterSchema}
        onSubmit={(values, { setSubmitting }) => {
          alert(JSON.stringify(values));
          setTimeout(() => {
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          touched,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <Container fluid>
              <Row>
                <Col xs="12" lg="8" md="7" sm="6">
                  <div className="container-img">
                    <Header>My First Project with DesignString</Header>
                    <img
                      src="PNGs/background_illustration.png"
                      alt="register"
                      rounded="true"
                      className="register-img"
                    />
                  </div>
                </Col>
                <Col xs="12" lg="4" md="5" sm="6">
                  <br />
                  <br />
                  <div align="center">
                    <AvatarUploader
                      size={100}
                      name="image"
                      uploadURL="http://localhost:3000"
                      fileType={"image/png"}
                      defaultImg={values.image_url}
                    />
                    <br />
                    <br />
                    <Button variant="outline-dark" onClick={handleImageUpload}>
                      Upload Profile Photo
                    </Button>
                  </div>

                  <div className="form-group has-search">
                    <span className="fa fa-user form-control-feedback"></span>
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  {errors.name && touched.name ? (
                    <div className="alert-message">{errors.name}</div>
                  ) : null}
                  <br />
                  <div className="form-group has-search">
                    <span className="fas fa-envelope form-control-feedback"></span>
                    <label htmlFor="Email">Email ID</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  {errors.email && touched.email ? (
                    <div className="alert-message">{errors.email}</div>
                  ) : null}
                  <br />
                  <div className="form-group has-search">
                    <span className="fa fa-lock form-control-feedback"></span>
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="phone"
                      id="phone"
                      name="phone"
                      className="form-control"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  {errors.phone && touched.phone ? (
                    <div className="alert-message">{errors.phone}</div>
                  ) : null}

                  <label htmlFor="radio-group">Gender</label>
                  <div className="form-check" id="radio-group">
                    <Row>
                      <Col
                        md={{ span: 0, offset: 0 }}
                        xs={{ span: 0, offset: 0 }}
                      >
                        <label className="btn btn-outline-success">
                          <input
                            type="radio"
                            name="gender"
                            id="gender"
                            value={"male"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />{" "}
                          Male
                        </label>
                      </Col>
                      <Col
                        md={{ span: 0, offset: 1 }}
                        xs={{ span: 0, offset: 1 }}
                      >
                        <label className="btn btn-outline-success">
                          <input
                            type="radio"
                            name="gender"
                            id="gender"
                            value={"female"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />{" "}
                          Female
                        </label>
                      </Col>
                      <Col
                        md={{ span: 0, offset: 1 }}
                        xs={{ span: 0, offset: 1 }}
                      >
                        <label className="btn btn-outline-success">
                          <input
                            type="radio"
                            name="gender"
                            id="gender"
                            value={"other"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />{" "}
                          Other
                        </label>
                      </Col>
                    </Row>
                  </div>
                  {errors.gender && touched.gender ? (
                    <div className="alert-message">{errors.gender}</div>
                  ) : null}
                  <br />
                  <br />
                  <div className="form-check">
                    <input
                      type="checkbox"
                      value={values.terms_services}
                      name="terms_services"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="form-check-input"
                      id="checkbox"
                    />
                    <label className="form-check-label" htmlFor="checkbox">
                      I agree on statements on Terms and services
                    </label>
                  </div>
                  {errors.terms_services && touched.terms_services ? (
                    <div className="alert-message">{errors.terms_services}</div>
                  ) : null}
                  <br />
                  <Button
                    variant="success"
                    size="lg"
                    block
                    type="submit"
                    disabled={isSubmitting || values.terms_services === false}
                  >
                    Register
                  </Button>
                  <br />
                  <br />
                </Col>
              </Row>
            </Container>
          </form>
        )}
      </Formik>
    </div>
  );
}
