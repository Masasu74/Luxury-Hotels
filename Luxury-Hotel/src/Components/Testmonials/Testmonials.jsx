import React from 'react';
import style from './Testmonials.module.css';
import left_arrow from "../../../public/left_arrow.png";
import right_arrow from "../../../public/right_arrow.png";
function Testmonials() {
  return (

    <div className={style.testmonial}>
    <h2>Testimonials</h2>
    <h4>"Calm, Serene, Retro – What a way to relax and enjoy"</h4>
    <h6> Mr. and Mrs. Baxter, UK</h6>
    <div className={style.arrowBox}>
      <div className={style.leftBox}>
        <img src={left_arrow} width="28px" alt="" />
      </div>
      <div className={style.rightBox}>
        <img src={right_arrow} width="28px" alt="" />
      </div>
    </div>
  </div>

  )
}

export default Testmonials