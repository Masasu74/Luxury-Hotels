import React from "react";
import style from "./Hero.module.css";
import Navbar from "../Navbar/Navbar.jsx";
import arrow from '../../../public/down_arrow.png';
function Hero() {
  return (
    <div className={style.background}>
      <Navbar />
      <div className={style.text}>
        <h2>
          WELCOME TO <br /> <span>LUXURY</span>{" "}
          <span className={style.span2}>HOTELS</span>
        </h2>
        <p>
          Book your stay and enjoy Luxury <br />
          redefined at the most affordable rates.
        </p>
      </div>
      <div className={style.btnBox}>
        <button className={style.btn}>BOOK NOW</button>
      </div>
      <div className={style.scrollBox}>
        <h4>Scroll</h4>
        <div className={style.arrowBox}>
          <img src={arrow} alt="" width="30px" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
