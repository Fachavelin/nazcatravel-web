import Image from 'next/image';
import { FC } from 'react';
import { truncate } from 'lodash';

interface props {
  imageUrl?: string;
}

export const TourCard: FC<props> = ({ imageUrl }) => {
  const text =
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur sit enim ipsam voluptas quo error dicta minima, alias ex quis itaque ratione. Iste ipsa nobis sequi. Dolores quisquam porro rem?';

  return (
    <div className='border px-2 py-1'>
      <div className='relative h-72 w-full'>
        <Image src={imageUrl ? imageUrl : ''} alt={''} fill style={{ objectFit: 'cover' }} />
      </div>
      <p>Titulo</p>
      <p className=''>{truncate(text, { length: 100 })}</p>
      <div className='flex justify-between items-center'>
        <p className='text-left'>$35</p>
        <a className='bg-blue-500 px-2 py-1 text-white rounded-md' href=''>
          Ver más
        </a>
      </div>
    </div>
  );
};
