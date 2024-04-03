import logo from "../../assets/logoash.webp";
import videoBannerDesk from "../../assets/Video/bannerVideoDesk.mp4";
import videoBannerMob from "../../assets/Video/bannerVideoMob.mp4";


const VideoBanner = () => {
  const isMobile = () => window.innerWidth <= 767;
  return (
    <section className="relative md:h-screen h-[25rem] overflow-hidden">
      {/* Background image */}
      {/* <div
    className="absolute inset-0 bg-cover bg-center z-0"
    style={{ backgroundImage: 'url(/path/to/background-image.jpg)' }}
  ></div>
   */}
      {/* Video */}
      <video
        className="absolute inset-0 object-cover object-top w-screen h-full banner-video"
        src={isMobile() ? videoBannerMob : videoBannerDesk}
        autoPlay
        loop
        muted
        playsInline
      >
        {/* <source
          type="video/mp4"
        /> */}
      </video>

      {/* Content */}
      <div className="relative z-20">
        {/* Your content goes here */}
        <div className="md:py-10 py-2 md:px-14 px-4">
          <img src={logo} alt="" className="md:w-44 w-20" />
        </div>
      </div>
    </section>
  );
};

export default VideoBanner;
