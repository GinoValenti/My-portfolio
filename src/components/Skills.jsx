
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Mongo from '../assets/mongo.png';
import Redux from '../assets/redux.svg';

import {useTranslation} from "react-i18next"

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
function Skills () {
  const [t,i18n]=useTranslation("global")
  return (

    <>
    <div className="tech-div">

    <div class="heading" id="tech">
    <h2>{t("global.tech")}</h2>
    <span>{t("global.span-tech")}
</span>
</div>
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
      <SwiperSlide><img src={HTML} alt="" /></SwiperSlide>
      <SwiperSlide><img src={CSS} alt="" /></SwiperSlide>
      <SwiperSlide><img src={JavaScript} alt="" /></SwiperSlide>
      <SwiperSlide><img src={ReactImg} alt="" /></SwiperSlide>
      <SwiperSlide><img src={Node} alt="" /></SwiperSlide>
      <SwiperSlide><img src={GitHub} alt="" /></SwiperSlide>
      <SwiperSlide><img src={Mongo} alt="" /></SwiperSlide>
      <SwiperSlide><img src={Redux} alt="" /></SwiperSlide>
    </Swiper>
    </div>
  </>
  )
}
export default Skills