
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

const Testimonial = () => {
    return (
        <section className="md:px-20 pt-10 pb-20 px-4">
            <h2 className="md:text-5xl text-3xl md:mb-10 mb-5 text-slate-400 text-center">TESTIMONIAL</h2>
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
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination, Autoplay]}
            >
                {
                    [...Array(5)].map((_, i) => {

                        return <SwiperSlide key={i}>
                            <div className="relative h-48 bg-slate-200 mt-20 hover:bg-yellow-300 duration-200">
                                <div className="absolute left-0 -top-12 p-3 px-5 w-full">
                                    <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg" alt="" className="w-20 h-28 object-cover" />
                                    <p className="mt-3 text-sm">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt sint recusandae illo assumenda eum quos tempora blanditiis minus laboriosam nesciunt, labore magni quasi accusantium. Perspiciatis repudiandae ratione labore dolorum hic.
                                    </p>
                                </div>
                                <h5 className="absolute right-5 top-3 text-xs font-semibold">ASHWASURYA <span className="text-lg">JYESTA</span></h5>

                            </div>
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </section>
    );
};

export default Testimonial;