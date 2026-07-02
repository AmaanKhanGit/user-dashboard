const Button = ({ children, className }) => {
  return <div className={`myBtn ${className}`}> {children}</div>;
};

export default Button;
