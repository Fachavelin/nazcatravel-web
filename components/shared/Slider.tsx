import { FC } from 'react';
import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { EffectCreative, Pagination, Navigation } from 'swiper/modules';

interface Props {
  images?: string[];
  vh?: string;
}

export const Slider: FC<Props> = ({ images, vh = 'h-80v' }) => {
  return (
    <>
      <Swiper
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-120%', 0, -500],
          },
          next: {
            shadow: true,
            translate: ['120%', 0, -500],
          },
        }}
        modules={[EffectCreative, Pagination, Navigation]}
        className='mySwiper2'
      >
        {images &&
          images.map((image, key) => (
            <SwiperSlide key={key}>
              <div className={`${vh}`}>
                <Image src={image} alt={''} fill style={{ objectFit: 'cover' }} />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};
