
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
import FAQ from "@/components/FAQ"
import Footer from "@/components/Footer"
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="relative  h-[500px] w-full overflow-hidden ">
        {/* Background image */}
        <Image src={Gradient1} alt="gradient1" fill className="-z-1" priority />

        {/* Navbar on top */}
        <div className="relative z-10 mb-[3rem]">
          <Navbar />
        </div>

        <div className={style.Hero}>
          <h1 className="font-cabinet ">Where Ideas Become </h1>
          <h1 className="font-cabinet ">Digital Experiences</h1>
          <p className="font-satoshi">
            We collaborate with forward-thinking brands to turn their ideas into
            digital products and stories.
          </p>
          <div className={style.buttonContainer}>
            <button className={`${style.expertise} font-satoshi`}>
              See Expertise
            </button>
            <Link href={"/contact"}>
              <button className={`${style.lets} font-satoshi`}>
                Let's Talk{" "}
                <span className={style.arrow}>
                  <FaArrowRight />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* <div className={style.animation}>
        <Spline
          scene="https://prod.spline.design/BdBvQQ2ZpuUKIjVw/scene.splinecode"
          style={{ pointerEvents: "none" }}
          onError={(err) => console.error("Spline failed:", err)}
        />
      </div> */}
      {/* <HeroSpline /> */}

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
      <Reasons />
      <FAQ />
      <Footer />
    </>
  );
}
