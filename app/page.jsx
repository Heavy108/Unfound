
import Image from "next/image";
import Navbar from "../components/navbar";
import Gradient1 from "../assets/Gradient.png";
import Gradient2 from "../assets/Gradient2.png";
import HeroSpline from "@/components/Spline"
import style from "../css/Home.module.css";
import { FaArrowRight } from "react-icons/fa6";
import Spline from "@splinetool/react-spline/next";
import Stats from "../components/stats";
import Services from "../components/Services";
import Testonomial from "../components/Testomonial";
import AnimatedTextRibbon from "@/components/Strip";
import Gradient4 from "@/assets/Gradient4.png"
import Feature from "@/components/Features"
import Reasons from "@/components/Reason"
export default function Home() {
  return (
    <>
      <div className="relative  h-[400px] w-full overflow-hidden ">
        {/* Background image */}
        <Image src={Gradient1} alt="gradient1" fill className="z-0" priority />

        {/* Navbar on top */}
        <div className="relative z-10 mb-[3rem]">
          <Navbar />
        </div>

        <div className={style.Hero}>
          <h1>Where Ideas Become Digital Experiences</h1>
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
      {/* <div
        className={style.animation}
       
      >
        <Spline scene="https://prod.spline.design/BdBvQQ2ZpuUKIjVw/scene.splinecode" />
      </div> */}
      {/* <HeroSpline/> */}
      <Stats />
      <Services />
      <Testonomial />
      <section className="relative  w-full min-h">
        <Image
          src={Gradient4}
          alt="gradient4"
          width={1200}
          height={800}
          className={style.grad4}
          priority
        />

        <AnimatedTextRibbon />
        <Feature />
      </section>
      {/* <section className="text-7xl text-white">
        hello
      </section> */}
      <Reasons/>
    </>
  );
}
