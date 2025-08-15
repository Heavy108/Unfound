import VPN from "../assets/VPN.png";
import FeatureCard from "../components/FeatureCard";
import style from "../css/Features.module.css";
import ivory from "../assets/ivory.png";
import Oruva from "../assets/Oruva.png";
import Nest from "../assets/Nest.png"



function Feature() {
  return (
    <>
      <section className={style.featuresContainer}>
        <div className={style.head}>
        
        </div>
        <FeatureCard
          image={VPN}
          tech1="Website Design"
          tech2="Development"
          desc="Web Experience for Vistava VPN"
        />
        <FeatureCard
          image={Oruva}
          tech1="App Design"
          tech2="Admin Dashboard"
          desc="Oruva eCommerce App & Admin Dashboard"
        />
        <FeatureCard
          image={ivory}
          tech1="Website Design"
          tech2="Development"
          desc="Patient-First Website for 'Ivory Dental'"
        />
        <FeatureCard
          image={Nest}
          tech1="UX Design"
          tech2="Development"
          desc="Education Dashboard for Skill Nest"
        />
      </section>
    </>
  );
}

export default Feature;
