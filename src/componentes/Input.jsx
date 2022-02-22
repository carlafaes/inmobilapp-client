import React from "react";

export default function Input({
  type,
  value,
  placeholder,
  handleChange,
  name,
  error,
}) {
  const inputStyle = {
    borderColor: error ? "red" : "green",
    fontSize: "1em",
  };

  return (
    <input
      style={inputStyle}
      name={name}
      type={type}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      autoComplete="false"
      required={true}
    ></input>
  );
}
