"use client";
import style from "../css/navbar.module.css";
import Logo from "../assets/Logowithname.webp";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  // Animation variants for the menu
  const menuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "afterChildren",
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  // Animation variants for menu items
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  // Animation variants for the hamburger icon
  const iconVariants = {
    closed: {
      rotate: 0,
      transition: { duration: 0.3 },
    },
    open: {
      rotate: 180,
      transition: { duration: 0.3 },
    },
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
        <motion.div
          className={style.menuIcon}
          onClick={handleClick}
          variants={iconVariants}
          animate={active ? "open" : "closed"}
          whileTap={{ scale: 0.95 }}
        >
          <span>
            {active ? (
              <IoCloseSharp className={style.navicon} />
            ) : (
              <GiHamburgerMenu className={style.navicon} />
            )}
          </span>
        </motion.div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.ul
            className={style.sideMenu}
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            style={{ overflow: "hidden" }}
          >
            <motion.li variants={itemVariants}>
              About
              <motion.span
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <FaArrowRight className={style.arrow} />
              </motion.span>
            </motion.li>
            <motion.li variants={itemVariants}>
              Case Studies
              <motion.span
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <FaArrowRight className={style.arrow} />
              </motion.span>
            </motion.li>
            <motion.li variants={itemVariants}>
              Contact Us
              <motion.span
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <FaArrowRight className={style.arrow} />
              </motion.span>
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
