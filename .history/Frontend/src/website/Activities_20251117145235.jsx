import { IoConstructSharp } from "react-icons/io5";

const data = [
  {
    name: "Concreting",
    logo: <IoConstructSharp size={64} className="text-blue-500" />,
  },
  {
    name: "Concreting",
    logo: <IoConstructSharp size={64} />,
  },
  {
    name: "Concreting",
    logo: <IoConstructSharp size={64} />,
  },
  {
    name: "Concreting",
    logo: <IoConstructSharp size={64} />,
  },
  {
    name: "Concreting",
    logo: <IoConstructSharp size={64} />,
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
        <div className="flex gap-32 px-32 py-8">
          {data.map((value, index) => (
            <div className="" key={index}>
              <div className="">{value.logo}</div>
                <div><p>{value.name}</p></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurActivities;
