import { useState } from "react";
import useFireStore from "../../hooks/useFirestore";
import toast from "react-hot-toast";
import { ImSpinner6 } from "react-icons/im";

const ContactBar = () => {
  const [loading, setLoading] = useState(false);
  const [check, setCheck] = useState(false);
  const [errors, setErrors] = useState({ name: "", email: "", phone: "" });

  const validateForm = (name, email, phone) => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Name is required.";
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) newErrors.email = "Valid email is required.";
    if (!phone.trim() || phone.length !== 10) newErrors.phone = "Phone number must be 10 digits.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const validationErrors = validateForm(name, email, phone);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }

    if (!check) {
      toast.error("Please accept the terms and conditions.");
      setLoading(false);
      return;
    }

    const data = { name, email, phone };
    const sendData = await useFireStore(data);

    if (sendData) {
      toast.success("Form submitted successfully!");
      setLoading(false);
      form.reset();
      setCheck(false);
      setErrors({});
      window.location.href = "/thankyou.html";
    } else {
      toast.error("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex justify-around items-center md:flex-row flex-col gap-5 px-10 py-5 backdrop-brightness-[.4] text-white"
      >
        <div className="flex flex-col">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className={`bg-transparent outline outline-1 px-2 py-1 w-64 ${
              errors.name ? "outline-red-500" : "outline-gray-300"
            }`}
            
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
        </div>
        <div className="flex flex-col">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={`bg-transparent outline outline-1 px-2 py-1 w-64 ${
              errors.email ? "outline-red-500" : "outline-gray-300"
            }`}
            
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
        </div>
        <div className="flex flex-col">
          <input
            type="number"
            name="phone"
            placeholder="Phone"
            className={`bg-transparent outline outline-1 px-2 py-1 w-64 ${
              errors.phone ? "outline-red-500" : "outline-gray-300"
            }`}
            required
            autoComplete="off"
          />
          {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
        </div>
        <p className="font-extralight">
          <input
            onChange={() => setCheck(!check)}
            checked={check}
            type="checkbox"
          />{" "}
          I Accept all <a href="/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-blue-200">terms & conditions</a>
        </p>
        <button
          type="submit"
          className={`bg-yellow-500 flex items-center gap-1 ${
            check && "hover:bg-transparent hover:text-white hover:outline"
          } text-black px-10 py-1`}
          disabled={loading}
        >
          {loading && <ImSpinner6 className="animate-spin" />}
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ContactBar;
