import { FC, useRef, useState } from 'react';
import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Sw from 'swiper';
import { Swiper as SwiperRef } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

// import required modules
import { EffectCreative, Pagination, Navigation, Thumbs, FreeMode } from 'swiper/modules';

interface Props {
  images?: string[];
  style?: string;
}

export const Slider: FC<Props> = ({ images, style = '' }) => {
  return (
    <>
      <Swiper
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        effect={'creative'}
        modules={[Pagination, Navigation]}
        className={`w-full ${style}`}
      >
        {images &&
          images.map((image, key) => (
            <SwiperSlide key={key} className='text-center text-18 bg-white flex justify-center items-center'>
              {/* <div className={`${vh}`}>
                <Image src={image} alt={''} fill style={{ objectFit: 'cover' }} />
              </div> */}
              <img src={image} className='block w-full h-full object-cover' />
            </SwiperSlide>
          ))}
      </Swiper>
      {/* <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper'
      >
        {images &&
          images.map((image, key) => (
            <SwiperSlide key={key} className='mt-2 cursor-pointer'>
              <div className='h-40'>
                <Image src={image} alt={''} fill style={{ objectFit: 'cover' }} className='rounded-lg' />
              </div>
            </SwiperSlide>
          ))}
      </Swiper> */}
    </>
  );
};
/* onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }} */
