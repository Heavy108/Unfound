import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";
import logo from "../assets/Logo.webp";
import logo2 from "../assets/Logomark.png"
import style from "../css/logoCarausel.module.css"
import Asd from "../assets/logos/Asd.svg";
import convatec from "../assets/logos/convatec.svg";
import dubdub from "../assets/logos/dubdub.svg";
import empire from "../assets/logos/empire.svg";
import fghs from "../assets/logos/fghs.svg";
import fitnastic from "../assets/logos/fitnastic.svg";
import fortune from "../assets/logos/fortune.svg";
import galgotias from "../assets/logos/galgotias.svg";
import ivory from "../assets/logos/ivory.svg";
import kamtech from "../assets/logos/kamtech.svg";
import man from "../assets/logos/man.svg";
import oruva from "../assets/logos/oruva.svg";
import sis from "../assets/logos/sis.svg";
import skillnest from "../assets/logos/skillnest.svg";
import tezpur from "../assets/logos/tezpur.svg";
import vpn from "../assets/logos/vpn.svg";
const logos = [
  { name: "Asd", src: Asd },
  { name: "Convatec", src: convatec },
  { name: "Dubdub", src: dubdub },
  { name: "Empire", src: empire },
  { name: "FDHS", src: fghs },
  { name: "Fitnastic", src: fitnastic },
  { name: "Fortune", src: fortune },
  { name: "Galgotias", src: galgotias },
  { name: "Ivory", src: ivory },
  { name: "Kamtech", src: kamtech },
  { name: "Man", src: man },
  { name: "Oruva", src: oruva },
  { name: "SIS", src: sis },
  { name: "Skillnest", src: skillnest },
  { name: "Tezpur", src: tezpur },
  { name: "VPN", src: vpn },
];

const firstRow = logos.slice(0, logos.length / 2);
const secondRow = logos.slice(logos.length / 2);

const LogoCard = ({ name, src }) => (
  <div className={style.card}>
    {/* Content goes here */}

    <Image
      src={src}
      alt={name}
      width='auto'
      height="auto"
      className="object-contain h-[28px] md:h-[40px]"
    />
    {/* <p style={{ color: "#737675" ,fontWeight:"700" }} >{name}</p> */}
  </div>
);

export default function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-12 z-0 bg-transparent">
      <Marquee pauseOnHover className="[--duration:30s] lg:hidden">
        {firstRow.map((logo) => (
          <LogoCard key={logo.name} {...logo} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:30s]">
        {secondRow.map((logo) => (
          <LogoCard key={logo.name} {...logo} />
        ))}
      </Marquee>

      {/* Gradient edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 lg:w-64 bg-gradient-to-r from-black to-transparent block" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 lg:w-64 bg-gradient-to-l from-black to-transparent" />
    </div>
  );
}
