import { IoConstructSharp } from "react-icons/io5";

const data = [
  {
    name: "Concreting",
    logo: <IoConstructSharp />,
  },
  {
    name: "Concreting",
    logo: <IoConstructSharp />,
  },
  {
    name: "Concreting",
    logo: <IoConstructSharp />,
  },
  {
    name: "Concreting",
    logo: <IoConstructSharp />,
  },
  {
    name: "Concreting",
    logo: <IoConstructSharp />,
  },
];

const OurActivities = () => {
  return (
    <div className="m-32 m-4">
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
        <div>
          {data.map((value, index) => (
            <div className="" key={index}>
              <div>{value.logo}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurActivities;
