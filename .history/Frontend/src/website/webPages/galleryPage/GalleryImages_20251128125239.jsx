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
        <div>
            {Image.map((data, index)=>
            <div>
                <img src={data.image} alt="" />
            </div>)}
        </div>
    )
}