import style from "../../css/CaseStudies.module.css";
import Navbar from "../../components/navbar"
import Image from "next/image";
import casegrad from "../../assets/other/caseGradient.png"
import gradientmobile from "../../assets/Gradient2.png"
import FeatureCard from "../../components/FeatureCard"
import VPN from "../../assets/VPN.png"
import Oruva from "../../assets/Oruva.png"
import Nest from "../../assets/Nest.png"
import Ivory from "../../assets/ivory.png"
import Footer from "../../components/Footer"
import footergradient from "../../assets/Footer.svg"
import Talk from "../../components/Talk"
function CaseStudies(){
    return (
      <>
        <Navbar />
        <div className={style.casecontainer}>
          <Image
            src={gradientmobile}
            alt="gradient mobile"
            className={style.gradientmobile}
          />
          <Image
            src={casegrad}
            alt="gradient desktop"
            className={style.gradientdesktop}
          />
          <div className={style.head}>
            <h1 className="font-satoshi">
              <span className={style.dot}>●</span>
              Case Studies
            </h1>
            <h2 className="font-cabinet">
              Projects Crafted With Clear Purpose
            </h2>
          </div>
          <div className={style.secondcontainer}>
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
              image={Ivory}
              tech1="Website Design"
              tech2="Development"
              desc="Patient-First Website for 'Ivory Dental'"
              link="/IvoryDental"
            />
            <FeatureCard
              image={Nest}
              tech1="UX Design"
              tech2="Development"
              desc="Education Dashboard for Skill Nest"
              link="/Nest"
            />
          </div>
        </div>
        <section className="flex-col items-center justify-center relative w-full h-[400px]">
          <Talk />
          <Image
            src={footergradient}
            alt="footer gradient"
            width={2560}
            height={300}
            className="2xl:h-[700px]"
            
          />

          <Footer />
        </section>
      </>
    );
}

export default CaseStudies;