import icon1 from "../../../assets/project/Lotus/icon 1.webp";
import icon2 from "../../../assets/project/Lotus/icon 2.webp";
import icon3 from "../../../assets/project/Lotus/icon 3.webp";
import icon4 from "../../../assets/project/Lotus/icon 4.webp";
import icon5 from "../../../assets/project/Lotus/icon 5.webp";

const Facilities = () => {
  return (
    <section className="md:py-12 pt-10 pb-16 md:px-20 px-4 grid md:grid-cols-2 grid-cols-1">
      <div className="mx-auto md:space-y-5 space-y-2 md:mb-5 mb-10">
        {/* 1 part */}
        <div className="flex justify-start items-center gap-5">
          <img
            src={icon1}
            alt="icon"
            className="md:w-16 md:h-16 h-10 w-10 object-contain"
          />
          <div className="w-full">
            <h2 className="md:text-sm text-xs font-bold text-sky-950">
              ACCESS TO AIRPORT
            </h2>
            <p className="md:text-sm text-xs">
              Just 2 minutes drive from Nelamangala to International Airport
              Highway
            </p>
            <span className="md:h-1 h-[1px] md:mt-5 mt-3 w-full block bg-black"></span>
          </div>
        </div>
        {/* 2 part */}
        <div className="flex justify-start items-center gap-5">
          <img
            src={icon2}
            alt="icon"
            className="md:w-16 md:h-16 h-10 w-10 object-contain"
          />
          <div className="w-full">
            <h2 className="md:text-sm text-xs font-bold text-sky-950">
              PREMIUM LOCATION
            </h2>
            <p className="md:text-sm text-xs">
              Attached to Indian Navy Commander Cheif Staff Head Quaters Land
            </p>
            <span className="md:h-1 h-[1px] md:mt-5 mt-3 w-full block bg-black"></span>
          </div>
        </div>
        {/* 3 part */}
        <div className="flex justify-start items-center gap-5">
          <img
            src={icon3}
            alt="icon"
            className="md:w-16 md:h-16 h-10 w-10  object-contain"
          />
          <div className="w-full">
            <h2 className="md:text-sm text-xs font-bold text-sky-950">
              ZONAL DEVELOPMENT
            </h2>
            <p className="md:text-sm text-xs">
              Very near to the upcoming infrastructural development like SEZ
            </p>
            <span className="md:h-1 h-[1px] md:mt-5 mt-3 w-full block bg-black"></span>
          </div>
        </div>
        {/* 4 part */}
        <div className="flex justify-start items-center gap-5">
          <img
            src={icon4}
            alt="icon"
            className="md:w-16 md:h-16 h-10 w-10 object-contain"
          />
          <div className="w-full">
            <h2 className="md:text-sm text-xs font-bold text-sky-950">
              ACCESSIBILITY
            </h2>
            <p className="md:text-sm text-xs">
              Close proximity to Railway Station and Bus Stop
            </p>
            <span className="md:h-1 h-[1px] md:mt-5 mt-3 w-full block bg-black"></span>
          </div>
        </div>
        {/* 5 part */}
        <div className="flex justify-start items-center gap-5">
          <img
            src={icon5}
            alt="icon"
            className="md:w-16 md:h-16 h-10 w-10  object-contain"
          />
          <div className="w-full">
            <h2 className="md:text-sm text-xs font-bold text-sky-950">
              VICINITY
            </h2>
            <p className="md:text-sm text-xs">
              Near to School, Hospital, Industrial Area and many more.
            </p>
            <span className="md:h-1 h-[1px] md:mt-5 mt-3 w-full block bg-sky-950"></span>
          </div>
        </div>
      </div>
      <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d56246.39632090158!2d77.3642166!3d13.1848823!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae27001a1e7539%3A0xaef6798c66be35e3!2sAshwasurya%20Yashas!5e1!3m2!1sen!2sin!4v1753361147122!5m2!1sen!2sin" className="w-full h-full" allowfullscreen="" loading="lazy" ></iframe>
      </div>
    </section>
  );
};

export default Facilities;
