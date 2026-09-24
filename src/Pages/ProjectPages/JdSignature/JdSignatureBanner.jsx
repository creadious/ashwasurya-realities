import bannerImageDesk from "../../../assets/project/JdSignature/web back.jpg.webp";
import bannerImageMob from "../../../assets/project/JdSignature/mob back.jpg.webp";
import jdLogo from "../../../assets/project/JdSignature/signature logo.webp";
import logo from "../../../assets/logoash.webp";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

const JdSignatureBanner = () => {
  const isMobile = () => window.innerWidth <= 767;

  return (
    <section className="md:h-[40rem] h-[36rem] relative">
      <img
        src={isMobile() ? bannerImageMob : bannerImageDesk}
        alt=""
        className="h-full w-full object-cover md:object-center"
      />

      {/* Desktop: left-to-right black gradient overlay */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(to right, transparent 30%, rgba(0,0,0,0.65) 75%, rgba(0,0,0,0.85) 100%)",
        }}
      ></div>

      {/* Mobile: bottom-to-top black gradient overlay */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)",
        }}
      ></div>

      {/* Ashwasurya logo — top-left */}
      <Link
        to="/"
        className="absolute md:top-8 top-8 md:left-10 left-1/2 md:translate-x-0 -translate-x-1/2 z-10"
      >
        <img src={logo} alt="Ashwasurya Realities" className="md:w-40 w-24 mx-auto" />
      </Link>

      {/* JD logo + location — right-center on desktop, centered-bottom on mobile */}
      <div className="absolute md:right-20 md:top-1/2 md:-translate-y-1/2 bottom-8 left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0 text-center md:text-right text-white z-10">
        <img
          src={jdLogo}
          alt="JD Signature"
          className="md:w-[400px] w-52 md:ml-auto mx-auto md:mx-0"
        />
        <p className="flex items-center md:justify-end justify-center gap-1 md:text-base text-sm font-medium mt-3">
          <FaLocationDot className="text-red-500" />
          <span>Somanahalli, Kanakapura Road</span>
        </p>
      </div>
    </section>
  );
};

export default JdSignatureBanner;
