import { BiSolidRightArrow } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

import image1 from '../../assets/ruthvi.webp';
import image2 from '../../assets/destiny.webp';
import image3 from '../../assets/jyesta.webp';
import image4 from '../../assets/atharva.webp';
import image5 from '../../assets/lotus.webp';

const OurProjects = () => {
    return (
        <section className="py-10 md:px-20 px-4">
            <h2 className="md:text-5xl text-3xl md:mb-10 mb-5 md:text-right">OUR <span className='text-slate-400'>PROJECTS</span></h2>
            <div className="grid md:grid-cols-3 grid-cols-1 md:grid-rows-4 gap-5 md:text-base text-xs">

                <div className="min-h-24 relative md:col-span-2 overflow-hidden">
                    <img src={image1} alt="" className="w-full h-full hover:scale-105 duration-200 object-cover" />
                    <div className="absolute text-sm md:bottom-2 md:right-2 bottom-1 right-1">
                        <Link className="flex items-center gap-1 hover:outline outline-1 hover:bg-white px-2 py-1 md:text-base text-[10px]">EXPLORE <BiSolidRightArrow className="text-slate-500" /></Link>
                    </div>
                    {/* text contents start 1 */}
                    <div className="absolute md:right-5 md:top-5 top-2 right-2">
                        <div className="text-center font-bold">
                            <p className="md:text-lg text-[10px] md:-mb-3 -mb-2">ASHWASURYA</p>
                            <h2 className="md:text-4xl text-lg">RUTHVI</h2>
                        </div>
                        <div className="flex items-center justify-center md:text-xs text-[6px] gap-1 md:mt-2 -mt-1">
                            <FaLocationDot className="text-red-700" />
                            <span>
                                NELAMANGALA
                            </span>
                        </div>
                    </div>
                    <div className="absolute md:bottom-5 bottom-2 left-1/2 -translate-x-1/2">
                        <h2 className="md:text-2xl font-bold md:leading-5 leading-3">
                            EMBRACE THOSE <br /> MOMENTS & LIVE FULLY
                        </h2>
                    </div>
                    {/* text contents end 1 */}
                </div>
                <div className="min-h-48 relative row-span-4 overflow-hidden">
                    <img src={image2} alt="" className="w-full h-full hover:scale-105 duration-200 object-cover" />
                    <div className="absolute text-sm md:bottom-2 md:right-2 bottom-1 right-1">
                        <Link className="flex items-center gap-1 hover:outline outline-1 text-white hover:text-black hover:bg-white px-2 py-1 md:text-base text-[10px]">EXPLORE <BiSolidRightArrow className="text-slate-500" /></Link>
                    </div>
                    {/* text contents start 2 */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-5 text-white">
                        <div className="text-center font-bold">
                            <p className="md:text-xl text-sm md:-mb-2 -mb-1">ASHWASURYA</p>
                            <h2 className="md:text-3xl text-2xl text-nowrap">DESTINY FARM</h2>
                        </div>
                        <div className="flex items-center justify-center gap-1 md:mt-3 mt-2">
                            <FaLocationDot className="text-red-700" />
                            <span>
                                MADDUR
                            </span>
                        </div>
                    </div>
                    <div className="absolute bottom-28 left-5 text-white">
                        <h2 className="text-2xl font-bold leading-5">
                            UNEARTH THE MAGIC <br /> OF OUR FARM LAND.
                        </h2>
                    </div>
                    {/* text contents end 2 */}
                </div>
                <div className="min-h-48 relative row-span-2 overflow-hidden">
                    <img src={image3} alt="" className="w-full h-full hover:scale-105 duration-200 object-cover" />
                    <div className="absolute text-sm md:bottom-2 md:right-2 bottom-1 right-1">
                        <Link className="flex items-center gap-1 hover:outline outline-1 text-white hover:text-black hover:bg-white px-2 py-1 md:text-base text-[10px]">EXPLORE <BiSolidRightArrow className="text-slate-300" /></Link>
                    </div>

                    {/* text contents start 3 */}
                    <div className="absolute left-5 top-5 text-white">
                        <div className="text-center font-bold">
                            <p className="md:text-lg text-xs md:-mb-2 -mb-1">ASHWASURYA</p>
                            <h2 className="md:text-4xl text-2xl">JYESTA</h2>
                        </div>
                        <div className="flex items-center justify-center gap-1 md:mt-3 mt-2">
                            <FaLocationDot className="text-red-700" />
                            <span>
                                KANAKAPURA
                            </span>
                        </div>
                    </div>
                    <div className="absolute md:bottom-20 bottom-12 left-5 text-white">
                        <h2 className="text-2xl font-bold leading-5">
                            PREMIUM PLOTS <br />AT NELAMANGALA
                        </h2>
                    </div>
                    {/* text contents end 3 */}
                </div>
                <div className="min-h-48 relative row-span-3 overflow-hidden">
                    <img src={image4} alt="" className="w-full h-full hover:scale-105 duration-200 object-cover" />
                    <div className="absolute text-sm md:bottom-2 md:right-2 bottom-1 right-1">
                        <Link className="flex items-center gap-1 hover:outline outline-1 text-white hover:text-black hover:bg-white px-2 py-1 md:text-base text-[10px]">EXPLORE <BiSolidRightArrow className="text-slate-500" /></Link>
                    </div>
                    {/* text contents start 4 */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-5 text-white">
                        <div className="text-center font-bold">
                            <p className="md:text-lg text-xs md:-mb-2 -mb-1">ASHWASURYA</p>
                            <h2 className="md:text-4xl text-2xl text-nowrap">ATHARVA RITEWAY</h2>
                        </div>
                        <div className="flex items-center justify-center gap-1 md:mt-3 mt-2">
                            <FaLocationDot className="text-red-700" />
                            <span>
                                OFF MYSORE ROAD
                            </span>
                        </div>
                    </div>
                    <div className="absolute md:bottom-28 bottom-12 left-5 text-white">
                        <h2 className="text-3xl font-bold leading-6">
                            CRAFTING HAPPINESS <br /> IN EVERY PLOTS
                        </h2>
                    </div>
                    {/* text contents end 4 */}
                </div>
                <div className="min-h-48 relative overflow-hidden">
                    <img src={image5} alt="" className="w-full h-full hover:scale-105 duration-200 object-cover" />
                    <div className="absolute text-sm md:bottom-2 md:right-2 bottom-1 right-1">
                        <Link className="flex items-center gap-1 hover:outline outline-1 text-slate-300 hover:text-black hover:bg-white px-2 py-1 md:text-base text-[10px]">EXPLORE <BiSolidRightArrow className="text-slate-300" /></Link>
                    </div>
                    {/* text contents start 5 */}
                    <div className="absolute md:left-5 left-2 md:top-5 top-2 text-white">
                        <div className="text-center font-bold">
                            <p className="md:text-sm text-xs md:-mb-2 -mb-1">ASHWASURYA</p>
                            <h2 className="md:text-3xl text-2xl text-nowrap">LOTUS</h2>
                        </div>
                        <div className="flex items-center justify-center gap-1 md:mt-3 mt-2 md:text-xs text-[8px]">
                            <FaLocationDot className="text-red-700" />
                            <span>
                                NELAMANGALA
                            </span>
                        </div>
                    </div>
                    <div className="absolute md:bottom-5 bottom-2 md:left-5 left-2 text-white">
                        <h2 className="md:text-2xl font-bold md:leading-6 leading-3">
                            INVEST WISELY <br />FOR YOUR LOVED ONES

                        </h2>
                    </div>
                    {/* text contents end 5 */}
                </div>
            </div>
            <div className="md:mt-14 mt-8 grid place-content-center">
                <Link to={`/projects`} className="flex items-center gap-1 outline outline-1 hover:bg-black hover:text-white px-5 py-1 text-lg">VIEW ALL</Link>
            </div>
        </section>
    );
};

export default OurProjects;