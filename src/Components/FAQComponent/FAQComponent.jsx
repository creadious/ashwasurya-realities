import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const FAQComponent = ({ faqs }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };


    return (

        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-5" >
            {faqs?.map((faq, index) => (
                <div key={index} className="mb-4">
                    <div
                        className="cursor-pointer bg-gray-100 p-4 rounded-md transition duration-500 ease-in-out shadow-xl"
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className="flex justify-between items-center gap-2">
                            <h2 className="md:text-base text-xs font-semibold">{faq.question}</h2>
                            <span className={`${openIndex === index ? 'rotate-180' : 'rotate-0'} duration-300`}><IoIosArrowUp /></span>
                        </div>
                    </div>
                    <div className={`mt-2 rounded-md overflow-hidden duration-500 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                        <p className="p-4 md:text-base text-xs">{faq.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FAQComponent;