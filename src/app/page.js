import Image from "next/image";
import Navbar from "@/components/navbar";
import Gradient1 from "@/assets/Gradient.webp";

export default function Home() {
  return (
    <>
      <div className="relative  h-[500px] w-full overflow-hidden ">
        {/* Background image */}
        <Image src={Gradient1} alt="gradient1" fill className="z-0" priority />

        {/* Navbar on top */}
        <div className="relative z-10">
          <Navbar />
        </div>
      </div>
    </>
  );
}
