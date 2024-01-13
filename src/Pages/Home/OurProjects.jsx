import { BiSolidRightArrow } from "react-icons/bi";
import { Link } from "react-router-dom";

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
                <div className="bg-slate-200 min-h-48 relative md:col-span-2 overflow-hidden">
                    <img src={image1} alt="" className="w-full h-full hover:scale-105 duration-200" />
                    <div className="absolute md:bottom-3 md:right-4 bottom-1 right-1">
                        <Link className="flex items-center gap-1 hover:outline outline-1 hover:bg-white px-2 py-1">EXPLORE <BiSolidRightArrow className="text-slate-500" /></Link>
                    </div>
                </div>
                <div className="bg-slate-200 min-h-48 relative row-span-4 overflow-hidden">
                    <img src={image2} alt="" className="w-full h-full hover:scale-105 duration-200" />
                    <div className="absolute md:bottom-3 md:right-4 bottom-1 right-1">
                        <Link className="flex items-center gap-1 hover:outline outline-1 text-white hover:text-black hover:bg-white px-2 py-1">EXPLORE <BiSolidRightArrow className="text-slate-500" /></Link>
                    </div>
                </div>
                <div className="bg-slate-200 min-h-48 relative row-span-2 overflow-hidden">
                    <img src={image3} alt="" className="w-full h-full hover:scale-105 duration-200" />
                    <div className="absolute md:bottom-3 md:right-4 bottom-1 right-1">
                        <Link className="flex items-center gap-1 hover:outline outline-1 text-white hover:text-black hover:bg-white px-2 py-1">EXPLORE <BiSolidRightArrow className="text-slate-300" /></Link>
                    </div>
                </div>
                <div className="bg-slate-200 min-h-48 relative row-span-3 overflow-hidden">
                    <img src={image4} alt="" className="w-full h-full hover:scale-105 duration-200" />
                    <div className="absolute md:bottom-3 md:right-4 bottom-1 right-1">
                        <Link className="flex items-center gap-1 hover:outline outline-1 text-white hover:text-black hover:bg-white px-2 py-1">EXPLORE <BiSolidRightArrow className="text-slate-500" /></Link>
                    </div>
                </div>
                <div className="bg-slate-200 min-h-48 relative overflow-hidden">
                    <img src={image5} alt="" className="w-full h-full hover:scale-105 duration-200" />
                    <div className="absolute md:bottom-3 md:right-4 bottom-1 right-1">
                        <Link className="flex items-center gap-1 hover:outline outline-1 text-white hover:text-black hover:bg-white px-2 py-1">EXPLORE <BiSolidRightArrow className="text-slate-300" /></Link>
                    </div>
                </div>
            </div>
            <div className="md:mt-14 mt-8 grid place-content-center">
                <Link to={`/projects`} className="flex items-center gap-1 outline outline-1 hover:bg-black hover:text-white px-5 py-1 text-lg">VIEW ALL</Link>
            </div>
        </section>
    );
};

export default OurProjects;