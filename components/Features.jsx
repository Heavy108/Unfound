import VPN from "../assets/VPN.png";
import FeatureCard from "../components/FeatureCard";
import style from "../css/Features.module.css";
import ivory from "../assets/ivory.png";
import Oruva from "../assets/Oruva.png";
import Nest from "../assets/Nest.png"
import Image from "next/image";
import Gradient4 from "@/assets/Gradient3.png"
import { FaArrowRight } from "react-icons/fa6";
import Gradient4_1 from "@/assets/Gradient4_1.png"
import Link from "next/link";
function Feature() {
  return (
    <>
      <section className={style.featuresContainer}>
        <div className={style.head}>
          <Image
            src={Gradient4}
            alt="gradient background"
            className={style.grad4}
          />
          {/* <div className={style.textbox}> */}
          <h3 className="font-satoshi">
            <span >●</span>
            Featured Works
          </h3>
          <h1 className="font-cabinet">Take a Look at Our Projects</h1>
        </div>
        {/* </div> */}
        <FeatureCard
          image={VPN}
          tech1="Website Design"
          tech2="Development"
          desc="Web Experience for Vistava VPN"
          link="/VPN"
        />
        <FeatureCard
          image={Oruva}
          tech1="App Design"
          tech2="Admin Dashboard"
          desc="Oruva e-Commerce App & Admin Dashboard"
          link="/Oruva"
        />
        <FeatureCard
          image={ivory}
          tech1="Website Design"
          tech2="Development"
          link="/IvoryDental"
          desc="Patient-First Website for 'Ivory Dental'"
        />
        <FeatureCard
          image={Nest}
          tech1="UX Design"
          tech2="Development"
          desc="Education Dashboard for Skill Nest"
          link="/Nest"
        />
        <Link href={"/CaseStudies"}>
          <h3 className={`${style.viewall} font-satoshi`}>
            View All{" "}
            <span>
              <FaArrowRight />
            </span>
          </h3>
        </Link>
      </section>
      <section className={style.featuresContainer2}>
        <div className={style.vertical}>
          <FeatureCard
            image={VPN}
            tech1="Website Design"
            tech2="Development"
            desc="Web Experience for Vistava VPN"
            link="/VPN"
          />
          <FeatureCard
            image={ivory}
            tech1="Website Design"
            tech2="Development"
            desc="Patient-First Website for 'Ivory Dental'"
            link="/IvoryDental"
          />
        </div>
        <div className={style.vertical2}>
          <div className={style.head2}>
            <Image
              src={Gradient4}
              alt="gradient background"
              className={style.grad4_1}
            />
            <div className={style.infocard}>
              <h3 className="font-satoshi">
                <span>●</span>
                Featured Works
              </h3>
              <Link href={"/CaseStudies"}>
                <h3 className={`${style.viewall} font-satoshi`}>
                  View All{" "}
                  <span>
                    <FaArrowRight />
                  </span>
                </h3>
              </Link>
            </div>
            <h1 className="font-cabinet">Take a Look at Our Projects</h1>
          </div>
          <FeatureCard
            image={Oruva}
            tech1="App Design"
            tech2="Admin Dashboard"
            desc="Oruva e-Commerce App & Admin Dashboard"
            link="/Oruva"
          />
          <FeatureCard
            image={Nest}
            tech1="UX Design"
            tech2="Development"
            desc="Education Dashboard for Skill Nest"
            link="/Nest"
          />
        </div>
      </section>
    </>
  );
}

export default Feature;
