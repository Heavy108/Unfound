import Image from "next/image";
import Navbar from "@/components/navbar";
import Gradient1 from "@/assets/Gradient.png";
import style from "@/css/Home.module.css"
import { FaArrowRight } from "react-icons/fa6";
import Spline from "@splinetool/react-spline/next";
export default function Home() {
  return (
    <>
      <div className="relative  h-[400px] w-full overflow-hidden bg-black">
        {/* Background image */}
        <Image src={Gradient1} alt="gradient1" fill className="z-0" priority />

        {/* Navbar on top */}
        <div className="relative z-10 mb-[3rem]">
          <Navbar />
        </div>

        <div className={style.Hero}>
          <h1>
            Where Ideas Become <br /> Digital Experiences
          </h1>
          <p>
            We collaborate with forward-thinking brands to turn their ideas into
            digital products and stories.
          </p>
          <div className={style.buttonContainer}>
            <button className={style.expertise}>See Expertise</button>
            <button className={style.lets}>
              Let's Talk{" "}
              <span className={style.arrow}>
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className={style.animation}>
        <Spline scene="https://prod.spline.design/hxkNHEALrO0u9MfH/scene.splinecode" />
      </div>
    </>
  );
}
