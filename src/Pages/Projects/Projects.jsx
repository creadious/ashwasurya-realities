import coverBg from '../../assets/project-back-desktop.webp';

import logo from '../../assets/logoash.webp';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { projectsCompleted, projectsOngoing } from './projectsData';
import { useState } from 'react';


const Projects = () => {

    const [selectedProject, setSelectedProject] = useState(1);

    return (
        <section className="">
            <div className='md:h-[28rem] h-96 bg-cover bg-center' style={{ backgroundImage: `url(${coverBg})` }} >
                <div className='h-full backdrop-brightness-75 relative'>
                    <img src={logo} alt="" className='md:w-44 w-20 md:mx-0 mx-auto absolute top-5 md:left-20 left-5' />
                    <h2 className='text-white md:text-6xl text-xl absolute bottom-20 left-1/2 -translate-x-1/2' style={{ fontFamily: "Herr Von Muellerhoff" }} >where plots transform into destinies</h2>
                    <h1 className='md:text-5xl text-2xl uppercase font-bold text-white absolute right-5 bottom-5'>Projects</h1>
                </div>
            </div>

            <div className='md:my-20 my-10 md:px-20 px-4'>

                <div className='flex md:gap-8 gap-2 md:text-sm text-xs justify-center'>
                    {/* <button className='px-4 py-2 border-b border-black hover:bg-slate-300' >All Projects</button> */}
                    <button className={`md:px-4 px-2 py-2 border-b border-black hover:bg-slate-300 ${selectedProject == 1 ? 'backdrop-brightness-90' : ''}`} onClick={() => setSelectedProject(1)} >ONGOING PROJECTS</button>
                    <button className={`md:px-4 px-2 py-2 border-b border-black hover:bg-slate-300 ${selectedProject == 2 ? 'backdrop-brightness-90' : ''}`} onClick={() => setSelectedProject(2)} >COMPLETE PROJECTS</button>
                    <button className={`md:px-4 px-2 py-2 border-b border-black hover:bg-slate-300 ${selectedProject == 3 ? 'backdrop-brightness-90' : ''}`} onClick={() => setSelectedProject(3)} >UPCOMING PROJECTS</button>
                </div>
                <div className='pt-10'>
                    {
                        selectedProject == 1 ?
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={10}
                                // pagination={{
                                //     clickable: true,
                                // }}
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                }}
                                breakpoints={{
                                    // 370: {
                                    //     slidesPerView: 2,
                                    //     spaceBetween: 20,
                                    // },
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                        spaceBetween: 40,
                                    },
                                    1024: {
                                        slidesPerView: 4,
                                        spaceBetween: 50,
                                    },
                                }}
                                modules={[Pagination, Autoplay]}
                            >
                                {
                                    projectsOngoing.map((V) => {
                                        const { id, title, image, link } = V;

                                        return <SwiperSlide key={id}>
                                            <div className="bg-cover bg-center">
                                                <img src={image} alt="" className='h-96 w-full object-cover' />
                                                <div className='text-center font-bold py-5'>
                                                    <h5 className='text-sm'>ASHWASURYA</h5>
                                                    <h2 className='text-3xl text-nowrap'>{title}</h2>
                                                    <div className='mt-2'>
                                                        <Link to={link || `/maintenance`} className='text-sm font-medium px-2 py-1 border border-black duration-200 hover:bg-black hover:text-white'>
                                                            KNOW MORE
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    })
                                }
                            </Swiper>
                            :
                            selectedProject == 2 ?

                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={10}
                                    // pagination={{
                                    //     clickable: true,
                                    // }}
                                    autoplay={{
                                        delay: 5000,
                                        disableOnInteraction: false,
                                    }}
                                    breakpoints={{
                                        // 370: {
                                        //     slidesPerView: 2,
                                        //     spaceBetween: 20,
                                        // },
                                        640: {
                                            slidesPerView: 2,
                                            spaceBetween: 20,
                                        },
                                        768: {
                                            slidesPerView: 3,
                                            spaceBetween: 40,
                                        },
                                        1024: {
                                            slidesPerView: 4,
                                            spaceBetween: 50,
                                        },
                                    }}
                                    modules={[Pagination, Autoplay]}
                                >
                                    {

                                        projectsCompleted.map((V) => {
                                            const { id, title, image, link } = V;

                                            return <SwiperSlide key={id}>
                                                <div className="bg-cover bg-center">
                                                    <img src={image} alt="" className='h-96 w-full object-cover' />
                                                    <div className='text-center font-bold py-5'>
                                                        <h5 className='text-sm'>ASHWASURYA</h5>
                                                        <h2 className='text-3xl text-nowrap'>{title}</h2>
                                                        <div className='mt-2'>
                                                            <Link to={link || `/maintenance`} className='text-sm font-medium px-2 py-1 border border-black duration-200 hover:bg-black hover:text-white'>
                                                                KNOW MORE
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        })
                                    }
                                </Swiper>
                                :
                                <div className='h-[20rem] grid place-content-center'>
                                    <h1>Not Found</h1>
                                </div>
                    }

                </div>

            </div>
        </section>
    );
};

export default Projects;