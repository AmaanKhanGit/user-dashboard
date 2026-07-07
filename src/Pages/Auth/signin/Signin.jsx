import { ErrorMessage, Field, Form, Formik } from "formik";
import { object, string, ref } from "yup";
import FormLayout from "../../../components/FormLayout";
import Button from "../../../components/Layout/Button";
import { Link } from "react-router-dom";
import AuthCard from "../../../components/AuthCard";

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
    <FormLayout>
      <AuthCard className="w-130">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={signInValidationSchema}
        >
          <Form className="flex flex-col gap-3 bg-white">
            <div className="flex flex-col gap-4 px-3 py-2">
              <label className="text-sm font-medium" htmlFor="email">
                Email
              </label>
              <Field
                className="h-10 w-full rounded-[10px] border border-gray-400 px-4 py-2 text-sm text-gray-600 outline-purple-600"
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
              <label className="text-sm font-medium" htmlFor="password">
                Password
              </label>
              <Field
                className="h-10 w-full rounded-[10px] border border-gray-400 px-4 py-2 text-sm text-gray-600 outline-purple-600"
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
            <div className="flex justify-between">
              <div className="flex gap-2">
                <input type="checkbox" name="" id="" />

                <p>Remember me</p>
              </div>
              <p className="textgray-300 self-end text-sm text-gray-600">
                <Link to="/forgot-password" className="ml-1 text-purple-600">
                  Forgot Password
                </Link>
              </p>
            </div>
            <Button type="submit">Login</Button>
            <Link to="/signup" className="ml-1 text-purple-600">
              <Button className="hollowBtn w-full">Create Account</Button>
            </Link>
          </Form>
        </Formik>
      </AuthCard>
    </FormLayout>
  );
};

export default Signin;
