import Image from 'next/image';
import { FC } from 'react';

export const Hero: FC = () => {
  return (
    <div
      className='w-full h-100v md:h-80v max-w-screen-2xl mx-auto  flex items-center justify-center relative'
      /* style={{
        backgroundImage: `url("https://res.cloudinary.com/dbpb5pque/image/upload/v1679278064/00bbd5a9-b445-406d-84c1-4dbcbb400907_mg2cw5.jpg")`,
      }} */
    >
      <Image
        src={
          'https://res.cloudinary.com/dbpb5pque/image/upload/v1679273034/mountain-7690893_1920_wlvx3a.jpg'
        }
        alt={''}
        fill
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
      <div className='max-w-3xl absolute'>
        <h1 className='text-white text-center text-5xl mb-9'>
          Explora las maravillas de las Islas Galápagos con nosotros
        </h1>
        <div className='flex justify-center'>
          <button className='bg-white text-xl py-3 px-3 rounded-xl hover:text-blue-500'>
            Conocer más
          </button>
        </div>
      </div>
    </div>
  );
};
