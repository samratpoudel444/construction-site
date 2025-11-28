import NavBar from "./NavBar"
import image from "./../assets/project.png";
const About= ()=>
{
    return(
        <div className="">
            <div>
                <NavBar/>
                <img src={image} alt="" />
            </div>
        </div>
    )
}

export default About;
