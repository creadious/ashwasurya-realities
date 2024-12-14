import deskView from "../../assets/website-front-desktopview.webp";
import mobView from "../../assets/website-metarials.webp";
import logo from "../../assets/logoash.webp";

import { FaWhatsapp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

import ContactBar from "../../Components/ContactBar/ContactBar";
import { phoneNumber, whatsappNumber } from "../../Containts/Numbers";

const Banner = () => {

  const isMobile = () => window.innerWidth <= 767;

  return (
    <section>
      <div
        className="xl:h-[47rem] md:h-[35rem] h-[32rem] bg-cover relative bg-center"
        style={{ backgroundImage: `url(${isMobile() ? mobView : deskView})` }}
      >
        <div className="md:py-10 py-2 md:px-14 px-4">
          <img
            src={logo}
            alt="logo"
            className="md:w-20 w-16 md:mx-0 mx-auto md:mt-0 mt-5 md:block hidden"
          />
        </div>

        {/* <button className="absolute md:right-52 right-28 top-96 bg-yellow-500 hover:bg-yellow-600 px-4 py-1 text-lg" >Check Now</button> */}

        {/* <div className="md:w-4/5 md:absolute md:bottom-4 md:left-1/2 md:-translate-x-1/2">
          <ContactBar />
        </div> */}

        <div className="text-black text-2xl absolute right-0 top-1/2 -translate-y-1/2">
          <div className="flex flex-col gap-3">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              className="bg-yellow-500 hover:bg-[#e39968] p-3 inline-block"
            >
              <FaWhatsapp />
            </a>
            <a
              href={`tel:${phoneNumber}`}
              className="bg-yellow-500 hover:bg-[#e39968] p-3 inline-block"
            >
              <IoCall />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
