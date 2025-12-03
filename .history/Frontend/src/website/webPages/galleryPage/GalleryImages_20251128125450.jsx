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
    return(
        <div className="sm:grid sm:grid-cols-5 m-16  ">
            {Image.map((data, index)=>
            <div className="sm:w-64 sm:h-64 relative border">
                <img src={data.Image} alt="" />
                <p className="absolute p-2 border">{data.name}</p>
            </div>)}
        </div>
    )
}

export default GalleryImage;