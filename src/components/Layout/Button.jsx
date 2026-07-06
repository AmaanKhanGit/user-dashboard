const Button = ({ children, className, type }) => {
  return (
    <button type={type ? type : "button"} className={`myBtn ${className}`}>
      {" "}
      {children}
    </button>
  );
};

export default Button;
