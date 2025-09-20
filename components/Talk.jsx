'use client'
import style from "../css/Talk.module.css";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FlickeringGrid } from "./ui/flickering-grid";
function Talk(){
    return (
      <>
        <div className={style.extradiv}>
          <div className={style.outer}>
            <FlickeringGrid
              className="absolute inset-0 -z-1 size-full rounded-full p-2"
              squareSize={2}
              gridGap={10}
              color="#ffffff"
              maxOpacity={0.15}
              flickerChance={0.1}
            />
            <div className={style.internal}>
              <h1 className="font-cabinet">
                Let's Build Something Exceptional
              </h1>
              <h2 className="font-satoshi">
                Transform bold ideas into digital experiences - with sharp
                design, clean code, and full focus.
              </h2>
              <Link href={"/contact"}>
                <button className="font-satoshi">
                  Let's Talk{" "}
                  <span className={style.icons2}>
                    {" "}
                    <ArrowUpRight />{" "}
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
}

export default Talk;