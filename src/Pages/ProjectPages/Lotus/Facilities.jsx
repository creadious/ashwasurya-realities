import icon1 from "../../../assets/project/Lotus/icon 1.webp";
import icon2 from "../../../assets/project/Lotus/icon 2.webp";
import icon3 from "../../../assets/project/Lotus/icon 3.webp";
import icon4 from "../../../assets/project/Lotus/icon 4.webp";
import icon5 from "../../../assets/project/Lotus/icon 5.webp";

const Facilities = () => {
  return (
    <section className="md:py-20 pt-10 pb-16 md:px-20 px-4">
      <div className="md:w-1/2 mx-auto md:space-y-10 space-y-8" >
        {/* 1 part */}
        <div className="flex justify-center items-center md:gap-10 gap-5">
          <img src={icon1} alt="icon" className="md:w-44 md:h-44 h-20 w-20  object-contain" />
          <div className="flex flex-col justify-around">
            <h2 className="md:text-3xl text-xl font-bold text-sky-950">ACCESS TO AIRPORT</h2>
            <p className="md:text-lg text-sm">
              Just 2 minutes drive from Nelamangala to International Airport
              Highway
            </p>
            <span className="md:h-1 h-[1px] md:mt-5 mt-3 w-full block bg-black"></span>
          </div>
        </div>
        {/* 2 part */}
        <div className="flex justify-center items-center flex-row-reverse md:gap-10 gap-5">
          <img src={icon2} alt="icon" className="md:w-44 md:h-44 h-20 w-20  object-contain" />
          <div className="flex flex-col justify-around items-end">
            <h2 className="md:text-3xl text-xl font-bold text-sky-950">PREMIUM LOCATION</h2>
            <p className="md:text-lg text-sm text-right">
              Attached to Indian Navy Commander Cheif Staff Head Quaters Land
            </p>
            <span className="md:h-1 h-[1px] md:mt-5 mt-3 w-full block bg-black"></span>
          </div>
        </div>
        {/* 3 part */}
        <div className="flex justify-center items-center md:gap-10 gap-5">
          <img src={icon3} alt="icon" className="md:w-44 md:h-44 h-20 w-20  object-contain" />
          <div className="flex flex-col justify-around">
            <h2 className="md:text-3xl text-xl font-bold text-sky-950">ZONAL DEVELOPMENT</h2>
            <p className="md:text-lg text-sm">
              Very near to the upcoming infrastructural development like SEZ
            </p>
            <span className="md:h-1 h-[1px] md:mt-5 mt-3 w-full block bg-black"></span>
          </div>
        </div>
        {/* 4 part */}
        <div className="flex justify-center items-center flex-row-reverse md:gap-10 gap-5">
          <img src={icon4} alt="icon" className="md:w-44 md:h-44 h-20 w-20  object-contain" />
          <div className="flex flex-col justify-around items-end">
            <h2 className="md:text-3xl text-xl font-bold text-sky-950">ACCESSIBILITY</h2>
            <p className="md:text-lg text-sm text-right">
              Close proximity to Railway Station and Bus Stop
            </p>
            <span className="md:h-1 h-[1px] md:mt-5 mt-3 w-full block bg-black"></span>
          </div>
        </div>
        {/* 5 part */}
        <div className="flex justify-center items-center md:gap-10 gap-5">
          <img src={icon5} alt="icon" className="md:w-44 md:h-44 h-20 w-20  object-contain" />
          <div className="flex flex-col justify-around">
            <h2 className="md:text-3xl text-xl font-bold text-sky-950">VICINITY</h2>
            <p className="md:text-lg text-sm">
              Near to School, Hospital, Industrial Area and many more.
            </p>
            <span className="md:h-1 h-[1px] md:mt-5 mt-3 w-full block bg-black"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
