"use client";
import style from "../css/navbar.module.css";
import Logo from "../assets/Logowithname.webp";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { useState } from "react";

function Navbar() {
  const [active, setactive] = useState(false);

  const handleClick = () => {
    setactive(!active);
    console.log(active);
  };

  return (
    <>
      <div className={style.Navbar}>
        <Image src={Logo} alt="UnfoundLogo" />
        <div className={style.container}>
          <ul className={style.list}>
            <li>About</li>
            <li>Case Studies</li>
            <button className={style.contact}>Contact Us</button>
          </ul>
        </div>
        <div className={style.menuIcon} onClick={handleClick}>
          <span>
            {active ? (
              <IoCloseSharp className={style.navicon} />
            ) : (
              <GiHamburgerMenu className={style.navicon} />
            )}
          </span>
        </div>
      </div>

      {active && (
        <ul className={style.sideMenu}>
          <li>
            About <FaArrowRight className={style.arrow} />
          </li>
          <li>
            Case Studies <FaArrowRight className={style.arrow} />
          </li>
          <li >
            Contact Us <FaArrowRight className={style.arrow} />
          </li>
        </ul>
      )}
    </>
  );
}

export default Navbar;
