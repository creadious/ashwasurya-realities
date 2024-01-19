import image from '../../assets/logoash2.webp'

const WhoWeAre = () => {
    return (
        <section
            id='about'
            className="py-10 md:px-20 px-4 flex items-center justify-between md:flex-row flex-col md:gap-40 gap-10">
            <div>
                <h2 className="md:text-5xl text-3xl md:mb-10 mb-5">WHO <span className='text-slate-400'>WE ARE</span></h2>
                <p className='md:text-xl font-light'>
                    <p>
                        Nestled in Bengaluru for five years, Ashwasurya Realities
                        stands as a beacon of excellence in plotted development. Our
                        projects seamlessly blend modern living with nature, oering
                        meticulously planned spaces that transcend mere pieces of
                        land. With over 3000 delighted customers, our commitment to
                        quality, transparency, and customer satisfaction is
                        unwavering.
                    </p>
                    <br />
                    <p>
                        Strategically located in Bengaluru, our plots strike
                        the perfect balance between urban convenience and serenity.
                        As we envision a future in sustainable development,
                        Ashwasurya Realities invites you to join our community, where
                        dreams take root on plots that go beyond investments,
                        becoming gateways to a life well-lived.
                    </p>
                    <br />
                    <p>
                        Welcome to
                        Ashwasurya Realities – where plots transform into destinies.
                    </p>

                </p>
            </div>
            <div>
                <img src={image} alt="" className='md:min-w-60 w-52' />
            </div>
        </section>
    );
};

export default WhoWeAre;