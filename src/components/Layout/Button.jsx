const Button = ({ children, className }) => {
  return <button className={`myBtn ${className}`}> {children}</button>;
};

export default Button;
