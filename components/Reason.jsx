"use client";
import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  useMemo,
} from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import ReasonCard from "./ReasonCard";
import ReasonCard2 from "./ReasonCard2";

import inovation from "../assets/inovation.svg";
import culture from "../assets/culture.svg";
import Expe from "../assets/Experience.png";
import style from "../css/Reason.module.css";
import Gradient3 from "../assets/Gradient2.png";
import Image from "next/image";
import Gradient5 from "@/assets/Gradient5.png";
const TWEEN_FACTOR_BASE = 0.52;
const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max);

function Reasons() {
  const duplicatedSlides = useMemo(
    () => [
      {
        component: ReasonCard,
        props: {
          title: "Innovative",
          description:
            "We harness cutting-edge tools to unlock speed, clarity, and smart execution..",
          image: inovation,
        },
      },
      {
        component: ReasonCard,
        props: {
          title: "Brands & Culture",
          description:
            "We craft digital experiences that feel real, global, and deeply human.",
          image: culture,
        },
      },
      {
        component: ReasonCard,
        props: {
          title: "Experience",
          description:
            "Design rooted in strategy — blending tech, creativity, and clarity to elevate brands.",
          image: Expe,
        },
      },
    ],
    []
  );
  const slides = [...duplicatedSlides, ...duplicatedSlides];

  const autoplay = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [autoplay.current] // ✅ pass plugin as second argument
  );

  const tweenFactor = useRef(0);
  const tweenNodes = useRef([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const totalDots = 3; // Fixed number of dots

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
        const scale = numberWithinRange(tweenValue, 0.85, 1).toString();
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
      <div className={`${style.container} relative  `}>
        <Image
          src={Gradient3}
          alt="gradient background"
          width={1200}
          height={300}
          className={style.grad}
          priority
        />
        <Image
          src={Gradient5}
          alt="gradient background"
          className={style.grad5}
          priority
        />

        <div className={style.head}>
          <h2>Why Unfound</h2>
          <h3>
            We think, build, and scale like founders. Here's what sets us apart.
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
        <div className={style.container2}>
          <div className={style.head2}>
            <h2>Why Unfound</h2>
            <h3>
              We think, build, and scale like founders. Here's what sets us
              apart.
            </h3>
          </div>
          <div className={style.reasoncontainer}>
            <div className={style.horiz}>
              <ReasonCard
                title="Innovative"
                description="We harness cutting-edge tools to unlock speed, clarity, and smart execution.."
                image={inovation}
              />
              <ReasonCard
                title="Brands & Culture"
                description="We craft digital experiences that feel real, global, and deeply human."
                image={culture}
              />
            </div>
            <ReasonCard2
              title="Experience"
              description="Design rooted in strategy — blending tech, creativity, and clarity to elevate brands."
              image={Expe}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Reasons;
