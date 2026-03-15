import ProjectsFAQs from "../../../Components/ProjectsFAQs/ProjectsFAQs";
import ContactUs from "../../Home/ContactUs";
import Amenities from "./Amenities";
import FinestBanner from "./FinestBanner";
import { finestFAQs } from "./finestFAQs";
import ProjectContents from "./ProjectContents";

const Finest = () => {
  return (
    <div>
      <FinestBanner />
      <ProjectContents />
      <Amenities />
      <ContactUs />
      <ProjectsFAQs faqs={finestFAQs} />
    </div>
  );
};

export default Finest;
