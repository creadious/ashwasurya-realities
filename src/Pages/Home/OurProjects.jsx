import { BiSolidRightArrow } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

import image1 from "../../assets/ruthvi.webp";
import image2 from "../../assets/destiny.webp";
import image3 from "../../assets/keerthi.webp";
import image4 from "../../assets/atharva.webp";
import image5 from "../../assets/lotus.webp";

import keerthiLogo from "../../assets/project/Keerthi/bannerImage.webp";

const OurProjects = () => {
  return (
    <section className="py-10 md:px-20 px-4">
      <h2 className="md:text-5xl text-3xl md:mb-10 mb-5 md:text-right">
        OUR <span className="text-slate-400">PROJECTS</span>
      </h2>
      <div className="grid md:grid-cols-3 grid-cols-2 md:grid-rows-4 md:gap-5 gap-1 md:text-base text-xs">
        <Link
          to={`/maintenance`}
          className="min-h-24 relative col-span-2 overflow-hidden"
        >
          <img
            src={image1}
            alt=""
            className="w-full h-full hover:scale-105 duration-200 object-cover"
          />
          <div className="absolute text-sm md:bottom-2 md:right-2 bottom-1 right-1">
            <Link
              to={`/maintenance`}
              className="flex items-center gap-1 hover:outline outline-1 hover:bg-white px-2 py-1 md:text-base text-[10px]"
            >
              EXPLORE <BiSolidRightArrow className="text-slate-500" />
            </Link>
          </div>
          {/* text contents start 1 */}
          <div className="absolute md:right-5 md:top-5 top-2 right-2">
            <div className="text-center font-bold">
              <p className="md:text-lg text-[10px] md:-mb-3 -mb-2">
                ASHWASURYA
              </p>
              <h2 className="md:text-4xl text-lg">RUTHVI</h2>
            </div>
            <div className="flex items-center justify-center md:text-xs text-[6px] gap-1 md:mt-2 -mt-1">
              <FaLocationDot className="text-red-700" />
              <span>NELAMANGALA</span>
            </div>
          </div>
          <div className="absolute md:bottom-5 bottom-2 left-1/2 -translate-x-1/2">
            <h2 className="md:text-2xl font-bold md:leading-5 leading-3">
              EMBRACE THOSE <br /> MOMENTS & LIVE FULLY
            </h2>
          </div>
          {/* text contents end 1 */}
        </Link>
        <Link
          to={`/maintenance`}
          className="min-h-48 relative row-span-4 overflow-hidden"
        >
          <img
            src={image2}
            alt=""
            className="w-full h-full hover:scale-105 duration-200 object-cover"
          />
          <div className="absolute text-sm md:bottom-2 md:right-2 bottom-1 right-1">
            <Link
              to={`/maintenance`}
              className="flex items-center gap-1 hover:outline outline-1 text-white hover:text-black hover:bg-white px-2 py-1 md:text-base text-[10px]"
            >
              EXPLORE <BiSolidRightArrow className="text-slate-500" />
            </Link>
          </div>
          {/* text contents start 2 */}
          <div className="absolute left-1/2 -translate-x-1/2 top-5 text-white">
            <div className="text-center font-bold">
              <p className="md:text-xl text-xs md:-mb-2 -mb-1">ASHWASURYA</p>
              <h2 className="md:text-3xl text-lg text-nowrap">DESTINY FARM</h2>
            </div>
            <div className="flex items-center justify-center gap-1 md:mt-3 mt-2">
              <FaLocationDot className="text-red-700" />
              <span>MADDUR</span>
            </div>
          </div>
          <div className="absolute md:bottom-28 bottom-10 md:left-5 left-2 text-white">
            <h2 className="md:text-2xl text-[10px] font-bold md:leading-5 leading-3">
              UNEARTH THE MAGIC <br /> OF OUR FARM LAND.
            </h2>
          </div>
          {/* text contents end 2 */}
        </Link>
        <Link
          to={`/projects/keerthi`}
          className="relative md:row-span-2 overflow-hidden"
        >
          <img
            src={image3}
            alt=""
            className="w-full h-full hover:scale-105 duration-200 object-cover"
          />
          <div className="absolute text-sm md:bottom-2 md:right-2 bottom-0 right-0">
            <Link
              to={`/projects/keerthi`}
              className="flex items-center gap-1 hover:outline outline-1 text-white hover:text-black hover:bg-white px-2 py-1 md:text-base text-[10px]"
            >
              EXPLORE <BiSolidRightArrow className="text-slate-300" />
            </Link>
          </div>

          {/* text contents start 3 */}
          <div className="absolute md:left-5 left-2 md:top-5 top-2 text-white">
            {/* <div className="text-center md:font-bold font-semibold">
                            <p className="md:text-lg text-[10px] md:-mb-2 -mb-1">ASHWASURYA</p>
                            <h2 className="md:text-4xl text-[14px]">JYESTA</h2>
                        </div>
                        <div className="flex items-center justify-center gap-1 md:mt-3">
                            <FaLocationDot className="text-red-700" />
                            <span>
                                KANAKAPURA
                            </span>
                        </div> */}
            <img src={keerthiLogo} alt="logo" className="md:w-36 w-12" />
          </div>
          <div className="absolute md:bottom-20 bottom-5 md:left-5 left-2 text-white md:block">
            <h2 className="md:text-2xl text-[10px] font-bold md:leading-5 leading-0">
              <p className="md:text-xl text-nowrap">PRELAUNCHING</p> <br />
              <p className="md:text-4xl text-sm md:-my-7 -my-5 text-nowrap">LUXURY PLOTS</p> <br />
              <p className="md:text-xl text-xs md:font-medium font-thin text-nowrap">
                OFF MYSURU ROAD
              </p>
            </h2>
          </div>
          {/* text contents end 3 */}
        </Link>
        <Link
          to={`/projects/atharva`}
          className="min-h- relative row-span-3 overflow-hidden"
        >
          <img
            src={image4}
            alt=""
            className="w-full h-full hover:scale-105 duration-200 object-cover"
          />
          <div className="absolute text-sm md:bottom-2 md:right-2 bottom-1 right-1">
            <Link
              to={`/projects/atharva`}
              className="flex items-center gap-1 hover:outline outline-1 text-white hover:text-black hover:bg-white px-2 py-1 md:text-base text-[10px]"
            >
              EXPLORE <BiSolidRightArrow className="text-slate-500" />
            </Link>
          </div>
          {/* text contents start 4 */}
          <div className="absolute left-1/2 -translate-x-1/2 md:top-5 top-2 text-white">
            <div className="text-center font-bold">
              <p className="md:text-lg text-xs md:-mb-2 -mb-1">ASHWASURYA</p>
              <h2 className="md:text-4xl text-sm text-nowrap">
                ATHARVA RITEWAY
              </h2>
            </div>
            <div className="flex items-center justify-center gap-1 md:mt-3">
              <FaLocationDot className="text-red-700" />
              <span>OFF MYSORE ROAD</span>
            </div>
          </div>
          <div className="absolute md:bottom-28 bottom-10 md:left-5 left-2 text-white">
            <h2 className="md:text-3xl text-[10px] font-bold md:leading-6 leading-3">
              CRAFTING HAPPINESS <br /> IN EVERY PLOTS
            </h2>
          </div>
          {/* text contents end 4 */}
        </Link>
        <Link
          to={`/projects/lotus`}
          className="relative overflow-hidden md:col-span-1 col-span-2"
        >
          <img
            src={image5}
            alt=""
            className="w-full h-full hover:scale-105 duration-200 object-cover"
          />
          <div className="absolute text-sm md:bottom-2 md:right-2 bottom-1 right-1">
            <Link
              to={`/projects/lotus`}
              className="flex items-center gap-1 hover:outline outline-1 text-slate-200 hover:text-black hover:bg-white px-2 py-1 md:text-base text-[10px]"
            >
              EXPLORE <BiSolidRightArrow className="text-slate-200" />
            </Link>
          </div>
          {/* text contents start 5 */}
          <div className="absolute md:left-5 left-2 md:top-5 top-2 text-white">
            <div className="text-center font-bold">
              <p className="md:text-sm text-xs md:-mb-2 -mb-1">ASHWASURYA</p>
              <h2 className="md:text-3xl text-2xl text-nowrap">LOTUS</h2>
            </div>
            <div className="flex items-center justify-center gap-1 md:mt-3 mt-2 md:text-xs text-[8px]">
              <FaLocationDot className="text-red-700" />
              <span>NELAMANGALA</span>
            </div>
          </div>
          <div className="absolute md:bottom-5 bottom-2 md:left-5 left-2 text-white">
            <h2 className="md:text-2xl font-bold md:leading-6 leading-3">
              INVEST WISELY <br />
              FOR YOUR LOVED ONES
            </h2>
          </div>
          {/* text contents end 5 */}
        </Link>
      </div>
      <div className="md:mt-14 mt-8 grid place-content-center">
        <Link
          to={`/projects`}
          className="flex items-center gap-1 outline outline-1 hover:bg-black hover:text-white px-5 py-1 text-lg"
        >
          VIEW ALL
        </Link>
      </div>
    </section>
  );
};

export default OurProjects;
