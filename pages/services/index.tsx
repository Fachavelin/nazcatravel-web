import { nazcaApi } from '@/api';
import { Layout } from '@/components/layout';
import { BackGroundImage, Slider } from '@/components/shared';
import { IService } from '@/interfaces';
import { GetStaticPropsContext } from 'next';
import { useLocale, useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa6';

const ServicesPage = () => {
  const t = useTranslations('services');
  const defaultLocale = useLocale();

  const [services, setServices] = useState<IService[]>([]);

  useEffect(() => {
    getServices();
  }, [defaultLocale]);

  const getServices = async () => {
    const { data } = await nazcaApi.get('/services');
    console.log(data);

    setServices(data);
  };

  return (
    <Layout title={`Nazca Travel | ${t('title')}`} description={''}>
      <BackGroundImage
        imgUrl={'https://res.cloudinary.com/dbpb5pque/image/upload/v1692025889/Nazcatravel/Tours/shutterstock_131878043_r3h56j.jpg'}
        text={t('title')}
        imgPosition='bottom'
      />
      <p className='text-center text-4xl py-3'>{t('subTitle')}</p>
      <div className='max-w-6xl mx-auto grid'>
        {services &&
          services.map((service, key) => (
            <div key={key} className='grid md:grid-cols-5 border mb-6 rounded-xl'>
              <div className='md:col-span-2 p-6 max-w-[100vw]'>
                <Slider images={service.images} style='h-[40vh]' />
              </div>
              <div className='md:col-span-3 p-4'>
                <p className='text-lg font-semibold'>{service.title}</p>
                <p className='text-justify my-3 mx-5 md:mx-0'>{service.description}</p>
                <div className='flex justify-end'>
                  <a
                    className='flex justify-center items-center bg-blue-500 text-white px-2 py-1 rounded-md text-base'
                    href={`https://api.whatsapp.com/send?phone=593989399841&text=${t('text_message')}${service.title}`}
                    target='_blank'
                  >
                    {t('more')}
                    <FaWhatsapp className='ml-3 h-6 w-6' />
                  </a>
                </div>
              </div>
            </div>
          ))}
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

export default ServicesPage;
