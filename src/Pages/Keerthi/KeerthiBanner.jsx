import bannerImageDesk from "../../assets/project/Keerthi/keerrthiDesk.png";
import bannerImageMob from "../../assets/project/Keerthi/keerthiMob.png";
import logo from "../../assets/logoash.webp";
import bannerImage from "../..//assets/project/Keerthi/bannerImage.png"
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

const KeerthiBanner = () => {
  const isMobile = () => window.innerWidth <= 767;

  return (
    <section className="md:h-[40rem] relative">
      <img
        src={isMobile() ? bannerImageMob : bannerImageDesk}
        alt=""
        className="h-full w-full object-cover object-top"
      />
      <Link to="/" className="absolute md:top-10 top-2 md:left-10 left-2">
        {" "}
        <img src={logo} alt="" className="md:w-48 w-20 mx-auto" />
      </Link>
      <div className="absolute md:right-20 md:px-0 px-2 md:top-0 bottom-5 flex flex-col md:justify-center justify-end items-center h-full text-center md:gap-10 gap-5 py-10 md:text-black text-white">
        <img src={bannerImage} alt="" className="md:w-80 w-60 object-contain md:mb-0 mb-40" />
        <p className="flex items-center justify-center gap-2 mt-3 font-bold md:text-sm text-xs">
            <FaLocationDot className="text-red-600" />
            <span>ADJACENT TO BIG BANYAN TREE, MYSORE ROAD</span>
          </p>
        <div>
          <h1 className="text-4xl font-bold">24 | 25 th th FEB 2024</h1>
        </div>
      </div>
    </section>
  );
};

export default KeerthiBanner;
