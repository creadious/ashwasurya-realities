import ProjectsFAQs from "../../../Components/ProjectsFAQs/ProjectsFAQs";
import ContactUs from "../../Home/ContactUs";
import ProjectContents from "./ProjectContents";
import Amenities from "./Amenities";
import Gallery from "./Gallery";
import JdSignatureBanner from "./JdSignatureBanner";
import { jdSignatureFAQs } from "./jdSignatureFAQs";

const JdSignature = () => {
  return (
    <div>
      <JdSignatureBanner />
      <ProjectContents />
      <Amenities />
      <Gallery />
      <ContactUs />
      <ProjectsFAQs faqs={jdSignatureFAQs} />
    </div>
  );
};

export default JdSignature;
