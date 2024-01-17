import { useRef, useState } from 'react';
import image from '../../assets/banner.webp';
import logo from '../../assets/logoash.webp';

import { FaWhatsapp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";


import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';

const Banner = () => {

    const phoneNumber = "+918549964996";
    const whatsappNumber = "919986157030";

    const form = useRef(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs
            .sendForm(
                "service_3azcupa",
                "template_ocwzah4",
                form.current,
                "-hxnQqE3Het3H384l"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    toast.success("Message send successfully");
                    e.target.reset();
                    setLoading(false);
                },
                (error) => {
                    console.log(error.text);
                    toast.error("Message not sent!");
                    setLoading(false);
                }
            );
    };

    return (
        <section>
            <div className="h-screen bg-cover relative bg-center" style={{ backgroundImage: `url(${image})` }} >
                <div className='md:py-10 py-2 md:px-14 px-4'>
                    <img src={logo} alt="" className='w-44 md:mx-0 mx-auto md:mt-0 mt-24' />
                </div>

                <div className='md:w-4/5 absolute bottom-4 left-1/2 -translate-x-1/2'>
                    <form ref={form} onSubmit={handleSubmit} className='flex justify-around items-center md:flex-row flex-col gap-5 px-10 py-5 backdrop-brightness-[.4] text-white'>
                        <input type="text" name='name' placeholder='name' className='bg-transparent outline outline-1 px-2 py-1 w-64' />
                        <input type="email" name='email' placeholder='email' className='bg-transparent outline outline-1 px-2 py-1 w-64' />
                        <input type="number" name='contact' placeholder='contact' className='bg-transparent outline outline-1 px-2 py-1 w-64' />
                        <button type='submit' className='bg-yellow-500 hover:bg-transparent hover:text-white hover:outline text-black px-10 py-1'>Submit</button>
                    </form>
                </div>

                <div className='text-black text-2xl absolute right-0 top-1/2 -translate-y-1/2'>
                    <div className='flex flex-col gap-3'>
                        <a href={`https://wa.me/${whatsappNumber}`} className='bg-[#985527] hover:bg-[#e39968] p-3 inline-block'>
                            <FaWhatsapp />
                        </a>
                        <a href={`tel:${phoneNumber}`} className='bg-[#985527] hover:bg-[#e39968] p-3 inline-block'>
                            <IoCall />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;