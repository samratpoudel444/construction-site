import image from "../../../assets/project.png";
import Footer from "../../Footer";
import NavBar from "../../NavBar";
import Status from "./Status";


const ProjectPage = () => {
  return (
    <div className="flex flex-col justify-center ite">
      <NavBar />
      <img src={image} alt="" className="mt-8 border-b-gray-500 border-b-2" />
      <Status />
      <Footer />
    </div>
  );
};

export default ProjectPage;
