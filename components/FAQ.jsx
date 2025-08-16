import React from "react";
import Accordion from "./Accordian";

export default function FAQ() {
  const data = [
    { title: "Question 1", content: "Answer 1" },
    { title: "Question 2", content: "Answer 2" },
    { title: "Question 3", content: "Answer 3" },
  ];

  return <Accordion items={data} />;
}
