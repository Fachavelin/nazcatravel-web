import Image from 'next/image';
import { FC } from 'react';

interface Props {
  title: string;
  subTitle: string;
  text: string;
  dataAosDuration?: number;
  imageUrl: string;
}

export const AboutUsCard: FC<Props> = ({ title, subTitle, text, dataAosDuration = 1000, imageUrl }) => {
  return (
    <div className='bg-white p-4 rounded-lg shadow-2xl' data-aos='fade-down' data-aos-duration={dataAosDuration}>
      <p className='text-center text-4xl font-bold text-gray-800'>{title}</p>
      <p className='text-center text-2xl font-semibold'>{subTitle}</p>
      <div className='relative h-64 w-full my-3'>
        <Image src={imageUrl} alt={''} fill style={{ objectFit: 'contain' }} />
      </div>
    </div>
  );
};
