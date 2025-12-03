import image from "../../../assets/project.png";
import Footer from "../../Footer";

import NavBar from "../../NavBar";
import GalleryImage from "./GalleryImages";


GalleryImage
const GalleryPage = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <div>
        {" "}
        <NavBar />
      </div>
      <div>
        <img src={image} alt="" className="mt-8 border-b-gray-500 border-b-2" />
      </div>
      <div>
       
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default GalleryPage;
