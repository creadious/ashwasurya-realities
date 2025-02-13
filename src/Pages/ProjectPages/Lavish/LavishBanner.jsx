import bannerImageDesk from "../../../assets/project/Lavish/desk web.webp";
import bannerImageMob from "../../../assets/project/Lavish/mob web.webp";
import logo from "../../../assets/logoash.webp";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

const LavishBanner = () => {
  const isMobile = () => window.innerWidth <= 767;

  return (
    <section className="md:h-auto h-[32rem] relative">
      <div className="absolute md:top-5 top-2 md:left-5 left-2">
        <Link to="/">
          <img src={logo} alt="logo" className="md:w-20 w-10" />
        </Link>
      </div>
      <img
        src={isMobile() ? bannerImageMob : bannerImageDesk}
        // src={bannerImageDesk}
        alt=""
        className="h-full w-full object-cover md:object-center"
      />
    </section>
  );
};

export default LavishBanner;
