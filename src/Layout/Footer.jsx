import { Link } from "react-router-dom";
import image from "../assets/logoash.webp";

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="md:px-20 px-4 py-10 bg-black text-white">
      <img src={image} alt="" className="md:w-72 w-28" />

      <div className="mt-20 flex md:items-end gap-10 justify-between md:flex-row flex-col">
        <div className="text-gray-400">
          <h4 className="mb-3">CONTACT INFO</h4>
          <p>+91 8339963996</p>
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
            title="Facebook"
            className="w-10 h-10 rounded-full bg-white grid place-content-center text-3xl overflow-hidden"
          >
            <FaFacebookSquare className="text-blue-600" />
          </a>
          <a
            href="https://linkedin.com/company/ashwasurya-realities-company"
            target="_blank"
            title="Linkedin"
            className="w-10 h-10 rounded-full bg-white grid place-content-center text-3xl overflow-hidden"
          >
            <FaLinkedin className="text-blue-700" />
          </a>
          <a
            href="https://www.youtube.com/@ashwasuryarealities3542"
            target="_blank"
            title="Youtube"
            className="w-10 h-10 rounded-full bg-white grid place-content-center text-3xl overflow-hidden"
          >
            <FaYoutube className="text-red-600" />
          </a>
          <a
            href="https://www.instagram.com/ashwasurya_realities/"
            target="_blank"
            title="Instagram"
            className="w-10 h-10 rounded-full bg-white grid place-content-center text-3xl overflow-hidden"
          >
            <FaInstagramSquare className="text-red-600" />
          </a>
        </div>
      </div>
      <div className="font-light text-center mt-5 border-t pt-2">
        <p>copyright @ Ashwasurya Realities</p>
      </div>
    </footer>
  );
};

export default Footer;
