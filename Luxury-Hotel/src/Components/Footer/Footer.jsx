import React from "react";
import style from "./Footer.module.css";
import fb from "../../../public/fb_icon.png";
import ig from "../../../public/ig_icon.png";
import x from "../../../public/x_icon.png";
import vector from "../../../public/vector.png";
function Footer() {
  return (
    <div className={style.footer}>
      <img src={vector} width="145px" alt="" />
      <div className={style.bg}>
        <div className={style.decr}>
          <div className={style.logo}>
            {" "}
            <h5>LUXURY</h5>
            <h6>HOTELS</h6>
          </div>

          <p>
            497 Evergreen Rd. Roseville, CA 95673 <br />
            +44 345 678 903 <br />
            luxury_hotels@gmail.com
          </p>
        </div>
        <div className={style.flinks}>
          <ul>
            <li>
              <a href="">About us</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Terms & Conditions</a>
            </li>
          </ul>
        </div>
        <div className={style.socialMedia}>
      <ul>
        <li>
          <div><img src={fb} alt="" /></div>
          <div><a href="">Facebook</a></div>
        </li>
        <li>
          <div><img src={ig} alt="" /></div>
          <div><a href="">Instagram</a></div>
        </li>
        <li>
          <div><img src={x} alt="" /></div>
          <div><a href="">Twitter</a></div>
        </li>
      </ul>
        </div>
        <div className={style.newsLetter}>
          <h4>Subscribe to our newsletter</h4>
          <div>
            <input type="email" name="" id="" placeholder="Email Address" />
            <button>OK</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
