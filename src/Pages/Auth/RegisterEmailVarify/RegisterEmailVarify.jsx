import { MdEmail } from "react-icons/md";
import FormLayout from "../../../components/FormLayout";
import Button from "../../../components/Layout/Button";
import AuthCard from "../../../components/AuthCard";

const RegisterEmailVarify = () => {
  return (
    <FormLayout className="bg-gray-100">
      <AuthCard className="w-125">
        <div className="flex flex-col items-center gap-3">
          <MdEmail className="text-5xl text-purple-800" />
          <h2 className="text-xl font-medium">Email Varification</h2>
          <p className="text-center text-gray-400">
            We have sent you an email verification to
            <span className="font-bold"> jenny.wilson@gmail.com. </span> If you
            didn’t receive it, click the button below.
          </p>
        </div>
        <Button className="hollowBtn"> Re-Send Email</Button>
      </AuthCard>
    </FormLayout>
  );
};

export default RegisterEmailVarify;
