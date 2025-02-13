import bannerImageDesk from "../../../assets/project/Signature/signature-desktop.webp";
import bannerImageMob from "../../../assets/project/Signature/signature-mobile.webp";
import logo from "../../../assets/logoash.webp";
import { Link } from "react-router-dom";

const SignatureBanner = () => {
  const isMobile = () => window.innerWidth <= 767;

  return (
    <section className="md:h-auto h-[36rem] relative">
      <div className="absolute md:top-5 top-2 md:left-5 left-2">
        <Link to="/">
          <img src={logo} alt="logo" className="md:w-20 w-10 md:hidden" />
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

export default SignatureBanner;
