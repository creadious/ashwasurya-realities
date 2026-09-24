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
            src="https://maps.google.com/maps?q=Ashwasurya+JD+Signature,+Somanahalli,+Kanakapura+Main+Road,+Bengaluru&t=&z=15&ie=UTF8&iwloc=&output=embed"
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
              <div className="grid grid-cols-4 gap-y-10 p-5 py-10">
                <div>
                  <img
                    src={gatedCommunity}
                    alt=""
                    className="h-10 object-contain mx-auto"
                  />
                  <h3 className="mt-1 text-sm text-center">Community Spaces</h3>
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
                  <h3 className="mt-1 text-sm text-center">Overhead Tank</h3>
                </div>
                <div>
                  <img
                    src={enterance}
                    alt=""
                    className="h-10 object-contain mx-auto"
                  />
                  <h3 className="mt-1 text-sm text-center">
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
                  <h3 className="mt-1 text-sm text-center">
                    40ft & 30ft White Top Roads
                  </h3>
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
                  <h3 className="mt-1 text-sm text-center">
                    3 Landscaped Parks
                  </h3>
                </div>
                <div>
                  <img
                    src={kidsPlay}
                    alt=""
                    className="h-10 object-contain mx-auto"
                  />
                  <h3 className="mt-1 text-sm text-center text-nowrap">
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
                BMRDA & RERA Approved
                <p className="mt-2">
                  RERA No.: PRM/KA/RERA/1251/310/PR/110926/008940
                </p>
              </div>
            ) : selectedTab === 3 ? (
              <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
                <div>
                  <h4 className="md:text-base font-semibold uppercase">
                    Commute & Connectivity
                  </h4>
                  <div className="mt-2 px-4">
                    <ul className="list-disc text-xs">
                      <li>Kanakapura Road</li>
                      <li>NICE Road</li>
                      <li>Silk Institute Metro Station</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h4 className="md:text-base font-semibold uppercase">
                    Education
                  </h4>
                  <div className="mt-2 px-4">
                    <ul className="list-disc text-xs">
                      <li>APS College of Engineering</li>
                      <li>DPS Bangalore South</li>
                      <li>Jain Global Campus</li>
                      <li>Dayananda Sagar University</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h4 className="md:text-base font-semibold uppercase">
                    Work & Growth Hubs
                  </h4>
                  <div className="mt-2 px-4">
                    <ul className="list-disc text-xs">
                      <li>Kalyani Magnum</li>
                      <li>Sattva Global City</li>
                      <li>Harohalli Industrial Area</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h4 className="md:text-base font-semibold uppercase">
                    Lifestyle & Entertainment
                  </h4>
                  <div className="mt-2 px-4">
                    <ul className="list-disc text-xs">
                      <li>Forum South Bengaluru</li>
                      <li>Konanakunte</li>
                      <li>Kaggalipura</li>
                    </ul>
                  </div>
                </div>
                <div className="md:col-span-2 md:grid md:place-items-center mt-2">
                  <h4 className="md:text-base font-semibold uppercase">
                    Nature & Wellness
                  </h4>
                  <div className="mt-2">
                    <ul className="list-disc text-xs px-4 grid md:grid-cols-2 grid-cols-1 md:gap-x-10 gap-x-6">
                      <li>Art of Living</li>
                      <li>Prani - The Pet Sanctuary</li>
                      <li>Guhantara</li>
                      <li>Bannerghatta Biological Park</li>
                      <li>Pyramid Valley</li>
                    </ul>
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
