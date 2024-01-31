import React from "react";
import style from "./ContactUs.module.css";
import Navbar from "../Navbar/Navbar.jsx";
function ContactUs() {
  return (
    <div>
      <div className={style.navbarBox}>
        <Navbar />
        <h2>CONTACT-US</h2>
      </div>
      <div className={style.section}>
        <div className={style.des}>
          <h1>WE ARE HERE FOR YOU</h1>
          <p>
            At Luxury Hotels, we take our customers seriously. Do you have any
            enquiries, compaints or requests, please forward it to our support
            desk and we will get back to you as soon as possible.
          </p>
        </div>
        <div className={style.boxes}>
          <div className={style.box1}>
            <h2>497 Evergreen Rd. Roseville, CA 95673</h2>
            <h3>View map</h3>
            <p>
              Phone: +44 345 678 903 <br />
              Email: luxury_hotels@gmail.com
            </p>
          </div>
          <div className={style.formBox}>
            <div className={style.inputBox}>
              <label>Name</label>
              <input type="text" />
            </div>
            <div className={style.inputBox}>
              <label>Email</label>
              <input type="email" />
            </div>
            <div className={style.inputBox}>
              <label>Message</label>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
