import Footer from "./Footer";
import HomeSection from "./HomeSection";
import NavBar from "./NavBar";
import NewsAndEvent from "./NewsAndEvent";
import OurProjects from "./ourProjects"
import Quote from "./Quote";


const HomePage= ()=>
{
    return (
      <div>
        <NavBar />
        <HomeSection />
        <OurProjects />
        <Quote />
        <NewsAndEvent/>
        <Footer/>
      </div>
    );
}

export default HomePage;