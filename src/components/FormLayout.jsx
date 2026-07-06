const FormLayout = ({ children, className }) => {
  return (
    <section
      className={`flex h-screen items-start justify-center sm:items-center ${className}`}
    >
      {children}
    </section>
  );
};

export default FormLayout;
