import { Link } from "react-router-dom";
import bannerImageDesk from "../../../assets/project/Yashas/Yashas-Desk.webp";
import bannerImageMob from "../../../assets/project/Yashas/Yashas-Phone.webp";
import logo from "../../../assets/logoash.webp";
import { FaLocationDot } from "react-icons/fa6";
import projectLogo from "../../../assets/project/Yashas/logo-yashas.webp";

const YashasBanner = () => {
  const isMobile = () => window.innerWidth <= 767;

  return (
    <section className="h-screen relative">
      <img
        src={isMobile() ? bannerImageMob : bannerImageDesk}
        alt=""
        className="h-full w-full object-cover md:object-top"
      />
      <div className="absolute top-0 left-0 h-full w-full">
        <Link to="/" className="absolute md:top-8 top-8 md:left-14 left-8">
          <img src={logo} alt="logo" className="md:w-40 w-24 mx-auto" />
        </Link>

        <div className="uppercase absolute text-white md:top-1/2 md:-translate-y-20 md:left-28 bottom-20 left-1/2 -translate-x-1/2 md:translate-x-0 md:space-y-10 space-y-5 md:w-auto w-full">
          <div className="flex flex-col items-center">
            <img
              src={projectLogo}
              alt="Image"
              className="md:h-32 h-28 object-contain"
            />
            <p className="flex items-center justify-center gap-1 md:text-xl font-medium mt-1">
              <FaLocationDot className="text-red-600" /> Nelamangala
            </p>
          </div>
          <p className="md:text-2xl text-center">
            Live Closer to <span className="font-bold">Nature,</span> <br />
            WIthout Leaving the <span className="font-bold">City</span> Behind.
          </p>
        </div>
      </div>
    </section>
  );
};

export default YashasBanner;
