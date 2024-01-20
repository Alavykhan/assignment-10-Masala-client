import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './masalaSwiper.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const MasalaSwiper = () => {
    return (
        <div>
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src='https://i.ibb.co/sRdJG0G/food1.jpg' alt="" /></SwiperSlide>
        <SwiperSlide><img src='https://i.ibb.co/yN72Tv7/food2.jpg' alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/4fnGLnL/food3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/hDPWfPr/food4.jpg" alt="" /></SwiperSlide>
      </Swiper>
        </div>
    );
};

export default MasalaSwiper;