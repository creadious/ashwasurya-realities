import { useState, useEffect, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const navRef = useRef();
    const location = useLocation();
    const navigate = useNavigate();

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

    // Handle scrolling to sections when location changes
    useEffect(() => {
        const hash = location.hash;
        if (hash) {
            const sectionId = hash.replace("#", "");
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);
        }
    }, [location]);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const handleSectionClick = (sectionId) => {
        setOpen(false); // Close mobile menu
        
        if (location.pathname !== "/") {
            // If not on home page, navigate to home with hash
            navigate(`/#${sectionId}`);
        } else {
            // If already on home page, scroll directly
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);
        }
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
                            <button
                                onClick={() => handleSectionClick("about")}
                                className="cursor-pointer bg-transparent border-none text-white text-2xl"
                            >
                                About
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleSectionClick("service")}
                                className="cursor-pointer bg-transparent border-none text-white text-2xl"
                            >
                                Service
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleSectionClick("contact")}
                                className="cursor-pointer bg-transparent border-none text-white text-2xl"
                            >
                                Contact
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
