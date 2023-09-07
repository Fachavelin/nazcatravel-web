import { useEffect, useState } from 'react';
import { GetStaticPropsContext } from 'next';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { nazcaApi } from '@/api';
import { Layout } from '@/components/layout';
import { BackGroundImage, BodyCard } from '@/components/shared';
import { ITour, navButtom } from '@/interfaces';
import Link from 'next/link';

export default function Home() {
  const t = useTranslations('Index');
  const defaultLocale = useLocale();

  const navButtoms: navButtom[] = [
    {
      title: t('Hero.button_title_1'),
      url: '/tours',
    },
    {
      title: t('Hero.button_title_2'),
      url: '/services',
    },
  ];

  const [mostSoldTours, setMostSoldTours] = useState<ITour[]>([]);

  useEffect(() => {
    getMostSoldProducts();
  }, [defaultLocale]);

  const getMostSoldProducts = async () => {
    const { data } = await nazcaApi.get<ITour[]>('/tours/mostSold');

    setMostSoldTours(data);
  };

  return (
    <Layout
      title={t('title')}
      description={t('description')}
      imageUrl='https://res.cloudinary.com/dbpb5pque/image/upload/v1692025891/Nazcatravel/Tours/shutterstock_227677294_gurljl.jpg'
      lang={defaultLocale}
    >
      <BackGroundImage
        imgUrl={'https://res.cloudinary.com/dbpb5pque/image/upload/v1692025891/Nazcatravel/Tours/shutterstock_227677294_gurljl.jpg'}
        text={t('Hero.text')}
        navButtoms={navButtoms}
        isImageAtTop
      />

      {/* Services and Tours */}
      <>
        <div className='grid md:grid-cols-2 max-w-5xl md:h-0v mx-auto my-8'>
          <div className='flex items-center justify-center my-6 md:mb-0 px-6'>
            <div className='px-4'>
              <p className='text-left text-4xl mb-5' data-aos='fade-right'>
                {t('Services.title')}
              </p>
              <p className='text-justify te xt-xl mb-5 text-gray-800' data-aos='fade-left'>
                {t('Services.text')}
              </p>
              <div className='flex'>
                <Link
                  href='/services'
                  className=' text-center cursor-pointer w-full bg-blue-500 hover:bg-blue-600 transition hover:shadow-blue-600 shadow-2xl text-white py-2 rounded-lg text-xl'
                  data-aos='fade-right'
                >
                  {t('Services.button_text')}
                </Link>
              </div>
            </div>
          </div>
          <div className=' row-start-1 md:row-auto'>
            <div className='relative h-40v md:h-60v w-full' data-aos='fade-up'>
              <Image
                src='https://res.cloudinary.com/dbpb5pque/image/upload/v1691976687/Nazcatravel/Tours/dive-3593972_1920_1_aq32us.jpg'
                alt={'Image'}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
        <div className='grid md:grid-cols-2 max-w-screen-2xl mx-auto my-14'>
          <div className='grid grid-cols-6' data-aos='fade-up'>
            <div className='relative h-30v md:h-50v col-span-4 translate-x-7 sm:translate-x-16'>
              <Image
                src='https://res.cloudinary.com/dbpb5pque/image/upload/v1679266746/beach-3851535_1920_wggjm4.jpg'
                alt={'Image'}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className='relative h-20v md:h-30v col-span-2 z-40 translate-y-24'>
              <Image
                src='https://res.cloudinary.com/dbpb5pque/image/upload/v1692133996/Nazcatravel/Tours/pexels-ata-y-6790704_1_1_qyagx5.jpg'
                alt={'Image'}
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
          </div>
          <div className='flex items-center justify-center  my-6 md:mb-0'>
            <div className='px-4 max-w-md'>
              <p className='text-left text-4xl mb-5 pt-6 sm:pt-0' data-aos='fade-left'>
                {t('Tours.title')}
              </p>
              <p className='text-justify te xt-xl mb-5 text-gray-800' data-aos='fade-right'>
                {t('Tours.text')}
              </p>
              <div className='flex'>
                <Link
                  href='/tours'
                  className=' text-center cursor-pointer w-full bg-blue-500 hover:bg-blue-600 transition hover:shadow-blue-600 shadow-2xl text-white py-2 rounded-lg text-xl'
                  data-aos='fade-right'
                >
                  {t('Tours.button_text')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>

      <div className='max-w-5xl mx-auto py-8'>
        <p className='text-center text-4xl pb-7' data-aos='fade-down'>
          {t('Slider.title')}
        </p>
        <div className='grid mx-4 sm:mx-0 sm:grid-cols-3 sm:gap-10'>
          {mostSoldTours !== null &&
            mostSoldTours.map((tour, i) => (
              <BodyCard
                key={i}
                title={tour.title}
                shortDescription={tour.shortDescription}
                imageUrl={tour.images ? tour.images[0] : undefined}
                dataAosDuration={700 + i * 200}
              />
            ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default,
    },
  };
}
