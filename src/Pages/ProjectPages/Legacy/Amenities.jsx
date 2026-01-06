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

// import educationImage from "../../../assets/project/Keerthi/education.png";
// import hospitalImage from "../../../assets/project/Keerthi/health.png";
// import locationImage from "../../../assets/project/Keerthi/location.png";

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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.7440929062823!2d77.40888597507976!3d13.160905787172096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae27b5f5d9d207%3A0xc1d7d2ec14d9878d!2sAshwasurya%20Legacy!5e1!3m2!1sen!2sin!4v1762378784029!5m2!1sen!2sin"
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
              Facilities
            </button>
            <button
              className={`px-5 py-2 rounded-full ${
                selectedTab === 3
                  ? "bg-yellow-400 font-semibold"
                  : "bg-slate-200"
              } `}
              onClick={() => setSelectedTab(3)}
            >
              Proximities
            </button>
            {/* <button
              className={`px-5 py-2 rounded-full ${
                selectedTab === 2
                  ? "bg-yellow-400 font-semibold"
                  : "bg-slate-200"
              } `}
              onClick={() => setSelectedTab(2)}
            >
              RERA
            </button> */}
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
                    30ft Entrance Road
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
                <div>
                  <h4 className="md:text-base font-semibold uppercase">
                    Proximity Highlights
                  </h4>
                  <div className="mt-2 px-4">
                    <ul className="list-disc text-xs">
                      <li>BIEC Metro Station – 8 km</li>
                      <li>Nelamangala Junction – 5 km</li>
                      <li>Upcoming KWIN City – 4 km</li>
                      <li>D-Mart, Madavara – 5 km</li>
                      <li>Harsha Hospital – 5 km</li>
                      <li>ABB Factory – 6 km</li>
                      <li>NICE Junction & BIEC – 12 km</li>
                      <li>Upcoming Nelamangala Metro Station – 3 km</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="md:w-80">
                    <h4 className="md:text-base font-semibold uppercase">
                      Connectivity Projects Fueling Growth
                    </h4>
                    <div className="mt-2 px-4">
                      <ul className="list-disc text-xs">
                        <li>STRR (Satellite Town Ring Road) – Operational</li>
                        <li>
                          PRR (Peripheral Ring Road) – Upcoming Bengaluru
                          Business Corridor
                        </li>
                        <li>
                          KWIN City – 5,800-acre Knowledge, Wellbeing &
                          Innovation Hub
                        </li>
                        <li>
                          BIEC Metro Extension – Connecting to Nelamangala
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                  <div>
                    <h4 className="md:text-base font-semibold">
                      Master-Planned Excellence
                    </h4>
                    <p className="text-xs mb-2">
                      Spread across 16 acres, the layout at Ashwasurya Legacy is
                      designed to balance functionality, aesthetics, and
                      long-term value.
                    </p>
                  </div>
                  <div>
                    <h4 className="md:text-base font-semibold">
                      Plot Sizes Available
                    </h4>
                    <ul className="list-disc text-xs px-4">
                      <li>30 × 40</li>
                      <li>30 × 45 (Odd)</li>
                      <li>30 × 50</li>
                    </ul>
                  </div>
                </div>
              
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
