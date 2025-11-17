import img3 from "../assets/3.jpg";

const data = [
  {
    image: img3",
    name: "Hello tesing site",
  },
  {
    image: img3,
    name: "Tesing site of renovation",
  },
  {
    image: "img3",
    name: "Tesing site of renovation",
  },
];

const OurProjects = () => {
  return (
    <div className="sm:m-16 m-4 flex flex-col">
      <div className="border-l border-l-4 border-green-500 p-4 flex flex-row justify-between items-center">
        <h1 className="text-xl font-semibold">Our Projects</h1>
        <a href="" className="text-green-500">
          View All
        </a>
      </div>
      <div>
        {data.map((value, index) => (
          <div key={index}>
            <img src={value.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProjects;
