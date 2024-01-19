
import { FaLocationDot } from "react-icons/fa6";

const ProjectContents = () => {
    return (
        <section className="md:py-20 py-10 md:px-20 px-4 text-center">

            <div className="font-bold">
                <h4 className="md:text-2xl">ASHWASURYA</h4>
                <h2 className="md:text-4xl text-2xl border-b-2 px-2 inline-block border-black">ATHARVA RITEWAY</h2>
                <p className="flex items-center justify-center gap-2 mt-3 md:text-lg text-sm">
                    <FaLocationDot className="text-red-600" />
                    <span>
                        OFF MYSORE ROAD
                    </span>
                </p>
            </div>
            <p className="md:w-2/3 mx-auto md:text-3xl mt-10">
                is a BMICAPA and RERAApproved A Khata 20Acres Project
                located off Mysore Road, <br />
                a bustling corridor witnessing significant and rapid development.
                The site's strategic location near key areas represents
                a blend of joy and sustainability, featuring meticulously
                designed landscapes and charming gazebos
            </p>
            <div className="md:mt-20 mt-10">
                <button className="md:text-2xl px-3 py-1 border-2 border-black">
                    DOWNLOAD BROCHURE
                </button>
            </div>

        </section>
    );
};

export default ProjectContents;