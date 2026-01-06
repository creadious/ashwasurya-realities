import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import useFireStore from "../../hooks/useFirestore";
import Swal from "sweetalert2";

import { FaPhone } from "react-icons/fa";
import { CgSpinner } from "react-icons/cg";
import { FcApproval } from "react-icons/fc";

import OTPInput, { ResendOTP } from "otp-input-react";

import toast from "react-hot-toast";
import { useState } from "react";
import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth";

const Brochure = ({ project }) => {
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState("");
  const [phn, setPhn] = useState("");
  const [formDetails, setFormDetails] = useState({});
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(false);

  const [brochure, setBrochure] = useState();

  const allBrochureLink = [
    {
      projectName: "Ashwasurya Legacy",
      link: "#",
    },
    {
      projectName: "ATHARVA RITEWAY",
      link: "https://drive.google.com/file/d/108Mm0cpFpJJ4y-KP5b_VrGXY-oNGPWMz/view",
    },
    {
      projectName: "APS KEERTHI",
      link: "https://drive.google.com/file/d/1vPqfi7PWI5lOyEhuGdiCsr-1EXrNyeks/view",
    },
    {
      projectName: "LOTUS",
      link: "https://drive.google.com/file/d/1ChOqpWsGs1olJ4EW_KpiJ8EQugSB7yjC/view",
    },
    {
      projectName: "RUTHVI",
      link: "https://drive.google.com/file/d/1ixerdnuhVzvOtHJbXuKLbLobZYvweiQ8/view",
    },
    {
      projectName: "Ashwasurya Signature",
      link: "https://drive.google.com/file/d/1-b1_8-OFhAu4CM-hB23isY8dZ6GNI-uS/view",
    },
    {
      projectName: "Ashwasurya Yashas",
      link: "https://drive.google.com/file/d/17VIWZqYbvBD1RxLbM6L2TFnrGIip0kDE/view",
    },
  ];

  const handleBrochureChange = (e) => {
    const selectedProject = allBrochureLink.find(
      (item) => item.projectName === e.target.value
    );
    setBrochure(selectedProject?.link || "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    // const phone = phn;
    const projectName = form.project.value;
    const data = { name, email, phone, projectName };

    if (phone.length < 10 || phone.length > 10) {
      setLoading(false);
      return toast.error("Please enter 10 digit phone number");
    }
    if (projectName == 0) {
      setLoading(false);
      return toast.error("Please select any brochure.");
    }

    setFormDetails(data);

    // await onSignUp();

    const sendData = await useFireStore(data);
    // const sendData = null;

    console.log("brochure", brochure);

    if (sendData) {
      form.reset();
      setPhn("");

      if (brochure === "") {
        Swal.fire({
          title: "Reach you soon!",
          text: "We will connecting you soon.",
          icon: "success",
          confirmButtonText: "close",
        });
        setLoading(false);
        // return navigate("/thank-you");
        return (window.location.href = "/thankyou.html");
      }

      toast.success("Download starting...");
      const link = document.createElement("a");
      link.href = brochure;
      link.download = "brochure.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setLoading(false);
    } else {
      toast.error("Somethings is wrong! please try again.");
      setLoading(false);
    }
  };

  const { auth } = useAuth();

  function onCaptchaVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignUp();
          },
          "expired-callback": () => {
            // Response expired. Ask user to solve reCAPTCHA again.
            // ...
          },
        }
      );
    }
  }

  async function onSignUp() {
    setLoading(true);
    onCaptchaVerify();

    const phoneNumber = "+" + phn;
    const appVerifier = window.recaptchaVerifier;
    console.log("CAPTCHA", appVerifier);
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOtp(true);
        toast("OTP sended successfully!");
        return true;
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        return false;
      });
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setVerified(true);
        setLoading(false);
        const sendData = await useFireStore(formDetails);
        if (sendData) {
          toast.success("Download starting...");
          const link = document.createElement("a");
          link.href = brochure;
          link.download = "brochure.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          toast.error("Somethings is wrong! please try again.");
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  return (
    <>
      <div id="recaptcha-container"></div>
      {verified ? (
        <section className="h-full grid place-content-center ">
          <h1 className="md:text-2xl text-sm font-semibold uppercase mt-5 flex justify-center items-center gap-1 bg-slate-100 p-5 rounded-xl shadow-xl">
            <FcApproval className="md:text-3xl text-xl" /> phone number verified
          </h1>
          {/* <button>Go to home</button> */}
        </section>
      ) : (
        <>
          {showOtp ? (
            <section className="shadow-xl bg-slate-100 md:p-10 p-4 mt-20 mx-auto md:inline-block rounded-lg">
              <div className="">
                <div className="rounded-full text-2xl w-16 h-16 grid place-content-center mx-auto bg-slate-300">
                  <FaPhone className="" />
                </div>
                <h1 className="md:text-2xl font-semibold uppercase mt-5 ">
                  verify your phone number <br />{" "}
                  {/* <span className="text-lg">please enter the OTP</span> */}
                </h1>

                <div id="recaptcha-container"></div>
              </div>
              <div>
                <div className="md:w-1/2 mx-auto space-y-5 md:p-5 rounded-xl md:mt-0 mt-5">
                  <OTPInput
                    value={otp}
                    onChange={setOtp}
                    autoFocus
                    OTPLength={6}
                    otpType="number"
                    disabled={false}
                    secure
                    className="otp-container flex justify-center"
                  />
                  {/* <ResendOTP
                    onResendClick={() => console.log("Resend clicked")}
                  /> */}
                  <button
                    onClick={onOTPVerify}
                    type="submit"
                    disabled={loading}
                    className="border border-black md:w-40 w-32 mx-auto py-2 hover:bg-black hover:text-white flex items-center justify-center gap-1"
                  >
                    {loading && <CgSpinner className="mt-1 animate-spin" />}
                    Verify OTP
                  </button>
                </div>
              </div>
            </section>
          ) : (
            <section>
              <h1 className="text-2xl font-semibold uppercase mt-20">
                Please fill this form!
              </h1>
              <form
                onSubmit={handleSubmit}
                className=" flex flex-col gap-5 mt-10 md:w-2/3 mx-auto md:text-base text-sm"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="px-3 py-1 shadow-2xl border border-black"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  className="px-3 py-1 shadow-2xl border border-black"
                  required
                />
                <input
                  type="number"
                  name="phone"
                  placeholder="Enter your Contact Number"
                  className="px-3 py-1 shadow-2xl border border-black"
                  required
                />
                {/* <PhoneInput
                  country={"in"}
                  value={phn}
                  onChange={setPhn}
                  inputProps={{
                    name: "phone",
                    required: true,
                    autoFocus: true,
                    autoComplete: "",
                  }}
                  className=" py-1 shadow-2xl border border-black w-full"
                /> */}
                <select
                  name="project"
                  className="px-3 py-1 shadow-2xl border border-black"
                  required
                  defaultValue={project || "0"}
                  onChange={handleBrochureChange}
                >
                  <option value="0" disabled>
                    --Select your brochure
                  </option>
                  {allBrochureLink.map((item, index) => (
                    <option
                      key={index}
                      value={item.projectName}
                      className="uppercase"
                    >
                      {item.projectName}
                    </option>
                  ))}
                </select>
                <button type="submit" disabled={loading} className="bg-black p-1 flex items-center justify-center gap-1 md:w-40 w-32 mx-auto">
                  <span className="border w-full py-2 border-white hover:bg-white duration-150 bg-black text-white hover:text-black">
                    {loading && <CgSpinner className="mt-1 animate-spin" />}
                    Download Now
                  </span>
                </button>
              </form>
            </section>
          )}
        </>
      )}
    </>
  );
};
Brochure.propTypes = {
  project: PropTypes.string,
};

export default Brochure;
