import { FC } from 'react';
import { BodyCard } from './BodyCard';

export const Body: FC = () => {
  return (
    <div className='max-w-5xl mx-auto py-8'>
      <p className='text-center text-4xl pb-7'>Lorem ipsum dolor sit amet</p>
      <div className='grid mx-4 sm:mx-0 sm:grid-cols-3 sm:gap-10'>
        <BodyCard />
        <BodyCard />
        <BodyCard />
      </div>
    </div>
  );
};
