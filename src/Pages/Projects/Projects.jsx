import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";

import { projectsData } from "./projectsData";
import coverBg from "../../assets/project-back-desktop.webp";
import logo from "../../assets/logoash.webp";

const Projects = () => {
  const [selectedStatus, setSelectedStatus] = useState("ongoing");

  const projectCategories = [
    { name: "ONGOING PROJECTS", status: "ongoing" },
    { name: "COMPLETED PROJECTS", status: "completed" },
    { name: "UPCOMING PROJECTS", status: "upcoming" },
  ];

  // Filter projects by selected status
  const filteredProjects = projectsData.filter(
    (project) => project.status === selectedStatus
  );

  return (
    <section>
      {/* Header Section */}
      <div
        className="md:h-[28rem] h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${coverBg})` }}
      >
        <div className="h-full backdrop-brightness-75 relative">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="md:w-44 w-20 md:mx-0 mx-auto absolute top-5 md:left-20 left-5"
            />
          </Link>
          <h2
            className="text-white md:text-6xl text-xl absolute bottom-20 left-1/2 -translate-x-1/2"
            style={{ fontFamily: "Herr Von Muellerhoff" }}
          >
            where plots transform into destinies
          </h2>
          <h1 className="md:text-5xl text-2xl uppercase font-bold text-white absolute right-5 bottom-5">
            Projects
          </h1>
        </div>
      </div>

      {/* Project Navigation Tabs */}
      <div className="md:my-20 my-10 md:px-20 px-4">
        <div className="flex md:gap-8 gap-2 md:text-sm text-xs justify-center">
          {projectCategories.map(({ name, status }) => (
            <button
              key={status}
              className={`md:px-4 px-2 py-2 border-b border-black hover:bg-slate-300 ${
                selectedStatus === status ? "backdrop-brightness-90" : ""
              }`}
              onClick={() => setSelectedStatus(status)}
            >
              {name}
            </button>
          ))}
        </div>

        {/* Project Display */}
        <div className="pt-10">
          {filteredProjects.length > 0 ? (
            <ProjectSlider projects={filteredProjects} />
          ) : (
            <h1 className="text-black text-center min-h-96">
              No projects found.
            </h1>
          )}
        </div>
      </div>
    </section>
  );
};

// **Reusable Project Swiper Component**
const ProjectSlider = ({ projects }) => (
  <Swiper
    slidesPerView={1}
    spaceBetween={10}
    autoplay={{ delay: 5000, disableOnInteraction: false }}
    breakpoints={{
      640: { slidesPerView: 2, spaceBetween: 20 },
      768: { slidesPerView: 3, spaceBetween: 40 },
      1024: { slidesPerView: 4, spaceBetween: 50 },
    }}
    modules={[Pagination, Autoplay]}
  >
    {projects?.map(({ id, title, image, link }) => (
      <SwiperSlide key={id}>
        <div className="bg-cover bg-center">
          <img src={image} alt={title} className="h-96 w-full object-cover" />
          <div className="text-center font-bold py-5">
            <h5 className="text-sm">ASHWASURYA</h5>
            <h2 className="text-3xl text-nowrap">{title}</h2>
            <div className="mt-2">
              <Link
                to={link || `/maintenance`}
                className="text-sm font-medium px-2 py-1 border border-black duration-200 hover:bg-black hover:text-white"
              >
                KNOW MORE
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default Projects;
