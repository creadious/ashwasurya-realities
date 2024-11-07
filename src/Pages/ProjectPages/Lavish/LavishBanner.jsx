import bannerImageDesk from "../../../assets/project/Lavish/desk web.webp";
import bannerImageMob from "../../../assets/project/Lavish/mob web.webp";
import logo from "../../../assets/logoash.webp";
import keerthiLogo from "../../../assets/project/Keerthi/bannerImage.webp";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

const KeerthiBanner = () => {
  const isMobile = () => window.innerWidth <= 767;

  return (
    <section className="md:h-auto h-[32rem] relative">
      <img
        src={isMobile() ? bannerImageMob : bannerImageDesk}
        // src={bannerImageDesk}
        alt=""
        className="h-full w-full object-cover md:object-center"
      />
    </section>
  );
};

export default KeerthiBanner;
