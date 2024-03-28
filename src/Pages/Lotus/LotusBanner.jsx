import { Link } from "react-router-dom";
import bannerImageDesk from "../../assets/project/Lotus/back destop.webp";
import bannerImageMob from "../../assets/project/Lotus/back mob.webp";
import logo from "../../assets/logoash.webp";
import { FaLocationDot } from "react-icons/fa6";

const LotusBanner = () => {
  const isMobile = () => window.innerWidth <= 767;

  return (
    <section className="md:h-[40rem] h-[32rem] relative">
      <img
        src={isMobile() ? bannerImageMob : bannerImageDesk}
        alt=""
        className="h-full w-full object-cover md:object-center"
      />
      <div className="absolute top-0 left-0 md:backdrop-brightness-100 backdrop-brightness-50 h-full w-full">
        <Link
          to="/"
          className="absolute md:top-10 top-10 md:left-44 left-1/2 md:translate-x-0 -translate-x-1/2"
        >
          <img src={logo} alt="" className="md:w-48 w-28 mx-auto" />
        </Link>

        <div className="uppercase absolute md:bottom-16 bottom-5 md:left-28 left-1/2 md:translate-x-0 -translate-x-1/2 text-center text-white md:space-y-20 space-y-5 font-bold">
          <div className="flex flex-col items-center">
            <h3 className="md:text-3xl text-xl md:tracking-[10px] tracking-[2px] font-semibold md:-mb-3 -mb-2 ms-2">
              ASHWASURYA
            </h3>
            <h1 className="md:text-8xl text-5xl">LOTUS</h1>
            <span className="bg-white md:w-full w-44 h-[1px]"></span>
            <p className="flex items-center justify-center gap-1 md:text-xl font-medium mt-1">
              <FaLocationDot className="text-red-600" /> Nelamangala
            </p>
          </div>
          <p className="md:text-2xl flex md:flex-col gap-x-1">
            <p className="text-nowrap">INVEST FOR YOUR</p> <p className="text-nowrap">LOVED ONES</p>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LotusBanner;

/*import bannerImageDesk from "../../assets/project/Keerthi/keerrthiDesk.webp";
import bannerImageMob from "../../assets/project/Keerthi/keerthiMob.png";
import logo from "../../assets/logoash.webp";
import keerthiLogo from "../..//assets/project/Keerthi/bannerImage.webp";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

const KeerthiBanner = () => {
  const isMobile = () => window.innerWidth <= 767;

  return (
    <section className="md:h-[40rem] h-[32rem] relative">
      <img
        // src={isMobile() ? bannerImageMob : bannerImageDesk}
        src={bannerImageDesk}
        alt=""
        className="h-full w-full object-cover md:object-center"
      />
      <div className="absolute top-0 left-0 md:backdrop-brightness-100 backdrop-brightness-50 h-full w-full">
        <Link to="/" className="absolute md:top-10 top-2 md:left-10 left-2">
          {" "}
          <img src={logo} alt="" className="md:w-48 w-20 mx-auto" />
        </Link>
        <div className="absolute md:right-20 right-1/2 md:translate-x-0 translate-x-1/2 md:px-0 px-2 md:top-0 bottom-0 flex flex-col md:justify-center justify-end items-center h-full text-center md:gap-6 gap-0 py-10 md:text-black text-white">
          <div>
            <img
              src={keerthiLogo}
              alt=""
              className="md:w-60 w-40 mx-auto object-contain md:mb-0 mb-10"
            />
            <h3 className="mt-2 font-bold">
              <span className="md:text-xl text-sm text-nowrap" >PRELAUNCHING</span> <br />
              <span className="md:text-4xl text-2xl -mt-2 text-nowrap">LUXURY PLOTS</span> <br />
              <span className="text-xl md:font-medium font-thin text-nowrap">OFF MYSURU ROAD</span>
            </h3>
          </div>
          <p className="flex items-center justify-center gap-2 mt-3 font-bold md:text-sm text-xs">
            <FaLocationDot className="text-red-600" />
            <span>ADJACENT TO BIG BANYAN TREE, MYSORE ROAD</span>
          </p>
          <h1 className="md:text-4xl text-2xl font-bold text-nowrap text-white">
            24 | 25 th FEB 2024
          </h1>
        </div>
      </div>
    </section>
  );
};

export default KeerthiBanner;
*/
