import { FC } from 'react';

import Image from 'next/image';

export const Services: FC = () => {
  return (
    <>
      <div className='grid md:grid-cols-2 max-w-5xl md:h-70v mx-auto my-8'>
        <div className='flex items-center justify-center my-6 md:mb-0 px-6'>
          <div className='px-4'>
            <p className='text-left text-4xl mb-5'>Lorem ipsum</p>
            <p className='text-justify te xt-xl mb-5 text-gray-800'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste cum
              deleniti hic in qui nobis, iure enim dicta officiis libero
              tempora, fugiat a eligendi pariatur. Assumenda delectus rem illum
              sequi!
            </p>

            <button className='w-full bg-blue-500 hover:bg-blue-600 transition shadow-blue-600 shadow-2xl text-white py-2 rounded-lg text-xl'>
              Ver mas
            </button>
          </div>
        </div>
        <div className='bg-black row-start-1 md:row-auto'>
          <div className='relative h-40v md:h-70v w-full'>
            <Image
              src='https://res.cloudinary.com/dbpb5pque/image/upload/v1679267085/sea-turtle-2547084_1920_xpaomh.jpg'
              alt={'Image'}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
      <div className='grid md:grid-cols-2 max-w-screen-2xl mx-auto my-14'>
        <div className='grid grid-cols-6'>
          <div className='relative h-30v md:h-50v col-span-4 translate-x-7 sm:translate-x-16'>
            <Image
              src='https://res.cloudinary.com/dbpb5pque/image/upload/v1679267085/sea-turtle-2547084_1920_xpaomh.jpg'
              alt={'Image'}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className='relative h-10v sm:h-20v md:h-40v col-span-2 z-40 -translate-x-12  translate-y-44 sm:translate-y-24'>
            <Image
              src='https://res.cloudinary.com/dbpb5pque/image/upload/v1679267085/sea-turtle-2547084_1920_xpaomh.jpg'
              alt={'Image'}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
        <div className='flex items-center  my-6 md:mb-0'>
          <div className='px-4 max-w-md'>
            <p className='text-left text-4xl mb-5'>Lorem ipsum</p>
            <p className='text-justify te xt-xl mb-5 text-gray-800'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste cum
              deleniti hic in qui nobis, iure enim dicta officiis libero
              tempora, fugiat a eligendi pariatur. Assumenda delectus rem illum
              sequi!
            </p>

            <button className='w-full bg-blue-500 hover:bg-blue-600 transition shadow-blue-600 shadow-2xl text-white py-2 rounded-lg text-xl'>
              Ver mas
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
