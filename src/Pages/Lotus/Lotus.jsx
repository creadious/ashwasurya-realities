import React from "react";
import LotusBanner from "./LotusBanner";
import ProjectContents from "./ProjectContents";
import ContactUs from "../Home/ContactUs";
import Amenities from "./Amenities";
import Facilities from "./Facilities";
import FAQComponent from "../../Components/FAQComponent/FAQComponent";
import { lotusFAQs } from "./lotusFAQs";

const Lotus = () => {
  return (
    <div>
      <LotusBanner />
      <ProjectContents />
      <Facilities />
      <Amenities />
      <ContactUs />
      <div className="md:px-20 px-4 mt-5">
        <h2 className="md:text-5xl text-3xl md:mb-10 mb-5 text-slate-400 text-center">
          FAQ
        </h2>
        <FAQComponent faqs={lotusFAQs} />
      </div>
    </div>
  );
};

export default Lotus;
