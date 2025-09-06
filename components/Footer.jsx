import style from "../css/Footer.module.css";
import Image from "next/image";
import logo from "@/assets/Logowithname.png";
import { IoMdMail } from "react-icons/io";
import { CgFacebook } from "react-icons/cg";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { TfiLinkedin } from "react-icons/tfi";
import unfound from "@/assets/Unfound.png";
import FooterSVG from "../assets/footer_gradient.svg";
import grad2 from "@/assets/footergrad2.svg";
import Talk from "./Talk";
import Link from "next/link";
function Footer() {
  return (
    <>
      {/* <Talk /> */}

      {/* <div className={`${style.footerWrapper} font-satoshi`}> */}
      {/* Background gradients */}
      {/* <Image
          src={grad2}
          alt="footer gradient"
          className={style.footerGradient}
        />
        <Image
          src={grad2}
          alt="footer gradient"
          className={style.footerGradient2}
        /> */}

      {/* Content */}

      <div className={`${style.container} font-satoshi`}>
        <div className={style.logoContainer}>
          <Image src={logo} width={100} height={40} alt="logo with name" />
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
              <Link href={"/#"}>
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
                <IoMdMail size={24} />
              </a>
              <CgFacebook size={24} /> <FaTwitter size={24} />{" "}
              <FaInstagram size={24} />{" "}
              <Link
                href="https://www.linkedin.com/company/unfound-studio-social/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TfiLinkedin size={24} />
              </Link>
            </div>
            <h2>© 2025 Unfound Studio</h2>
          </div>
        </div>
      {/* </div> */}

      {/* Footer image at bottom */}
      <Image
        src={unfound}
        width={1900}
        height={300}
        alt="unfound"
        className={style.unfound}
      />
      {/* </div> */}
    </>
  );
}

export default Footer;
