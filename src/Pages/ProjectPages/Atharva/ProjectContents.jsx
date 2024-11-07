import { ImCross } from "react-icons/im";
import { FaLocationDot } from "react-icons/fa6";
import Brochure from "../../Brochure/Brochure";
import { useState } from "react";

const ProjectContents = () => {
  const [modal, setModal] = useState(false);
  return (
    <section className="md:py-20 py-10 md:px-20 px-4 text-center">
      <div className="font-bold">
        <h4 className="md:text-2xl">ASHWASURYA</h4>
        <h2 className="md:text-4xl text-2xl border-b-2 px-2 inline-block border-black">
          ATHARVA RITEWAY
        </h2>
        <p className="flex items-center justify-center gap-2 mt-3 md:text-lg text-sm">
          <FaLocationDot className="text-red-600" />
          <span>OFF MYSORE ROAD</span>
        </p>
      </div>
      <p className="md:w-2/3 mx-auto md:text-base text-xs mt-10">
        is a BMICAPA and RERA Approved A Khata 20Acres Project located off
        Mysore Road, a bustling corridor witnessing significant and rapid
        development. The site's strategic location near key areas represents a
        blend of joy and sustainability, featuring meticulously designed
        landscapes and charming gazebos
      </p>
      <div className="md:mt-16 mt-10">
        <button
          onClick={() => setModal(true)}
          className="md:text-sm text-xs font-semibold hover:bg-black hover:text-white duration-200 px-4 py-2 md:border-2 border border-black"
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
