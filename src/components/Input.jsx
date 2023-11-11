import React from "react";

import "../styles/style.css";

const Input = (props) => {
  const { name, onInput, value, placeholder, type, className } = props;

  return (
    <>
      <input
        type={type}
        onInput={onInput}
        name={name}
        value={value}
        placeholder={placeholder}
        className={className}
      />
    </>
  );
};

export default Input;
