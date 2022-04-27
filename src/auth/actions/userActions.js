import axios from "axios";

import { sessionService } from "redux-react-session";

//the remote endpoint and local
const remoteUrl = "https://shielded-journey-18131.herokuapp.com/";
// const remoteUrl = "https://fathomless-beyond-24446.herokuapp.com/";
const localUrl = "http://localhost:5000/";
const currentUrl = remoteUrl;

export const loginUser = (
  credentials,
  history,
  setFieldError,
  setSubmitting
) => {
  //make some checks and get some data

  return () => {
    axios
      .post(`${currentUrl}user/login`, credentials, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const { data } = response;
        if (data.status === "FAILED") {
          const { message } = data;
          //check for specific error
          if (message.includes("credentials")) {
            setFieldError("email", message);
            setFieldError("password", message);
          } else if (message.includes("password")) {
            setFieldError("password", message);
          } else if (message.toLowerCase().includes("email")) {
            setFieldError("email", message);
          }
        } else if (data.status === "SUCCESS") {
          const userData = data.data[0];

          const token = userData._id;

          sessionService
            .saveSession(token)
            .then(() => {
              sessionService
                .saveUser(userData)
                .then(() => {
                  history.push("/dashboard");
                })
                .catch((err) => console.error(err));
            })
            .catch((err) => console.error(err));
        }

        //complete submission
        setSubmitting(false);
      })
      .catch((err) => console.error(err));
  };
};

export const registerUser = (
  credentials,
  history,
  setFieldError,
  setSubmitting
) => {
  return (dispatch) => {
    axios
      .post(`${currentUrl}user/register`, credentials, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const { data } = response;
        if (data.status === "FAILED") {
          const { message } = data;
          //checking specific error
          if (message.includes("name")) {
            setFieldError("name", message);
          } else if (message.includes("email")) {
            setFieldError("email", message);
          } else if (message.includes("password")) {
            setFieldError("password", message);
          }
        } else if (data.status === "PENDING") {
          //display message for email verification
          const { email } = credentials;
          history.push(`/emailsent/${email}`);
        }

        //complete submission
        setSubmitting(false);
      })
      .catch((err) => console.error(err));
  };
};

export const logoutUser = (history) => {
  return () => {
    sessionService.deleteSession();
    sessionService.deleteUser();
    history.push("/");
  };
};
