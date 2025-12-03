import image from "../../../assets/logo.png"
const Image= [{
    name:"test1",
    Image:image
},

   { name:"test1",
    Image:image
}
,
  {  name:"test1db djaf sf dhwfjhw hrr",
    Image:image
}
]

const GalleryImage= ()=>
{
    return (
      <div className="sm:grid sm:grid-cols-5 m-16 flex flex-col sm:gap-16 gap-8 ">
        {Image.map((data, index) => (
          <div className="relative hover:scale-110 hover:transition sm:h-64 sm:w-64 w-84 h-84 border rounded-2xl">
            <img src={data.Image} alt="" />
            <p className="absolute w-full bg-gray-600 text-white p-2">
              {data.name}
            </p>
          </div>
        ))}
      </div>
    );
}

export default GalleryImage;