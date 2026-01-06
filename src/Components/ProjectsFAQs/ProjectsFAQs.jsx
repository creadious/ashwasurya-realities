import FAQComponent from "../FAQComponent/FAQComponent";

const ProjectsFAQs = ({ faqs }) => {
  return (
    <div className="md:py-10 py-5 md:px-20 px-2">
      <h2 className="md:text-3xl text-3xl md:mb-10 mb-5 text-slate-400 text-center">
        FAQ
      </h2>
      <div>{faqs && <FAQComponent faqs={faqs} />}</div>
    </div>
  );
};

export default ProjectsFAQs;
