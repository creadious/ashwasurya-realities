import { ImCross } from "react-icons/im";

import Brochure from "../../Brochure/Brochure";
import { useState } from "react";

import jdSignatureLogo from "../../../assets/project/JdSignature/signature logo.webp";

const highlights = [
  { value: "120", label: "Residential Plots" },
  { value: "1200 sq.ft.", label: "30 x 40 & Larger Dimensions" },
  { value: "03", label: "Landscaped Parks" },
  { value: "40ft & 30ft", label: "Internal White Top Roads" },
  { value: "BMRDA", label: "& RERA Approved" },
];

const ProjectContents = () => {
  const [modal, setModal] = useState(false);
  return (
    <section className="md:py-20 py-10 md:px-20 px-4 text-center bg-[#351116] text-white">
      <div className="font-bold">
        <img
          src={jdSignatureLogo}
          alt="JD Signature"
          className="mx-auto md:w-56 w-40"
        />
      </div>
      <p className="md:w-2/3 mx-auto md:text-base text-xs mt-10 text-gray-300">
        Welcome to JD Signature, a thoughtfully planned plotted community at
        Somanahalli, on Kanakapura Road, created for those who see land as more
        than an investment, as a meaningful step towards their future.
      </p>
      <p className="md:w-2/3 mx-auto md:text-base text-xs mt-4 text-gray-300">
        JD Signature brings together thoughtfully planned plots, open spaces and
        a well-structured neighbourhood in a part of South Bengaluru that offers
        both everyday liveability and long-term relevance.
      </p>
      <p className="md:w-2/3 mx-auto md:text-lg text-sm mt-4 italic text-[#C5A059]">
        Designed for future homes. Chosen for lasting value.
      </p>

      <div className="md:mt-16 mt-10 md:w-5/6 mx-auto grid md:grid-cols-5 grid-cols-2 md:gap-0 gap-6 border-y border-white/20 md:py-8 py-6">
        {highlights.map(({ value, label }) => (
          <div
            key={label}
            className="md:border-r md:last:border-r-0 border-white/20 md:px-2"
          >
            <h3 className="md:text-2xl text-lg font-semibold text-[#C5A059]">
              {value}
            </h3>
            <p className="md:text-xs text-[10px] uppercase tracking-wider text-gray-400 mt-1">
              {label}
            </p>
          </div>
        ))}
      </div>

      <div className="md:mt-16 mt-10">
        <button
          onClick={() => setModal(true)}
          className="md:text-sm text-xs font-semibold hover:bg-[#C5A059] hover:text-white duration-200 px-4 py-2 md:border-2 border border-[#C5A059] text-[#C5A059]"
        >
          DOWNLOAD BROCHURE
        </button>
      </div>
      <div
        className={`bg-white fixed h-screen md:w-1/2 w-full top-0 shadow-2xl duration-500 p-5 z-50 ${
          modal ? "left-0" : "-left-[100rem]"
        }`}
      >
        <button
          onClick={() => setModal(false)}
          className="absolute left-5 top-5 hover:text-slate-600 text-black"
          title="close"
        >
          <ImCross />
        </button>
        <div className="text-black">
        {modal && <Brochure project={`JD Signature`} />}
        </div>
      </div>
    </section>
  );
};

export default ProjectContents;
