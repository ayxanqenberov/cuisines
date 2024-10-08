import "./threeSect.css";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const ThreeSect = () => {
  return (
    <section className="two-section">
      <div className="about">
        <div className="content">
          <h5 className="about-heading">ABOUT US</h5>
          <h1 className="about-title">ABOUT CUISINES</h1>
          <p className="about-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            ut, quis laborum tenetur odit dolor quos minus in, ducimus quaerat
            repellendus laudantium rem accusantium magni est. Error atque beatae
            et quisquam facilis exercitationem vero tempore quos aperiam,
            nostrum ducimus, pariatur.
          </p>
          <ul className="about-list">
            <li>Quisquam facilis exercitationem vero</li>
            <li>Aaperiam nostrum ducimus</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>laudantium rem accusantium magni est</li>
          </ul>
          <button className="menu-btn">See Our Menu</button>
        </div>
        
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide><img src="https://preview.colorlib.com/theme/cuisines/images/hero_2.jpg.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://preview.colorlib.com/theme/cuisines/images/hero_1.jpg.webp" alt="" /></SwiperSlide>
      </Swiper>
      </div>
    </section>
  );
};

export default ThreeSect;
