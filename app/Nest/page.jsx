import CaseCard from "../../components/CaseCard";
import approach from "../../assets/Nest/approach.png";
import challenge from "../../assets/Nest/challenge.png";
import display from "../../assets/Nest/display.png";
import logo from "../../assets/Nest/Nestlogo.png";
import landing from "../../assets/Nest/landing.png";
import timeline from "../../assets/IvoryDental/Timeline.png";
import timelinemobile from "../../assets/IvoryDental/Timelinemobile.png";

function Nest() {
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
        heading="Empowering Young Minds with Smarter Dashboards with Skill Nest"
        industry="EdTech"
        time="4 Months"
        year="2025"
        whatwedid='["UX strategy mapping" , "Student dashboard UI" , "Teacher dashboard UI" , "Development and Testing"]'
        overview="Skill Nest is an edtech platform helping children aged 6 to 16 learn future-ready skills like coding, design, and communication. We designed two web dashboards for teachers and students with a focus on simplicity, engagement, and effective class management."
        challengetext="Skill Nest needed to quickly launch an intuitive MVP. Teachers required tools to manage classes and track progress, while students needed a structured, engaging dashboard designed for desktop."
        goal1="Create simple, effective dashboards for both teachers and students"
        goal2="Design with clear visual hierarchy and ease-of-use for young learners"
        goal3="Ensure performance tracking and class scheduling is effortless"
        goal4="Deliver dev-ready UI with room for future scalability (e.g. mobile, parents)"
        approachtext="We designed both dashboards using responsive, modular UI. Teachers get clear views of analytics, calendars, and student progress. Students see streaks, progress bars, and a friendly, structured interface with clear calls to action."
        outcome="Skill Nest's MVP launched with tested flows for classes, performance, and earnings. Teachers found it intuitive, and students enjoyed the friendly UI. The platform is now ready to scale further."
      />
    </>
  );
}

export default Nest;
