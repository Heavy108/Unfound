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
import Talk from "../components/Talk"
import footergradient from "../assets/Footer.svg"
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
      link: "/VPN",
    },
    {
      image: Oruva,
      tech1: "App Design",
      tech2: "Admin Dashboard",
      desc: "Oruva e-Commerce App & Admin Dashboard",
      link: "/Oruva",
    },
    {
      image: ivory,
      tech1: "Website Design",
      tech2: "Development",
      desc: "Patient-First Website for 'Ivory Dental'",
      link: "/IvoryDental",
    },
    {
      image: Nest,
      tech1: "UX Design",
      tech2: "Development",
      desc: "Education Dashboard for Skill Nest",
      link: "/Nest",
    },
  ];
const OPTIONS = { slidesToScroll: 2, };
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
          {/* <Image src={gradient2} className={style.grad} alt="gradient" /> */}

          <div className={style.section}>
            <Image src={logo} alt="logo" className={style.logo} />
            <div className={style.desktop}>
              <h1 className={`${style.topheading} font-cabinet`}>{heading}</h1>
              <div className={style.section2}>
                <ul className={`${style.list1} font-satoshi`}>
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
            <ul className={`${style.list1} font-satoshi`}>
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
              <h1 className={`${style.title} font-cabinet`}>
                Project Overview
              </h1>

              <p className={`${style.content2} font-satoshi`}>{overview}</p>
            </div>
            <p className={`${style.content} font-satoshi`}>{overview}</p>
            <Image
              src={timelinemobile}
              alt="Timeline"
              className={style.timelinemobile}
            />
            <Image src={timeline} alt="Timeline" className={style.timeline} />
          </div>
          <div className={style.section}>
            <div className={style.desktop}>
              <h1 className={`${style.title} font-cabinet`}>The Challenge</h1>
              <p className={`${style.content2} font-satoshi`}>
                {challengetext}
              </p>
            </div>
            <p className={`${style.content} font-satoshi`}>{challengetext}</p>
            <Image
              src={challenge}
              alt="challenge"
              className={style.challenge}
            />
          </div>
          {/* Goals */}
          <div className={style.section}>
            <h1 className={`${style.title} font-cabinet`}>Goals</h1>
            <div className={`${style.one} font-satoshi`}>
              <GoalCard text={goal1} />
              <GoalCard text={goal2} />
            </div>
            <div className={`${style.two} font-satoshi`}>
              <GoalCard text={goal3} />
              <GoalCard text={goal4} />
            </div>
          </div>

          {/* our approach */}
          <div className={style.section}>
            <div className={style.desktop}>
              <h1 className={`${style.title} font-cabinet`}>The Approach</h1>
              <p className={`${style.content2} font-satoshi`}>{approachtext}</p>
            </div>
            <p className={`${style.content} font-satoshi`}>{approachtext}</p>
            <Image src={approach} alt="approach" className={style.approach} />
          </div>

          <div className={style.section}>
            <div className={style.desktop}>
              <h1 className={`${style.title} font-cabinet`}>Outcome</h1>
              <p className={`${style.content2} font-satoshi`}>{outcome}</p>
            </div>
            <p className={`${style.content} font-satoshi`}>{outcome}</p>
            <div className={style.outer}>
              <Image src={landing} alt="landing" className={style.hero} />
            </div>
          </div>
          <div className={`${style.section} font-cabinet `}>
            <h1 className={`${style.title} font-cabinet`}>Explore More Work</h1>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          </div>
        </div>
      </div>
      {/* <div className={style.section}></div> */}
      <section className="flex-col items-center justify-center relative w-full h-[400px]">
        <Talk />
        <Image
          src={footergradient}
          alt="footer gradient"
          width={25600}
          height={400}
        />

        <Footer />
      </section>
    </>
  );
}

export default CaseCard;
