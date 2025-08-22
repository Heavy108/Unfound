import CaseCard from "../../components/CaseCard";
import approach from "../../assets/Oruva/approach.png";
import challenge from "../../assets/Oruva/challenge.png";
import display from "../../assets/Oruva/display.png";
import logo from "../../assets/Oruva/oruvalogo.png";
import landing from "../../assets/Oruva/landing.png";
import timeline from "../../assets/IvoryDental/Timeline.png";
import timelinemobile from "../../assets/IvoryDental/Timelinemobile.png";

function Oruva() {
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
        heading="Designing a Seamless Shopping Experience for Oruva"
        industry="eCommerce"
        time="4 Months"
        year="2025"
        whatwedid='["User journey mapping" , "Mobile app UX" , "Admin dashboard" , "Development and Testing"]'
        overview="Oruva is a digital-first fashion brand built for modern, mindful shoppers. We designed a sleek mobile shopping app and a clean admin dashboard to manage products, orders, and customers - all with a unified visual identity."
        challengetext="Oruva needed a complete shopping experience from scratch - one that felt premium to users and easy to manage for the team. The challenge was to balance simplicity, performance, and brand character across both mobile and web platforms."
        goal1="Create a seamless mobile app for fashion discovery and shopping"
        goal2="Design a clean, scalable admin dashboard for backend operations"
        goal3="Build a visual identity that's modern, soft, and easy to scale"
        goal4="Ensure design systems and flows are ready for handoff to developers"
        approachtext="We mapped the end-to-end journey, from browsing to fulfillment - and designed both interfaces with clarity, softness, and purpose. The mobile app prioritized ease and discovery, while the dashboard focused on control and efficiency. A shared design system tied everything together."
        outcome="Oruva now has a polished product ecosystem — a user-friendly app and a powerful backend. The brand is ready to launch with confidence, and the designs handed off smoothly for development."
      />
    </>
  );
}

export default Oruva;
