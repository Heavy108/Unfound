'use client'
import React, { useState } from "react";

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="text-white">
      {items.map((item, index) => (
        <div key={index}>
          <button onClick={() => toggleItem(index)}>
            {item.title} {openIndex === index ? "-" : "+"}
          </button>
          {openIndex === index && <div>{item.content}</div>}
        </div>
      ))}
    </div>
  );
}
