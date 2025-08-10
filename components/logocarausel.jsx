import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";
import logo from "../assets/Logo.webp";
import logo2 from "../assets/Logomark.png"
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
  <div className=" relative flex h-16 w-auto items-start justify-center gap-4 rounded-[1rem] border bg-[radial-gradient(146.13%_118.42%_at_50%_-15.5%,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0)_99.59%),linear-gradient(180deg,rgba(46,51,90,0)_0%,rgba(27,51,41,0.05)_100%)] border-[rgba(255,255,255,0.05)] shadow-[inset_0_0_100px_rgba(204,255,233,0.05),0_5px_10px_rgba(0,0,0,0.05),0_15px_30px_rgba(0,0,0,0.05),0_30px_60px_rgba(0,0,0,0.10)] backdrop-blur-[10px] px-8 py-6 transition duration-300 hover:brightness-110">
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
