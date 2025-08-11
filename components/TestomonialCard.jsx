import style from "../css/TestonomialCard.module.css";
import Image from "next/image";

function TestomonialCard({ testomonial, image, name, designation }) {
  return (
    <div className={style.testcontainer}>
      <div className={style.card}>
        <h1>{testomonial}</h1>
        <div className={style.profile}>
          <Image src={image} width={40} height={40} alt={`${name} profile`} />
          <div className={style.intro}>
            <h2>{name}</h2>
            <h2>{designation}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestomonialCard;
