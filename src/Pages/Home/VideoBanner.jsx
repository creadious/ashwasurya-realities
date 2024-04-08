import logo from "../../assets/logoash.webp";
import videoBannerDesk from "../../assets/Video/bannerVideoDesk.mp4";
import videoBannerMob from "../../assets/Video/bannerVideoMob.mp4";


import { FaWhatsapp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const VideoBanner = () => {
  
  const phoneNumber = "+918217267159";
  const whatsappNumber = "918217267159";

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
      <div className='text-black text-2xl absolute right-0 top-1/2 -translate-y-1/2'>
                    <div className='flex flex-col gap-3'>
                        <a href={`https://wa.me/${whatsappNumber}`} className='bg-white hover:bg-[#e39968] p-3 inline-block'>
                            <FaWhatsapp />
                        </a>
                        <a href={`tel:${phoneNumber}`} className='bg-white hover:bg-[#e39968] p-3 inline-block'>
                            <IoCall />
                        </a>
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
