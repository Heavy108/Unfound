import React from "react";
import Accordion from "./Accordian";
import { title } from "process";

export default function FAQ() {
  const data = [
    {
      title: "What services does Unfound Studio offer?",
      content:
        "We offer end-to-end design and development for websites, mobile apps, and web applications — including UX, UI, motion design, and clean, scalable code.",
    },
    {
      title: "How long does a typical project take?",
      content:
        "Timelines vary by scope, but most projects take between 3 to 8 weeks. We move fast, without sacrificing quality.",
    },
    {
      title: "Do you offer design and development together?",
      content:
        "Yes. We specialize in delivering seamless design-to-dev handoffs or full-stack builds, all under one roof.",
    },
    {
      title: "What industries do you work in?",
      content:
        "We've worked across SaaS, fintech, edtech, consumer tech, AI, and more. But our process adapts to any bold product idea.",
    },
    {
      title: "How do you price your services?",
      content:
        "We work on project based pricing for clarity, but can also offer retainers for long term support. Pricing depends on scope and complexity.",
    },
    {
      title: "How do we get started?",
      content:
        "Just reach out via our contact page. We'll get to know your goals, share relevant work, and propose next steps.",
    },
  ];

  return <Accordion items={data} />;
}
