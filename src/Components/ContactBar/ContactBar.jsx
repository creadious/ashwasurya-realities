import { useState } from "react";
import useFireStore from "../../hooks/useFirestore";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { ImSpinner6 } from "react-icons/im";

const ContactBar = () => {
  const [loading, setLoading] = useState(false);
  const [check, setCheck] = useState(false);

  const navigate = useNavigate();

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
    if (phone.length < 10 || phone.length > 10) {
      toast.error("Please enter 10 digit phone number");
      setLoading(false);
    } else {
      const data = { name, email, phone };

      const sendData = await useFireStore(data);
      if (sendData) {
        toast.success("Send successfully");
        // navigate("/thank-you");
        setLoading(false);
        form.reset();
        window.location.href = "/thankyou.html";
      } else {
        toast.error("Somethings is wrong");
        setLoading(false);
      }
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex justify-around items-center md:flex-row flex-col gap-5 px-10 py-5 backdrop-brightness-[.4] text-white"
      >
        <input
          type="text"
          name="name"
          placeholder="name"
          className="bg-transparent outline outline-1 px-2 py-1 w-64"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          className="bg-transparent outline outline-1 px-2 py-1 w-64"
          required
        />
        <input
          type="number"
          name="phone"
          placeholder="contact"
          className="bg-transparent outline outline-1 px-2 py-1 w-64"
          required
          autoComplete="off"
        />
        <p className="font-extralight">
          <input
            onChange={() => setCheck(!check)}
            checked={check}
            type="checkbox"
          />{" "}
          I Accept all terms & conditions
        </p>
        <button
          type="submit"
          className={`bg-yellow-500 flex items-center gap-1 ${
            check && "hover:bg-transparent hover:text-white hover:outline"
          } text-black px-10 py-1`}
          disabled={loading || check == false}
        >
          {loading && <ImSpinner6 className="animate-spin" />}
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactBar;
