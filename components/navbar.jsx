// file: components/navbar.jsx (your original file with only small changes)
"use client";
import style from "../css/navbar.module.css";
import Logo from "../assets/Logowithname.png";
import Image from "next/image";
import { Menu, X ,ArrowUpRight } from "lucide-react";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { IoCloseSharp } from "react-icons/io5";
// import { ArrowUpRight } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

function Navbar() {
  const [active, setActive] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 50) setScrolled(true);
      else setScrolled(false);

      if (currentScroll > lastScroll && currentScroll > 100) setShowNav(false);
      else setShowNav(true);

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const navVariants = {
    hidden: { y: "-100%", transition: { duration: 0.3, ease: "easeInOut" } },
    visible: { y: "0%", transition: { duration: 0.3, ease: "easeInOut" } },
  };

  const menuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut", when: "afterChildren" },
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

  const itemVariants = {
    hidden: { opacity: 0, y: -20, transition: { duration: 0.2 } },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const iconVariants = {
    closed: { rotate: 0, transition: { duration: 0.3 } },
    open: { rotate: 180, transition: { duration: 0.3 } },
  };

  return (
    <>
      <AnimatePresence>
        {showNav && (
          <motion.div
            className={`${style.Navbar}`}
            variants={navVariants}
            key="navbar"
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div
              className={`${style.extradiv} ${scrolled ? style.scrolled : ""}`}
            >
              <Link href={"/"}>
                <Image src={Logo} alt="UnfoundLogo" />
              </Link>
              <div className={style.container}>
                <ul className={`${style.list} font-satoshi`}>
                  {/* changed to the reasons anchor */}
                  <Link href={"/#reasons"}>
                    <li>Why Us</li>
                  </Link>
                  <Link href={"/CaseStudies"}>
                    <li>Case Studies</li>
                  </Link>
                  <Link href={"/contact"}>
                    <button className={style.contact}>Contact Us</button>
                  </Link>
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
                    <X className={style.navicon} />
                  ) : (
                    <Menu className={style.navicon} />
                  )}
                </span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && (
          <motion.ul
            className={`${style.sideMenu} font-satoshi`}
            variants={menuVariants}
            key="sideMenu"
            initial="hidden"
            animate="visible"
            exit="hidden"
            style={{ overflow: "hidden" }}
          >
            {/* mobile menu: close menu on click and navigate to anchor */}
            <Link href={"/#reasons"} onClick={() => setActive(false)}>
              <motion.li variants={itemVariants}>
                Why Us
                <motion.span
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ArrowUpRight className={style.arrow} />
                </motion.span>
              </motion.li>
            </Link>

            <Link href={"/CaseStudies"} onClick={() => setActive(false)}>
              <motion.li variants={itemVariants}>
                Case Studies
                <motion.span
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ArrowUpRight className={style.arrow} />
                </motion.span>
              </motion.li>
            </Link>

            <Link href={"/contact"} onClick={() => setActive(false)}>
              <motion.li variants={itemVariants}>
                Contact Us
                <motion.span
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ArrowUpRight className={style.arrow} />
                </motion.span>
              </motion.li>
            </Link>
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
