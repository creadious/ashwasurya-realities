import KeerthiBanner from "./KeerthiBanner"
import ProjectContents from "./ProjectContents";
import Facilities from "./Facilities";
import Amenities from "./Amenities";
import ContactUs from "../../Home/ContactUs";
import ProjectsFAQs from "../../../Components/ProjectsFAQs/ProjectsFAQs";
import { kreethiFAQs } from "./kreethiFAQs";

const Keerthi = () => {
  return (
    <div className="text-[#351116]" >
      <KeerthiBanner />
      <ProjectContents/>
      <Facilities/>
      <Amenities/>
      <ContactUs/>
      <ProjectsFAQs faqs={kreethiFAQs} />
    </div>
  );
};

export default Keerthi;
