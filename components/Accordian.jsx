'use client'
import React, { useState } from "react";
import style from "../css/Accordian.module.css"
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import Image from "next/image";
import Gradient6 from "../assets/Gradient3.png"
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
                    {openIndex === index ? <FaMinus /> : <FaPlus />}
                  </span>
                </div>
                {openIndex === index && (
                  <div className={style.content}>{item.content}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
