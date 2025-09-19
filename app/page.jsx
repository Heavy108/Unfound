"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "../components/navbar";
import Gradient1 from "../assets/Gradient.png";
import Gradient4 from "../assets/Gradient4.png";
import HeroSpline from "@/components/Spline";
import style from "../css/Home.module.css";
import { ArrowUpRight } from "lucide-react";
import Stats from "../components/stats";
import AnimatedTextRibbon from "@/components/Strip";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Link from "next/link";
import Talk from "@/components/Talk";
import Testonomial from "../components/Testomonial";
import dynamic from "next/dynamic";
import LightRays from "@/components/LightRays";
import footergradient from "@/assets/Footer.svg"
const Services = dynamic(() => import("../components/Services"), {
  ssr: false,
  loading: () => <p>Loading services...</p>,
});
const Reasons = dynamic(() => import("../components/Reason"), { ssr: true });
const Feature = dynamic(() => import("../components/Features"), { ssr: true });

export default function Home() {
  const servicesRef = useRef(null);
  const lazyRef = useRef(null);
  const [showLazyComponents, setShowLazyComponents] = useState(false);

  const handleScroll = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // 🔹 Scroll to #reasons if hash is present
  useEffect(() => {
    if (window.location.hash === "#reasons") {
      setShowLazyComponents(true);

      const timer = setTimeout(() => {
        const element = document.getElementById("reasons");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 400);

      return () => clearTimeout(timer);
    }
  }, []);

  // 🔹 Lazy-load Feature and Reasons when near viewport
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         setShowLazyComponents(true);
  //         observer.disconnect();
  //       }
  //     },
  //     { rootMargin: "200px" }
  //   );

  //   if (lazyRef.current) observer.observe(lazyRef.current);
  // }, []);

  return (
    <>
      <div className="relative h-[500px] w-full overflow-hidden">
        {/* <Image
          src={Gradient1}
          alt="gradient1"
          fill
          loading="lazy"
          className="-z-1"
        /> */}
        <LightRays
          raysAngle={135}
          raysOrigin="top-right"
          raysColor="#4EFFD0"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
        <div className="relative z-10 mb-[3rem]">
          <Navbar />
        </div>

        <div className={style.Hero}>
          <h1 className="font-cabinet">
            Where Ideas Become Digital Experiences
          </h1>
          {/* <h1 className="font-cabinet">Digital Experiences</h1> */}
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
                  <ArrowUpRight size={16} />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <HeroSpline />
      <Stats />

      <div ref={servicesRef}>
        <Services />
      </div>

      <Testonomial />

      <section className="relative w-full min-h">
        <Image
          src={Gradient4}
          alt="gradient4"
          width={1200}
          height={800}
          className={style.grad4}
        />
        <AnimatedTextRibbon />

        {/* <div ref={lazyRef}>
          {showLazyComponents && (
            <> */}
        <Feature />
        <div id="reasons">
          <Reasons />
        </div>
        {/* </>
          )}
        </div> */}
      </section>

      <FAQ />
      <section className="relative w-full h-[400px]">
        <Talk />
        <Image src={footergradient} alt="footer gradient"  />

        <Footer />
      </section>
    </>
  );
}
