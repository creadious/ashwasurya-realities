import { useState } from "react";
import useFireStore from "../../hooks/useFirestore";

import toast from 'react-hot-toast';

const ContactBar = () => {

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

        const sendData = await useFireStore(data)
        if (sendData) {
            toast.success('Send successfully');
        }
        else {
            toast.error('Somethings is wrong');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className='flex justify-around items-center md:flex-row flex-col gap-5 px-10 py-5 backdrop-brightness-[.4] text-white'>
                <input type="text" name='name' placeholder='name' className='bg-transparent outline outline-1 px-2 py-1 w-64' />
                <input type="email" name='email' placeholder='email' className='bg-transparent outline outline-1 px-2 py-1 w-64' />
                <input type="number" name='phone' placeholder='contact' className='bg-transparent outline outline-1 px-2 py-1 w-64' />
                <button type='submit' className='bg-yellow-500 hover:bg-transparent hover:text-white hover:outline text-black px-10 py-1'>Submit</button>
            </form>
        </div>
    );
};

export default ContactBar;