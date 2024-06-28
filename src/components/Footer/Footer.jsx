import React from "react";
import nav_logo from "../../assets/HomeImg/nav_logo.png";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black text-gray-500 flex flex-col gap-2 py-4">
      <div className="flex gap-4 items-center justify-center ">
        <img className="w-24 cursor-pointer" src={nav_logo} alt="" />
        <p className="font-bold cursor-pointer">KRAFTON</p>
      </div>
      <div className="font-semibold text-center text-base cursor-pointer">
        <p>© 2024 KRAFTON, Inc. All rights reserved.</p>
      </div>
      <div className="text-sm text-white cursor-pointer flex items-center justify-center gap-2">
        <p>@Made with ❤️ 🫀 by SUJAY PAGAM</p>
        <Link
          to="https://www.linkedin.com/in/sujay-pagam-448448260/"
          target="_blank"
        >
          <FaLinkedin />
        </Link>
        <Link to="https://github.com/5ujay" target="_blank">
          <FaGithub />
        </Link>
        <Link
          to="https://www.instagram.com/thesujaypagam03?igsh=cHozaDI1NmthZXZo"
          target="_blank"
        >
          <FaInstagram />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
