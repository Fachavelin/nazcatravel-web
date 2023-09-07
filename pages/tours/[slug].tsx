import { Layout } from '@/components/layout';
import { Slider } from '@/components/shared';
import ReserveTour from '@/components/tour/ReserveTour';
import { ITour } from '@/interfaces';
import { GetStaticPaths, GetStaticPathsContext, GetStaticPropsContext, NextPage } from 'next';
import { FC } from 'react';

interface Props {
  tour: ITour;
}

const TourPage: NextPage<Props> = ({ tour }) => {
  console.log(tour);

  return (
    <Layout title={tour.title} description={tour.shortDescription}>
      <div className='max-w-screen-2xl mx-auto min-h-screen mt-16'>
        <div className='grid md:grid-cols-5'>
          {/* Slider */}
          <div className='md:col-span-3 md:relative'>
            <Slider images={tour.images} />
            <ReserveTour tour={tour} />
          </div>
          {/* El resto */}
          <div className='md:col-span-2 pt-4'>
            <p className='text-center text-xl py-2'>{tour.title}</p>
            <div className='px-4' dangerouslySetInnerHTML={{ __html: tour.body || '' }} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx: GetStaticPathsContext) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ''}/api/tours/all`);

  const tours: ITour[] = await res.json();

  return {
    paths: tours.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ locale, params }: GetStaticPropsContext) => {
  const { slug = '' } = params as { slug: string };

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ''}/api/tours/${slug}`);

  const tour: ITour = await res.json();

  if (!tour) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default,
      tour,
    },
    revalidate: 60 * 60 * 3,
  };
};

export default TourPage;
