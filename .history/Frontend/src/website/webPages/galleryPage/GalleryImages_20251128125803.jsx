import image from "../../../assets/logo.png";

const images = [
  {
    name: "test1",
    image: image,
  },
  {
    name: "test1",
    image: image,
  },
  {
    name: "test1db djaf sf dhwfjhw hrr",
    image: image,
  },
];

const GalleryImage = () => {
  return (
    <div className="sm:grid sm:grid-cols-5 m-16 flex flex-col sm:gap-16 gap-8">
      {images.map((data, index) => (
        <div
          key={index}
          className="relative hover:scale-110 transition-transform sm:h-64 sm:w-64 w-full h-64 border rounded-2xl overflow-hidden"
        >
          <img
            src={data.image}
            alt={data.name}
            className="h-full w-full object-cover"
          />
          <p className="absolute bottom-0 left-0 right-0 w-full bg-gray-600 text-white p-2 text-sm">
            {data.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default GalleryImage;
