import image from "../../../assets/project.png";
import Footer from "../../Footer";
import NavBar from "../../NavBar";
Footer

const ProjectPage = () => {
  return (
    <div className="flex flex-col">
      <NavBar />
      <img src={image} alt="" className="mt-8 border-b-gray-500 border-b-2" />

      <Footer />
    </div>
  );
};

export default ProjectPage;
