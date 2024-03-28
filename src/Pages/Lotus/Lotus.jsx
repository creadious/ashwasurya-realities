import React from "react";
import LotusBanner from "./LotusBanner";
import ProjectContents from "./ProjectContents";
import ContactUs from "../Home/ContactUs";
import Amenities from "./Amenities";
import Facilities from "./Facilities";

const Lotus = () => {

  return (
    <div>
      <LotusBanner />
      <ProjectContents/>
      <Facilities/>
      <Amenities/>
      <ContactUs/>
    </div>
  );
};

export default Lotus;
