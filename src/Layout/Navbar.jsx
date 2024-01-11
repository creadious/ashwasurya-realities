import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className="fixed w-full top-0 z-40">
            <div className="">
                <div className="absolute right-0 z-20 ">
                    <button onClick={() => setOpen(!open)} className="text-white text-3xl p-5">
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
                        <li><a href="#">Home</a></li>
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