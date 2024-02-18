import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import useFireStore from "../../hooks/useFirestore";
import Swal from "sweetalert2";

import { FaPhone } from "react-icons/fa";
import { CgSpinner } from "react-icons/cg";
import { FcApproval } from "react-icons/fc";

import OTPInput, { ResendOTP } from "otp-input-react";

import toast from "react-hot-toast";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";

const Brochure = () => {
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState("");
  const [phn, setPhn] = useState("");
  const [formDetails, setFormDetails] = useState({});
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(false);

  const [brochure, setBrochure] = useState("");

  const allBrochureLink = [
    {
      projectName: "ATHARVA RITEWAY",
      link: "https://drive.google.com/file/d/1Ep8KRd4Xx0BXU1llhB3RyiAeVMfdBauG/view?usp=sharing",
    },
    {
      projectName: "APS KEERTHI",
      link: "",
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


    setFormDetails(data);

    // await onSignUp();

    const sendData = await useFireStore(data);
    // const sendData = null;

    if (sendData) {
      form.reset();
      setPhn("");
      if (brochure === "") {
        return Swal.fire({
          title: "Reach you soon!",
          text: "We will connecting you soon.",
          icon: "success",
          confirmButtonText: "close",
        });
      }

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
                  defaultValue="0"
                  onChange={handleBrochureChange}
                >
                  <option value="0" disabled>
                    --Select your brochure
                  </option>
                  {allBrochureLink.map((item, index) => (
                    <option key={index} value={item.projectName}>
                      {item.projectName}
                    </option>
                  ))}
                </select>
                <button
                  type="submit"
                  disabled={loading}
                  className="border border-black md:w-40 w-32 mx-auto py-2 hover:bg-black hover:text-white flex items-center justify-center gap-1"
                >
                  {loading && <CgSpinner className="mt-1 animate-spin" />}
                  Download Now
                </button>
              </form>
            </section>
          )}
        </>
      )}
    </>
  );
};

export default Brochure;
