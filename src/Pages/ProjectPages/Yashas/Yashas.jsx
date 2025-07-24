import FAQComponent from "../../../Components/FAQComponent/FAQComponent";
import ContactUs from "../../Home/ContactUs";
import Amenities from "./Amenities";
import Facilities from "./Facilities";
import ProjectContent from "./ProjectContent";
import YashasBanner from "./YashasBanner";
import { yashasFAQs } from "./yashasFAQs";

const Yashas = () => {
  return (
    <div>
      <YashasBanner />
      <ProjectContent />
      <Facilities />
      <Amenities />
      <ContactUs />
      <div className="md:px-20 px-4 mt-5">
        <h2 className="md:text-5xl text-3xl md:mb-10 mb-5 text-slate-400 text-center">
          FAQ
        </h2>
        <FAQComponent faqs={yashasFAQs} />
      </div>
    </div>
  );
};

export default Yashas;
