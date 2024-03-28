import logo from "../../assets/logoash.webp";
import videoBannerDesk from "../../assets/Video/bannerVideoDesk.mp4";
import videoBannerMob from "../../assets/Video/bannerVideoMob.mp4";
import ContactBar from "../../Components/ContactBar/ContactBar";

const VideoBanner = () => {
    const isMobile = () => window.innerWidth <= 767;
  return (
    <section className="relative h-screen">
      {/* Background image */}
      {/* <div
    className="absolute inset-0 bg-cover bg-center z-0"
    style={{ backgroundImage: 'url(/path/to/background-image.jpg)' }}
  ></div>
   */}
      {/* Video */}
      <video
        className="absolute inset-0 object-cover w-full h-full z-10"
        autoPlay
        loop
        muted
        playsInline
      >
        <source 
                 src={isMobile() ? videoBannerMob : videoBannerDesk}type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative z-20">
        {/* Your content goes here */}
        <div className="md:py-10 py-2 md:px-14 px-4">
          <img
            src={logo}
            alt=""
            className="md:w-44 w-36 md:mx-0 mx-auto md:mt-0 mt-10"
          />
        </div>
      </div>
      <div className="md:w-11/12 absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
        <ContactBar />
      </div>
    </section>
  );
};

export default VideoBanner;
