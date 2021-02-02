import React from "react";
import "./Input.css";

const Input = ({ name, value, label, onChange, placeholder }) => {
  return (
    <div className="input-wrapper">
      <label className="input-label">{label}</label>
      <input
        className="text-input"
        name={name}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
