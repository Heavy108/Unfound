"use client";
import React, { useCallback, useEffect, useState, useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import FeatureCard from "./FeatureCard";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import style from "../css/commoncarasoul.module.css"

const EmblaCarousel = ({ slides, options }) => {

  const totalDots = 4
  const autoplay = useMemo(
    () => Autoplay({ delay: 4000, stopOnInteraction: true }),
    []
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

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
    if (emblaApi) {
      autoplay.stop(); // stop autoplay on manual click
      emblaApi.scrollPrev();
    }
  }, [emblaApi, autoplay]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      autoplay.stop();
      emblaApi.scrollNext();
    }
  }, [emblaApi, autoplay]);

  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) {
        autoplay.stop();
        emblaApi.scrollTo(index);
      }
    },
    [emblaApi, autoplay]
  );

  return (
    <section className="relative w-full">
      {/* Viewport */}
      <div className="overflow-hidden w-full" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] md:flex-[0_0_50%]  box-border"
            >
              <FeatureCard
                image={slide.image}
                tech1={slide.tech1}
                tech2={slide.tech2}
                desc={slide.desc}
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
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`${style.dotItem} ${
                selectedIndex % totalDots === index
                  ? style.active
                  : style.inactive
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
