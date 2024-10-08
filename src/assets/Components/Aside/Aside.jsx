import React from "react";
import "../Aside/aside.css";

const Aside = () => {
  return (
    <aside>
      <div className="asidePart">
        <img
          src="https://preview.colorlib.com/theme/cuisines/images/logo.svg"
          alt=""
        />
        <ul className="menuList">
          <li>
            <a href="">about us</a>
          </li>
          <li>
            <a href="">our menu</a>
          </li>
          <li>
            <a href="">special offers</a>
          </li>
          <li>
            <a href="">gallery</a>
          </li>
          <li>
            <a href="">contact us</a>
          </li>
        </ul>
        <div className="contact">
          <span className="textAside">book a table</span>
          <p>+91-8010200777</p>
          <span className="textAside">MON-SUN, 8:00AM - 11-00PM</span>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
