import { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { IoIosArrowDropupCircle } from "react-icons/io";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    // Adjust the scroll threshold according to your preference
    const scrollThreshold = 200;

    setIsVisible(scrollY > scrollThreshold);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
        title="Go to top"
          className="fixed z-50 text-4xl bottom-5 left-5 bg-white rounded-full"
          onClick={scrollToTop}
        >
          <IoIosArrowDropupCircle />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
