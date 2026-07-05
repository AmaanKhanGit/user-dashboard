import { MdEdit } from "react-icons/md";
import Button from "../../../components/Layout/Button";

const ProfileCards = ({ content }) => {
  return (
    <section className="sections flex flex-col gap-2">
      <div className="flex justify-between">
        <h2 className="text-xl font-bold">About me:</h2>{" "}
        <Button className="hollowBtn flex items-center gap-2 border-none bg-gray-100">
          <MdEdit />
          Edit
        </Button>
      </div>
      <p className="text-lg text-gray-600">
        Passionated Frontend Developer who loves to build responsive and
        user-friendly web application. I enjoy turning ideas into real product
        using modern technologies.{" "}
      </p>
    </section>
  );
};

export default ProfileCards;
