import React from "react";
import {
  StyledTitle,
  StyledSubTitle,
  Avatar,
  StyledFormButton,
  ButtonGroup,
  StyledFormArea,
  colors,
} from "./../components/Styles";
//logo
import Logo from "./../images/logo1.png";

//auth and redux
import { connect } from "react-redux";
import { logoutUser } from "./../auth/actions/userActions";
//Router
import { useHistory } from "react-router-dom";

const Dashboard = ({ logoutUser, user }) => {
  const history = useHistory();
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
        <StyledTitle size={65}>Welcome to OnlyAds,</StyledTitle>
        <StyledTitle size={55}>{user.name}</StyledTitle>
        <StyledSubTitle size={27}>Start Your Journy with us</StyledSubTitle>
        <ButtonGroup>
          <StyledFormButton to="/design">Design</StyledFormButton>
          <StyledFormButton to="/gallery">Gallery</StyledFormButton>
          <StyledFormButton to="#" onClick={() => logoutUser(history)}>
            Logout
          </StyledFormButton>
        </ButtonGroup>
      </StyledFormArea>
    </div>
  );
};

const mapStateToProps = ({ session }) => ({
  user: session.user,
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
