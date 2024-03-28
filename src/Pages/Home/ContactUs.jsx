import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { ImSpinner6 } from "react-icons/im";
import emailjs from "@emailjs/browser";
import useFireStore from "../../hooks/useFirestore";

import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const [check, setCheck] = useState(false);

  const navigate = useNavigate();

  const handleChange = () => {
    setCheck(!check);
  };

  // const form = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // emailjs
    //     .sendForm(
    //         "service_3azcupa",
    //         "template_ocwzah4",
    //         form.current,
    //         "-hxnQqE3Het3H384l"
    //     )
    //     .then(
    //         (result) => {
    //             console.log(result.text);
    //             toast.success("Message send successfully");
    //             e.target.reset();
    //             setLoading(false);
    //         },
    //         (error) => {
    //             console.log(error.text);
    //             toast.error("Message not sent!");
    //             setLoading(false);
    //         }
    //     );

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const data = { name, email, phone };

    if (phone.length < 10 || phone.length > 10) {
      toast.error("Please enter 10 digit phone number");
      setLoading(false);
    } else {
      const sendData = await useFireStore(data);
      if (sendData) {
        toast.success("Send successfully");
        form.reset();
        navigate("/thank-you");
        setLoading(false);
      } else {
        toast.error("Somethings is wrong");
        setLoading(false);
      }
    }
  };

  return (
    <section id="contact" className="md:px-20 md:py-1 md:pb-10 pb-5">
      <h2 className="md:text-5xl text-3xl md:mb-10 mb-5 md:text-left text-center">
        CONTACT <span className="text-slate-400">US</span>
      </h2>
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="md:order-1 order-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8378966787077!2d77.51803467479296!3d12.91813821604875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f8e148034c7%3A0xbdd59f800d23460c!2sAshwasurya%20Realities%20India%20Private%20Limited!5e0!3m2!1sen!2sin!4v1705068559995!5m2!1sen!2sin"
            className="w-full md:h-full h-60"
            loading="lazy"
          ></iframe>
        </div>
        <div className="md:order-2">
          <form
            onSubmit={handleSubmit}
            className="py-16 px-10 bg-black text-white flex flex-col items-start gap-5"
          >
            <input
              type="text"
              name="name"
              placeholder="name"
              className="bg-transparent border px-2 py-1 w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="email"
              className="bg-transparent border px-2 py-1 w-full"
              required
            />
            <input
              type="number"
              name="phone"
              placeholder="contact"
              className="bg-transparent border px-2 py-1 w-full"
              required
              autoComplete="off"
            />
            <p className="font-extralight mb-10">
              <input onChange={handleChange} checked={check} type="checkbox" />{" "}
              I Accept all terms & conditions
            </p>
            <button
              type="submit"
              disabled={check == false}
              className="bg-yellow-500 hover:bg-transparent hover:text-white hover:outline outline-1 text-black px-10 py-1 flex items-center gap-1"
            >
              {loading && <ImSpinner6 className="animate-spin" />}
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
