import { BiSolidRightArrow } from "react-icons/bi";
import { Link } from "react-router-dom";

const OurProjects = () => {
    return (
        <section className="py-10 md:px-20">
            <h2 className="text-5xl mb-10 text-right">OUR <span className='text-slate-400'>PROJECTS</span></h2>
            <div className="grid grid-cols-3 grid-rows-4 gap-5">
                <div className="bg-slate-200 p-4 min-h-48 relative col-span-2">
                    <div className="absolute bottom-3 right-4">
                        <Link className="flex items-center gap-1 hover:outline outline-1 hover:bg-white px-2 py-1">EXPLORE <BiSolidRightArrow className="text-slate-500" /></Link>
                    </div>
                </div>
                <div className="bg-slate-200 p-4 min-h-48 relative row-span-4">
                    <div className="absolute bottom-3 right-4">
                        <Link className="flex items-center gap-1 hover:outline outline-1 hover:bg-white px-2 py-1">EXPLORE <BiSolidRightArrow className="text-slate-500" /></Link>
                    </div>
                </div>
                <div className="bg-slate-200 p-4 min-h-48 relative row-span-2">
                    <div className="absolute bottom-3 right-4">
                        <Link className="flex items-center gap-1 hover:outline outline-1 hover:bg-white px-2 py-1">EXPLORE <BiSolidRightArrow className="text-slate-500" /></Link>
                    </div>
                </div>
                <div className="bg-slate-200 p-4 min-h-48 relative row-span-3">
                    <div className="absolute bottom-3 right-4">
                        <Link className="flex items-center gap-1 hover:outline outline-1 hover:bg-white px-2 py-1">EXPLORE <BiSolidRightArrow className="text-slate-500" /></Link>
                    </div>
                </div>
                <div className="bg-slate-200 p-4 min-h-48 relative">
                    <div className="absolute bottom-3 right-4">
                        <Link className="flex items-center gap-1 hover:outline outline-1 hover:bg-white px-2 py-1">EXPLORE <BiSolidRightArrow className="text-slate-500" /></Link>
                    </div>
                </div>
            </div>
            <div className="mt-5 grid place-content-center">
                <Link className="flex items-center gap-1 outline outline-1 hover:bg-black hover:text-white px-5 py-1 text-lg">VIEW ALL</Link>
            </div>
        </section>
    );
};

export default OurProjects;