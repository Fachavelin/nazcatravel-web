import { Layout } from '@/components/layout';
import { AboutUsCard } from '@/components/pages/aboutUs';
import { BackGroundImage } from '@/components/shared';
import { navButtom } from '@/interfaces';
import { GetStaticPropsContext, NextPage } from 'next';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export const AboutUsPage: NextPage = () => {
  const t = useTranslations('aboutUs');

  const navButtoms: navButtom[] = [
    {
      title: t('contact_us_button'),
      url: '/contact',
    },
  ];

  return (
    <Layout title={'Nazca Travel | Nosotros'} description={''}>
      <div className='min-h-screen'>
        <div className='grid sm:grid-cols-3 max-w-5xl mx-auto pt-12'>
          <div className='sm:col-span-1'>
            <div className='relative w-full h-96 sm:translate-y-12 sm:shadow-2xl'>
              <Image
                src={'https://res.cloudinary.com/dbpb5pque/image/upload/v1691977141/Nazcatravel/Tours/frigate-bird-891293_1280_gtqrf5.jpg'}
                alt={''}
                fill
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>
          <div className='sm:col-span-2 px-8'>
            <h1 className='text-3xl font-semibold pt-4 text-center sm:text-left sm:pt-20' data-aos='fade-down'>
              {t('title')}
            </h1>
            <p className='text-gray-800 text-lg pb-6 sm:pb-0 pt-5 sm:pt-12' data-aos='fade-left'>
              {t('text')}
            </p>
          </div>
        </div>
        <div className='bg-sky-100 py-16'>
          <div className='max-w-6xl mx-auto'>
            <h1 className='text-center text-3xl font-semibold pb-5' data-aos='fade-right'>
              {t('ourValues')}
            </h1>
            <div className='grid md:grid-cols-3 mx-4 gap-4'>
              <AboutUsCard
                title={'1'}
                subTitle={t('responsibility')}
                text={t('responsibility_text')}
                dataAosDuration={600}
                imageUrl='https://res.cloudinary.com/dbpb5pque/image/upload/v1691282715/Nazcatravel/cadena-de-valor_eypuxq.png'
              />
              <AboutUsCard
                title={'2'}
                subTitle={t('honesty')}
                text={t('honesty_text')}
                dataAosDuration={900}
                imageUrl='https://res.cloudinary.com/dbpb5pque/image/upload/v1691282715/Nazcatravel/equilibrar_ujry06.png'
              />
              <AboutUsCard
                title={'3'}
                subTitle={t('respect')}
                text={t('respect_text')}
                dataAosDuration={1200}
                imageUrl='https://res.cloudinary.com/dbpb5pque/image/upload/v1691282715/Nazcatravel/propuesta-de-valor_d8jufn.png'
              />
            </div>
          </div>
        </div>
        <div className='bg-white'>
          <div className='grid sm:grid-cols-2 max-w-6xl mx-auto py-10 sm:py-20 gap-6'>
            <div className='mx-4' data-aos='fade-right'>
              <h1 className='text-center text-3xl font-semibold pb-1'>{t('vision')}</h1>
              <p className='text-gray-800 text-lg text-justify'>{t('vision_text')}</p>
            </div>
            <div className='mx-4' data-aos='fade-left'>
              <h1 className='text-center text-3xl font-semibold pb-1'>{t('mission')}</h1>
              <p className='text-gray-800 text-lg text-justify'>{t('mission_text')}</p>
            </div>
          </div>
        </div>

        <BackGroundImage
          imgUrl={'https://res.cloudinary.com/dbpb5pque/image/upload/v1679273034/mountain-7690893_1920_wlvx3a.jpg'}
          text={t('contact_us')}
          imgPosition={'center'}
          navButtoms={navButtoms}
        />
      </div>
    </Layout>
  );
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default,
    },
  };
}

export default AboutUsPage;
