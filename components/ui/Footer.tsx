import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export const Footer: FC = () => {
  const t = useTranslations('Navbar');

  const linkValues = [
    {
      title: t('index'),
      url: '/',
    },
    {
      title: t('about_us'),
      url: '/about-us',
    },
    {
      title: t('contact'),
      url: '/contact',
    },
    {
      title: t('tours'),
      url: '/tours',
    },
    {
      title: t('services'),
      url: '/services',
    },
  ];

  return (
    <div className=' w-full bg-blue-500 shadow z-50 py-5'>
      <div className='max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 grid gap-5 sm:grid-cols-3'>
        <div className='max-w-xs mx-auto'>
          <div className='flex justify-center pb-4'>
            <div className=''>
              <Image src='/images/logo-bird.png' alt={''} width={90} height={60} />
            </div>
            <div className='translate-y-4'>
              <p className='pl-0 text-3xl  text-white font-mono font-semibold'>Nazca Travel</p>
              <p className='-translate-y-2 text-base font-mono font-semibold'>Creando experiencias</p>
            </div>
          </div>
          <p className='text-white text-center pb-4'>{t('slogan')}</p>
          <p className='text-white text-center'>
            {t('copyright')} © 2023 | {t('developed_by') + ' '}
            <a href='https://www.logicielapplab.com/' target={'_blank'} rel='noopener noreferrer' className='cursor-pointer font-bold'>
              Logiciel Applab
            </a>
          </p>
        </div>

        <div className='grid gap-1'>
          <p className='text-center text-white text-base font-semibold'>{t('router')}</p>
          {linkValues.map((item) => (
            <Link
              key={item.url}
              href={item.url}
              className='text-sm font-semibold text-white hover:text-blue-100 cursor-pointer transition mx-auto mx-auto'
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className='grid'>
          <p className='text-center text-white text-base font-semibold'>{t('social_network')}</p>

          <a
            className='text-sm font-semibold text-white hover:text-blue-100 cursor-pointer transition mx-auto'
            href='https://www.facebook.com/mafercita.arevalo'
            target='_blank'
            rel='noopener noreferrer'
          >
            Facebook
          </a>
          <a
            className='text-sm font-semibold text-white hover:text-blue-100 cursor-pointer transition mx-auto'
            href='https://www.facebook.com/mafercita.arevalo'
            target='_blank'
            rel='noopener noreferrer'
          >
            Instragram
          </a>
          <a
            className='text-sm font-semibold text-white hover:text-blue-100 cursor-pointer transition mx-auto'
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
