import React from 'react';
import './fourSect.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const FourSect = () => {
  return (
    <section>
      <div className="employer-section">
        <h2>Happy Customers</h2>
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="customerSwiper"
        >
          <SwiperSlide>
            <div className="customer-info">
              <img src="https://preview.colorlib.com/theme/cuisines/images/person_sq_1.jpg.webp" alt="Customer 1" />
              <p>Customer 1 is really happy with the service!</p>
              <span>⭐️⭐️⭐️⭐️⭐️</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="customer-info">
              <img src="https://preview.colorlib.com/theme/cuisines/images/person_sq_2.jpg.webp" alt="Customer 2" />
              <p>Customer 2 recommends this place to everyone.</p>
              <span>⭐️⭐️⭐️⭐️⭐️</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="customer-info">
              <img src="https://preview.colorlib.com/theme/cuisines/images/person_sq_1.jpg.webp" alt="Customer 3" />
              <p>Customer 3 loves the ambiance and food!</p>
              <span>⭐️⭐️⭐️⭐️</span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default FourSect;
