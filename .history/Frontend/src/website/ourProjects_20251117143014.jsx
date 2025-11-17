import img3 from "../assets/4.avif";

const data = [
  {
    image: img3,
    name: "Hello tesing site",
  },
  {
    image: img3,
    name: "Tesing site of renovation",
  },
  {
    image: img3,
    name: "Tesing site of renovation",
  },
  {
    image: img3,
    name: "Tesing site of renovation",
  },
  {
    image: img3,
    name: "Tesing site of renovation",
  },
  {
    image: img3,
    name: "Tesing site of renovation",
  },
  {
    image: img3,
    name: "Tesing site of renovation",
  },
  {
    image: img3,
    name: "Tesing site of renovation",
  },
];

const OurProjects = () => {
  return (
    <div className="sm:m-32 m-4 flex flex-col border">
      <div className="border-l border-l-4 border-green-500 p-4 flex flex-row justify-between items-center">
        <h1 className="text-xl font-semibold">Our Projects</h1>
        <a href="" className="text-green-500">
          View All
        </a>
      </div>
      <div className="sm:mt-16 mt-8 sm:grid sm:grid-cols-4 grid grid-cols-1 gap-4  sm:w-full">
        {data.map((value, index) => (
          <div
            key={index}
            className="w-[95%] h-full relative hover:transition hover:scale-110 duration-300"
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
