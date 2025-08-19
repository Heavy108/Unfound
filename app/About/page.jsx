import VPN from "../../assets/VPN.png";
import FeatureCard from "../../components/FeatureCard";
import Feature from "../../components/Features";
import Reasons from "../../components/Reason";
import ReasonCard from "../../components/ReasonCard";
import Services from "../../components/Services"
import photo from "../../assets/WebsiteDesign.svg"
import photo2 from "../../assets/VisualDesign.svg";

import Image from "next/image";
function About() {
  return (
    <>
      <Image src={photo} width={1200} height={800} alt="testing" />
      <Image src={photo2} width={1200} height={800} alt="testing" />
    </>
  );
}

export default About;
