import image from '../../assets/logoash2.webp'

const WhoWeAre = () => {
    return (
        <section className="py-10 md:px-20 flex items-center justify-between gap-40">
            <div>
                <h2 className="text-5xl mb-10">WHO <span className='text-slate-400'>WE ARE</span></h2>
                <p className='text-3xl font-light'>
                    Nestled in Bengaluru for five years, Ashwasurya Realities
                    stands as a beacon of excellence in ploed development. Our
                    projects seamlessly blend modern living with nature, oering
                    meticulously planned spaces that transcend mere pieces of
                    land. With over 3000 delighted customers, our commitment to
                    quality, transparency, and customer satisfaction is
                    unwavering. Strategically located in Bengaluru, our plots strike
                    the perfect balance between urban convenience and serenity.
                    As we envision a future in sustainable development,
                    Ashwasurya Realities invites you to join our community, where
                    dreams take root on plots that go beyond investments,
                    becoming gateways to a life well-lived. Welcome to
                    Ashwasurya Realities – where plots transform into destinies.

                </p>
            </div>
            <div>
                <img src={image} alt="" className='min-w-60' />
            </div>
        </section>
    );
};

export default WhoWeAre;