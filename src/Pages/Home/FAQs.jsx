
import FAQComponent from "../../Components/FAQComponent/FAQComponent";

const FAQs = () => {

    const faqs = [
        {
            question: 'HOW MANY SATISFIED CLIENTS DOES ASHWASURYA REALITIES HAVE FOR PLOTS FOR SALE IN BANGALORE?',
            answer: 'Ans - Ashwasurya Realities has served 2,200 happy clients who have found their dream plots for sale in Bangalore.',
        },
        {
            question: 'DOES ASHWASURYA REALITIES PRIORITIZE SUSTAINABLE PRACTICES IN THEIR REAL ESTATE PROJECTS?',
            answer: 'Ans - Yes, Ashwasurya Realities is committed to staying in tune with the times and embracing sustainable practices. They actively take up environmental issues and strive to create a harmonious balance between urban development and nature in plots for sale in Bangalore.',
        },
        {
            question: 'WHAT MAKES ASHWASURYA REALITIES A TRUSTED REAL ESTATE PARTNER FOR PLOTS FOR SALE IN BANGALORE?',
            answer: 'Ans - Ashwasurya Realities has earned the trust of clients through their commitment to excellence and customer satisfaction. They offer meticulously designed plots for sale in Bangalore, catering to diverse needs and preferences.'
        },
        {
            question: 'ARE THERE ANY ONGOING PROJECTS FOR PLOTS FOR SALE IN BANGALORE?',
            answer: 'Ans - Ashwasurya Realities has four ongoing projects, namely Ashwasurya Destiny Farm in Maddur, Ashwasurya Ruthvi in Nelmangala, Ashwasurya Jyesta in Kanakpura, and Ashwasurya Lotus in Nelmangala. These projects offer exceptional plots for sale in Bangalore.'
        },
        {
            question: "WHAT ARE THE CONTACT DETAILS FOR ASHWASURYA REALITIES' OFFICE IN BANGALORE?",
            answer: "Ans - Ashwasurya Realities' office is located at No. 836, 3rd Floor, 60ft. Road, BEML 3rd Stage, Rajarajeshwari Nagar, Bangalore – 560098."
        },
        {
            question: 'HOW DOES ASHWASURYA REALITIES ENSURE TRANSPARENCY IN THEIR SERVICES FOR PLOTS FOR SALE IN BANGALORE?',
            answer: 'Ans - Ashwasurya Realities strives to provide unmatched service, expertise, and transparency throughout the journey of exploring and purchasing plots for sale in Bangalore.'
        },
        {
            question: "ARE YOU READY TO EMBARK ON THE EXCITING ADVENTURE OF FINDING YOUR PERFECT PLOT IN BANGALORE?",
            answer: 'Ans - Look no further than Ashwasurya Realities. With our vast range of options and unwavering commitment to your satisfaction, we are here to make your dreams of owning a plot in Bangalore a reality. Contact us today or visit our office at No. 836, 3rd Floor, 60ft. Road, BEML 3rd Stage, Rajarajeshwari Nagar, Bangalore – 560098.'
        },
        {
            question: 'HOW CAN I GET IN TOUCH WITH ASHWASURYA REALITIES TO INQUIRE ABOUT PLOTS FOR SALE IN BANGALORE?',
            answer: 'Ans - You can contact Ashwasurya Realities by calling 8339963996 or emailing geethanjali@ashwasuryarealities.com. Alternatively, you can visit their office at No. 836, 3rd Floor, 60ft. Road, BEML 3rd Stage, Rajarajeshwari Nagar, Bangalore – 560098.'
        },
    ];

 
    return (
        <section
            id="service"
            className="py-10 md:px-20 px-4">
            <h2 className="md:text-5xl text-3xl md:mb-10 mb-5 text-slate-400 text-center">FAQ</h2>
            <div>
                <FAQComponent faqs={faqs} />
            </div>
        </section>
    );
};

export default FAQs;