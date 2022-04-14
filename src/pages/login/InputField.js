import React from "react";

const InputField = function (props) {
  return (
    <div className="mb-3">
      <label htmlFor={props.id}>{props.label}</label>
      <input id={props.id} type="text" className="form-control" />
    </div>
  );
};

export default InputField;
