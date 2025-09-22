"use client";
import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  useMemo,
} from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import rohit from "../assets/testomonial.png";
import medhi from "@/assets/testinomial/medhi.png"
import ishita from "@/assets/testinomial/Ishita.png"
import sharma from "@/assets/testinomial/riyaSharma.png"
import gaurav from "@/assets/testinomial/gaurav.png"
import style from "../css/Testonomial.module.css";
import Gradient2 from "../assets/Gradient2.png";
import Image from "next/image";
import testograd from "../assets/testimonialGradient.png"
import TestomonialCard from "./TestomonialCard";
import { ArrowLeft, ArrowRight } from "lucide-react";

const TWEEN_FACTOR_BASE = 0.52;
const AUTOPLAY_DELAY = 4000;

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max);

function Testonomial() {
  const slides = useMemo(
    () => [
      {
        testomonial:
          '"Unfound Studio designed a modern, intuitive, and responsive website for Ivory Dental. Their professional, collaborative team delivered a user-friendly design that reflects our quality care and strengthened our online presence"',
        image: sharma,
        name: "Dr. Riya Sharma",
        designation: "Founder, Ivory Dental",
      },
      {
        testomonial:
          '"From concept to final design, the team nailed it. Our marketing now feels vibrant, professional, and worthy of The Empire brand."',
        image: gaurav,
        name: "Gaurav Kumar",
        designation: "Founder, The Empire",
      },
      {
        testomonial:
          '"Team Unfound delivered a clean, intuitive education dashboard that matched our vision. Their user-first design simplified features, creating a seamless learning experience that enhanced usability and strengthened engagement"',
        image: rohit,
        name: "Rohit Sharma",
        designation: "Co-founder, Skill Nest",
      },
      {
        testomonial:
          '"Working with Unfound Studio to create Oruva’s mobile app was seamless. Their design expertise brought our fashion brand to life, making shopping effortless and enjoyable!"',
        image: ishita,
        name: "Ishita Verma",
        designation: "Marketing Lead, Oruva",
      },
      {
        testomonial:
          '"I’m really impressed with the AlumniPlus project by the UnFound team. They’ve managed to create something both practical and well-designed, and it clearly reflects their hard work and creativity."',
        image: medhi,
        name: "Nabajyoti Medhi",
        designation: "Assistant Professor, Tezpur University",
      },
      {
        testomonial:
          "The team delivered beyond our expectations. From strategy to execution, everything was on point. Our product finally looks and feels premium.",
        image: ishita,
        name: "Dr.Anjali Gera",
        designation: "FDHS",
      },
    ],
    []
  );

  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [snapCount, setSnapCount] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // autoplay only for smaller screens
  const autoplay = useMemo(
    () => Autoplay({ delay: AUTOPLAY_DELAY, stopOnInteraction: true }),
    []
  );
const plugins = useMemo(() => [autoplay], [autoplay]);


  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, plugins);

  const tweenFactor = useRef(0);
  const tweenNodes = useRef([]);

  const setTweenNodes = useCallback((emblaApi) => {
    tweenNodes.current = emblaApi
      .slideNodes()
      .map((slideNode) => slideNode.querySelector(".card-wrapper"));
  }, []);

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenScale = useCallback(
    (emblaApi, eventName) => {
      if (isLargeScreen) {
        tweenNodes.current.forEach((node) => {
          if (node) node.style.transform = "scale(1)";
        });
        return;
      }

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
                if (sign === -1)
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                if (sign === 1)
                  diffToTarget = scrollSnap + (1 - scrollProgress);
              }
            });
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
          const scale = numberWithinRange(tweenValue, 0.8, 1).toString();
          const tweenNode = tweenNodes.current[slideIndex];
          if (tweenNode) {
            tweenNode.style.transform = `scale(${scale})`;
            tweenNode.style.transition = "transform 0.3s ease";
          }
        });
      });
    },
    [isLargeScreen]
  );

  const handlePrevious = useCallback(() => {
    if (!emblaApi) return;
    if (!isLargeScreen && autoplay) autoplay.stop();
    emblaApi.scrollPrev({ duration: 800 });
  }, [emblaApi, autoplay, isLargeScreen]);

  const handleNext = useCallback(() => {
    if (!emblaApi) return;
    if (!isLargeScreen && autoplay) autoplay.stop();
    emblaApi.scrollNext({ duration: 800 });
  }, [emblaApi, autoplay, isLargeScreen]);

  const handleDotClick = useCallback(
    (index) => {
      if (!emblaApi) return;
      if (!isLargeScreen && autoplay) autoplay.stop();
      emblaApi.scrollTo(index, { duration: 800 });
    },
    [emblaApi, autoplay, isLargeScreen]
  );

  const handleMouseEnter = useCallback(() => {
    if (!isLargeScreen && autoplay) autoplay.stop();
  }, [autoplay, isLargeScreen]);

  const handleMouseLeave = useCallback(() => {
    if (!isLargeScreen && autoplay) autoplay.reset();
  }, [autoplay, isLargeScreen]);

  useEffect(() => {
    const checkScreenSize = () => setIsLargeScreen(window.innerWidth >= 1024);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);

    const updateSnapCount = () => {
      setSnapCount(emblaApi.scrollSnapList().length);
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenScale)
      .on("reInit", updateSnapCount)
      .on("scroll", tweenScale)
      .on("select", () => setSelectedIndex(emblaApi.selectedScrollSnap()));

    updateSnapCount();

    return () => {
      emblaApi
        .off("reInit", setTweenNodes)
        .off("reInit", setTweenFactor)
        .off("reInit", tweenScale)
        .off("reInit", updateSnapCount)
        .off("scroll", tweenScale)
        .off("select", () => setSelectedIndex(emblaApi.selectedScrollSnap()));
    };
  }, [emblaApi, tweenScale, setTweenNodes, setTweenFactor]);

  return (
    <div className={`relative bg-transparent`}>
      <Image
        src={Gradient2}
        alt="gradient background"
        width={800}
        height={300}
        className={style.grad}
      />

      <div className={style.head}>
        <h2 className="font-cabinet">Our Happy Clients</h2>
        <h3 className="font-satoshi">
          Still need convincing? Check out what people are saying about us.
        </h3>
      </div>

      <div className={style.Carausel}>
        <Image
          src={testograd}
          fill
          alt="gradient"
          className="object-cover pointer-events-none"
        />
        <div
          className="embla"
          ref={emblaRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          

          <div className="embla__container flex items-end">
            {slides.map((slide, idx) => (
              <div className="embla__slide" key={`${slide.name}-${idx}`}>
                <div className="card-wrapper lg:ml-2 lg:mr-2">
                  <TestomonialCard
                    testomonial={slide.testomonial}
                    image={slide.image}
                    name={slide.name}
                    designation={slide.designation}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Only render arrows + dots if multiple snaps */}
        {snapCount > 1 && (
          <div className={style.dotcontainer}>
            <div className={style.arrowContainer}>
              <button className={style.arrowButton} onClick={handlePrevious}>
                <ArrowLeft size={24} />
              </button>
              <button className={style.arrowButton} onClick={handleNext}>
                <ArrowRight size={24} />
              </button>
            </div>
            <span className={style.dot}>
              {Array.from({ length: snapCount }).map((_, index) => (
                <span
                  key={index}
                  className={`${style.dotItem} ${
                    selectedIndex % snapCount === index
                      ? style.active
                      : style.inactive
                  }`}
                  onClick={() => handleDotClick(index)}
                ></span>
              ))}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Testonomial;
