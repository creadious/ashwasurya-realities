import image from '../../assets/banner.webp';
import logo from '../../assets/logoash.webp';

import { FaWhatsapp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const Banner = () => {
    return (
        <section>
            <div className="h-screen bg-cover relative" style={{ backgroundImage: `url(${image})` }} >
                <div className='py-10 px-14'>
                    <img src={logo} alt="" />
                </div>

                <div className='w-4/5 absolute bottom-4 left-1/2 -translate-x-1/2'>
                    <div className='flex justify-around items-center px-10 py-5 backdrop-brightness-[.4] text-white'>
                        <input type="text" placeholder='name' className='bg-transparent outline px-2 py-1 w-64' />
                        <input type="text" placeholder='name' className='bg-transparent outline px-2 py-1 w-64' />
                        <input type="text" placeholder='name' className='bg-transparent outline px-2 py-1 w-64' />
                        <button type='submit' className='bg-yellow-500 hover:bg-transparent hover:text-white hover:outline text-black px-10 py-1'>Submit</button>
                    </div>
                </div>

                <div className='text-black text-2xl absolute right-0'>
                    <div className='flex flex-col gap-3'>
                        <a href="#" className='bg-[#985527] p-3 inline-block'>
                            <FaWhatsapp />
                        </a>
                        <a href="#" className='bg-[#985527] p-3 inline-block'>
                            <IoCall />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;