import React from "react";
import ProjectsBanner from "../../Components/ProjectsBanner/ProjectsBanner";
import ContactUs from "../Home/ContactUs";
import Amenities from "./Amenities";
import ProjectContents from "./ProjectContents";
import Facilities from "./Facilities";
import ProjectsFAQs from "../../Components/ProjectsFAQs/ProjectsFAQs";
import { atharvaFAQs } from "./AtharvaFAQs";

import bannerImageMob from "../../assets/project/atharva.png";
import bannerImageDesk from "../../assets/project/atharva-desktop.png";

const Atharva = () => {
  const data = {
    bannerImageDesk,
    bannerImageMob,
    projectName: "ATHARVA RITEWAY",
    projectLocation: "OFF MYSORE ROAD",
    tagLine: (
      <>
        CRAFTING HAPPINESS <br />
        IN EVERY PLOTS
      </>
    ),
  };

  return (
    <div>
      <ProjectsBanner data={data} />
      <ProjectContents />
      <Facilities />
      <Amenities />
      <ContactUs />
      <ProjectsFAQs faqs={atharvaFAQs} />
    </div>
  );
};

export default Atharva;
