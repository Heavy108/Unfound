"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import FeatureCard from "./FeatureCard";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import style from "../css/commoncarasoul.module.css";
import CarasolCard from "./commonCarausalCard";

const EmblaCarousel = ({ slides, options }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Dynamic options based on screen size
  const dynamicOptions = {
    ...options,
    slidesToScroll: isMobile ? 1 : 2,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(dynamicOptions);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Reinitialize carousel when screen size changes
  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi, isMobile]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    setScrollSnaps(emblaApi.scrollSnapList());

    emblaApi.on("select", onSelect).on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect).off("reInit", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  return (
    <section className="relative w-full">
      {/* Viewport */}
      <div className="overflow-hidden w-full " ref={emblaRef}>
        <div className="flex gap-2  justify-items-start">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] md:flex-[0_0_50%]  box-border flex justify-center"
            >
              <CarasolCard
                image={slide.image}
                tech1={slide.tech1}
                tech2={slide.tech2}
                desc={slide.desc}
                link={slide.link}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className={style.dotcontainer}>
        {/* Arrows */}
        <div className={style.arrowContainer}>
          <button onClick={scrollPrev} className={style.arrowButton}>
            <BiChevronLeft size={24} />
          </button>
          <button onClick={scrollNext} className={style.arrowButton}>
            <BiChevronRight size={24} />
          </button>
        </div>

        {/* Dots */}
        <div className={style.dot}>
          {(isMobile ? Array.from({ length: 4 }) : scrollSnaps).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`${style.dotItem} ${
                  selectedIndex === index ? style.active : style.inactive
                }`}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;


