import Image from 'next/image';
import { FC } from 'react';
import { truncate } from 'lodash';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ITour } from '@/interfaces';

interface props {
  tour: ITour;
}

export const TourCard: FC<props> = ({ tour }) => {
  const t = useTranslations('tours');

  return (
    <div className='border px-2 py-1'>
      <div className='relative h-72 w-full'>
        <Image src={tour.images ? tour.images[0] : ''} alt={''} fill style={{ objectFit: 'cover' }} />
      </div>
      <p className='font-bold text-xl'>{tour.title}</p>
      <p className=''>{truncate(tour.shortDescription, { length: 100 })}</p>
      <div className='flex justify-between items-center'>
        <p className='text-left font-bold'>
          $<span className='font-semibold'> {tour.price}</span>
        </p>
        <Link className='bg-blue-500 px-2 py-1 text-white rounded-md' href={`/tours/${tour.slug}`}>
          {t('button_text')}
        </Link>
      </div>
    </div>
  );
};
