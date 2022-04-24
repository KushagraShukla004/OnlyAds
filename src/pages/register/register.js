import React from "react";
import {
  StyledTextInput,
  StyledFormArea,
  StyledFormButton,
  StyledLabel,
  Avatar,
  StyledTitle,
  colors,
  ButtonGroup,
  ExtraText,
  TextLink,
  CopyrightText,
} from "./../../components/Styles";
//logo
import Logo from "./../../images/OnlyAds.ico";
//formik
import { Formik, Form } from "formik";
import { TextInput } from "./../../components/FormLib";
import * as Yup from "yup";
//icons
import { FiMail, FiLock, FiUser } from "react-icons/fi";

//auth and Redux
import { connect } from "react-redux";
import { registerUser } from "../../auth/actions/userActions";
import { useHistory } from "react-router-dom";

const Register = ({ registerUser }) => {
  const history = useHistory();
  return (
    <div>
      <StyledFormArea>
        <Avatar image={Logo} />
        <StyledTitle color={colors.theme} size={30}>
          Register
        </StyledTitle>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            password: Yup.string()
              .min(8, "Password must be at least 8 characters")
              .max(20, "Password is too long")
              .required("Required"),
            name: Yup.string().required("Required"),
            confirmPassword: Yup.string()
              .required("Required")
              .oneOf([Yup.ref("password")], "Password must match"),
          })}
          onSubmit={(values, { setSubmitting, setFieldError }) => {
            registerUser(values, history, setFieldError, setSubmitting);
          }}
        >
          {() => (
            <Form>
              <TextInput
                name="name"
                type="text"
                label="Full Name"
                placeholder="abc def"
                icon={<FiUser />}
              />

              <TextInput
                name="email"
                type="text"
                label="Email Address"
                placeholder="abc@example.com"
                icon={<FiMail />}
              />

              <TextInput
                name="password"
                type="password"
                label="Password"
                placeholder="********"
                icon={<FiLock />}
              />

              <TextInput
                name="confirmPassword"
                type="password"
                label="Confirm Password"
                placeholder="********"
                icon={<FiLock />}
              />

              <ButtonGroup>
                <StyledFormButton type="submit">Register</StyledFormButton>
              </ButtonGroup>
            </Form>
          )}
        </Formik>
        <ExtraText>
          Already a member? <TextLink to="/login">Login!</TextLink>
        </ExtraText>
      </StyledFormArea>
      <CopyrightText>OnlyAds.</CopyrightText>
      <CopyrightText> All rights reserved &copy;2022</CopyrightText>
    </div>
  );
};

export default connect(null, { registerUser })(Register);
