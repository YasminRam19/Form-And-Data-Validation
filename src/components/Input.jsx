const Input = ({ label, id, error, ...props }) => {
  //name, type, onBlur and onChage, and all remaining properties are forwarded through props
  return (
    <div className="control no-margin">
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
      <div className="control-error">{error && <p>{error}</p>}</div>
    </div>
  );
};

export default Input;
