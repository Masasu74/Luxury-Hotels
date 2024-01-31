import React from "react";
import Hero from "../Hero/Hero.jsx";
import Footer from "../Footer/Footer.jsx";
import style from "./Rooms.module.css";
import doubleRoom from "../../../public/doubleRoom.jpeg";
import singleRoom from "../../../public/singleRoom.jpeg";
import twinRoom from "../../../public/twinRoom.jpg";
import Testmonials from "../Testmonials/Testmonials.jsx";
import plus from "../../../public/plus.png";
function Rooms() {
  const images = [
    { id: 1, title: "SINGLE ROOM", url: singleRoom },
    { id: 2, title: "DOUBLE ROOM", url: doubleRoom },
    { id: 3, title: "TWIN ROOM", url: twinRoom },
  ];
  return (
    <>
      <Hero />
      <div className={style.section}>
        <div className={style.text}>
          <h2>ROOMS AND RATES</h2>
          <p>
            Each of our bright, light-flooded rooms come with everything you
            could possibly need for a comfortable stay. And yes, comfort isn’t
            our only objective, we also value good design, sleek contemporary
            furnishing complemented by the rich tones of nature’s palette as
            visible from our rooms’ sea-view windows and terraces.
          </p>
        </div>
        <div className={style.boxes}>
          {images.map((image) => (
            <div className={style.box}>
              <div className={style.boxImage}  style={{
                 backgroundImage: `linear-gradient(to bottom, rgba(20, 39, 74, 0), rgba(20, 39, 74, 0.5)), url(${image.url})`,
             }}></div>
              <div className={style.innerBox}>
                <h1>{image.title}</h1>
              </div>
              <div className={style.boxPrice}>
             <div className={style.al}>
              <img src={plus} alt="" />
              <h4>VIEW ROOM DETAILS</h4>
             </div>

             <div>
              <button>$155  Avg/night</button>
             </div>
              </div>
            </div>
          ))}
        </div>
        <Testmonials />
      </div>
      <Footer />
    </>
  );
}

export default Rooms;

// <div className={style.boxes}>
//           {images.map((image) => (
//             <div
//               className={style.box}
//               style={{
//                 backgroundImage: `linear-gradient(to bottom, rgba(20, 39, 74, 0), rgba(20, 39, 74, 0.5)), url(${image.url})`,
//               }}
//             >
//               <div className={style.innerBox}>
//                 <h1>{image.title}</h1>
//               </div>{" "}
//             </div>
//           ))}
//         </div>
