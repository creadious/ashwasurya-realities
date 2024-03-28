import gatedCommunity from "../../assets/project/Keerthi/i1.png";
import Security from "../../assets/project/Keerthi/i2.png";
import overtank from "../../assets/project/Keerthi/i3.png";
import enterance from "../../assets/project/Keerthi/i4.png";
import blacktopRoads from "../../assets/project/Keerthi/i5.png";
import rainWater from "../../assets/project/Keerthi/i6.png";
import sewage from "../../assets/project/Keerthi/i7.png";
import underground from "../../assets/project/Keerthi/i8.png";
import parkAndTree from "../../assets/project/Keerthi/i9.png";
import kidsPlay from "../../assets/project/Keerthi/i10.png";
import undergroundElectric from "../../assets/project/Keerthi/i11.png";

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
