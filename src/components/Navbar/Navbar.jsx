import React, { useState } from "react";
import nav_logo from "../../assets/HomeImg/nav_logo.png";
import { Link, NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbr = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-black px-4 py-2 lg:flex lg:justify-between lg:items-center">
      <div className="flex justify-between items-center">
        <div>
          <img
            src={nav_logo}
            alt="Logo"
            className="w-28 lg:w-fit cursor-pointer"
          />
        </div>

        <div className="text-white text-xl flex items-center justify-center space-x-5 lg:hidden">
          <a
            href="https://www.facebook.com/BattlegroundsMobileIN?home"
            target="_blank"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fbattlegroundsmobilein_official%2F&is_from_rle"
            target="_blank"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.youtube.com/channel/UCe31NPEeRGO0hcznx6Tdb-g"
            target="_blank"
          >
            <FaYoutube />
          </a>
          <Link>
            <FaShoppingCart />
          </Link>
        </div>

        {/* Hamburger menu icon */}
        <div className="lg:hidden  flex items-center justify-center">
          <button
            onClick={toggleMenu}
            className="text-gray-500 focus:outline-none focus:text-orange-400 text-xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Middle section */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } lg:flex lg:flex-grow lg:items-center lg:justify-center lg:space-x-8 mt-2 lg:mt-0`}
      >
        <ul className="flex flex-col lg:flex-row lg:space-x-8 text-2xl">
          <NavLink
            to="/"
            className={({ isActive }) =>
              ` ${isActive ? "text-orange-400" : "text-gray-500"}`
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="/news"
            className={({ isActive }) =>
              ` ${isActive ? "text-orange-400" : "text-gray-500"}`
            }
          >
            NEWS
          </NavLink>
          <NavLink
            to="/redeem"
            className={({ isActive }) =>
              ` ${isActive ? "text-orange-400" : "text-gray-500"}`
            }
          >
            REDEEM
          </NavLink>
          <NavLink
            to="/esports"
            className={({ isActive }) =>
              ` ${isActive ? "text-orange-400" : "text-gray-500"}`
            }
          >
            ESPORT
          </NavLink>
          <NavLink
            to="/gameres"
            className={({ isActive }) =>
              ` ${isActive ? "text-orange-400" : "text-gray-500"}`
            }
          >
            GAME RESPONSIBILY
          </NavLink>
        </ul>
      </div>

      {/* Right section */}
      <div className="text-white text-2xl hidden lg:flex items-center space-x-5">
        <a
          href="https://www.facebook.com/BattlegroundsMobileIN?home"
          target="_blank"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fbattlegroundsmobilein_official%2F&is_from_rle"
          target="_blank"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.youtube.com/channel/UCe31NPEeRGO0hcznx6Tdb-g"
          target="_blank"
        >
          <FaYoutube />
        </a>
        <Link>
          <FaShoppingCart />
        </Link>
      </div>
    </div>
  );
};

export default Navbr;
