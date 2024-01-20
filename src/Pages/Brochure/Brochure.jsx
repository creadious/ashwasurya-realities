

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import useFireStore from '../../hooks/useFirestore';


import toast from 'react-hot-toast';

const Brochure = () => {


    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const projectName = form.project.value;
        const data = { name, email, phone, projectName };

        const sendData = await useFireStore(data)
        if (sendData) {
            toast.success('Download starting...');
            const link = document.createElement('a');
            link.href = 'https://drive.google.com/file/d/1An0kvM5n7dXX7OQpQa4w-XcyUagw2szP/view?usp=sharing';
            link.download = 'brochure.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
        else {
            toast.error('Somethings is wrong');
        }


    }

    return (
        <section>
            <h1 className="text-2xl font-semibold uppercase mt-20">Please fill this form!</h1>
            <form onSubmit={handleSubmit} className=" flex flex-col gap-5 mt-10 md:w-2/3 mx-auto md:text-base text-sm">
                <input type="text" name="name" placeholder="Enter your name" className="px-3 py-1 shadow-2xl border border-black" required />
                <input type="email" name="email" placeholder="Enter your Email" className="px-3 py-1 shadow-2xl border border-black" required />
                <input type="number" name="phone" placeholder="Enter your Contact Number" className="px-3 py-1 shadow-2xl border border-black" required />
                {/* <PhoneInput
                    country={'in'}
                    // value={this.state.phone}
                    // onChange={phone => this.setState({ phone })}
                    inputProps={{
                        name: 'phone',
                        required: true,
                        autoFocus: true
                    }}
                    className="px-3 py-1 shadow-2xl border border-black" required
                /> */}
                <select name="project" className="px-3 py-1 shadow-2xl border border-black" required>
                    <option value="" disabled selected >--Select your brochure</option>
                    <option value="ATHARVA RITEWAY">ATHARVA RITEWAY</option>
                </select>
                <button type="submit" className="border border-black md:w-40 w-32 mx-auto py-2 hover:bg-black hover:text-white">
                    Download now
                </button>
            </form>
        </section>
    );
};

export default Brochure;