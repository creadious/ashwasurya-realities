
import image from "../assets/logoash.webp";

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { phoneNumber } from "../Containts/Numbers";

const Footer = () => {
  return (
    <footer className="md:px-20 px-4 py-10 bg-black text-white relative md:pt-24 md:mt-32 mt-16">
      <div className="absolute md:-top-28 -top-16">
        <img src={image} alt="" className="md:w-64 w-40" />
      </div>

      <div className="mt-20 flex md:items-end gap-10 justify-between md:flex-row flex-col">
        <div className="text-gray-400">
          <h4 className="mb-3">CONTACT INFO</h4>
          <p>+91 {phoneNumber}</p>
          <p className="sm:text-base text-xs">
            geethanjali@ashwasuryarealities.com
          </p>
          {/* <Link to="/admin/login" className="text-xs underline inline-block mt-5 hover:text-blue-600">
            Admin
          </Link> */}
        </div>
        <div className="flex gap-8 items-center">
          <a
            href="https://www.facebook.com/AshwasuryaRealitiesCompany/"
            target="_blank"
            rel="noreferrer"
            title="Facebook"
            className="w-10 h-10 rounded-full bg-white grid place-content-center text-3xl overflow-hidden"
          >
            <FaFacebookSquare className="text-blue-600" />
          </a>
          <a
            href="https://linkedin.com/company/ashwasurya-realities-company"
            target="_blank"
            rel="noreferrer"
            title="Linkedin"
            className="w-10 h-10 rounded-full bg-white grid place-content-center text-3xl overflow-hidden"
          >
            <FaLinkedin className="text-blue-700" />
          </a>
          <a
            href="https://www.youtube.com/@ashwasuryarealities3542"
            target="_blank"
            rel="noreferrer"
            title="Youtube"
            className="w-10 h-10 rounded-full bg-white grid place-content-center text-3xl overflow-hidden"
          >
            <FaYoutube className="text-red-600" />
          </a>
          <a
            href="https://www.instagram.com/ashwasurya_realities/"
            target="_blank"
            rel="noreferrer"
            title="Instagram"
            className="w-10 h-10 rounded-full bg-white grid place-content-center text-3xl overflow-hidden"
          >
            <FaInstagramSquare className="text-red-600" />
          </a>
        </div>
      </div>
      <div className="font-light text-center mt-5 border-t pt-2">
        <p>© {new Date().getFullYear()} Ashwasurya Realities. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
