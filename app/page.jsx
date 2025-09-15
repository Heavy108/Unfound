'use client'
import { useRef } from "react";
import Image from "next/image";
import Navbar from "../components/navbar";
import Gradient1 from "../assets/Gradient.png";
import Gradient2 from "../assets/Gradient2.png";
import HeroSpline from "@/components/Spline";
import style from "../css/Home.module.css";
// import { FaArrowRight } from "react-icons/fa6";
import { ArrowUpRight } from "lucide-react";

import Stats from "../components/stats";
import Services from "../components/Services";
import Testonomial from "../components/Testomonial";
import AnimatedTextRibbon from "@/components/Strip";
import Gradient4 from "@/assets/Gradient4.png";
import Feature from "@/components/Features";
import Reasons from "@/components/Reason";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Link from "next/link";
import Talk from "@/components/Talk";

export default function Home() {
  const servicesRef = useRef(null);

  const handleScroll = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="relative  h-[500px] w-full overflow-hidden ">
        {/* Background image */}
        <Image
          src={Gradient1}
          alt="gradient1"
          fill
          loading="lazy"
          className="-z-1"
        />

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
            <button
              onClick={handleScroll}
              className={`${style.expertise} font-satoshimedium`}
            >
              See Expertise
            </button>
            <Link href={"/contact"}>
              <button className={`${style.lets} font-satoshimedium`}>
                Let's Talk{" "}
                <span className={style.arrow}>
                  <ArrowUpRight size={16}  />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* <HeroSpline /> */}

      <Stats />
      <div ref={servicesRef}>
        <Services />
      </div>

      <Testonomial />
      <section className="relative  w-full min-h">
        <Image
          src={Gradient4}
          alt="gradient4"
          width={1200}
          height={800}
          className={style.grad4}
          // priority
        />

        <AnimatedTextRibbon />
        {/* Wrap Feature with ref */}
        <Feature />
      </section>

      <div id="reasons">
        <Reasons />
      </div>
      <FAQ />
      <Talk />
      <Footer />
    </>
  );
}
