import { IoConstructSharp } from "react-icons/io5";
import { FaRoad } from "react-icons/fa";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { GiBreakingChain } from "react-icons/gi";
import { GiStonePath } from "react-icons/gi";

const data = [
  {
    name: "Concreting",
    logo: <IoConstructSharp size={64} className="text-blue-500" />,
  },
  {
    name: "Road Building",
    logo: <FaRoad size={64} className="text-blue-500" />,
  },
  {
    name: "Building Construction",
    logo: <HiOutlineBuildingOffice2 size={64} className="text-blue-500" />,
  },
  {
    name: "Demolition Works",
    logo: <GiBreakingChain size={64} className="text-blue-500" />,
  },
  {
    name: "Landscaping",
    logo: <GiStonePath size={64} className="text-blue-500" />,
  },
];

const OurActivities = () => {
  return (
    <div className="sm:px-36 sm:pb-32 p-4 bg-gray-200">
      <div className="border-green-500 border-l-4 p-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Our Activities</h1>
        <a href="#" className="text-green-500">
          View All
        </a>
      </div>
      <div className="m-4">
        <p className="font-semibold">
          IDCD is where strong foundations meet stronger promises, turning every
          blueprint into lasting reality.{" "}
        </p>
      </div>
      <div>
        <div className="sm:flex sm:flex-row sm:gap-32 gap-8 px-32 grid grid-cols-2 gap-4">
          {data.map((value, index) => (
            <div
              className="flex flex-col gap-2 hover:transition hover:scale-110"
              key={index}
            >
              <div className="">{value.logo}</div>
              <div>
                <p className="text-md ">{value.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurActivities;
