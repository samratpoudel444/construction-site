import image from "../../../assets/project.png";

import NavBar from "../../NavBar";
Foote
import Status from "./Status";

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
        <Status />
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default GalleryPage;
