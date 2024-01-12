import image from '../../assets/projects.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';


const Projects = () => {
    return (
        <section className="">
            <div className='md:h-96 h-40 bg-cover bg-center' style={{ backgroundImage: `url(${image})` }} >
                <div className='h-full grid place-content-center backdrop-brightness-[.25]'>
                    <h1 className='md:text-5xl text-2xl uppercase font-bold text-white'>Our Projects</h1>
                </div>
            </div>

            <div className='md:my-20 my-10 md:px-20 px-4'>

                <div className='flex md:gap-8 gap-2 flex-wrap md:text-base text-sm'>
                    <button className='px-4 py-2 bg-slate-300 hover:bg-slate-500 hover:text-white' >All Projects</button>
                    <button className='px-4 py-2 bg-slate-300 hover:bg-slate-500 hover:text-white' >Ongoing Projects</button>
                    <button className='px-4 py-2 bg-slate-300 hover:bg-slate-500 hover:text-white' >Complete Projects</button>
                    <button className='px-4 py-2 bg-slate-300 hover:bg-slate-500 hover:text-white' >Upcoming Projects</button>
                </div>
                <div className='pt-10'>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        // pagination={{
                        //     clickable: true,
                        // }}
                        autoplay={{
                            delay: 2500,
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
                                slidesPerView: 6,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Pagination, Autoplay]}
                    >
                        {
                            [...Array(7)].map((_, i) => {

                                return <SwiperSlide key={i}>
                                    <div className="h-80 bg-[url(https://img.freepik.com/free-photo/analog-landscape-city-with-buildings_23-2149661456.jpg)] bg-cover bg-center">
                                        <div className='backdrop-brightness-50 h-full text-white grid place-content-center text-xl uppercase font-semibold'>
                                            <h1>New Project</h1>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            })
                        }
                    </Swiper>
                </div>

            </div>
        </section>
    );
};

export default Projects;