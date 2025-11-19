import OurActivities from "./Activities";
import Footer from "./ContactUs";
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
        <OurActivities />
        <Quote />
        <NewsAndEvent />
        <ContactUs />
      </div>
    );
}

export default HomePage;