import educationImage from "../../../assets/project/Keerthi/education.png";
import hospitalImage from "../../../assets/project/Keerthi/health.png";
import locationImage from "../../../assets/project/Keerthi/location.png";

const Facilities = () => {
  return (
    <section className="py-10 md:px-20 px-6 grid md:grid-cols-2 grid-cols-1 md:gap-20 gap-10 md:text-base text-xs">
      <div className=" px-2">
        <h4 className="md:text-2xl font-semibold">EXCELLENT CONNECTIVITY</h4>
        <p>
          This project is well within city limits with less commute time to the
          other parts of the city.
        </p>
        <div className="flex items-center mt-5 justify-center md:flex-row flex-col gap-10">
          <img src={locationImage} alt="" className="md:w-20 w-14 mx-auto" />
          <ul className="list-disc">
            <li>10 minutes drive to Bidadi (Bangalore’s nearestsmart city)</li>
            <li>Few minutes away to STRR and PRR</li>
            <li>15 minutes drive to Nice Road & Metro</li>
          </ul>
        </div>
      </div>

      <div className="px-2">
        <h4 className="md:text-2xl font-semibold">BETTER INFRASTRUCTURE</h4>
        <p>
          Very near to upcoming infrastructural developments like SEZs and many
          more.
        </p>
        <div className="flex items-center mt-5 justify-center md:flex-row flex-col gap-10">
          <img src={hospitalImage} alt="" className="md:w-24 w-20 mx-auto" />
          <ul className="list-disc">
            <li> 2 minutes away from K.H.B Layout</li>
            <li> 10 minutes drive to Manchanabele Dam</li>
            <li> 15 minutes drive to Wonderla</li>
            <li> 20 minutes drive to Decathlon</li>
            <li> 10 minutes drive to Manchanabele Dam</li>
            <li> 2 minutes away from K.H.B Layout</li>
            <li> 10 minutes from Nandaprabhu Kempegowda layout</li>
            <li>
              {" "}
              10 minutes drive to Bangalore- Mysore B.D.A layout ( Express
              Highway)
            </li>
          </ul>
        </div>
      </div>
      <div className="md:col-span-2 mx-auto px-2">
        <h4 className="md:text-2xl font-semibold">EDUCATIONAL INSTITUTIONS</h4>
        <p>
          The project has prominent institutions (Schools & Colleges) in the
          neighbourhood.
        </p>
        <div className="flex items-center mt-5 justify-center md:flex-row flex-col gap-10">
          <img src={educationImage} alt="" className="md:w-28 w-20 mx-auto" />
          <ul className="list-disc">
            <li> Universal group of Institutions </li>
            <li> GR International Public School </li>
            <li> Emerald International School </li>
            <li> Christ University </li>
            <li> East West College </li>
            <li> RR Dental College & Engineering </li>
            <li> Marigold International School </li>
            <li> Universal group of Institutions </li>
            <li> Shree Swaminarayan Gurukul International School </li>
            <li> Don Bosco Institute of Technology </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
