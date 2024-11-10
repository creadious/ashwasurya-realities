import gatedCommunity from "../../../assets/project/Keerthi/i1.png";
import Security from "../../../assets/project/Keerthi/i2.png";
import overtank from "../../../assets/project/Keerthi/i3.png";
import enterance from "../../../assets/project/Keerthi/i4.png";
import blacktopRoads from "../../../assets/project/Keerthi/i5.png";
import rainWater from "../../../assets/project/Keerthi/i6.png";
import sewage from "../../../assets/project/Keerthi/i7.png";
import underground from "../../../assets/project/Keerthi/i8.png";
import parkAndTree from "../../../assets/project/Keerthi/i9.png";
import kidsPlay from "../../../assets/project/Keerthi/i10.png";
import undergroundElectric from "../../../assets/project/Keerthi/i11.png";
import { useState } from "react";

import educationImage from "../../../assets/project/Keerthi/education.png";
import hospitalImage from "../../../assets/project/Keerthi/health.png";
import locationImage from "../../../assets/project/Keerthi/location.png";

const Amenities = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <section className=" md:px-20 px-2 py-14">
      <h2 className="md:text-5xl text-3xl md:mb-10 mb-5 md:text-left text-center">
        FACILITIES
      </h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
        <div className="h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3517.1148700151766!2d77.3533429!3d13.065024799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae2f002e3d34af%3A0x8ecb6b8d2c90b44c!2sJD%20Ashwasurya%20Lavish!5e1!3m2!1sen!2sin!4v1731149902917!5m2!1sen!2sin"
            className="w-full md:h-full h-60"
            loading="lazy"
          ></iframe>
        </div>
        <div className="">
          <div className="flex gap-4 md:text-base text-xs">
            <button
              className={`px-5 py-2 rounded-full ${
                selectedTab === 1
                  ? "bg-yellow-400 font-semibold"
                  : "bg-slate-200"
              } `}
              onClick={() => setSelectedTab(1)}
            >
              Amenities
            </button>
            <button
              className={`px-5 py-2 rounded-full ${
                selectedTab === 3
                  ? "bg-yellow-400 font-semibold"
                  : "bg-slate-200"
              } `}
              onClick={() => setSelectedTab(3)}
            >
              Facilities
            </button>
            <button
              className={`px-5 py-2 rounded-full ${
                selectedTab === 2
                  ? "bg-yellow-400 font-semibold"
                  : "bg-slate-200"
              } `}
              onClick={() => setSelectedTab(2)}
            >
              RERA
            </button>
          </div>
          <div className="mt-5 min-h-96 border border-rose-950 grid place-content-center">
            {selectedTab === 1 ? (
              <div className="grid grid-cols-4 gap-y-10 p-5 py-10 items-center">
                <div>
                  <img
                    src={gatedCommunity}
                    alt=""
                    className="h-10 object-contain mx-auto"
                  />
                  <h3 className="mt-1 text-sm text-center">Gated Community</h3>
                </div>
                <div>
                  <img
                    src={Security}
                    alt=""
                    className="h-10 object-contain mx-auto"
                  />
                  <h3 className="mt-1 text-sm text-center">Security</h3>
                </div>
                <div>
                  <img
                    src={overtank}
                    alt=""
                    className="h-10 object-contain mx-auto"
                  />
                  <h3 className="mt-1 text-sm text-center">Overhead tank</h3>
                </div>
                <div>
                  <img
                    src={enterance}
                    alt=""
                    className="h-10 object-contain mx-auto"
                  />
                  <h3 className="mt-1 text-sm text-center">
                    {" "}
                    60ft Entrance Road
                  </h3>
                </div>
                <div>
                  <img
                    src={rainWater}
                    alt=""
                    className="h-10 object-contain mx-auto"
                  />
                  <h3 className="mt-1 text-sm text-center">
                    Rainwater Harvesting
                  </h3>
                </div>
                <div>
                  <img
                    src={blacktopRoads}
                    alt=""
                    className="h-10 object-contain mx-auto"
                  />
                  <h3 className="mt-1 text-sm text-center">Blacktop Roads</h3>
                </div>
                <div>
                  <img
                    src={sewage}
                    alt=""
                    className="h-10 object-contain mx-auto"
                  />
                  <h3 className="mt-1 text-sm text-center">STP Sewage</h3>
                </div>
                <div>
                  <img
                    src={underground}
                    alt=""
                    className="h-10 object-contain mx-auto"
                  />
                  <h3 className="mt-1 text-sm text-center">
                    Underground Drainage
                  </h3>
                </div>
                <div>
                  <img
                    src={parkAndTree}
                    alt=""
                    className="h-10 object-contain mx-auto"
                  />
                  <h3 className="mt-1 text-sm text-center text-nowrap">
                    Park & Tree
                  </h3>
                </div>
                <div>
                  <img
                    src={kidsPlay}
                    alt=""
                    className="h-10 object-contain mx-auto"
                  />
                  <h3 className="mt-1 text-sm text-center text-nowrap">
                    {" "}
                    Kids Play
                  </h3>
                </div>
                <div>
                  <img
                    src={undergroundElectric}
                    alt=""
                    className="h-10 object-contain mx-auto"
                  />
                  <h3 className="mt-1 text-sm text-center">
                    Underground Electricity
                  </h3>
                </div>
              </div>
            ) : selectedTab === 2 ? (
              <div className="h-full grid place-content-center text-center md:text-base text-xs p-2">
                RERA No.: PRM/KA/RERA/1250/307/PR/071124/007208
              </div>
            ) : selectedTab === 3 ? (
              <div className="grid md:grid-cols-2 grid-cols-1 p-4 gap-2">
                <div className="">
                  <h4 className="md:text-base font-semibold">
                    EXCELLENT CONNECTIVITY
                  </h4>
                  <p className="text-xs">
                    A second airport is being proposed near Nelamangala-Kunigal
                    Road, which could transform the area into a hub for
                    Employment, tourism and commerce.
                  </p>
                  <div className="mt-2 grid grid-cols-2 gap-5">
                    <div className="grid place-items-center">
                      <img
                        src={locationImage}
                        alt=""
                        className="w-10 mx-auto"
                      />
                    </div>
                    <ul className="list-disc text-xs">
                      <li>ATTACHED TO NH-75</li>
                      <li>4KMS TO NELAMANGALA JUNCTION</li>
                      <li>5KMS TO THE UPCOMING NELAMANGALA METRO STATION</li>
                      <li>Nearest to UPCOMING KWIN CITY</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="md:text-base font-semibold uppercase">
                    School & College
                  </h4>
                  <p className="text-xs">
                    The project has prominent institutions (Schools & Colleges)
                    in the neighbourhood.
                  </p>
                  <div className="mt-2 grid grid-cols-2 gap-5">
                    <div className="grid place-items-center">
                      <img
                        src={educationImage}
                        alt=""
                        className="w-16 mx-auto"
                      />
                    </div>
                    <ul className="list-disc text-xs">
                      <li>Nexgen Pu College. </li>
                      <li> Narayana Residential Pu College. </li>
                      <li>Josco Institutions. </li>
                      <li> Ranebennur College Of Nursing. </li>
                      <li> Bangalore Education Guide Line Pvt Ltd. </li>
                      <li>Harsha International Institutions. </li>
                    </ul>
                  </div>
                </div>
                <div className="md:col-span-2 md:grid md:place-items-center mt-2">
                  <div className="md:w-80">
                    <h4 className="md:text-base font-semibold uppercase">
                      Nearby Hospital
                    </h4>
                    <p className="text-xs">Very near to many hospitals.</p>
                    <div className="mt-2 grid grid-cols-2 md:gap-0 gap-5">
                    <div className="grid place-items-center">
                      <img
                        src={hospitalImage}
                        alt=""
                        className="w-10 mx-auto"
                      />
                    </div>
                      <ul className="list-disc text-xs">
                        <li>Harsha Hospital 5kms</li>
                        <li> VP Magnus Hospital 6kms</li>
                        <li> Mathrushree Hospital 5kms</li>
                        <li>Amrutha Super Speciality Hospital</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
{
  /* 
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
*/
}
