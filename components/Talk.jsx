'use client'
import style from "../css/Talk.module.css";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FlickeringGrid } from "./ui/flickering-grid";
import CTAButton from "@/components/ctabutton"
function Talk(){
    return (
      <>
        <div className={style.extradiv}>
          <div className={style.outer}>
            <div className={style.internal}>
              <FlickeringGrid
                className="absolute inset-0 -z-1 size-full rounded-full p-2"
                squareSize={1}
                gridGap={10}
                color="#ffffff"
                maxOpacity={0.15}
                flickerChance={0.1}
              />
              <h1 className="font-cabinet">
                Let's Build Something Exceptional
              </h1>
              <h2 className="font-satoshi">
                Transform bold ideas into digital experiences - with sharp
                design, clean code, and full focus.
              </h2>
              <Link href={"/contact"}>
                              <CTAButton name="Let's Talk" param={true} />
                
              </Link>
            </div>
          </div>
        </div>
      </>
    );
}

export default Talk;