import Button from "../../../components/Layout/Button";
import FormLayout from "../../../components/FormLayout";
import AuthCard from "../../../components/AuthCard";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { object, string, ref } from "yup";

const ResetPassword = () => {
  const forgotPasswordValidationSchema = object({
    password: string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    repeatPassword: string()
      .oneOf([ref("password"), null], "Passwords must match")
      .required("Please confirm your password"),
  });

  const handleSubmit = (val) => {
    console.log(val);
  };

  return (
    <FormLayout>
      <AuthCard className="w-120">
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-medium">Reset Password</h2>
          <p className="text-gray-400">Enter your password</p>
        </div>
        <Formik
          initialValues={{
            password: "",
            repeatPassword: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={forgotPasswordValidationSchema}
        >
          <Form className="flex flex-col gap-3 bg-white">
            <div className="flex flex-col gap-4 py-2">
              <label className="text-sm font-medium" htmlFor="password">
                Password
              </label>
              <Field
                type="password"
                className="h-10 w-full rounded-[10px] border border-gray-400 px-4 py-2 text-sm text-gray-600 outline-purple-600"
                id="password"
                name="password"
                placeholder="Enter your password"
              />
              <ErrorMessage
                name="password"
                className="error text-sm text-red-500"
                component="div"
              />
            </div>
            <div className="flex flex-col gap-4 py-2">
              <label className="text-sm font-medium" htmlFor="repeatPassword">
                Repeat Password
              </label>
              <Field
                className="h-10 w-full rounded-[10px] border border-gray-400 px-4 py-2 text-sm text-gray-600 outline-purple-600"
                type="password"
                id="password"
                name="repeatPassword"
                placeholder="Repeat your password"
              />
              <ErrorMessage
                name="repeatPassword"
                className="error text-sm text-red-500"
                component="div"
              />
            </div>

            <Button type="submit" className="hollowBtn">
              Reset password
            </Button>
          </Form>
        </Formik>
      </AuthCard>
    </FormLayout>
  );
};

export default ResetPassword;
