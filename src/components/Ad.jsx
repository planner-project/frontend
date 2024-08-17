import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { styled } from "styled-components";

import "swiper/css";
import "swiper/css/pagination";

const Ad = () => {
  return (
    <StyledSwiper
      modules={[Pagination, Autoplay]}
      spaceBetween={50}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      loop={true}
    >
      <SwiperSlide>{/* <img src="images/parrot.png" /> */}</SwiperSlide>
      <SwiperSlide>
        <img src="images/ragdoll.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="images/red-panda.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="images/retriever.jpeg" />
      </SwiperSlide>
    </StyledSwiper>
  );
};

export default Ad;

const StyledSwiper = styled(Swiper)`
  background: #eaecf5;
  height: 240px;
  border-radius: 10px;
  position: relative;
  overflow: clip;
  padding-bottom: 30px;
  .swiper-slide {
    overflow: hidden;
    background-color: #212086;
    border-radius: 10px;
    cursor: pointer;
  }

  img {
    height: 100%;
  }
`;
