import { useState, useEffect, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const navRef = useRef();

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <nav className="fixed w-full top-0 z-40">
            <div className="">
                <div className="absolute right-0 z-20 ">
                    <div className="md:p-5 p-3 md:backdrop-brightness-75 backdrop-brightness-50">
                        <button
                            onClick={toggleDrawer}
                            className="text-white hover:text-slate-300 md:text-3xl text-xl"
                        >
                            {open ? <IoMdClose /> : <GiHamburgerMenu />}
                        </button>
                    </div>
                </div>
                <div
                    ref={navRef}
                    className={`backdrop-brightness-[.3] lg:w-1/4 w-2/3 h-screen absolute top-0 duration-300 ${open ? "right-0" : "-right-[100%]"
                        }`}
                >
                    <ul className="text-white w-full h-full flex flex-col justify-center items-center gap-5 text-2xl">
                        <li>
                            <Link to="/" onClick={scrollToTop}>
                                Home
                            </Link>
                        </li>
                        {/* <li>
                            <Link to="/projects">Projects</Link>
                        </li> */}
                        <li>
                            <ScrollLink to="about" className="cursor-pointer" smooth={true} duration={500}>
                                About
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink to="service" className="cursor-pointer" smooth={true} duration={500}>
                                Service
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink to="contact" className="cursor-pointer" smooth={true} duration={500}>
                                Contact
                            </ScrollLink>
                        </li>
                        <li>
                            <Link to="/admin/login">
                                Admin
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
