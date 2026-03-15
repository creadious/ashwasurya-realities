import { ImCross } from "react-icons/im";

import Brochure from "../../Brochure/Brochure";
import { useState } from "react";

import logo from "../../../assets/project/Finest/finest-logo.webp";

const ProjectContents = () => {
  const [modal, setModal] = useState(false);
  return (
    <section className="md:py-20 py-10 md:px-20 px-4 text-center">
      <div className="font-bold">
        <img src={logo} alt="logo" className="mx-auto w-48" />
      </div>
      <p className="md:w-2/3 mx-auto md:text-base text-xs mt-10">
        Welcome to Ashwasurya Finest, a boutique BMRDA-approved, A-Khata plotted
        development crafted for those who value space, serenity, and
        exclusivity.
        <p className="my-2"></p>
        Spread across 3.5 acres, at Harohalli, just 2 minutes o Kanakapura Road,
        this limited-edition community oers only 55 premium plots, ensuring a
        neighbourhood that feels private, peaceful, and deeply personal.
        Designed with lush green pockets, thoughtfully planned internal roads,
        and modern infrastructure, Ashwasurya Finest isn't just another ploed
        layout. It’s an intimate community built around the luxury of less.
      </p>
      <div className="md:mt-16 mt-10">
        <button
          onClick={() => setModal(true)}
          className="md:text-sm text-xs font-semibold hover:bg-[#351116] hover:text-white duration-200 px-4 py-2 md:border-2 border border-[#351116] hidden"
        >
          DOWNLOAD BROCHURE
        </button>
      </div>
      <div
        className={`bg-white fixed h-screen md:w-1/2 w-full top-0 shadow-2xl duration-500 p-5 ${
          modal ? "left-0" : "-left-[100rem]"
        }`}
      >
        <button
          onClick={() => setModal(false)}
          className="absolute left-5 top-5 hover:text-slate-600"
          title="close"
        >
          <ImCross />
        </button>
        {modal && <Brochure project={`Ashwasurya Finest`} />}
      </div>
    </section>
  );
};

export default ProjectContents;
