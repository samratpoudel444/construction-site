import NavBar from "./NavBar"
import image from "./../assets/project.png";
const About= ()=>
{
    return(
        <div className="">
            <div className="flex flex-col">
                <NavBar/>
            
                <img src={image} alt="" />
            </div>
        </div>
    )
}

export default About;
