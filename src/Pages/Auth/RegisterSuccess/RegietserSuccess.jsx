import FormLayout from "../../../components/FormLayout";
import AuthCard from "../../../components/AuthCard";
import Button from "../../../components/Layout/Button";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const RegietserSuccess = () => {
  return (
    <FormLayout>
      <AuthCard className="w-125">
        <div className="flex flex-col items-center gap-3">
          <FaCheckCircle className="text-5xl text-green-800" />
          <h2 className="text-xl font-medium">Successfully Registered</h2>
          <p className="text-center text-gray-400">
            Hurray! You have successfully created your account. Enter the app to
            explore all it’s features.
          </p>
        </div>
        <Link>
          <Button className="w-full"> Enter the App</Button>
        </Link>
      </AuthCard>
    </FormLayout>
  );
};

export default RegietserSuccess;
