import ProjectsFAQs from "../../../Components/ProjectsFAQs/ProjectsFAQs";
import ContactUs from "../../Home/ContactUs";
import ProjectContents from "../Signature/ProjectContents";
import Amenities from "./Amenities";
import SignatureBanner from "./SignatureBanner";
import { signatureFAQs } from "./signatureFAQs";

const Signature = () => {
  return (
    <div>
      <SignatureBanner />
      <ProjectContents />
      <Amenities />
      <ContactUs />
      <ProjectsFAQs faqs={signatureFAQs} />
    </div>
  );
};

export default Signature;
