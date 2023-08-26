import { nazcaApi } from '@/api';
import { Layout } from '@/components/layout';
import { BackGroundImage, TourCard } from '@/components/shared';
import { ITour } from '@/interfaces';
import { GetStaticPropsContext, NextPage } from 'next';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ToursPage: NextPage = () => {
  const t = useTranslations('tours');
  const defaultLocale = useLocale();

  const [tours, setTours] = useState<ITour[]>([]);

  useEffect(() => {
    getTours();
  }, [defaultLocale]);

  const getTours = async () => {
    const { data } = await nazcaApi.get<ITour[]>('/tours');

    setTours(data);
  };

  return (
    <Layout title={'Nazca Travel | Tours'} description={''}>
      <BackGroundImage
        imgUrl={'https://res.cloudinary.com/dbpb5pque/image/upload/v1692025889/Nazcatravel/Tours/shutterstock_131878043_r3h56j.jpg'}
        text={'Nuestros Tours'}
        imgPosition='bottom'
      />
      <div className='max-w-7xl mx-auto grid grid-cols-4'>
        {tours !== null && tours.map((tour, i) => <TourCard key={i} imageUrl={tour.images ? tour.images[0] : undefined} />)}
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

export default ToursPage;
