import { FaCheckCircle } from "react-icons/fa";
import FormLayout from "../../../components/FormLayout";
import AuthCard from "../../../components/AuthCard";

const ForgotVarify = () => {
  return (
    <FormLayout>
      <AuthCard className="w-125">
        <div className="flex flex-col items-center gap-3">
          <FaCheckCircle className="text-5xl text-green-800" />
          <h2 className="text-xl font-medium">Successfully Sent</h2>
          <p className="text-center text-gray-400">
            We have sent instructions on how to reset your password to
            <span className="font-bold"> jenny.wilson@gmail.com. </span>Please
            follow the instructions from the email.
          </p>
        </div>
      </AuthCard>
    </FormLayout>
  );
};

export default ForgotVarify;
