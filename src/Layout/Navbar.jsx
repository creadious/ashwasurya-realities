import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className="fixed w-full top-0 z-40">
            <div className="">
                <div className="absolute right-0 z-20 ">
                    <button onClick={() => setOpen(!open)} className="text-white hover:text-slate-300 md:text-3xl text-xl md:p-5 p-3 md:backdrop-brightness-75 backdrop-brightness-50">
                        {
                            open ?
                                <IoMdClose />
                                :
                                <GiHamburgerMenu />
                        }
                    </button>

                </div>
                <div className={`backdrop-brightness-[.3] lg:w-1/4 w-2/3 h-screen absolute top-0 duration-300 ${open ? 'right-0' : '-right-[100%]'} `}>
                    <ul className="text-white w-full h-full flex flex-col justify-center items-center gap-5 text-2xl">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/projects'>Projects</Link></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Service</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;