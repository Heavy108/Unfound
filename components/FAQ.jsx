import React from "react";
import Accordion from "./Accordian";

export default function FAQ() {
  const data = [
    {
      title: "What services does Unfound Studio offer?",
      content:
        "We offer end-to-end design and development for websites, mobile apps, and web applications — including UX, UI, motion design, and clean, scalable code.",
    },
    { title: "Who do you typically work with?", content: "Answer 2" },
    { title: "How long does a typical project take?", content: "Answer 3" },
    {
      title: "Do you offer design and development together?",
      content: "Answer 3",
    },
    {
      title: "Can we work with you just for design or development?",
      content: "Answer 3",
    },
  ];

  return <Accordion items={data} />;
}
