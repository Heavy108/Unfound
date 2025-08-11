import ServiceCard from "../../components/ServiceCard";
import Services from "../../components/Services";
import Testonomial from "../../components/Testomonial";
import TestomonialCard from "../../components/TestomonialCard";
import profile from "../../assets/testomonial.png";
function About(){
    return (
      <>
        <Testonomial />
        {/* <TestomonialCard
          testomonial="From the very first call, it was clear we were dealing with professionals. The way they structured the project, communicated updates, and delivered creative solutions was outstanding. What really stood out was their ability to balance a minimalist aesthetic."
          image={profile}
          name="Gaurav Kumar"
          designation="Product Designer"
        /> */}
      </>
    );
}

export default About;