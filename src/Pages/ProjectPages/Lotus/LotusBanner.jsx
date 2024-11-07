import { Link } from "react-router-dom";
import bannerImageDesk from "../../../assets/project/Lotus/back destop.webp";
import bannerImageMob from "../../../assets/project/Lotus/back mob.webp";
import logo from "../../../assets/logoash.webp";
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
          <p className="md:text-2xl text-nowrap">
            <span>INVEST FOR YOUR</span>
            <p className="md:block hidden" ></p>
            <span> LOVED ONES</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LotusBanner;

