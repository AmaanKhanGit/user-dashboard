const FormLayout = ({ children }) => {
  return (
    <section className="flex h-screen items-center justify-center bg-white sm:bg-gray-100">
      {children}
    </section>
  );
};

export default FormLayout;
