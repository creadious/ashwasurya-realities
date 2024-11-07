import ProjectContents from "./ProjectContents";
import LavishBanner from "./LavishBanner";
import Facilities from "./Facilities";
import Amenities from "./Amenities";
import ContactUs from "../../Home/ContactUs";
import ProjectsFAQs from "../../../Components/ProjectsFAQs/ProjectsFAQs";

import { lavishFAQs } from "./lavishFAQs";

const Lavish = () => {
  return (
    <div className="text-[#351116]">
      <LavishBanner />
      <ProjectContents />
      <Facilities />
      <Amenities />
      <ContactUs />
      <ProjectsFAQs faqs={lavishFAQs} />
    </div>
  );
};

export default Lavish;
