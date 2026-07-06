import { ErrorMessage, Field, Form, Formik } from "formik";
import { object, string, ref } from "yup";
import FormLayout from "../../../components/FormLayout";
import Button from "../../../components/Layout/Button";
import { Link } from "react-router-dom";

const Signin = () => {
  const signInValidationSchema = object({
    email: string().email("Invalid email").required("Email is required"),
    password: string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = (val) => {
    console.log(val);
  };

  return (
    <FormLayout className="bg-gray-100">
      <div className="flex w-125 flex-col gap-9 rounded-3xl bg-white p-7 max-sm:mt-30 max-sm:w-[90%]">
        <h1 className="text-3xl font-bold">Login to your account</h1>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={signInValidationSchema}
        >
          <Form className="flex flex-col gap-5 bg-white">
            <div className="flex flex-col gap-4 px-3 py-2">
              <label className="text-lg font-medium" htmlFor="email">
                Email
              </label>
              <Field
                className="h-10 w-full rounded-[10px] border border-gray-400 px-4 py-2 text-lg text-gray-600 outline-purple-600"
                id="email"
                name="email"
                placeholder="Enter your email"
              />
              <ErrorMessage
                name="email"
                className="error text-sm text-red-500"
                component="div"
              />
            </div>
            <div className="flex flex-col gap-4 px-3 py-2">
              <label className="text-lg font-medium" htmlFor="password">
                Password
              </label>
              <Field
                className="h-10 w-full rounded-[10px] border border-gray-400 px-4 py-2 text-lg text-gray-600 outline-purple-600"
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
              />
              <ErrorMessage
                name="password"
                className="error text-sm text-red-500"
                component="div"
              />
            </div>

            <Button type="submit">Login</Button>
            <p className="textgray-300 self-center text-sm text-gray-600">
              Don't have an account?
              <Link to="/signup" className="ml-1 text-purple-600">
                Create Account
              </Link>
            </p>
          </Form>
        </Formik>
      </div>
    </FormLayout>
  );
};

export default Signin;
