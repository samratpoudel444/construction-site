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
        <div></div>
     
      <Status />
      <Footer />
    </div>
  );
};

export default ProjectPage;
