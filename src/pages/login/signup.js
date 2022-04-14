import React from "react";
import InputField from "./InputField";

const Register = function () {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title text-center">Register Form</h2>
        <InputField label="Name" id="nameField" />
        <InputField label="Email" id="emailField" />
        <InputField label="Password" id="passwordField" />
        <button className="btn btn-success form-control">Register</button>
      </div>
    </div>
  );
};

export default Register;
