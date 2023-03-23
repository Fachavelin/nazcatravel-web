import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { navButtom } from '@/interfaces';

interface Props {
  imgUrl: string;
  imgPosition?: string;
  text: string;
  navButtoms?: navButtom[];
  isImageAtTop?: boolean;
}

export const BackGroundImage: FC<Props> = ({
  imgUrl,
  imgPosition,
  text,
  navButtoms,
  isImageAtTop = false,
}) => {
  return (
    <div
      className={`w-full h-100v max-w-screen-2xl mx-auto  flex items-center justify-center relative
      ${isImageAtTop ? 'md:h-80v' : 'md:h-70v'}
      `}
    >
      <Image
        src={imgUrl}
        alt={''}
        fill
        style={{
          objectFit: 'cover',
          objectPosition: imgPosition || 'center',
        }}
      />
      <div className='max-w-3xl absolute'>
        <h1 className='text-white text-center text-5xl mb-9'>{text}</h1>
        <div className='flex justify-center gap-3'>
          {navButtoms &&
            navButtoms.map((item, key) => (
              <Link
                href={item.url}
                className={`${
                  key % 2 != 0
                    ? 'bg-blue-500 hover:bg-blue-600 text-white text-xl py-3 px-3 rounded-md transition'
                    : 'bg-white text-xl py-3 px-3 rounded-md transition  hover:text-blue-500'
                }  text-xl py-3 px-3 rounded-md transition`}
              >
                {item.title}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};
