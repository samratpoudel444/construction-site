import img3 from "../assets/4.avif";
import image from "../assets/3.jpg";
import image2 from "../assets/1.webp";
import img4 from "../assets/build.jpg";
import image5 from "../assets/concreting.jpg";
import image6 from "../assets/sidewalk.webp";
import img7 from "../assets/road.jpg";

import { Link } from "react-router-dom";
const data = [
  {
    image: img3,
    name: "Architecture Design for R&D Complex",
  },
  {
    image: image,
    name: "Concreting in personal resident",
  }, 
  {
    image: image2,
    name: "Land Filling in Malekhu",
  },
  {
    image: img4,
    name: "Tesing site of renovation",
  },
  {
    image: image5,
    name: "Concreting in Scout, lazimpat",
  },
  {
    image: image6,
    name: "Kalimati sideways paving",
  },
  {
    image: img7,
    name: "Road Construction Naubise",
  },
  {
    image: img3,
    name: "Architecture solution for Xavier college",
  },
];

const OurProjects = () => {
  return (
    <div className="sm:px-32 sm:py-16 p-4 flex flex-col bg-gray-300">
      <div className="border-l border-l-4 border-blue-500 p-4 flex flex-row justify-between items-center">
        <h1 className="text-2xl font-semibold text-blue-500">Our Projects</h1>
        <Link to="/projects" className="text-blue-500">
          View All Projects
        </Link>
      </div>
      <div className="sm:mt-16 mt-8 sm:grid sm:grid-cols-4 grid grid-cols-1 gap-4 sm:w-full">
        {data.map((value, index) => (
          <div
            key={index}
            className="w-[95%] h-64 relative hover:transition hover:scale-110 duration-300"
          >
            <img
              src={value.image}
              alt=""
              className="w-full h-full object-cover "
            />
            <h1 className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-sm">
              {value.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProjects;
