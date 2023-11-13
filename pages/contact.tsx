import { Layout } from '@/components/layout';
import { ContactForm } from '@/components/pages/contact';
import { BackGroundImage } from '@/components/shared';
import { GetStaticPropsContext, NextPage } from 'next';
import { useLocale, useTranslations } from 'next-intl';
import { useState } from 'react';

import { HiPhone, HiMapPin, HiEnvelope } from 'react-icons/hi2';

const ContactPage: NextPage = () => {
  const defaultLocale = useLocale();

  const numeros = ['+593 989399841'];

  const emails = ['nazcatravelscy@gmail.com'];

  const t = useTranslations('contact');

  return (
    <Layout title={'Nazca Travel | ' + t('title')} description={t('text')} lang={defaultLocale}>
      <BackGroundImage
        imgUrl={'https://res.cloudinary.com/dbpb5pque/image/upload/v1691972593/Nazcatravel/Tours/lobo_noche_gn66ip.jpg'}
        text={t('title')}
        imgPosition={'top'}
      />
      <div className='grid md:grid-cols-3 max-w-4xl mx-auto mt-10 gap-4'>
        <div className='flex flex-col items-center py-4 border rounded-2xl shadow-blue-100 shadow-2xl' data-aos='fade-up'>
          <HiPhone className='h-12 w-12 p-2 rounded-full  text-white bg-blue-700' />
          <p className='text-lg font-medium text-blue-700'>{t('phones')}</p>
          <p className='px-1 text-center'>{t('call_us')}</p>
          <ol>
            {numeros.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ol>
        </div>
        {/* <div className='border-y-2 mx-4 md:mx-0 md:border-y-0 md:border-x-2 border-blue-500 flex flex-col items-center py-4 '> */}
        <div className='flex flex-col items-center py-4 border rounded-2xl shadow-blue-100 shadow-2xl' data-aos='fade-down'>
          <HiMapPin className='h-12 w-12 p-2 rounded-full  text-white bg-blue-700' />
          <p className='text-lg font-medium text-blue-700'>{t('address_title')}</p>
          <p>{t('find_us')}</p>
          <p className='px-1 text-center'>{t('address')}</p>
        </div>
        <div className='flex flex-col items-center py-4 border rounded-2xl shadow-blue-100 shadow-2xl' data-aos='fade-up'>
          <HiEnvelope className='h-12 w-12 p-2 rounded-full  text-white bg-blue-700' />
          <p className='text-lg font-medium text-blue-700'>{t('email')}</p>
          <p className='px-1 text-center'>{t('contact_us')}</p>
          <ol>
            {emails.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ol>
        </div>
      </div>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-2xl text-gray-800 text-center font-semibold py-10 px-4 sm:px-0' data-aos='fade-up'>
          {t('text')}
        </h1>
        <div className='mx-4 mb-5 grid sm:grid-cols-2' data-aos='fade-down'>
          <ContactForm />
          <div className=' mx-2 text-white' data-aos='fade-down'>
            <iframe
              width='100%'
              height='100%'
              style={{ border: 0 }}
              loading='lazy'
              allowFullScreen
              referrerPolicy='no-referrer-when-downgrade'
              src='https://www.google.com/maps/embed/v1/place?key=AIzaSyAZaiVYZgI1rdT44_eVyJkDDe7cxymPCls
    &q=-0.905568, -89.612977'
            ></iframe>
          </div>
        </div>
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

export default ContactPage;
