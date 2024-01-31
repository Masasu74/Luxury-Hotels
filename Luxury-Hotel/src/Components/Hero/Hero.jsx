import React from "react";
import { useLocation } from "react-router-dom";
import style from "./Hero.module.css";
import Navbar from "../Navbar/Navbar.jsx";
import arrow from '../../../public/down_arrow.png';
import homeBg from '../../../public/home_bg.jpg';
import facilitiesBg from '../../../public/facilities_bg.jpg';
import rooms_bg from '../../../public/rooms_bg.jpeg'
function Hero() {
  const location = useLocation();

  // Define a function to determine the background image based on the current route
  const getBackgroundImage = () => {
    switch (location.pathname) {
      case '/':
        return homeBg;
      case '/facilities':
        return facilitiesBg;
        case '/rooms':
          return rooms_bg;
      default:
        return homeBg;
    }
  };
  return (
<div className={style.background} style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${getBackgroundImage()})`
    }}>      <Navbar />
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
