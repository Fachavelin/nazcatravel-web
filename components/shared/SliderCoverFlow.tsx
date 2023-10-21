import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperNavButtons } from './SwiperNavButtons';
import Image from 'next/image';

import { Navigation, FreeMode, EffectCoverflow, EffectCreative } from 'swiper/modules';

// import './Swiper.css';
import 'swiper/css';

export const SliderCoverFlow = () => {
  const data = [
    {
      title: 'Española',
      subTitle: 'Experiencia mágica',
      imageUrl:
        'https://res.cloudinary.com/dbpb5pque/image/upload/v1651178316/f.elconfidencial.com_original_47b_328_963_47b3289639713b8e80c8d682d219fba7_log7xp.jpg',
    },
    {
      title: 'Cuevas de hitler',
      subTitle: 'Fantasia submarina',
      imageUrl: 'https://res.cloudinary.com/dbpb5pque/image/upload/v1679327870/cat-1508613_1280_ozut0m.jpg',
    },
    {
      title: 'Española',
      subTitle: 'Experiencia mágica',
      imageUrl:
        'https://res.cloudinary.com/dbpb5pque/image/upload/v1651178316/f.elconfidencial.com_original_47b_328_963_47b3289639713b8e80c8d682d219fba7_log7xp.jpg',
    },
    {
      title: 'Cuevas de hitler',
      subTitle: 'Fantasia submarina',
      imageUrl: 'https://res.cloudinary.com/dbpb5pque/image/upload/v1679327870/cat-1508613_1280_ozut0m.jpg',
    },
  ];

  return (
    <Swiper
      watchSlidesProgress={true}
      slidesPerView={3}
      className='mySwiper'
      navigation={{
        prevEl: '.prev',
        nextEl: '.next',
      }}
      modules={[Navigation, FreeMode, EffectCoverflow]}
      loop={true}
      effect={'coverflow'}
      coverflowEffect={{
        scale: 0.9,
        rotate: 0,
        stretch: -20,
        modifier: 1,
      }}
      centeredSlides={false}
      style={{ width: 800 }}
    >
      {data &&
        data.map((d, key) => (
          <SwiperSlide key={key}>
            <div className='swiper-container h-96 w-96'>
              <Image src={d.imageUrl ? d.imageUrl : ''} alt={''} fill />
            </div>
          </SwiperSlide>
        ))}
      <SwiperNavButtons />
    </Swiper>
  );
};
