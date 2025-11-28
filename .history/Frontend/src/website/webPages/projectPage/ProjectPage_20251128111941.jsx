import image from "../../../assets/project.png";
import Footer from "../../Footer";
import NavBar from "../../NavBar";
import Status from "./Status";


const ProjectPage = () => {
  return (
    <div className="flex flex-col">
      <div>
        {" "}
        <NavBar />
      </div>
      <div>
        <img src={image} alt="" className="mt-8 border-b-gray-500 border-b-2" />
      </div>
      <div>
        <Status />
      </div>
      <div className="mb-0">
        <Footer />
      </div>
    </div>
  );
};

export default ProjectPage;
