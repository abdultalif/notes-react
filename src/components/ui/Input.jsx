const Input = ({ name, onInput, value, className, type, placeholder }) => {
  return (
    <input
      name={name}
      onInput={onInput}
      value={value}
      className={className}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
