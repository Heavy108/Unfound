import CaseCard from "../../components/CaseCard";
import approach from "../../assets/IvoryDental/approach.png";
import challenge from "../../assets/IvoryDental/challenge.png";
import display from "../../assets/IvoryDental/display1.png";
import logo from "../../assets/IvoryDental/ivorylogo.png";
import landing from "../../assets/IvoryDental/landing.png";
import timeline from "../../assets/IvoryDental/Timeline.png";
import timelinemobile from "../../assets/IvoryDental/Timelinemobile.png";

function IvoryDental() {
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
        heading="Crafting a premium dental website that turns trust into bookings"
        industry="Healthcare"
        time="2 Months"
        year="2025"
        whatwedid='["Website Design" , "Visual Design" , "Brand Guidelines" , "SEO-friendly Structure"]'
        overview="Ivory Dental is a multi-location clinic offering cosmetic dentistry, orthodontics, implants, and family dental care. They approached us to elevate their digital presence with a luxurious, user-friendly website that not only builds trust but also drives appointment bookings."
        challengetext="Ivory had strong offline recognition but lacked a website that matched its premium, modern in-clinic experience. Their existing site was outdated, cluttered, and not aligned with their evolving audience - primarily families and discerning clients seeking high-quality care."
        goal1="Build trust with a clean, sophisticated digital presence"
        goal2="Align design with the clinic's in-person experience"
        goal3="Improve responsiveness without sacrificing premium feel"
        goal4="Simplify service discovery and appointment flow"
        approachtext="We began with a strategy-first design sprint - identifying user pain points, mapping booking journeys, and aligning brand visuals with Ivory’s vision. We prioritized structure, clarity, and conversion."
        outcome="The new website transformed Ivory Dental,s digital presence - communicating trust, modernity, and quality. With a refined UX and a focus on bookings, the clinic reported a noticeable increase in inquiries and positive user feedback post-launch."

      />
    </>
  );
}

export default IvoryDental;
