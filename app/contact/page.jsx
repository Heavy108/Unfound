import style from "../../css/contact.module.css"
import Image from "next/image"
import contact from "../../assets/other/contact.png"
import gradientmobile from "../../assets/Gradient2.png"
import gradientdesktop from "../../assets/Gradient5.png"
import Navbar from "../../components/navbar"
import Footer from "../../components/Footer"
function Contact(){
    return (
      <>
      <Navbar/>
        <div className={style.contactcontainer}>
            <Image src={gradientmobile} className={style.gradientmobile}  alt="gradientmobile" />
            <Image src={gradientdesktop} className={style.gradientdesktop} alt="gradientdesktop"/>
          <div className={style.potrait}>
            <h1>
              <span className={style.dot}>●</span>
              Contact
            </h1>
            <h2>Let's create something extraordinary together.</h2>
            <Image src={contact} alt="contact" />
          </div>

          <form action="" className={style.contactform}>
            <div className={style.formsection}>
              <label htmlFor="Name">Name</label>
              <input type="text" placeholder="Enter your Name" />
            </div>
            <div className={style.formsection}>
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="Enter your Email" />
            </div>
            <div className={style.formsection}>
              <label htmlFor="Message">Message</label>
              <textarea type="text" placeholder="Enter Message" />
            </div>

            <input type="submit" className={style.vutton}/>
          </form>
        </div>
        <Footer/>
      </>
    );
}

export default Contact