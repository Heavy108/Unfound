"use client";
import React, {
  useMemo,
  useRef,
  useState,
  useCallback,
  useEffect,
} from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { LuHand, LuGlobe, LuCodeXml, LuPlay } from "react-icons/lu";
import { RiBarChart2Fill } from "react-icons/ri";
import ServiceCard from "./ServiceCard";
import ServiceCard2 from "./ServiceCard2";
import UXDesign from "../assets/UXDesign.svg";
import WebsiteDesign from "../assets/WebsiteDesign.png";
import VisualDesign from "../assets/VisualDesign.png";
import ReportDesign from "../assets/ReportDesign.png";
import Development from "../assets/Development.png";
import MotionDesign from "../assets/MotionDesign.png";
import style from "../css/services.module.css";
import Gradient3 from "../assets/Gradient3.png";
import Gradient3_1 from "../assets/Gradient3_1.png";
import Image from "next/image";

const TWEEN_FACTOR_BASE = 0.52;
const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max);

// 🔥 Utility component for per-word scroll animation
const AnimatedText = ({ text, scrollYProgress }) => {
  const words = text.split(" ");

  return (
    <span>
      {words.map((word, i) => {
        const start = i * 0.05; // stagger start
        const end = start + 0.3;

        const color = useTransform(
          scrollYProgress,
          [start, end],
          ["#868A8A", "#FFFFFF"]
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

function Services() {
  const textRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start end", "end start"],
  });

  const slides = useMemo(
    () => [
      {
        component: ServiceCard,
        props: {
          title: "Website Design",
          logo: <LuGlobe />,
          description:
            "Designing beautiful, responsive websites that communicate your brand and convert users effortlessly.",
          image: WebsiteDesign,
        },
      },
      {
        component: ServiceCard2,
        props: {
          title: "UX Design",
          logo: <LuHand />,
          description:
            "Crafting intuitive, user-centered app experiences that drive engagement and clarity.",
          image: UXDesign,
        },
      },
      {
        component: ServiceCard,
        props: {
          title: "Development",
          logo: <LuCodeXml />,
          description:
            "From concept to deployment, we engineer high-performance solutions that grow with your business.",
          image: Development,
        },
      },
      {
        component: ServiceCard,
        props: {
          title: "Motion Design",
          logo: <LuPlay />,
          description:
            "Bringing ideas to life through sleek, purposeful animations that elevate storytelling and interaction.",
          image: MotionDesign,
        },
      },
      {
        component: ServiceCard2,
        props: {
          title: "Report Design",
          logo: <RiBarChart2Fill />,
          description:
            "Designing clear, compelling decks and reports that turn data into persuasive narratives.",
          image: ReportDesign,
        },
      },
      {
        component: ServiceCard,
        props: {
          title: "Visual Design",
          logo: <LuGlobe />,
          description:
            "Crafting striking, cohesive visuals that elevate digital products and brand experiences.",
          image: VisualDesign,
        },
      },
    ],
    []
  );

  // autoplay ref so it can be paused on hover
  const autoplay = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    autoplay.current,
  ]);

  const tweenFactor = useRef(0);
  const tweenNodes = useRef([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const totalDots = 6;

  const setTweenNodes = useCallback((emblaApi) => {
    tweenNodes.current = emblaApi
      .slideNodes()
      .map((slideNode) => slideNode.querySelector(".card-wrapper"));
  }, []);

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenScale = useCallback((emblaApi, eventName) => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = eventName === "scroll";

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();
            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);
              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress);
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress);
              }
            }
          });
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
        const scale = numberWithinRange(tweenValue, 0.9, 1).toString();
        const tweenNode = tweenNodes.current[slideIndex];
        if (tweenNode) {
          tweenNode.style.transform = `scale(${scale})`;
          tweenNode.style.transition = "transform 0.3s ease";
        }
      });
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenScale)
      .on("scroll", tweenScale)
      .on("select", onSelect);
  }, [emblaApi, tweenScale, setTweenNodes, setTweenFactor]);

  return (
    <>
      <div className={`${style.container} relative`}>
        <Image
          src={Gradient3}
          alt="gradient background"
          width={1200}
          height={300}
          className={style.grad}
          priority
        />
        <Image
          src={Gradient3_1}
          alt="gradient background"
          width={800}
          height={300}
          className={style.grad2}
        />

        {/* 🔥 Animated heading */}
        <div className={style.head} ref={textRef}>
          <h2 className="font-cabinet">Our Services</h2>
          <h3 className="font-satoshi text-wrap">
            <AnimatedText
              text="As a tight-knit team of experts, we create memorable and emotional websites, digital experiences, and native apps."
              scrollYProgress={scrollYProgress}
            />
          
          </h3>
        </div>

        <div className={style.Carausel}>
          <div
            className="embla"
            ref={emblaRef}
            onMouseEnter={autoplay.current.stop} // ✅ pause autoplay on hover
            onMouseLeave={autoplay.current.reset} // ✅ resume autoplay on leave
          >
            <div className="embla__container">
              {slides.map((slide, idx) => {
                const CardComponent = slide.component;
                const isActive = selectedIndex === idx;

                return (
                  <div className="embla__slide" key={idx}>
                    <motion.div
                      className="card-wrapper"
                      animate={{
                        scale: isActive ? 1 : 0.9,
                        opacity: isActive ? 1 : 0.6,
                      }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <CardComponent {...slide.props} />
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={style.dotcontainer}>
            <span className={style.dot}>
              {Array.from({ length: totalDots }).map((_, index) => (
                <span
                  key={index}
                  className={`${style.dotItem} ${
                    selectedIndex % totalDots === index
                      ? style.active
                      : style.inactive
                  }`}
                  onClick={() => emblaApi && emblaApi.scrollTo(index)} // Jump to correct slide
                ></span>
              ))}
            </span>
          </div>
        </div>

        <div className={style.servicecontainer2}>
          <div className={style.vertical}>
            <ServiceCard
              title="Website Design"
              logo={<LuGlobe />}
              description="Designing beautiful, responsive websites that communicate your brand and convert users effortlessly."
              image={WebsiteDesign}
            />
            <ServiceCard
              title="Motion Design"
              logo={<LuPlay />}
              description="Bringing ideas to life through sleek, purposeful animations that elevate storytelling and interaction."
              image={MotionDesign}
            />
          </div>
          <div className={style.vertical2}>
            <ServiceCard2
              title="UX Design"
              logo={<LuHand />}
              description="Crafting intuitive, user-centered app experiences that drive engagement and clarity."
              image={UXDesign}
            />
            <ServiceCard2
              title="Report Design"
              logo={<RiBarChart2Fill />}
              description="Designing clear, compelling decks and reports that turn data into persuasive narratives."
              image={ReportDesign}
            />
          </div>
          <div className={style.vertical3}>
            <ServiceCard
              title="Development"
              logo={<LuCodeXml />}
              description="From concept to deployment, we engineer high-performance solutions that grow with your business."
              image={Development}
            />
            <ServiceCard
              title="Visual Design"
              logo={<LuGlobe />}
              description="Crafting striking, cohesive visuals that elevate digital products and brand experiences."
              image={VisualDesign}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
