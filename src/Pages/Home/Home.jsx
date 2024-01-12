import Banner from "./Banner";
import ContactUs from "./ContactUs";
import FAQs from "./FAQs";
import Gallery from "./Gallery";
import OurProjects from "./OurProjects";
import Testimonial from "./Testimonial";
import WhoWeAre from "./WhoWeAre";


const Home = () => {
    return (
        <div>
            <Banner />
            <WhoWeAre />
            <OurProjects />
            <Testimonial />
            <ContactUs />
            <FAQs />
            <Gallery />
        </div>
    );
};

export default Home;