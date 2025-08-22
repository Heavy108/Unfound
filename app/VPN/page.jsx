import CaseCard from "../../components/CaseCard";
import approach from "../../assets/VPN/approach.png";
import challenge from "../../assets/VPN/challenge.png";
import display from "../../assets/VPN/display.png";
import logo from "../../assets/VPN/vpnlogo.png";
import landing from "../../assets/VPN/landing.png";
import timeline from "../../assets/IvoryDental/Timeline.png";
import timelinemobile from "../../assets/IvoryDental/Timelinemobile.png";

function VPN() {
  return (
    <>
      <CaseCard
        approach={approach}
        challenge={challenge}
        display={display}
        logo={logo}
        landing={landing}
        timeline={timeline}
        timelinemobile={timelinemobile}
        heading="Elevating a VPN Brand With Website Design That Converts"
        industry="Network Security"
        time="3 Months"
        year="2025"
        whatwedid='["Website Design" , "Visual Design" , "Light Marketing Copy" , "SEO-friendly Structure"]'
        overview="Vistava is a new-age VPN brand built for users who value both security and simplicity. They came to us for a bold, fast, and trustworthy marketing website that could communicate their core features - speed, privacy, and global access - while standing out in a saturated market."
        challengetext="VPN products often look identical and overloaded with jargon. Vistava needed a digital presence that was simple, clear, and emotionally reassuring - one that spoke to both privacy-conscious individuals and everyday internet users."
        goal1="Design a premium-looking, fast-loading website"
        goal2="Clearly explain features like encryption and no-log policy"
        goal3="Establish credibility through testimonialsand partnerships"
        goal4="Create visual consistency across product, site, and brand identity"
        approachtext="We designed a high-contrast, performance-optimized site with focused messaging and compelling visuals. Microinteractions, iconography, and animated flows explained complex tech in an easy, scroll-friendly format."
        outcome="The new site gave Vistava a memorable identity and a conversion-focused experience. Signups increased within the first launch week, and bounce rates dropped with clearer product explanation and faster load times."
      />
    </>
  );
}

export default VPN;
