"use client";
import { useState } from "react";
import style from "../../css/contact.module.css";
import Image from "next/image";
import contact from "../../assets/other/contact.png";
import gradientmobile from "../../assets/Gradient2.png";
import gradientdesktop from "../../assets/Gradient5.png";
import Navbar from "../../components/navbar";
import Footer from "../../components/Footer";
import footergradient from "../../assets/Footer.svg"
function Contact() {
  const initialState = {
    email: "",
    name: "",
    message: "",
  };

  const [user, setUser] = useState(initialState);
  const [loading, setLoading] = useState(false);
const handlesubmit = async (e) => {
  e.preventDefault(); // stop form reload
  setLoading(true);

  try {
    const response = await fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // important for JSON
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    alert("Form submitted successfully:");

    setUser({
      email: "",
      name: "",
      message: "",
    });
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Something went wrong. Try contacting us at: team@unfoundstudio.com");

  } finally {
    setLoading(false);
  }
};


  return (
    <>
      <Navbar />
      {/* <div className={style.extradiv}> */}
      <div className={`${style.contactcontainer}  overflow-y-hidden`}>
        <Image
          src={gradientmobile}
          className={style.gradientmobile}
          alt="gradientmobile"
        />
        <Image
          src={gradientdesktop}
          className={style.gradientdesktop}
          alt="gradientdesktop"
        />
        <div className={style.extradiv}>
          <div className={style.potrait}>
            <h1 className="font-satoshi">
              <span className={style.dot}>●</span>
              Contact
            </h1>
            <h2 className="font-cabinet">
              Let's create something extraordinary together.
            </h2>
            <Image src={contact} alt="contact" />
          </div>

          <form
            onSubmit={handlesubmit}
            className={`${style.contactform} font-satoshi`}
          >
            <div className={style.formsection}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter your Name"
                required
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                value={user.name}
                autoComplete="off"
              />
            </div>

            <div className={style.formsection}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your Email"
                required
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                value={user.email}
                autoComplete="off"
              />
            </div>

            <div className={style.formsection}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Enter Message"
                required
                onChange={(e) => setUser({ ...user, message: e.target.value })}
                value={user.message}
                autoComplete="off"
              />
            </div>

            <button type="submit" className={style.vutton}>
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
      {/* </div> */}
      
      <Footer />
    </>
  );
}

export default Contact;
