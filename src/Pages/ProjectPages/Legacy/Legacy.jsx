import ProjectsFAQs from "../../../Components/ProjectsFAQs/ProjectsFAQs";
import ContactUs from "../../Home/ContactUs";
import ProjectContents from "../Legacy/ProjectContents";
import Amenities from "./Amenities";
import LegacyBanner from "./LegacyBanner";
import { legacyFAQs } from "./legacyFAQs";

const Legacy = () => {
  return (
    <div>
      <LegacyBanner />
      <ProjectContents />
      <Amenities />
      <ContactUs />
      <ProjectsFAQs faqs={legacyFAQs} />
    </div>
  );
};

export default Legacy;
