import coverBg from '../../assets/project-back-desktop.webp';

import logo from '../../assets/logoash.webp';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';


const Projects = () => {
    return (
        <section className="">
            <div className='md:h-[28rem] h-96 bg-cover bg-center' style={{ backgroundImage: `url(${coverBg})` }} >
                <div className='h-full backdrop-brightness-50 relative'>
                    <img src={logo} alt="" className='w-20 md:mx-0 mx-auto absolute top-5 md:left-20 left-5' />
                    <h2 className='text-white md:text-6xl text-xl absolute bottom-20 left-1/2 -translate-x-1/2' style={{ fontFamily: "Herr Von Muellerhoff" }} >where plots transform into destinies</h2>
                    <h1 className='md:text-5xl text-2xl uppercase font-bold text-white absolute right-5 bottom-5'>Projects</h1>
                </div>
            </div>

            <div className='md:my-20 my-10 md:px-20 px-4'>

                <div className='flex md:gap-8 gap-2 md:text-sm text-xs justify-center'>
                    {/* <button className='px-4 py-2 border-b border-black hover:bg-slate-300' >All Projects</button> */}
                    <button className='md:px-4 px-2 py-2 border-b border-black hover:bg-slate-300' >ONGOING PROJECTS</button>
                    <button className='md:px-4 px-2 py-2 border-b border-black hover:bg-slate-300' >COMPLETE PROJECTS</button>
                    <button className='md:px-4 px-2 py-2 border-b border-black hover:bg-slate-300' >UPCOMING PROJECTS</button>
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
                                    <div className="bg-cover bg-center">
                                        <img src="https://img.freepik.com/free-photo/analog-landscape-city-with-buildings_23-2149661456.jpg" alt="" className='h-72 w-full object-cover' />
                                        <div className='text-center font-bold py-5'>
                                            <h5 className='text-sm'>ASHWASURYA</h5>
                                            <h2 className='text-xl'>DESTINY FARM</h2>
                                            <div className='mt-2'>
                                                <Link className='text-sm font-medium px-2 py-1 border border-black duration-200 hover:bg-black hover:text-white'>
                                                    KNOW MORE
                                                </Link>
                                            </div>
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