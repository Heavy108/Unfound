"use client";
import React, { useState } from "react";
import style from "../css/Accordian.module.css";
import { FaPlus } from "react-icons/fa";
import { FaMinus, FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import Gradient6 from "../assets/Gradient3.png";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className={style.Faqcontainer}>
        <Image
          src={Gradient6}
          alt="gradient background"
          className={style.grad6}
          priority
        />
        <div className={style.head}>
          <h1>Frequently Asked Questions</h1>
          <div className={style.moreinfo}>
            <h2>Still have questions?</h2>
            <Link href={"/contact"}>
              <button>
                Let's talk{" "}
                <span className={style.icons2}>
                  <FaArrowRight />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className={style.faq_section}>
          {items.map((item, index) => (
            <div className={style.outside} key={index}>
              <div className={style.internal}>
                <div className={style.Qsec}>
                  <button
                    onClick={() => toggleItem(index)}
                    className={style.questions}
                  >
                    {item.title}
                  </button>
                  <span className={style.icons}>
                    <motion.div
                      initial={false}
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {openIndex === index ? <FaMinus /> : <FaPlus />}
                    </motion.div>
                  </span>
                </div>

                {/* Animated content */}
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className={style.motionContent}
                    >
                      <div className={style.content}>{item.content}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
