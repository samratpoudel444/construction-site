import OurActivities from "./Activities";
import ContactUs from "./ContactUs";
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
        <Activities />
        <Quote />
        <NewsAndEvent />
        <ContactUs />
        <Footer />
      </div>
    );
}

export default HomePage;