import { Link } from "react-router-dom";
import ContactBar from "../../Components/ContactBar/ContactBar";
import KeerthiBanner from "../Keerthi/KeerthiBanner";
import Banner from "./Banner";
import ContactUs from "./ContactUs";
import FAQs from "./FAQs";
import Gallery from "./Gallery";
import OurProjects from "./OurProjects";
import Testimonial from "./Testimonial";
import WhoWeAre from "./WhoWeAre";
import VideoBanner from "./VideoBanner";

const Home = () => {
  return (
    <div>
      {/* <Banner /> */}
      {/* <div>
        <Link to="/projects/keerthi" >
          <KeerthiBanner />
        </Link>
        <ContactBar />
      </div> */}
      <div>
        <VideoBanner />
        <div className="md:w-11/12 md:absolute bottom-4 left-1/2 md:-translate-x-1/2 z-20">
          <ContactBar />
        </div>
      </div>
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
