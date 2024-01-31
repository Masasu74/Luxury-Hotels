import React from "react";
import Hero from "../Hero/Hero.jsx";
import Footer from "../Footer/Footer.jsx";
import style from "./Facilities.module.css";
import thegym from "../../../public/thegym.jpg";
import swimming from "../../../public/swimming.png";
import thespa from "../../../public/thespa.jpg";
import poolside from "../../../public/poolside.jpeg";
import restaurant from "../../../public/restaurant.png";
import laundry from "../../../public/laundry.jpg";
import Testmonials from "../Testmonials/Testmonials.jsx";
function Facilities() {
  const images = [
    { id: 1, title: "THE GYM", url: thegym },
    { id: 2, title: "POOLSIDE BAR", url: poolside },
    { id: 3, title: "THE SPA", url: thespa },
    { id: 4, title: "SWIMMING POOL", url: swimming },
    { id: 5, title: "RESTAURANT", url: restaurant },
    { id: 6, title: "LAUNDRY", url: laundry },
  ];
  return (
    <>
      <Hero />
      <div className={style.section}>
        <div className={style.text}>
          <h2>Facilities</h2>
          <p>
            We want your stay at our lush hotel to be truly unforgettable. That
            is why we give special attention to all of your needs so that we can
            ensure an experience quite uniquw. Luxury hotels offers the perfect
            setting with stunning views for leisure and our modern luxury resort
            facilities will help you enjoy the best of all.
          </p>
        </div>
        <div className={style.boxes}>
          {images.map((image) => (
            <div
              className={style.box}
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(20, 39, 74, 0), rgba(20, 39, 74, 0.5)), url(${image.url})`,
              }}
            >
              <div className={style.innerBox}>
                <h1>{image.title}</h1>
              </div>{" "}
            </div>
          ))}
        </div>
        <Testmonials />
      </div>
      <Footer />
    </>
  );
}

export default Facilities;

{

}
