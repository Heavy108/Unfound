'use client'
import style from "../../css/about.module.css";
import dhruv from "../../assets/admin/dhruv.png";
import satyam from "../../assets/admin/satyam.png";
import tarun from "../../assets/admin/tarun.png";
import linkedin from "../../assets/admin/linkedin.png";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/navbar"
import Talk from "../../components/Talk"
import Footer from "../../components/Footer"
import footergradient from "../../assets/Footer.svg"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {MagicCard} from "../../components/magicui/magic-card"


const AnimatedText = ({ text, scrollYProgress }) => {
  const words = text.split(" ");

  return (
    <span>
      {words.map((word, i) => {
        const start = i * 0.05;
        const end = start + 0.3;

        const color = useTransform(
          scrollYProgress,
          [start, end],
          ["#595959", "#FFFFFF"]
        );

        return (
          <motion.span
            key={i}
            style={{
              color,
              marginRight: "0.25rem",
              display: "inline-block", // keeps spacing clean
              whiteSpace: "normal", // ✅ allow wrapping
            }}
          >
            {word}
          </motion.span>
        );
      })}
    </span>
  );
};
const Card = ({ name, desc, link, img }) => {
  return (
    // <div className={style.outer}>
    <div className={style.container}>
      <MagicCard className="p-0.25 rounded-[2rem]">
        <div className={style.outer}>
          <div className={style.Card}>
            <Image src={img} alt={name} width="auto" height="auto" />
          </div>
        </div>
      </MagicCard>

      <div className={style.introduction}>
        <div className={style.links}>
          <h1>{name}</h1>
          <Link href={link} target="_blank">
            <Image src={linkedin} alt="linkedin" width="auto" height="auto" />
          </Link>
        </div>
        <p>{desc}</p>
      </div>
    </div>

    // </div>
  );
};

function About() {
    const textRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: textRef,
      offset: ["start end", "end start"],
    });
  return (
    <>
      <Navbar />
      <div className={style.extradiv}>
        <div className={style.aboutContainer}>
          <div className={style.head}>
            <h1 className="font-cabinet">Meet the Founding Team</h1>
            <p className="font-satoshi">
              A collective of designers, developers, and thinkers building
              digital experiences with focus, creativity, and strategy.
            </p>
          </div>

          <div className={style.potrait}>
            <Card
              name="Dhruv NS"
              desc="Passionate about motion design & crafting unique digital experiences."
              link="https://www.linkedin.com/in/dhruv-narayan-sambhav-418556152/"
              img={dhruv}
            />
            <Card
              name="Satyam Sajal"
              desc="Builds clean, scalable code and seamless web & mobile apps."
              link="https://www.linkedin.com/in/satyam-sajal-15a90325b/"
              img={satyam}
            />
            <Card
              name="Tarun Raj"
              desc="Crafts brand strategies and product concepts that resonate globally."
              link="https://www.linkedin.com/in/tarun-raj-b73164202/"
              img={tarun}
            />
          </div>
          <div className={style.head2} ref={textRef}>
            <h2 className="font-cabinet ">
              {" "}
              <span>●</span>Our Mission
            </h2>
            <h3 className="font-satoshi text-wrap">
              <AnimatedText
                text="As a tight-knit team of experts, we create memorable and emotional websites, digital experiences, and native apps."
                scrollYProgress={scrollYProgress}
              />
            </h3>
          </div>
        </div>
      </div>
      <section className="flex-col items-center justify-center relative w-full  ">
        <Talk />
        <Image
          src={footergradient}
          alt="footer gradient"
          width={3560}
          height={400}
          className="2xl:h-[600px] bottom-0"
        />

        <Footer />
      </section>
    </>
  );
}

export default About;
