'use client'
import style from "../css/Talk.module.css";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
function Talk(){
    return (
      <>
        <div className={style.outer}>
          <div className={style.internal}>
            <h1 className="font-cabinet">Let's Build Something Exceptional</h1>
            <h2 className="font-satoshi">
              Transform bold ideas into digital experiences - with sharp design,
              clean code, and full focus.
            </h2>
            <Link href={'/contact'}>
              <button className="font-satoshi">
                Let's Talk{" "}
                <span className={style.icons2}>
                  {" "}
                  <FaArrowRight />{" "}
                </span>
              </button>
            </Link>
          </div>
        </div>
      </>
    );
}

export default Talk;