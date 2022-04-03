import React from "react";
import "./Footer.scss";
import logo from "../assets/logo.jpg";
import email from "../assets/email.png";
import phonenumber from "../assets/phonenumber.png";
import facebook from "../assets/facebook.png";
import location from "../assets/location.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <ul class="footer-nav">
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Press</a>
          </li>
          <li>
            <a href="#">iOS App</a>
          </li>
          <li>
            <a href="#">Android App</a>
          </li>
        </ul>

        <ul className="footer-ul">
          <li>
            <a href="mailto:Watermaster176@gmail.com">
              <img src={email} className="footer-icons" />
              {/* <h4 className='footer-h4'>Watermaster176@gmail.com</h4> */}
            </a>
          </li>
          <li>
            <a href="tel:+995591276176">
              <img src={phonenumber} className="footer-icons" />
              {/* <h4 className='footer-h4'>+995 591 276 176</h4> */}
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/watermaster.ge">
              <img src={facebook} className="footer-icons" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={location} className="footer-icons" />
              <h4 className="footer-h4">Kutaisi,Georgia</h4>
            </a>
          </li>
        </ul>
      </div>

<div className="footer-bottom">
  <p>
Copyright © 2022 by Watermaster. All right reserved.
  </p>
</div>
    </div>
  );
};

export default Footer;
