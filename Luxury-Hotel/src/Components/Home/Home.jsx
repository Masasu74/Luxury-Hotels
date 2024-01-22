import React from "react";
import Hero from "../Hero/Hero.jsx";
import Footer from "../Footer/Footer.jsx";
import style from "./Home.module.css";
import beach from "../../../public/beach.jpg";
import room from "../../../public/room.jpeg";
import left_arrow from "../../../public/left_arrow.png";
import right_arrow from "../../../public/right_arrow.png";
function Home() {
  return (
    <>
      <Hero />
      <div className={style.section}>
        <div>
          <p className={style.text}>
            All our room types are including complementary breakfast
          </p>
        </div>
        <div className={style.bb}>
          <div className={style.box1}>
            <div className={style.des}>
              <h3>Luxury redefined</h3>
              <p>
                Our rooms are designed to transport you into an environment made
                for leisure. Take your mind off the day-to-day of home life and
                find a private paradise for yourself.
              </p>
              <div className={style.btnBox}>
                <button className={style.btn}>EXPLORE</button>
              </div>
            </div>
            <div className={style.boxImage}>
              <img src={room} width="500vw" alt="" />
            </div>
          </div>
          <div className={style.box1}>
            <div className={style.des}>
              <h3>Leave your worries in the sand</h3>
              <p>
                We love life at the beach. Being close to the ocean with access
                to endless sandy beach ensures a relaxed state of mind. It seems
                like time stands still watching the ocean.
              </p>
              <div className={style.btnBox}>
                <button className={style.btn}>EXPLORE</button>
              </div>
            </div>
            <div className={style.boxImage}>
              <img src={beach} width="500vw" alt="" />
            </div>
          </div>
        </div>

        <div className={style.testmonial}>
          <h2>Testimonials</h2>
          <h4>"Calm, Serene, Retro – What a way to relax and enjoy"</h4>
          <h6> Mr. and Mrs. Baxter, UK</h6>
          <div className={style.arrowBox}>
            <div className={style.leftBox}>
              <img src={left_arrow} width='28px'alt="" />
            </div>
            <div className={style.rightBox}>
            <img src={right_arrow} width='28px'alt="" />

            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Home;
