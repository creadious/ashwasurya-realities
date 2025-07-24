import gatedCommunity from "../../../assets/project/Lotus/ame 1.webp";
import Security from "../../../assets/project/Lotus/ame 2.webp";
import overtank from "../../../assets/project/Lotus/ame 3.webp";
import enterance from "../../../assets/project/Lotus/ame 4.webp";
import blacktopRoads from "../../../assets/project/Lotus/ame 5.webp";
import rainWater from "../../../assets/project/Lotus/ame 6.webp";
import sewage from "../../../assets/project/Lotus/ame 7.webp";
import underground from "../../../assets/project/Lotus/ame 8.webp";
import parkAndTree from "../../../assets/project/Lotus/ame 9.webp";
import kidsPlay from "../../../assets/project/Lotus/ame 10.webp";
import undergroundElectric from "../../../assets/project/Lotus/ame 11.webp";

const Amenities = () => {
  return (
    <section className="md:py-20 md:px-20 px-2">
      <h1 className="md:text-4xl text-2xl md:text-left text-center">
        AMENITIES
      </h1>
      <div className="md:my-20 my-10 text-center font-medium md:text-2xl text-xs">
        <div className="grid md:grid-cols-4 grid-cols-2 md:gap-20 gap-8">
          <div>
            <img
              src={gatedCommunity}
              alt=""
              className="md:h-14 h-8 object-contain mx-auto"
            />
            <h3 className="md:mt-3 mt-1 md:leading-6 leading-4">
              Gated <br /> Community
            </h3>
          </div>
          <div>
            <img
              src={Security}
              alt=""
              className="md:h-14 h-8 object-contain mx-auto"
            />
            <h3 className="md:mt-3 mt-1 md:leading-6 leading-4">
              24/7 <br /> Security
            </h3>
          </div>
          <div>
            <img
              src={overtank}
              alt=""
              className="md:h-14 h-8 object-contain mx-auto"
            />
            <h3 className="md:mt-3 mt-1 md:leading-6 leading-4">
              Overhead <br /> tank
            </h3>
          </div>
          <div>
            <img
              src={enterance}
              alt=""
              className="md:h-14 h-8 object-contain mx-auto"
            />
            <h3 className="md:mt-3 mt-1 md:leading-6 leading-4">
              60ft Entrance Road <br /> with Grand Arch
            </h3>
          </div>
          <div>
            <img
              src={blacktopRoads}
              alt=""
              className="md:h-14 h-8 object-contain mx-auto"
            />
            <h3 className="md:mt-3 mt-1 md:leading-6 leading-4">
              40ft & 30 ft <br /> Blacktop Roads
            </h3>
          </div>
          <div>
            <img
              src={rainWater}
              alt=""
              className="md:h-14 h-8 object-contain mx-auto"
            />
            <h3 className="md:mt-3 mt-1 md:leading-6 leading-4">
              Rainwater <br /> Harvesting
            </h3>
          </div>
          <div>
            <img
              src={sewage}
              alt=""
              className="md:h-14 h-8 object-contain mx-auto"
            />
            <h3 className="md:mt-3 mt-1 md:leading-6 leading-4">
              STP Sewage <br /> System
            </h3>
          </div>
          <div>
            <img
              src={underground}
              alt=""
              className="md:h-14 h-8 object-contain mx-auto"
            />
            <h3 className="md:mt-3 mt-1 md:leading-6 leading-4">
              Underground <br /> Drainage System
            </h3>
          </div>
        </div>
        <div className="md:mt-20 mt-8 grid md:grid-cols-3 grid-cols-2 md:gap-20 gap-8">
          <div>
            <img
              src={parkAndTree}
              alt=""
              className="md:h-14 h-8 object-contain mx-auto"
            />
            <h3 className="md:mt-3 mt-1 md:leading-6 leading-4">
              Park &Tree <br /> Avenues
            </h3>
          </div>
          <div>
            <img
              src={kidsPlay}
              alt=""
              className="md:h-14 h-8 object-contain mx-auto"
            />
            <h3 className="md:mt-3 mt-1 md:leading-6 leading-4">
              Kids Play <br />
              Area
            </h3>
          </div>
          <div>
            <img
              src={undergroundElectric}
              alt=""
              className="md:h-14 h-8 object-contain mx-auto"
            />
            <h3 className="md:mt-3 mt-1 md:leading-6 leading-4">
              Underground <br />
              Electricity
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
