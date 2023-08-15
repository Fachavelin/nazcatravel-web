import { FC } from 'react';
import Image from 'next/image';

interface Props {
  title: string;
  shortDescription: string;
  imageUrl?: string;
  dataAosDuration: number;
}

export const BodyCard: FC<Props> = ({ title, shortDescription, imageUrl, dataAosDuration = 1000 }) => {
  return (
    <div className='flex justify-center items-center' data-aos='fade-up' data-aos-duration={dataAosDuration}>
      <div className='grid'>
        <div className='relative h-72 w-full'>
          <Image src={imageUrl ? imageUrl : ''} alt={''} fill style={{ objectFit: 'cover' }} />
        </div>
        <div className='-translate-y-20'>
          <div className='bg-white border rounded-md p-5 mx-6 shadow-2xl'>
            <p className='text-xl font-medium'>{title}</p>
            <p className='text-sm font-medium text-gray-800'>{shortDescription}</p>
          </div>
          <div className='flex justify-end -translate-y-5'>
            <a className='text-center bg-blue-500 hover:bg-blue-600 transition text-white cursor-pointer rounded-md w-20 py-1 px-2 shadow-2xl shadow-blue-500'>
              Ver mas
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
