import style from "../css/CaseCard.module.css";
import Navbar from "../components/navbar";
import Image from "next/image";
import gradient2 from "../assets/Gradient2.png"
import Footer from "../components/Footer"
import EmblaCarousel from "../components/CommonCarausal";
import ivory from "../assets/ivory.png";
import Oruva from "../assets/Oruva.png";
import Nest from "../assets/Nest.png";
import VPN from "../assets/VPN.png";

function CaseCard({
  approach,
  challenge,
  display,
  logo,
  landing,
  timeline,
  timelinemobile,
  heading,
  industry,
  time,
  year,
  whatwedid,
  overview,
  challengetext,
  goal1,
  goal2,
  goal3,
  goal4,
  approachtext,
  outcome,
}) {

  const items = JSON.parse(whatwedid);
  const SLIDES = [
    {
      image: VPN,
      tech1: "Website Design",
      tech2: "Development",
      desc: "Web Experience for Vistava VPN",
    },
    {
      image: Oruva,
      tech1: "App Design",
      tech2: "Admin Dashboard",
      desc: "Oruva e-Commerce App & Admin Dashboard",
    },
    {
      image: ivory,
      tech1: "Website Design",
      tech2: "Development",
      desc: "Patient-First Website for 'Ivory Dental'",
    },
    {
      image: Nest,
      tech1: "UX Design",
      tech2: "Development",
      desc: "Education Dashboard for Skill Nest",
    },
  ];
const OPTIONS = { align: "start", loop: true };
  const GoalCard = ({ text }) => (
    <div className={style.outer2}>
      <div className={style.internal}>
        <span className={style.dot}>●</span>
        <p>{text}</p>
      </div>
    </div>
  );
  return (
    <>
      <Navbar />
      <div className={style.container}>
        <Image src={gradient2} className={style.grad} alt="gradient" />

        <div className={style.secondcontainer}>
          <div className={style.section}>
            <Image src={logo} alt="logo" className={style.logo} />
            <div className={style.desktop}>
              <h1 className={style.topheading}>{heading}</h1>
              <div className={style.section2}>
                <ul className={style.list1}>
                  <div className={style.listcontainer}>
                    <li>
                      <span className={style.dot}>●</span>Industry
                    </li>
                    <span className={style.list}>{industry}</span>
                  </div>
                  <div className={style.listcontainer}>
                    <li>
                      <span className={style.dot}>●</span>Timeline
                    </li>
                    <span className={style.list}>{time}</span>
                  </div>
                  <div className={style.listcontainer}>
                    <li>
                      <span className={style.dot}>●</span>What We Did{" "}
                    </li>
                    <ul>
                      {items.map((item, index) => (
                        <li key={index} className={style.list}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={style.listcontainer}>
                    <li>
                      <span className={style.dot}>●</span>
                      Year
                    </li>
                    <span className={style.list}>{year}</span>
                  </div>
                </ul>
              </div>
            </div>
            <div className={style.outer}>
              <Image src={display} alt="herosection" className={style.hero} />
            </div>
          </div>
          <div className={style.section1}>
            <ul className={style.list1}>
              <div className={style.listcontainer}>
                <li>
                  <span className={style.dot}>●</span>Industry
                </li>
                <span className={style.list}>{industry}</span>
              </div>
              <div className={style.listcontainer}>
                <li>
                  <span className={style.dot}>●</span>Timeline
                </li>
                <span className={style.list}>{time}</span>
              </div>
              <div className={style.listcontainer}>
                <li>
                  <span className={style.dot}>●</span>What We Did{" "}
                </li>
                <ul className={style.list}>
                  {items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className={style.listcontainer}>
                <li>
                  <span className={style.dot}>●</span>
                  Year
                </li>
                <span className={style.list}>{year}</span>
              </div>
            </ul>
          </div>

          {/* project overview */}
          <div className={style.section}>
            <div className={style.desktop}>
              <h1 className={style.title}>Project Overview</h1>

              <p className={style.content2}>{overview}</p>
            </div>
            <p className={style.content}>{overview}</p>
            <Image
              src={timelinemobile}
              alt="Timeline"
              className={style.timelinemobile}
            />
            <Image src={timeline} alt="Timeline" className={style.timeline} />
          </div>
          <div className={style.section}>
            <div className={style.desktop}>
              <h1 className={style.title}>The Challenge</h1>
              <p className={style.content2}>{challengetext}</p>
            </div>
            <p className={style.content}>{challengetext}</p>
            <Image
              src={challenge}
              alt="challenge"
              className={style.challenge}
            />
          </div>
          {/* Goals */}
          <div className={style.section}>
            <h1 className={style.title}>Goals</h1>
            <div className={style.one}>
              <GoalCard text={goal1} />
              <GoalCard text={goal2} />
            </div>
            <div className={style.two}>
              <GoalCard text={goal3} />
              <GoalCard text={goal4} />
            </div>
          </div>

          {/* our approach */}
          <div className={style.section}>
            <div className={style.desktop}>
              <h1 className={style.title}>The Approach</h1>
              <p className={style.content2}>{approachtext}</p>
            </div>
            <p className={style.content}>{approachtext}</p>
            <Image src={approach} alt="approach" className={style.approach} />
          </div>

          <div className={style.section}>
            <div className={style.desktop}>
              <h1 className={style.title}>Outcome</h1>
              <p className={style.content2}>{outcome}</p>
            </div>
            <p className={style.content}>{outcome}</p>
            <div className={style.outer}>
              <Image src={landing} alt="landing" className={style.hero} />
            </div>
          </div>
        </div>
      </div>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />

      <Footer />
    </>
  );
}

export default CaseCard;
