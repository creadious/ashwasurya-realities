
import gatedCommunity from '../../assets/project/gated-community.png';
import Security from '../../assets/project/24-7-security.png';
import overtank from '../../assets/project/overhead-tank.png';
import enterance from '../../assets/project/entrance.png';
import blacktopRoads from '../../assets/project/blacktopRoads.png';
import rainWater from '../../assets/project/rain-water.png';
import sewage from '../../assets/project/sewage-system.png';
import underground from '../../assets/project/underground.png';
import parkAndTree from '../../assets/project/park-and-tree.png';


const Amenities = () => {
    return (
        <section className="md:py-20 md:px-20 px-4">
            <h1 className='text-4xl'>AMENITIES</h1>
            <div className='my-20 text-center font-medium md:text-2xl'>
                <div className='grid md:grid-cols-4 grid-cols-2 md:gap-20 gap-8'>
                    <div>
                        <img src={gatedCommunity} alt="" className='h-14 mx-auto' />
                        <h3 className='md:mt-3 mt-1 md:leading-6 leading-4'>
                            24/7 <br /> Security
                        </h3>
                    </div>
                    <div>
                        <img src={Security} alt="" className='h-14 mx-auto' />
                        <h3 className='md:mt-3 mt-1 md:leading-6 leading-4'>
                            Gated <br />  Community
                        </h3>
                    </div>
                    <div>
                        <img src={overtank} alt="" className='h-14 mx-auto' />
                        <h3 className='md:mt-3 mt-1 md:leading-6 leading-4'>
                            Overhead <br /> tank
                        </h3>
                    </div>
                    <div>
                        <img src={enterance} alt="" className='h-14 mx-auto' />
                        <h3 className='md:mt-3 mt-1 md:leading-6 leading-4'>
                            60ft Entrance Road <br /> with Grand Arch
                        </h3>
                    </div>
                    <div>
                        <img src={blacktopRoads} alt="" className='h-14 mx-auto' />
                        <h3 className='md:mt-3 mt-1 md:leading-6 leading-4'>
                            40ft & 30 ft <br /> Blacktop Roads
                        </h3>
                    </div>
                    <div>
                        <img src={rainWater} alt="" className='h-14 mx-auto' />
                        <h3 className='md:mt-3 mt-1 md:leading-6 leading-4'>
                            Rainwater <br /> Harvesting
                        </h3>
                    </div>
                    <div>
                        <img src={sewage} alt="" className='h-14 mx-auto' />
                        <h3 className='md:mt-3 mt-1 md:leading-6 leading-4'>
                            STP Sewage <br /> System
                        </h3>
                    </div>
                    <div>
                        <img src={underground} alt="" className='h-14 mx-auto' />
                        <h3 className='md:mt-3 mt-1 md:leading-6 leading-4'>
                            Underground <br /> Drainage System
                        </h3>
                    </div>
                </div>
                <div className='md:mt-20 mt-8 grid md:grid-cols-3 grid-cols-2 md:gap-20 gap-8'>
                    <div>
                        <img src={parkAndTree} alt="" className='h-14 mx-auto' />
                        <h3 className='md:mt-3 mt-1 md:leading-6 leading-4'>
                            Park &Tree <br /> Avenues
                        </h3>
                    </div>
                    <div>
                        <img src={parkAndTree} alt="" className='h-14 mx-auto' />
                        <h3 className='md:mt-3 mt-1 md:leading-6 leading-4'>
                            Park &Tree <br /> Avenues
                        </h3>
                    </div>
                    <div>
                        <img src={parkAndTree} alt="" className='h-14 mx-auto' />
                        <h3 className='md:mt-3 mt-1 md:leading-6 leading-4'>
                            Park &Tree <br /> Avenues
                        </h3>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Amenities;