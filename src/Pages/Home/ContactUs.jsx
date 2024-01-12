import { useState } from "react";
import toast from 'react-hot-toast';

const ContactUs = () => {

    const [check, setCheck] = useState(false);
    const handleChange = () => {
        setCheck(!check)
    }

    const submitContactForm = (e) => {
        e.preventDefault();
        toast('Here is your toast.');
    }

    return (
        <section className="md:px-20 md:py-1 md:pb-10 pb-5">
            <h2 className="md:text-5xl text-3xl md:mb-10 mb-5 md:text-left text-center">CONTACT <span className='text-slate-400'>US</span></h2>
            <div className="grid md:grid-cols-2 grid-cols-1">
                <div className="md:order-1 order-2">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8378966787077!2d77.51803467479296!3d12.91813821604875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f8e148034c7%3A0xbdd59f800d23460c!2sAshwasurya%20Realities%20India%20Private%20Limited!5e0!3m2!1sen!2sin!4v1705068559995!5m2!1sen!2sin" className="w-full h-full" loading="lazy" ></iframe>
                </div>
                <div className="md:order-2">
                    <form onSubmit={submitContactForm} className="py-10 px-10 bg-black text-white flex flex-col items-start gap-5">
                        <input type="text" placeholder='name' className='bg-transparent border px-2 py-1 w-full' required />
                        <input type="email" placeholder='email' className='bg-transparent border px-2 py-1 w-full' required />
                        <input type="contact" placeholder='contact' className='bg-transparent border px-2 py-1 w-full' required />
                        <p className="font-extralight mb-10">
                            <input onChange={handleChange} checked={check} type="checkbox" /> I Accept all terms & conditions
                        </p>
                        <button type='submit' disabled={check == false} className='bg-yellow-500 hover:bg-transparent hover:text-white hover:outline outline-1 text-black px-10 py-1'>Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;