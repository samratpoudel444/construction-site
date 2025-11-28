import { useState } from "react";
import image from "../../../assets/road.jpg"
import image1 from "../../../assets/1.webp";
import { CiLink } from "react-icons/ci";

const workStatus = [
  {
    name: "ListAll",

  },
  {
    name: "Running",
  },
  {
    name: "Completed",
  },
];

const projectName = [
  {
    name: "Bhatbhateni project 1 selectyion ",
    url: image,
  },
  {
    name: "Bhatbhateni project 1 selectyion ",
    url: image1,
  },

  {
    name: "Bhatbhateni project 1 selectyion ",
    url: image,
  },
  {
    name: "Bhatbhateni project 1 selectyion ",
    url: image,
  },
  {
    name: "Bhatbhateni project 1 selectyion ",
    url: image,
  },
];



const Status = () => {
  const [selectedButton, setSelectedButton] = useState("ListAll");
  return (
    <div className="sm:m-16 m-4 mb-16">
      <div className="flex flex-col gap-16">
        <div className="sm:flex sm:flex-row sm:gap-16 items-center flex flex-col gap-4">
          <div>
            <a>Project status</a>
          </div>

          <div className="flex flex-row gap-2">
            {workStatus.map((value, index) => (
              <button
                key={index}
                onClick={() => setSelectedButton(value.name)}
                className={`border p-1 hover:cursor-pointer rounded-xl ${
                  selectedButton === value.name
                    ? "bg-blue-500 border-blue-500 text-white"
                    : "bg-gray-50"
                }`}
              >
                {value.name}
              </button>
            ))}
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-4 sm:gap-16 flex flex-col gap-16 m-4 ">
          {projectName.map((data, index) => (
            <div
              key={index}
              className="relative hover:scale-110 hover:transition sm:h-64 sm:w-64 w-84 h-84"
            >
              <button className=" absolute p-2 bg-white right-2 top-2 items-end">
                <CiLink size={24} color="blue"/>
              </button>
              <img src={data.url} alt={data.name} className="h-full w-full" />
              <p className="absolute w-full bg-gray-600 text-white p-2">
                {data.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Status;
