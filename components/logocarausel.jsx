import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";
import logo from "../assets/Logo.webp";
import logo2 from "../assets/Logomark.png"
import style from "../css/logoCarausel.module.css"
const logos = [
  { name: "logo1", src: logo2 },
  { name: "LightBox", src: logo2 },
  { name: "logo3", src: logo2 },
  { name: "LightBox", src: logo2 },
  { name: "logo5", src: logo2 },
  { name: "logo6", src: logo },
];

const firstRow = logos.slice(0, logos.length / 2);
const secondRow = logos.slice(logos.length / 2);

const LogoCard = ({ name, src }) => (
  <div className={style.card}>
    {/* Content goes here */}

    <Image
      src={src}
      alt={name}
      width={20}
      height={25}
      className="object-contain"
    />
    <p style={{ color: "#737675" ,fontWeight:"700" }} >{name}</p>
  </div>
);

export default function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-10 z-0 bg-transparent">
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
