import { FC } from 'react';
import { BodyCard } from './BodyCard';

export const Body: FC = () => (
  <div className='max-w-5xl mx-auto py-8'>
    <p className='text-center text-4xl pb-7' data-aos='fade-down'>
      Lorem ipsum dolor sit amet
    </p>
    <div className='grid mx-4 sm:mx-0 sm:grid-cols-3 sm:gap-10'>
      <BodyCard dataAosDuration={1000} />
      <BodyCard dataAosDuration={1300} />
      <BodyCard dataAosDuration={1600} />
    </div>
  </div>
);
