import deskView from "../../assets/website-front-desktopview.webp";
import mobView from "../../assets/website-metarials.webp";
import logo from "../../assets/logoash.webp";

import { FaWhatsapp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

import ContactBar from "../../Components/ContactBar/ContactBar";

const Banner = () => {
  const phoneNumber = "+918549964996";
  const whatsappNumber = "919986157030";

  const isMobile = () => window.innerWidth <= 767;

  console.log(isMobile)

  return (
    <section>
      <div
        className="xl:h-[50rem] lg:h-[35rem] sm:h-[37rem] h-[25rem] bg-cover relative bg-center"
        style={{ backgroundImage: `url(${isMobile() ? mobView : deskView})` }}
      >
        <div className="md:py-10 py-2 md:px-14 px-4">
          <img
            src={logo}
            alt=""
            className="w-16 md:mx-0 mx-auto md:mt-0 mt-5"
          />
        </div>

        {/* <div className="md:w-4/5 md:absolute md:bottom-4 md:left-1/2 md:-translate-x-1/2">
          <ContactBar />
        </div> */}

        <div className="text-black text-2xl absolute right-0 top-1/2 -translate-y-1/2">
          <div className="flex flex-col gap-3">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              className="bg-[#985527] hover:bg-[#e39968] p-3 inline-block"
            >
              <FaWhatsapp />
            </a>
            <a
              href={`tel:${phoneNumber}`}
              className="bg-[#985527] hover:bg-[#e39968] p-3 inline-block"
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
