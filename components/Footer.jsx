import style from "../css/Footer.module.css"
import Image from "next/image";
import logo from "@/assets/Logowithname.png"
import { IoMdMail } from "react-icons/io";
import { CgFacebook } from "react-icons/cg";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { TfiLinkedin } from "react-icons/tfi";
import unfound from "@/assets/Unfound.png"
import FooterSVG from "../assets/footer_gradient.svg";
import grad2 from "@/assets/footergrad2.svg"
function Footer() {
  return (
    <div className={style.footerWrapper}>
      {/* Background gradients */}
      <img
        src={FooterSVG.src}
        alt="footer gradient"
        className={style.footerGradient}
      />
      <img
        src={grad2.src}
        alt="footer gradient"
        className={style.footerGradient2}
      />

      {/* Content */}
      <div className={style.container}>
        <div className={style.logoContainer}>
          <Image src={logo} width={100} height={40} alt="logo with name" />
          <h2>
            Where ambition meets design to create exceptional digital
            experiences.
          </h2>
        </div>

        <div className={style.quicklinks}>
          <h2>QUICK LINKS</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Case Studies</li>
          </ul>
        </div>

        <div className={style.getintouch}>
          <h2>GET IN TOUCH</h2>
          <div className={style.icons}>
            <IoMdMail /> <CgFacebook /> <FaTwitter /> <FaInstagram />{" "}
            <TfiLinkedin />
          </div>
          <h2>© 2025 Unfound Studio</h2>
        </div>
      </div>

      {/* Footer image at bottom */}
      <Image
        src={unfound}
        width={1900}
        height={300}
        alt="unfound"
        className={style.unfound}
      />
    </div>
  );
}

export default Footer;