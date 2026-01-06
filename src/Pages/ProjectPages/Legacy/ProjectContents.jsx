import { ImCross } from "react-icons/im";

import Brochure from "../../Brochure/Brochure";
import { useState } from "react";

import signatureLogo from "../../../assets/project/Legacy/legacy-logo.webp";

const ProjectContents = () => {
  const [modal, setModal] = useState(false);
  return (
    <section className="md:py-20 py-10 md:px-20 px-4 text-center">
      <div className="font-bold">
        <img src={signatureLogo} alt="logo" className="mx-auto w-48" />
      </div>
      <p className="md:w-2/3 mx-auto md:text-base text-xs mt-10">
        Discover Ashwasurya Legacy, a premium 16-acre gated plotted development
        located along the Nelamangala–Doddaballapura Highway. With 245 well-laid
        plots, 45% open spaces, and thoughtfully planned infrastructure, this is
        where comfort meets connectivity and land becomes a lasting legacy.
        <p className="my-2"></p>
        Build Your Legacy on the New Growth Corridor <br /> Land remains the purest and
        most enduring form of wealth — appreciating steadily as cities expand.
        In Bengaluru’s fast-developing western belt, plotted developments like
        Ashwasurya Legacy are becoming prized possessions for both end-users and
        investors. <br /> At Ashwasurya Legacy, you’re not just buying land — you’re
        securing a foundation for generations to come.
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
