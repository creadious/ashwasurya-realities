import user1 from '../../assets/Srikanth.jpeg';
import user2 from '../../assets/kaveyashree.jpeg';
import user3 from '../../assets/nethra.jpeg';


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

const Testimonial = () => {


    const reviews = [
        {
            id: 1,
            name: 'Srikanth Hogade',
            review: "There are many Real-estate companies in the market but Trust factor is much important. Ashwasurya realities has already gained Trust in the market and they are very good at maintaining customer relationships. Overall it was very good experience from visiting your office till the registration of site. Special Thanks to Miss. Shruthi, she is very much kind person and supportive throughout the process.",
            image: user1
        },
        {
            id: 2,
            name: 'Kavyashree S',
            review: "TGood experience Ashwasurya realities project and staffs are decent in treating customers. We purchased plot in Ruthvi. Madhan is very patient in answering all our queries and responded in a timely manner and guided us through the entire process thoroughly. Thanks.",
            image: user2
        },
        {
            id: 3,
            name: 'Shivaprasad D U',
            review: "Ashwasurya Realities found one of the best reality dealers and their project are very attractive and in prominent places. I purchased the plot in AR Lotus near nelamangala, transaction was very smooth, very cooperative staff. Thanks to Executive Director Mrs Geetanjali for providing best rate, sales Manager Mr pradeep  for coordinating throughout the deal till end of registration",
            image: ''
        },
        {
            id: 4,
            name: 'SUSHMA NAGENDRAM',
            review: "We came across Ashwasurya through newspapers. My parents enquired about it and felt it was genuine. We went and visited the property few times. Ravikiran has been very helpful in showing us the properties snd explaining about it. Then we spoke to Ms Geetanjali and she was quite humble person and gave us a very good price. We brought 2 plots at a very good price. The registration was done within 1 hour. Very happy with the buying. Planning to invest more with them soon.",
            image: ''
        },
        {
            id: 5,
            name: 'Nethra M',
            review: "We came across Ashwasurya through newspapers. My parents enquired about it and felt it was genuine. We went and visited the propeVery good project. They are very transparent about the documents. Staff are good especially Pradeep whom I coordinated the most. He is very calm and composed and clarified all our queries. Geetha mam is very understanding and polite. I would definitely suggest Ashwasurya, the right project to invest.",
            image: user3
        },

    ]


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
                    reviews.map((value) => {
                        const { id, name, review, image } = value;
                        // console.log(name.split(' '))
                        return <SwiperSlide key={id}>
                            <div className="relative md:h-52 h-60 bg-slate-200 mt-20 hover:bg-yellow-300 duration-200 cursor-default">
                                <div className="absolute left-0 -top-16 p-3 px-5 w-full">
                                    <img src={image || "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"} alt="" className="w-20 h-28 object-cover" />
                                    <p className="text-xs mt-2">
                                        {review}
                                    </p>
                                </div>
                                <h5 className="absolute right-5 top-3 text-xs font-semibold">{/*JYESTA*/} <span className="text-lg">{name}</span></h5>

                            </div>
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </section>
    );
};

export default Testimonial;