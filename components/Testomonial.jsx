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
import profile from "../assets/testomonial.png";
import style from "../css/Testonomial.module.css";
import Gradient2 from "../assets/Gradient2.png";
import Image from "next/image";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import TestomonialCard from "./TestomonialCard";

const TWEEN_FACTOR_BASE = 0.52;
const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max);

function Testonomial() {
  const slides = useMemo(
    () => [
      {
        testomonial:
          "From the very first call, it was clear we were dealing with professionals. The way they structured the project, communicated updates, and delivered creative solutions was outstanding. What really stood out was their ability to balance a minimalist aesthetic.",
        image: profile,
        name: "Gaurav Kumar",
        designation: "Product Designer",
      },
      {
        testomonial:
          "The team delivered beyond our expectations. From strategy to execution, everything was on point. Our product finally looks and feels premium.",
        image: profile,
        name: "Gaurav Kumar",
        designation: "Product Designer",
      },
      {
        testomonial:
          "From the very first call, it was clear we were dealing with professionals. The way they structured the project, communicated updates, and delivered creative solutions was outstanding. What really stood out was their ability to balance a minimalist aesthetic.",
        image: profile,
        name: "Gaurav Kumar",
        designation: "Product Designer",
      },
      {
        testomonial:
          "The team delivered beyond our expectations. From strategy to execution, everything was on point. Our product finally looks and feels premium.",
        image: profile,
        name: "Gaurav Kumar",
        designation: "Product Designer",
      },
      {
        testomonial:
          "From the very first call, it was clear we were dealing with professionals. The way they structured the project, communicated updates, and delivered creative solutions was outstanding. What really stood out was their ability to balance a minimalist aesthetic.",
        image: profile,
        name: "Gaurav Kumar",
        designation: "Product Designer",
      },
      {
        testomonial:
          "The team delivered beyond our expectations. From strategy to execution, everything was on point. Our product finally looks and feels premium.",
        image: profile,
        name: "Gaurav Kumar",
        designation: "Product Designer",
      },
    ],
    []
  );

  // Autoplay ref (stops on hover + on arrow click)
  const autoplay = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    autoplay.current,
  ]);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const totalDots = slides.length;

  const setTweenNodes = useCallback((emblaApi) => {
    tweenNodes.current = emblaApi
      .slideNodes()
      .map((slideNode) => slideNode.querySelector(".card-wrapper"));
  }, []);

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenScale = useCallback((emblaApi, eventName) => {
    // Apply scaling only for smaller screens
    if (window.innerWidth > 1024) {
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
              if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
              if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
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

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenScale)
      .on("scroll", tweenScale)
      .on("select", onSelect);
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
        <h2>Our Happy Client</h2>
        <h3>
          Still need convincing? Check out what people are saying about Us.
        </h3>
      </div>

      <div className={style.Carausel}>
        <div
          className="embla"
          ref={emblaRef}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
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

        <div className={style.dotcontainer}>
          <div className={style.arrowContainer}>
            <button
              className={style.arrowButton}
              onClick={() => {
                autoplay.current.stop();
                emblaApi && emblaApi.scrollPrev({ duration: 800 });
              }}
            >
              <BiChevronLeft size={24} />
            </button>
            <button
              className={style.arrowButton}
              onClick={() => {
                autoplay.current.stop();
                emblaApi && emblaApi.scrollNext({ duration: 800 });
              }}
            >
              <BiChevronRight size={24} />
            </button>
          </div>
          <span className={style.dot}>
            {Array.from({ length: totalDots }).map((_, index) => (
              <span
                key={index}
                className={`${style.dotItem} ${
                  selectedIndex % totalDots === index
                    ? style.active
                    : style.inactive
                }`}
                onClick={() => {
                  autoplay.current.stop();
                  emblaApi && emblaApi.scrollTo(index, { duration: 800 });
                }}
              ></span>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Testonomial;
