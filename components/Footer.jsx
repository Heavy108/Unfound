import style from "../css/Footer.module.css";
import Image from "next/image";
import logo from "@/assets/Logowithname.png";
// import { IoMdMail } from "react-icons/io";
// import { CgFacebook } from "react-icons/cg";
// import { FaTwitter } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa6";
// import { TfiLinkedin } from "react-icons/tfi";
import unfound from "@/assets/Unfound.svg";
import { Mail,Facebook ,Twitter,Instagram ,Linkedin } from "lucide-react";
import footer_gradient from "@/assets/Footer.svg";
import Link from "next/link";
function Footer() {
  return (
    <>
     
      <div className={`${style.container}  font-satoshi`}>
        <div className={style.logoContainer}>
          <Image src={logo} width='auto' height='auto' alt="logo with name" />
          <h2>
            Where ambition meets design to create exceptional digital
            experiences.
          </h2>
        </div>
        {/* <div className={style.container2}> */}
        <div className={style.quicklinks}>
          <h2>QUICK LINKS</h2>
          <ul>
            <Link href={"/"}>
              <li>Home</li>
            </Link>
            <Link href={"/about"}>
              <li>About</li>
            </Link>

            <Link href={"/contact"}>
              <li>Contact Us</li>
            </Link>

            <Link href={"/CaseStudies"}>
              <li>Case Studies</li>
            </Link>
          </ul>
        </div>

        <div className={style.getintouch}>
          <h2>GET IN TOUCH</h2>
          <div className={style.icons}>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=team@unfoundstudio.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail />
            </a>
            <Facebook size={24} /> <Twitter size={24} /> <Instagram size={24} />{" "}
            {/* <Linkedin size={24} />{" "} */}
            <Link
              href="https://www.linkedin.com/company/unfound-studio-social/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
            </Link>
          </div>
          <h2>© 2025 Unfound Studio</h2>
        </div>
      </div>
      {/* </div> */}

      {/* Footer image at bottom */}
      <Image
        src={unfound}
        width={256000}
        height={300}
        alt="unfound"
        className={style.unfound}
      />
      {/* </div> */}
    </>
  );
}

export default Footer;
