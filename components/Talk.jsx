'use client'
import style from "../css/Talk.module.css";
function Talk(){
    return (
      <>
        <div className={style.outer}>
          <div className={style.internal}>
            <h1>Let's Build Something Exceptional</h1>
            <h2>
              Transform bold ideas into digital experiences - with sharp design,
              clean code, and full focus.
            </h2>
            <button onClick={() => alert("me got clicked")}>Let's Talk</button>
          </div>
        </div>
      </>
    );
}

export default Talk;