import { ImCross } from "react-icons/im";

import Brochure from "../../Brochure/Brochure";
import { useState } from "react";

import lavishLogo from "../../../assets/project/Lavish/Untitled-1.png";

const ProjectContents = () => {
  const [modal, setModal] = useState(false);
  return (
    <section className="md:py-20 py-10 md:px-20 px-4 text-center">
      <div className="font-bold">
        <img src={lavishLogo} alt="logo" className="mx-auto w-48" />
      </div>
      <p className="md:w-2/3 mx-auto md:text-base text-xs mt-10">
        This BMRDA and RERA-approved A-Khata project spans 9 acres and is
        located adjacent to the Hassan NH 75, just off Nelamangala—a thriving
        corridor of rapid growth and development. Its prime location near
        significant areas offers the perfect balance of convenience and
        tranquility. Designed with sustainability in mind, the project features
        beautifully landscaped gardens and charming gazebos, creating a
        delightful setting for families. It’s a place where joy, modern
        amenities, and nature come together in seamless harmony.
      </p>
      <div className="md:mt-16 mt-10">
        <button
          onClick={() => setModal(true)}
          className="md:text-sm text-xs font-semibold hover:bg-[#351116] hover:text-white duration-200 px-4 py-2 md:border-2 border border-[#351116]"
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
        {modal && <Brochure />}
      </div>
    </section>
  );
};

export default ProjectContents;
