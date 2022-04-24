import React from "react";
import {
  StyledTitle,
  ExtraText,
  Avatar,
  StyledFormButton,
  ButtonGroup,
  StyledFormArea,
  colors,
} from "./../components/Styles";
//logo
import Logo from "./../images/logo.png";

//Router
import { useHistory, useParams } from "react-router-dom";

const EmailSent = () => {
  const history = useHistory();
  const { userEmail } = useParams();
  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "0",
          backgroundColor: "transparent",
          width: "100%",
          padding: "20vh",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <Avatar image={Logo} />
      </div>
      <StyledFormArea bg={colors.dark2}>
        <StyledTitle size={65}>Account Confirmation</StyledTitle>
        <ExtraText color={colors.light1}>
          An email with your account confirmation has been sent yours which is
          <b style={{ color: colors.cyan }}> {userEmail}</b>
        </ExtraText>
        <ExtraText color={colors.light1}>
          Check your Email and come back to proceed!
        </ExtraText>

        <ButtonGroup>
          <StyledFormButton to={`/login/${userEmail}`}>
            Proceed
          </StyledFormButton>
        </ButtonGroup>
      </StyledFormArea>
    </div>
  );
};

export default EmailSent;
