import { FC } from 'react';
import { linkValues } from './NavLinks';
import Image from 'next/image';
import Link from 'next/link';

export const Footer: FC = () => {
  return (
    <div className=' w-full bg-blue-500 shadow z-50 py-5'>
      <div className='max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 flex justify-around'>
        <div className='max-w-xs'>
          <div className='flex justify-center pb-4'>
            <Image src='/logo.png' alt={''} width={220} height={220} />
          </div>
          <p className='text-white text-justify pb-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            doloribus quas, exercitationem nihil eius nam
          </p>
          <p className='text-white text-justify'>
            Todos los derechos reservados © 2023 | {'Desarrollado por '}
            <a
              href='https://www.logicielapplab.com/'
              target={'_blank'}
              rel='noopener noreferrer'
              className='cursor-pointer font-bold'
            >
              Logiciel Applab
            </a>
          </p>
        </div>

        <div className='grid gap-1'>
          <p className='text-center text-white text-base font-semibold'>
            Navegación
          </p>
          {linkValues.map((item) => (
            <Link
              key={item.url}
              href={item.url}
              className='text-sm font-semibold text-white hover:text-blue-100 cursor-pointer transition'
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className='grid'>
          <p className='text-center text-white text-base font-semibold'>
            Redes sociales
          </p>

          <a
            className='text-sm font-semibold text-white hover:text-blue-100 cursor-pointer transition'
            href='https://www.facebook.com/mafercita.arevalo'
            target='_blank'
            rel='noopener noreferrer'
          >
            Facebook
          </a>
          <a
            className='text-sm font-semibold text-white hover:text-blue-100 cursor-pointer transition'
            href='https://www.facebook.com/mafercita.arevalo'
            target='_blank'
            rel='noopener noreferrer'
          >
            Instragram
          </a>
          <a
            className='text-sm font-semibold text-white hover:text-blue-100 cursor-pointer transition'
            href='https://www.facebook.com/mafercita.arevalo'
            target='_blank'
            rel='noopener noreferrer'
          >
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
};
