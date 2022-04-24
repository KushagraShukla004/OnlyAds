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
import { FiMail, FiLock } from "react-icons/fi";

//auth and Redux
import { connect } from "react-redux";
import { loginUser } from "../../auth/actions/userActions";
import { useHistory, useParams } from "react-router-dom";

const Login = ({ loginUser }) => {
  const history = useHistory();
  const { userEmail } = useParams();

  return (
    <div>
      <StyledFormArea>
        <Avatar image={Logo} />
        <StyledTitle color={colors.theme} size={30}>
          Login
        </StyledTitle>
        <Formik
          initialValues={{
            email: userEmail,
            password: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            password: Yup.string()
              .min(8, "Password must be at least 8 characters")
              .max(20, "Password is too long")
              .required("Required"),
          })}
          onSubmit={(values, { setSubmitting, setFieldError }) => {
            console.log(values);
            loginUser(values, history, setFieldError, setSubmitting);
          }}
        >
          {() => (
            <Form>
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

              <ButtonGroup>
                <StyledFormButton type="submit">Login</StyledFormButton>
              </ButtonGroup>
            </Form>
          )}
        </Formik>
        <ExtraText>
          New Here? <TextLink to="/register">Register!</TextLink>
        </ExtraText>
      </StyledFormArea>
      <CopyrightText>OnlyAds.</CopyrightText>
      <CopyrightText> All rights reserved &copy;2022</CopyrightText>
    </div>
  );
};

export default connect(null, { loginUser })(Login);
