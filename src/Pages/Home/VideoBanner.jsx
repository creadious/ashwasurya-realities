import logo from "../../assets/logoash.webp";
import videoBannerDesk from "../../assets/Video/bannerVideoDesk.mp4";
import videoBannerMob from "../../assets/Video/bannerVideoMob.mp4";

const VideoBanner = () => {
  const isMobile = () => window.innerWidth <= 767;
  return (
    <section className="relative md:h-screen h-[27rem] banner-video overflow-hidden">
      <video
        className="object-cover object-center md:-mt-10 w-full h-full "
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src={isMobile() ? videoBannerMob : videoBannerDesk}
          type="video/mp4"
        />
      </video>
      <div className="absolute top-0 z-20">
        <div className="md:px-14 px-4 mt-5">
          <img src={logo} alt="" className="md:w-44 w-20" />
        </div>
      </div>
    </section>
  );
};

export default VideoBanner;
/*
 <section className="relative md:h-screen h-[25rem] overflow-hidden">


      <video
        className="absolute inset-0 object-cover object-top w-full h-auto banner-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src={isMobile() ? videoBannerMob : videoBannerDesk}
          type="video/mp4"
        />
      </video>


      <div className="relative z-20">

        <div className="md:px-14 px-4">
          <img src={logo} alt="" className="md:w-44 w-20" />
        </div>
      </div>
    </section>
*/
