import { Layout } from '@/components/layout';
import { AboutUs } from '@/components/pages/indexPage';
import { BackGroundImage, BodyCard } from '@/components/shared';
import { navButtom } from '@/interfaces';
import { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Home() {
  const t = useTranslations('Index');

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

  return (
    <Layout title={t('title')} description={t('description')}>
      <BackGroundImage
        imgUrl={'https://res.cloudinary.com/dbpb5pque/image/upload/v1679273034/mountain-7690893_1920_wlvx3a.jpg'}
        text={t('Hero.text')}
        navButtoms={navButtoms}
        isImageAtTop
      />

      {/* Services and Tours */}
      <>
        <div className='grid md:grid-cols-2 max-w-5xl md:h-70v mx-auto my-8'>
          <div className='flex items-center justify-center my-6 md:mb-0 px-6'>
            <div className='px-4'>
              <p className='text-left text-4xl mb-5' data-aos='fade-right'>
                {t('Services.title')}
              </p>
              <p className='text-justify te xt-xl mb-5 text-gray-800' data-aos='fade-left'>
                {t('Services.text')}
              </p>

              <button
                className='w-full bg-blue-500 hover:bg-blue-600 transition hover:shadow-blue-600 shadow-2xl text-white py-2 rounded-lg text-xl'
                data-aos='fade-right'
              >
                {t('Services.button_text')}
              </button>
            </div>
          </div>
          <div className=' row-start-1 md:row-auto'>
            <div className='relative h-40v md:h-70v w-full' data-aos='fade-up'>
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
          <div className='grid grid-cols-6' data-aos='fade-up'>
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
              <p className='text-left text-4xl mb-5 pt-6 sm:pt-0' data-aos='fade-left'>
                {t('Tours.title')}
              </p>
              <p className='text-justify te xt-xl mb-5 text-gray-800' data-aos='fade-right'>
                {t('Tours.text')}
              </p>

              <button
                className='w-full bg-blue-500 hover:bg-blue-600 transition hover:shadow-blue-600 shadow-2xl text-white py-2 rounded-lg text-xl'
                data-aos='fade-left'
              >
                {t('Tours.button_text')}
              </button>
            </div>
          </div>
        </div>
      </>

      <div className='max-w-5xl mx-auto py-8'>
        <p className='text-center text-4xl pb-7' data-aos='fade-down'>
          {t('Slider.title')}
        </p>
        <div className='grid mx-4 sm:mx-0 sm:grid-cols-3 sm:gap-10'>
          <BodyCard dataAosDuration={700} />
          <BodyCard dataAosDuration={900} />
          <BodyCard dataAosDuration={1200} />
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
