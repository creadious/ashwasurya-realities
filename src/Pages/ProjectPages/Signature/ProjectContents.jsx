import { ImCross } from "react-icons/im";

import Brochure from "../../Brochure/Brochure";
import { useState } from "react";

import signatureLogo from "../../../assets/project/Signature/logo png.png";

const ProjectContents = () => {
  const [modal, setModal] = useState(false);
  return (
    <section className="md:py-20 py-10 md:px-20 px-4 text-center">
      <div className="font-bold">
        <img src={signatureLogo} alt="logo" className="mx-auto w-48" />
      </div>
      <p className="md:w-2/3 mx-auto md:text-base text-xs mt-10">
        Welcome to Ashwasurya Signature, a prestigious BMRDA-approved, A-Khata
        project spread across 4 acres on the thriving Nelamangala-Doddaballapura
        Airport Highway. Just 5 minutes from Nelamangala, this prime location
        offers the perfect blend of rapid development, convenience, and serene
        living.
        <p className="my-2"></p>
        Designed with a focus on sustainability, the project features lush
        landscaped gardens, picturesque gazebos, and modern amenities, creating
        a harmonious environment where families can thrive in joy and
        tranquility.
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
