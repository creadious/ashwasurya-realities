import logo from "../../assets/logoash.webp";

import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ProjectsBanner = ({ data }) => {
  const {
    bannerImageDesk,
    bannerImageMob,
    projectName,
    projectLocation,
    tagLine,
  } = data;

  const isMobile = () => window.innerWidth <= 767;

  return (
    <section className="md:h-[40rem] relative">
      <img
        src={isMobile() ? bannerImageMob : bannerImageDesk}
        alt=""
        className="h-full w-full object-cover object-top"
      />
      <div className="absolute right-20 top-0 md:flex hidden flex-col justify-around items-center h-full text-center gap-10 text-white py-10">
        <Link to="/">
          {" "}
          <img src={logo} alt="" className="w-60 mx-auto" />
        </Link>
        <div className="font-bold">
          <h4 className="md:text-2xl">ASHWASURYA</h4>
          <h2 className="md:text-4xl text-2xl border-b-2 px-2 inline-block border-white">
            {projectName}
          </h2>
          <p className="flex items-center justify-center gap-2 mt-3 md:text-lg text-sm">
            <FaLocationDot className="text-red-600" />
            <span>{projectLocation}</span>
          </p>
        </div>
        <div>
          <h1 className="text-4xl font-bold">{tagLine}</h1>
        </div>
      </div>
    </section>
  );
};

export default ProjectsBanner;
