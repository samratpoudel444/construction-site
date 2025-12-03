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
      <div className="relative hover:scale-110 hover:transition sm:h-64 sm:w-64 w-84 h-84 ">
        {Image.map((data, index) => (
          <div className="relative sm:w-64 sm:h-64  border">
            <img src={data.Image} alt="" />
            <p className="absolute p-2 border">{data.name}</p>
          </div>
        ))}
      </div>
    );
}

export default GalleryImage;