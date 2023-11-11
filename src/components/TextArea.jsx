import React, { useState } from "react";
import "../styles/style.css";

const TextArea = (props) => {
  const { name, onInput, value, placeholder, className } = props;

  return (
    <>
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onInput}
        className={className}
      />
    </>
  );
};

export default TextArea;
