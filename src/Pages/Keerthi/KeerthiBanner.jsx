import bannerImageDesk from "../../assets/project/Keerthi/keerrthiDesk.png";
import bannerImageMob from "../../assets/project/Keerthi/keerthiMob.png";
import logo from "../../assets/logoash.webp";
import bannerImage from "../..//assets/project/Keerthi/bannerImage.png";
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
          <img
            src={bannerImage}
            alt=""
            className="md:w-80 w-60 object-contain md:mb-0 mb-28"
          />
          <p className="flex items-center justify-center gap-2 mt-3 font-bold md:text-sm text-xs">
            <FaLocationDot className="text-red-600" />
            <span>ADJACENT TO BIG BANYAN TREE, MYSORE ROAD</span>
          </p>
          <h1 className="md:text-4xl text-2xl font-bold text-nowrap">
            24 | 25 th FEB 2024
          </h1>
        </div>
      </div>
    </section>
  );
};

export default KeerthiBanner;
